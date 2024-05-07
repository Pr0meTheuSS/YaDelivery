import (
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/_examples/starwars"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/go-chi/chi"
	"github.com/rs/cors"
	"github.com/gorilla/websocket"
	"github.com/99designs/gqlgen/graphql/playground"
)

func main() {
	router := chi.NewRouter()

	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:8080", "http://localhost:3000"},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)

	srv := handler.NewDefaultServer(starwars.NewExecutableSchema(starwars.NewResolver()))

	// router.Handle("/", playground.Handler("Starwars", "/query"))
	router.Handle("/", srv)

	err := http.ListenAndServe(":8081", router)
	if err != nil {
		panic(err)
	}
}