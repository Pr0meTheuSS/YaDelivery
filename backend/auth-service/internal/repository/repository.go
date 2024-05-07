package repository

import (
	"context"

	"auth-service/internal/model/entities"

	"gorm.io/gorm"
)

type IUserRepository interface {
	UserCreate(ctx context.Context, user *entities.User) error
	UserGet(ctx context.Context, email string, password string) *entities.User
	UserExists(ctx context.Context, email string) bool
	TokenCreate(ctx context.Context, token *entities.Token) error
	TokenInfoGet(ctx context.Context, token string) *entities.Token
}

var _ IUserRepository = (*UserRepository)(nil)

type UserRepository struct {
	database *gorm.DB
}

func (s *UserRepository) UserCreate(ctx context.Context, user *entities.User) error {
	return s.database.Create(user).Error
}

func (s *UserRepository) UserGet(ctx context.Context, email string, password string) *entities.User {
	var user entities.User

	if err := s.database.Where(&entities.User{Email: email, Password: password}).First(&user); err.Error != nil {
		return nil
	}

	return &user
}

func (s *UserRepository) UserExists(ctx context.Context, email string) bool {
	var user entities.User

	if err := s.database.Where(&entities.User{Email: email}).First(&user); err.Error != nil {
		return false
	}

	return true
}

func (s *UserRepository) TokenCreate(ctx context.Context, token *entities.Token) error {
	return s.database.Create(token).Error
}

func (s *UserRepository) TokenInfoGet(ctx context.Context, token string) *entities.Token {
	var tokenInfo entities.Token

	if err := s.database.Where(&entities.Token{Token: token}).First(&tokenInfo); err.Error != nil {
		return nil
	}

	return &tokenInfo
}

func UserRepositoryNew(database *gorm.DB) *UserRepository {
	return &UserRepository{database}
}
