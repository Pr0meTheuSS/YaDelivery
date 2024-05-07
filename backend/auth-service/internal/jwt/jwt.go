package jwt

import (
	"auth-service/internal/model/entities"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

const (
	jwtSecretKey = "test-key"
)

func GenerateJwtToken(user *entities.User, duration time.Duration) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)

	claims["uid"] = user.ID
	claims["email"] = user.Email
	claims["exp"] = time.Now().Add(duration).Unix()

	tokenString, err := token.SignedString([]byte(jwtSecretKey))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
