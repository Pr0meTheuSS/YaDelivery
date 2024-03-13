package graph

import userservice "gateway/internal/services/user_service"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	userService userservice.UserService
}

func NewResolver(userServ userservice.UserService) *Resolver {
	return &Resolver{
		userService: userServ,
	}
}
