// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package customTypes

type Todo struct {
	ID   string `json:"id"`
	Text string `json:"text"`
	Done bool   `json:"done"`
}

type TodoInput struct {
	ID   string `json:"id"`
	Text string `json:"text"`
	Done bool   `json:"done"`
}
