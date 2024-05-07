package shop_service

import (
	"context"
	"gateway/internal/api/graph/model"
)

type IShopService interface {
	//root
	GetShops(ctx context.Context, lat float64, lon float64) ([]*model.Shop, error)

	//mutation
	CreateShop()
	UpdateShop()
}
