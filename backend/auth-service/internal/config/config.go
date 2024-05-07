package config

import (
	"os"

	"github.com/joho/godotenv"
)

func Load() error {
	confPath := os.Getenv("AUTH_SERVICE_CONF_PATH")

	if confPath == "" {
		panic("cannot config load: not found env.variable AUTH_SERVICE_CONF_PATH")
	}

	return godotenv.Load(confPath)
}
