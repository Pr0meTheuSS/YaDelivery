package converter

import (
	"auth-service/internal/model/DTOs"
	serviceProtocol "auth-service/pkg/serviceProtocol"
)

func RegisterResponseDTOtoProtoMessage(response *DTOs.UserRegistrationResponseDTO) *serviceProtocol.UserRegistrationResponse {
	return &serviceProtocol.UserRegistrationResponse{
		State: response.State,
	}
}

func ProtoMessageToRegisterRequestDTO(request *serviceProtocol.UserRegistrationRequest) *DTOs.UserRegistrationRequestDTO {
	return &DTOs.UserRegistrationRequestDTO{
		Name:     request.Name,
		Email:    request.Email,
		Password: request.Password,
	}
}

func ProtoMessageToLoginRequestDTO(request *serviceProtocol.UserLoginRequest) *DTOs.UserLoginRequestDTO {
	return &DTOs.UserLoginRequestDTO{
		Email:    request.Email,
		Password: request.Password,
	}
}

func LoginResponseDTOtoProtoMessage(response *DTOs.UserLoginResponseDTO) *serviceProtocol.UserLoginResponse {
	if response.User == nil {
		return &serviceProtocol.UserLoginResponse{
			User:  nil,
			Token: response.Token,
		}
	}

	return &serviceProtocol.UserLoginResponse{
		User: &serviceProtocol.UserInfo{
			Id:    response.User.ID,
			Name:  response.User.Name,
			Email: response.User.Email,
		},
		Token: response.Token,
	}
}

func ProtoMessageToVerifyRequestDTO(request *serviceProtocol.TokenVerifyRequest) *DTOs.TokenVerifyRequestDTO {
	return &DTOs.TokenVerifyRequestDTO{Token: request.Token}
}

func VerifyResponseDTOtoProtoMessage(response *DTOs.TokenVerifyResponseDTO) *serviceProtocol.TokenVerifyResponse {
	return &serviceProtocol.TokenVerifyResponse{State: response.State}
}
