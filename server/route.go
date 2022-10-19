package main

import (
    "net/http"

    "github.com/julienschmidt/httprouter"
)

// ルートハンドラーのレシーバ
func (app *application) routes() *httprouter.Router {
    router := httprouter.New()
    router.HandlerFunc("/", playground.Handler("GraphQL playground", "/query"))
    return app.enableCORS(router)
}