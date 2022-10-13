package main

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
)

type User struct {
	ID int64 `gorm:"primary_key" json:"id"`
	Name string `json:"name"`
}

type Users []User

func main() {
	db, err := gorm.Open("postgres", "host=postgres user=postgres port=5432 password=postgres dbname=postgres sslmode=disable")
	if err != nil {
      panic(err)
	}
	defer db.Close()
	db.AutoMigrate(User{})
	var user = User{Name: "testname2"}
	db.NewRecord(user)
	db.Create(&user)
	db.Save(&user)

	var users = Users{}
	db.Find(&users) 
	fmt.Println(users)
}
// package main

// import (
// 	"log"
// 	"net/http"
// 	"os"
// 	"database/sql"
//   _ "github.com/lib/pq" // ←これを追記

// 	"github.com/99designs/gqlgen/graphql/handler"
// 	"github.com/99designs/gqlgen/graphql/playground"
// 	"github.com/saki-oikawa-lvgs/gqlgen_tutorial/graph"
// 	"github.com/saki-oikawa-lvgs/gqlgen_tutorial/graph/generated"
// )

// const defaultPort = "8080"

// func main() {
// 	// DBへの接続
// 	// host.docker.internalはコンテナをホストしてるipを指定してます
// 	// docker-composeでネットワークを作った方が良いとは思います。
// 	// なんか分からないけどうまく行かなかったのでとりあえずこうしてます。

// 	db, err := sql.Open("postgres", "host=postgres port=5432 user=postgres dbname=postgres sslmode=disable")

// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	defer db.Close()

// 	port := os.Getenv("PORT")
// 	if port == "" {
// 		port = defaultPort
// 	}

// // Resolverに接続したdbを渡してResolverでdbにアクセスできるようにします。（Resolver.goに構造体を追加します）
// 	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

// 	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
// 	http.Handle("/query", srv)

// 	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
// 	log.Fatal(http.ListenAndServe(":"+port, nil))

// }
