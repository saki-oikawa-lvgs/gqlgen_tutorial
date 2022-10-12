package graph

import (
	"database/sql"
	"fmt"
	"time"

	"github.com/[リポジトリ]/graph/model"
	_ "github.com/lib/pq"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct{
	DB *sql.DB
}

func (r *Resolver) createUser(input model.NewUser) (*model.User, error){
	// dbにuserを保存する処理
cmd := "INSERT INTO users (name) VALUES ($1)"
_, err := r.DB.Exec(cmd, name)
if err != nil {
return nil, err
}
 // 省略しますが、dbに保存されたデータをここで取得して、idとnameという変数に保存
var user model.User = model.User{
ID: id,
			Name: name,
}

return &user, nil
}