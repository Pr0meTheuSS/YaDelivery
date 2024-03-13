package userrepository

import (
	"context"
	"gateway/internal/models"

	"github.com/sirupsen/logrus"
)

type UserRepository interface {
	Create(ctx context.Context, user *models.User) (*models.User, error)
	Find(ctx context.Context, id int64) (*models.User, error)
	Delete(ctx context.Context, id int64) error
}

type UserRepositoryImpl struct {
	Users       map[int64]*UserDAO
	idGenerator int64
}

func (r *UserRepositoryImpl) Create(ctx context.Context, user *models.User) (*models.User, error) {
	logrus.Info("UserRepositoryImpl.Create(ctx, user models.User) called")

	r.idGenerator++
	newUser := mapModelUserToDAOUser(user)
	newUser.ID = r.idGenerator

	r.Users[newUser.ID] = newUser
	return mapDAOUserToModelUser(newUser), nil
}

func (r *UserRepositoryImpl) Find(ctx context.Context, id int64) (*models.User, error) {
	if daoUser, exists := r.Users[id]; exists {
		return mapDAOUserToModelUser(daoUser), nil
	} else {
		return nil, ErrUserNotFound
	}
}

func (r *UserRepositoryImpl) Delete(ctx context.Context, id int64) error {
	if _, exists := r.Users[id]; !exists {
		return ErrUserNotFound
	}

	delete(r.Users, id)
	return nil
}

func NewUserRepository() UserRepository {
	return &UserRepositoryImpl{
		Users:       map[int64]*UserDAO{},
		idGenerator: 0,
	}
}
