package app

import (
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/reflection"

	"auth-service/internal/config"

	desc "auth-service/pkg/serviceProtocol"
)

type ServiceInstance struct {
	serviceProvider *ServiceProvider
	grpcServer      *grpc.Server
}

func ServiceInstanceNew(ctx context.Context) (*ServiceInstance, error) {
	a := &ServiceInstance{}

	err := a.initDeps(ctx)
	if err != nil {
		return nil, err
	}

	return a, nil
}

func (a *ServiceInstance) Run() error {
	return a.runGRPCServer()
}

func (a *ServiceInstance) initDeps(ctx context.Context) error {
	inits := []func(context.Context) error{
		a.initConfig,
		a.initServiceProvider,
		a.initGRPCServer,
	}

	for _, f := range inits {
		err := f(ctx)
		if err != nil {
			return err
		}
	}

	return nil
}

func (a *ServiceInstance) initConfig(_ context.Context) error {
	err := config.Load()
	if err != nil {
		return err
	}

	return nil
}

func (a *ServiceInstance) initServiceProvider(_ context.Context) error {
	a.serviceProvider = ServiceProviderNew()
	return nil
}

func (a *ServiceInstance) initGRPCServer(_ context.Context) error {
	a.grpcServer = grpc.NewServer(grpc.Creds(insecure.NewCredentials()))

	reflection.Register(a.grpcServer)

	desc.RegisterGrpcAuthServiceProtocolServer(a.grpcServer, a.serviceProvider.GetGRPCServiceImplementation())

	return nil
}

func (a *ServiceInstance) runGRPCServer() error {
	log.Printf("GRPC server is running on %s", a.serviceProvider.GetGRPCConfig().Address())

	list, err := net.Listen("tcp", a.serviceProvider.GetGRPCConfig().Address())
	if err != nil {
		return err
	}

	err = a.grpcServer.Serve(list)
	if err != nil {
		return err
	}

	return nil
}
