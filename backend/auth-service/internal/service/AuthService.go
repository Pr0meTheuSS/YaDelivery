package service

import (
	"auth-service/internal/jwt"
	"auth-service/internal/model/DTOs"
	"auth-service/internal/model/entities"
	"auth-service/internal/repository"
	"context"
	"log"
	"time"
)

type IAuthService interface {
	Login(ctx context.Context, userLoginRequestDTO *DTOs.UserLoginRequestDTO) (*DTOs.UserLoginResponseDTO, error)
	Register(ctx context.Context, userCreateRequestDTO *DTOs.UserRegistrationRequestDTO) (*DTOs.UserRegistrationResponseDTO, error)
	Verify(ctx context.Context, userCreateRequestDTO *DTOs.TokenVerifyRequestDTO) *DTOs.TokenVerifyResponseDTO
}

var _ IAuthService = (*AuthService)(nil)

type AuthService struct {
	userRepository repository.IUserRepository
}

func (s *AuthService) Login(
	ctx context.Context,
	loginRequestDTO *DTOs.UserLoginRequestDTO,
) (*DTOs.UserLoginResponseDTO, error) {
	user := s.userRepository.UserGet(ctx, loginRequestDTO.Email, loginRequestDTO.Password)

	if user == nil {
		return &DTOs.UserLoginResponseDTO{User: nil, Token: ""}, nil
	}

	userInfo := &DTOs.UserInfo{
		ID:    uint32(user.ID),
		Name:  user.Username,
		Email: user.Email,
	}

	log.Printf("%s %s", user.Username, user.Email)

	token, err := jwt.GenerateJwtToken(user, time.Duration(time.Now().Day()*7))

	tokenInfo := &entities.Token{
		Token: token,
	}

	s.userRepository.TokenCreate(ctx, tokenInfo)

	if err != nil {
		return nil, nil
	}

	return &DTOs.UserLoginResponseDTO{User: userInfo, Token: token}, err
}

func (s *AuthService) Register(
	ctx context.Context,
	createRequestDTO *DTOs.UserRegistrationRequestDTO,
) (*DTOs.UserRegistrationResponseDTO, error) {

	if s.userRepository.UserExists(ctx, createRequestDTO.Email) {
		log.Printf("user %s already exists\n", createRequestDTO.Name)
		return &DTOs.UserRegistrationResponseDTO{State: 400}, nil
	}

	user := entities.User{
		Username: createRequestDTO.Name,
		Email:    createRequestDTO.Email,
		Password: createRequestDTO.Password,
	}

	err := s.userRepository.UserCreate(ctx, &user)

	if err == nil {
		return &DTOs.UserRegistrationResponseDTO{State: 200}, nil
	}
	return &DTOs.UserRegistrationResponseDTO{State: 400}, err
}

func (s *AuthService) Verify(
	ctx context.Context,
	verifyRequestDTO *DTOs.TokenVerifyRequestDTO,
) *DTOs.TokenVerifyResponseDTO {
	tokenInfo := s.userRepository.TokenInfoGet(ctx, verifyRequestDTO.Token)

	if tokenInfo == nil {
		return &DTOs.TokenVerifyResponseDTO{State: 401}
	}

	return &DTOs.TokenVerifyResponseDTO{State: 200}
}

func AuthServiceNew(userRepository repository.IUserRepository) *AuthService {
	return &AuthService{
		userRepository: userRepository,
	}
}
