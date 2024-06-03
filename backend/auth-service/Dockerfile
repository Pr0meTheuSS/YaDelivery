# Укажите базовый образ, содержащий Go
FROM golang:1.19 AS builder

# Установите рабочую директорию внутри контейнера
WORKDIR /app

# Скопируйте go.mod и go.sum, если они есть
COPY go.mod go.sum ./

# Загрузите зависимости
RUN go mod download

# Скопируйте исходный код приложения в рабочую директорию
COPY . .

# Соберите приложение с кросс-компиляцией для Linux (musl)
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main ./cmd/main.go

# Используйте минимальный базовый образ для запуска
FROM alpine:latest

# Установите сертификаты SSL (для HTTPS)
RUN apk --no-cache add ca-certificates

# Создайте директорию для приложения
WORKDIR /root/

# Скопируйте собранное приложение из этапа сборки
COPY --from=builder /app/main .

COPY .env .

# Укажите команду для запуска приложения
CMD ["./main"]

# Укажите порт, который будет прослушиваться контейнером
EXPOSE 8081
