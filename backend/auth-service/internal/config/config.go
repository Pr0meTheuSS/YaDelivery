package config

import (
	"github.com/joho/godotenv"
)

func Load() error {
	confPath := ".env"
	return godotenv.Load(confPath)
}
