@echo off
echo Запуск кастомизированного Jitsi Meet...

REM Генерация паролей (если нужно)
if not exist .env.passwords (
    echo Генерация паролей...
    bash gen-passwords.sh
)

REM Остановка существующих контейнеров
echo Остановка существующих контейнеров...
docker-compose down

REM Запуск с новой конфигурацией
echo Запуск Jitsi Meet с кастомизацией...
docker-compose up -d

echo.
echo Jitsi Meet запущен!
echo Откройте браузер и перейдите по адресу: http://localhost:8000
echo Или https://localhost:8443 для HTTPS
echo.
pause