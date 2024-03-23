package shop_service

import (
	"context"
	"gateway/internal/api/graph/model"
)

type ShopService struct {
	//connShop net.Conn
}

func NewShopService() *ShopService {
	return &ShopService{}
}

// Root
func (s *ShopService) GetShops(ctx context.Context, lat float64, lon float64) ([]*model.Shop, error) {
	ey := "ЭУЭУЭУЭУэуууу"
	shops := make([]*model.Shop, 0)
	for i := 0; i < 9; i++ {
		shops = append(shops, &model.Shop{
			ID:      string(rune(i + '0')),
			Name:    "НГУЭУ",
			Image:   nil,
			Tags:    []model.Tags{model.TagsBurger},
			Address: "Новосибирск, Каменская улица, 52",
			GeoPos:  &model.Coord{Lat: 55.034133, Lon: 82.927927},
			Info:    &ey,
		})
	}

	shops = append(shops, &model.Shop{
		ID:      "10",
		Name:    "НГУ",
		Image:   nil,
		Tags:    []model.Tags{model.TagsSendvichi},
		Address: "Новосибирск, Пирогова, 1",
		GeoPos:  &model.Coord{Lat: 55.0, Lon: 82.0},
		Info:    nil,
	})

	return shops, nil
}

// Mutations
func (s *ShopService) CreateShop() {}
func (s *ShopService) UpdateShop() {}
