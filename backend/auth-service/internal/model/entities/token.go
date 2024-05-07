package entities

import "time"

type Token struct {
	UID         int64 `gorm:"primaryKey"`
	UserUID     int64
	Token       string
	ExpiredTime time.Duration
}
