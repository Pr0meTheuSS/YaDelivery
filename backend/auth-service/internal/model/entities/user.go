package entities

type User struct {
	ID       int32 `gorm:"primaryKey"`
	Username string
	Email    string
	Password string
}
