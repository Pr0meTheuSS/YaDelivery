package models

type RegistrationRequest struct {
	Name     string
	Email    string
	Password string
}

type RegistrationResponse struct {
	State uint32
}

type LoginRequest struct {
	Email    string
	Password string
}

type LoginResponse struct {
	ID    uint32
	Name  string
	Email string
	Token string
}
