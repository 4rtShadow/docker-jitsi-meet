# Кастомизация Jitsi Meet

## Изменение оформления начальной страницы

### 1. Настройка переменных окружения

В файле `.env` настройте следующие переменные:

```bash
# Название приложения
APP_NAME=Моя Видеоконференция

# Язык по умолчанию
DEFAULT_LANGUAGE=ru

# Включить/выключить страницу приветствия
ENABLE_WELCOME_PAGE=1

# Скрыть логотип Jitsi (опционально)
HIDE_JITSI_WATERMARK=1

# Ссылка на ваш логотип
BRAND_WATERMARK_LINK=https://example.com/logo.png

# Цвет фона
BACKGROUND_COLOR=#1a1a1a
```

### 2. Кастомные CSS и JS файлы

Файлы в папке `custom-config/`:
- `custom.css` - стили для изменения внешнего вида
- `custom.js` - JavaScript для дополнительной функциональности

### 3. Добавление логотипа

1. Поместите ваш логотип в папку `custom-config/images/`
2. Обновите путь в `custom.js` файле
3. Добавьте volume в docker-compose.yml:
   ```yaml
   - ./custom-config/images:/usr/share/jitsi-meet/images:Z
   ```

### 4. Применение изменений

После внесения изменений перезапустите контейнеры:

```bash
docker-compose down
docker-compose up -d
```

### 5. Дополнительные настройки

#### Изменение цветовой схемы
Отредактируйте `custom.css` для изменения цветов интерфейса.

#### Скрытие элементов интерфейса
Используйте CSS селекторы для скрытия ненужных элементов:
```css
.toolbox-button { display: none !important; }
```

#### Кастомные тексты
Измените тексты через JavaScript в `custom.js`.

### 6. Полезные переменные окружения

- `TOOLBAR_BUTTONS` - настройка кнопок панели инструментов
- `HIDE_PREMEETING_BUTTONS` - скрытие кнопок до встречи
- `DISABLE_PROFILE` - отключение профиля пользователя
- `ENABLE_PREJOIN_PAGE` - страница предварительного подключения

### Примеры кастомизации

#### Корпоративная тема
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #f0f0f0;
    --text-color: #333333;
}
```

#### Темная тема
```css
body {
    background: #1a1a1a !important;
    color: #ffffff !important;
}
```