package config

type Config struct {
	// Environment string `env:"ENVIRONMENT,required"`
	Version         string `env:"VERSION,required"`
	Port            int    `env:"PORT,required"`
	AuthServiceHost string `env:"AUTH_GRPC_SERVICE_HOST,required"`
	AuthServicePort int    `env:"AUTH_GRPC_SERVICE_PORT,required"`
}
