package userrepository

import (
	"gateway/internal/models"
	"time"
)

func mapDAOUserToModelUser(dao *UserDAO) *models.User {
	return &models.User{
		ID:    dao.ID,
		Name:  dao.Name,
		Email: dao.Email,
	}
}

func mapModelUserToDAOUser(user *models.User) *UserDAO {
	return &UserDAO{
		ID:        user.ID,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: time.Now(),
	}
}
