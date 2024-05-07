package api

import (
	"auth-service/internal/converter"
	"auth-service/internal/service"
	desc "auth-service/pkg/serviceProtocol"
	"context"
)

type GRPCServiceImplementation struct {
	desc.UnimplementedGrpcAuthServiceProtocolServer
	authService service.IAuthService
}

func GRPCServiceImplementationNew(service service.IAuthService) *GRPCServiceImplementation {
	return &GRPCServiceImplementation{authService: service}
}

func (i *GRPCServiceImplementation) Register(
	ctx context.Context,
	request *desc.UserRegistrationRequest,
) (*desc.UserRegistrationResponse, error) {

	requestDTO := converter.ProtoMessageToRegisterRequestDTO(request)
	response, err := i.authService.Register(ctx, requestDTO)
	return converter.RegisterResponseDTOtoProtoMessage(response), err
}

func (i *GRPCServiceImplementation) Login(
	ctx context.Context,
	request *desc.UserLoginRequest,
) (*desc.UserLoginResponse, error) {

	requestDTO := converter.ProtoMessageToLoginRequestDTO(request)
	response, err := i.authService.Login(ctx, requestDTO)
	return converter.LoginResponseDTOtoProtoMessage(response), err
}

func (i *GRPCServiceImplementation) Verify(
	ctx context.Context,
	request *desc.TokenVerifyRequest,
) (*desc.TokenVerifyResponse, error) {

	requestDTO := converter.ProtoMessageToVerifyRequestDTO(request)
	response := i.authService.Verify(ctx, requestDTO)
	return converter.VerifyResponseDTOtoProtoMessage(response), nil
}
