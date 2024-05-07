package main

import (
	"context"
	"fmt"
	"gateway/internal/app"
	"gateway/internal/config"
	"log"
	"os"

	"github.com/caarlos0/env"
	"github.com/joho/godotenv"
)

func main() {
	confPath := os.Getenv("GATEWAY_CONF_PATH")

	if confPath == "" {
		panic("cannot start: not found env.variable GATEWAY_CONF_PATH")
	}

	// Loading the environment variables from '.env' file.
	err := godotenv.Load(confPath)
	if err != nil {
		log.Fatalf("godotenv.Load(): %e", err)
	}

	cfg := config.Config{} // 👈 new instance of `Config`

	err = env.Parse(&cfg) // 👈 Parse environment variables into `Config`
	if err != nil {
		log.Fatalf("unable to parse ennvironment variables: %e", err)
	}

	fmt.Println("Config:")
	fmt.Printf("Listen TCP port: %d\nVersion: %s\n", cfg.Port, cfg.Version)

	app := app.NewApp(&cfg)

	app.RunApp(context.Background())
}
