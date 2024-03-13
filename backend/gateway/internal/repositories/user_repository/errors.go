package userrepository

import "errors"

var ErrUserAlreadyExists = errors.New("this user already exists")
var ErrUserNotFound = errors.New("this user not found")
