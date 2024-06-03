package graph

import (
	"fmt"
	"gateway/internal/config"
	organizationService "gateway/internal/services/organization_service"
	productService "gateway/internal/services/product_service"
	shopService "gateway/internal/services/shop_service"
	userservice "gateway/internal/services/user_service"
	"log"

	"github.com/caarlos0/env"
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
	cfg := config.Config{} // 👈 new instance of `Config`

	err := env.Parse(&cfg) // 👈 Parse environment variables into `Config`
	if err != nil {
		log.Fatalf("unable to parse ennvironment variables: %e", err)
	}

	fmt.Printf("Auth service: %s:%d\n", cfg.AuthServiceHost, cfg.AuthServicePort)
	return &Resolver{
		userService:    userservice.NewUserService(cfg.AuthServiceHost, int32(cfg.AuthServicePort)),
		shopService:    shopService.NewShopService(),
		orgService:     organizationService.NewOrganizationService(),
		productService: productService.NewProductService(),
	}
}
