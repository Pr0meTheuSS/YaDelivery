package userrepository

import "time"

type UserDAO struct {
	ID    int64
	Name  string
	Email string

	CreatedAt time.Time
}
