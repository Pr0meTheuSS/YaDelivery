package product_service

import (
	"context"
	"gateway/internal/api/graph/model"
)

type IProductService interface {
	GetProducts(ctx context.Context, idShop string) ([]*model.Product, error)
	CreateProduct()
	UpdateProduct()
}
