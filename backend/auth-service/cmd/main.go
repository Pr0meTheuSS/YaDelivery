package main

import (
	"auth-service/internal/app"
	"context"
	"log"
)

func main() {
	ctx := context.Background()

	a, err := app.ServiceInstanceNew(ctx)
	if err != nil {
		log.Fatalf("failed to init gRPC service: %s", err.Error())
	}

	err = a.Run()
	if err != nil {
		log.Fatalf("failed to run gRPC service: %s", err.Error())
	}
}
