package UserService

import (
	"context"
	"errors"
	"fmt"
	"gateway/internal/models"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	userService "gateway/pkg/userServiceProtocol"
)

type UserService interface {
	Register(ctx context.Context, request *models.RegistrationRequest) (*models.RegistrationResponse, error)
	Login(ctx context.Context, request *models.LoginRequest) (*models.LoginResponse, error)
}

type UserServiceImpl struct {
	grpcConn *grpc.ClientConn
}

func NewUserService() UserService {
	grpcServiceConn, err := grpc.Dial("127.0.0.1:8080",
		grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		fmt.Printf("NewUserService(): fail to connect gRPC UserService: %v\n", err)
		return nil
	}

	return &UserServiceImpl{
		grpcConn: grpcServiceConn,
	}
}

func (s *UserServiceImpl) Register(ctx context.Context,
	request *models.RegistrationRequest,
) (*models.RegistrationResponse, error) {

	client := userService.NewGrpcAuthServiceProtocolClient(s.grpcConn)
	regRequest :=
		&userService.UserRegistrationRequest{
			Name:     request.Name,
			Email:    request.Email,
			Password: request.Password,
		}

	response, err := client.Register(ctx, regRequest)

	if err != nil {
		log.Printf("grpc method invoke fail: %v\n", err)
		return nil, err
	}

	return &models.RegistrationResponse{State: response.State}, nil
}

func (s *UserServiceImpl) Login(ctx context.Context,
	request *models.LoginRequest,
) (*models.LoginResponse, error) {
	log.Printf("UserServiceImpl: login invoked")

	client := userService.NewGrpcAuthServiceProtocolClient(s.grpcConn)
	loginRequest :=
		&userService.UserLoginRequest{
			Email:    request.Email,
			Password: request.Password,
		}

	response, err := client.Login(ctx, loginRequest)

	if err != nil {
		log.Printf("grpc method invoke fail: %v\n", err)
		return nil, err
	}

	if response.Token == "" {
		return nil, errors.New("incorrect login or password")
	}

	return &models.LoginResponse{
		ID:    response.User.Id,
		Name:  response.User.Name,
		Email: response.User.Email,
		Token: response.Token,
	}, nil
}
