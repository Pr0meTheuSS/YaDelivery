package DTOs

type UserInfo struct {
	ID    uint32
	Name  string
	Email string
}

type UserLoginResponseDTO struct {
	User  *UserInfo
	Token string
}
