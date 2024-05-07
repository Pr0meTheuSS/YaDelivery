package graph

import (
	"gateway/internal/api/graph/model"
	"gateway/internal/models"
)

func convertLoginRequestDTOtoLoginRequestModel(request model.LoginRequest) *models.LoginRequest {
	return &models.LoginRequest{
		Email:    request.Email,
		Password: request.Password,
	}
}

func convertRegRequestDTOtoRegRequestModel(request model.RegistrationRequest) *models.RegistrationRequest {
	return &models.RegistrationRequest{
		Name:     request.Name,
		Email:    request.Email,
		Password: request.Password,
	}
}

func convertRegResponseModeltoRegResponseDTO(response *models.RegistrationResponse) *model.RegistrationResponse {
	return &model.RegistrationResponse{
		Status: int(response.State),
	}
}

func convertLoginResponseModeltoLoginResponseDTO(response *models.LoginResponse) *model.LoginResponse {
	return &model.LoginResponse{
		ID:    int(response.ID),
		Name:  response.Name,
		Email: response.Email,
		Token: response.Token,
	}
}
