package product_service

import (
	"context"
	"gateway/internal/api/graph/model"
)

type ProductService struct {
	//connShop net.Conn
}

func NewProductService() *ProductService {
	return &ProductService{}
}

// Root
func (p *ProductService) GetProducts(ctx context.Context, idShop string) ([]*model.Product, error) {
	products := make([]*model.Product, 0)
	for i := 0; i < 20; i++ {
		products = append(products, &model.Product{
			IDPriduct: string(rune(i%10+'0')) + string(rune(i/10+'0')),
			Name:      "Я продукт" + string(rune(i%10+'0')) + string(rune(i/10+'0')),
			Image:     nil,
			Info:      "Я продукт" + string(rune(i%10+'0')) + string(rune(i/10+'0')) + "\ninfo1\ninfo2",
			Weight:    i * 100,
			FoodInfo:  nil,
		})
	}
	sq := 5
	fa := 10
	cr := 15
	cal := 20
	products = append(products, &model.Product{
		IDPriduct: "20",
		Name:      "Я ЕДА",
		Image:     nil,
		Info:      "Я вкусный" + "\ninfo1\ninfo2",
		Weight:    500,
		FoodInfo: &model.FoodInfo{
			Squirrels:     &sq,
			Fats:          &fa,
			Carbohydrates: &cr,
			Calories:      &cal,
			Allergens:     []string{"Рыба", "Кости"},
			Compound:      "Чешуя, рыба, клей",
		},
	})
	return products, nil
}

// Mutations
func (p *ProductService) CreateProduct() {}
func (p *ProductService) UpdateProduct() {}
