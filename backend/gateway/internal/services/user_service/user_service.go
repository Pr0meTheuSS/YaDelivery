package userservice

import (
	"context"
	"gateway/internal/models"
	userrepository "gateway/internal/repositories/user_repository"

	"github.com/sirupsen/logrus"
)

type UserService interface {
	Create(ctx context.Context, user *models.User) (*models.User, error)
	FindByID(ctx context.Context, id int64) (*models.User, error)
	DeleteByID(ctx context.Context, id int64) error
}

type UserServiceImpl struct {
	UserRepo userrepository.UserRepository
}

func (s *UserServiceImpl) Create(ctx context.Context, user *models.User) (*models.User, error) {
	logrus.Info("UserServiceImpl.Create(ctx, user models.User) called")
	return s.UserRepo.Create(ctx, user)
}

func (s *UserServiceImpl) FindByID(ctx context.Context, id int64) (*models.User, error) {
	return s.UserRepo.Find(ctx, id)
}

func (s *UserServiceImpl) DeleteByID(ctx context.Context, id int64) error {
	return s.UserRepo.Delete(ctx, id)
}

func NewUserService(userRepo userrepository.UserRepository) UserService {
	return &UserServiceImpl{
		UserRepo: userRepo,
	}
}
