package app

import (
	"context"
	"gateway/internal/api/graph"
	"gateway/internal/config"
	"log"
	"net/http"
	"strconv"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
)

type App struct {
	port int
	mux  *chi.Mux
}

func NewApp(cfg *config.Config) *App {
	resolver := graph.NewResolver()
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: resolver}))

	mux := chi.NewMux()

	// Настройка CORS
	cors := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"POST", "GET", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Content-Type", "Authorization"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	})

	// Применяем CORS middleware ко всем обработчикам
	mux.Use(cors.Handler)

	// mux.Handle("/", playground.Handler("GraphQL playground", "/query"))
	mux.Handle("/", srv)

	log.Printf("Connect to http://localhost:%s/ for GraphQL playground", strconv.Itoa(cfg.Port))

	return &App{
		port: cfg.Port,
		mux:  mux,
	}
}

func (a *App) RunApp(ctx context.Context) error {
	return http.ListenAndServe(":"+strconv.Itoa(a.port), a.mux)
}
