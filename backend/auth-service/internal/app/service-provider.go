package app

import (
	"auth-service/internal/api"
	"auth-service/internal/config"
	repository "auth-service/internal/repository"
	"auth-service/internal/service"
	ddb "auth-service/pkg/db"
	"log"

	"gorm.io/gorm"
)

type ServiceProvider struct {
	grpcConfig                config.GRPCConfig
	userRepository            repository.IUserRepository
	authService               service.IAuthService
	GRPCServiceImplementation *api.GRPCServiceImplementation
	dbHandler                 *gorm.DB
}

func ServiceProviderNew() *ServiceProvider {
	serviceProvider := &ServiceProvider{}

	serviceProvider.GRPCConfigInit()
	serviceProvider.DbHandlersInit()
	serviceProvider.UserRepositoryInit()
	serviceProvider.AuthServiceInit()
	serviceProvider.GRPCServiceImplementationInit()

	return serviceProvider
}

func (s *ServiceProvider) GRPCConfigInit() {
	cfg, err := config.NewGRPCConfig()
	if err != nil {
		log.Fatalf("failed to get grpc config: %s", err.Error())
	}
	s.grpcConfig = cfg
}

func (s *ServiceProvider) DbHandlersInit() {
	dbHandler, err := ddb.DbHandlerNew()
	if err != nil {
		log.Fatalf("failed to init db handler: %s", err.Error())
	}
	s.dbHandler = dbHandler
}

func (s *ServiceProvider) UserRepositoryInit() {
	s.userRepository = repository.UserRepositoryNew(s.GetDbHadler())
}

func (s *ServiceProvider) AuthServiceInit() {
	s.authService = service.AuthServiceNew(s.GetUserRepository())
}

func (s *ServiceProvider) GRPCServiceImplementationInit() {
	s.GRPCServiceImplementation = api.GRPCServiceImplementationNew(s.GetAuthService())
}

func (s *ServiceProvider) GetGRPCConfig() config.GRPCConfig {
	return s.grpcConfig
}

func (s *ServiceProvider) GetDbHadler() *gorm.DB {
	return s.dbHandler
}

func (s *ServiceProvider) GetUserRepository() repository.IUserRepository {
	return s.userRepository
}

func (s *ServiceProvider) GetAuthService() service.IAuthService {
	return s.authService
}

func (s *ServiceProvider) GetGRPCServiceImplementation() *api.GRPCServiceImplementation {
	return s.GRPCServiceImplementation
}
