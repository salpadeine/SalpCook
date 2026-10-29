# VibeCook

Планировщик ужинов: составляешь неделю → получаешь список продуктов (с указанием для каких блюд) → выгружаешь список и пошаговые рецепты.

## Структура
```
vibecook/
├── frontend/
│   └── index.html          # Веб-интерфейс (работает и без бэкенда)
├── backend/
│   ├── app.py              # Flask API
│   ├── recipes.py          # База из 20+ ужинов
│   └── requirements.txt
├── README.md
└── .gitignore
```

## Запуск фронтенда
Просто открой `frontend/index.html` в браузере. Работает оффлайн.

## Запуск бэкенда (для реальных цен и API)
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
API будет на http://localhost:5000

### Эндпоинты
- `GET /api/recipes?diet=all|veg`
- `POST /api/plan` — тело: `{"people": 2, "nights": 5, "diet": "all", "store": "pyaterochka"}`
- `GET /api/prices?store=pyaterochka`

## Реальные цены магазинов
В `app.py` стоит заглушка. Для подключения Пятёрочки:
1. `pip install pyaterochka-api`
2. В эндпоинте `/api/prices` вызвать реальный API (см. комментарии в коде).

Поддерживаемые магазины в интерфейсе: Пятёрочка, Магнит, Лента, Перекрёсток.

## Возможности
- 20+ полноценных ужинов (супы и завтраки убраны)
- Клик по блюду → состав
- В списке продуктов указано «для каких блюд»
- Два этапа: план → согласование → рецепты + выгрузка .txt
- Масштабирование порций
- Сохранение «уже есть дома» в браузере

MIT
