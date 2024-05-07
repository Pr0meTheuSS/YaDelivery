package graph

import (
	organizationService "gateway/internal/services/organization_service"
	productService "gateway/internal/services/product_service"
	shopService "gateway/internal/services/shop_service"
	userservice "gateway/internal/services/user_service"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	userService    userservice.UserService
	shopService    shopService.IShopService
	orgService     organizationService.IOrganizationService
	productService productService.IProductService
}

func NewResolver() *Resolver {
	return &Resolver{
		userService:    userservice.NewUserService(),
		shopService:    shopService.NewShopService(),
		orgService:     organizationService.NewOrganizationService(),
		productService: productService.NewProductService(),
	}
}
