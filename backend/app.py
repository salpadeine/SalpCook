"""
VibeCook Backend
Простой Flask-бэкенд для планирования ужинов и цен.
Реальные цены Пятёрочки/других магазинов можно подключить через pyaterochka-api или свой скрейпер.
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import random
from recipes import RECIPES

app = Flask(__name__)
CORS(app)

STORES = {
    "pyaterochka": "Пятёрочка",
    "magnit": "Магнит",
    "lenta": "Лента",
    "perekrestok": "Перекрёсток",
    "other": "Примерные цены"
}

def scale_ingredient(ing, people, base_servings):
    factor = people / base_servings
    qty = round(ing["qtyBase"] * factor, 1)
    cost = calculate_cost(ing, qty)
    return {**ing, "qty": qty, "cost": cost}

def calculate_cost(ing, qty):
    if ing.get("staple") and ing["pricePerUnit"] == 0:
        return 0
    if ing["unit"] in ("шт", "головка", "пучок", "порция"):
        return round(qty) * ing["pricePerUnit"]
    return qty * ing["pricePerUnit"]

@app.route("/api/recipes", methods=["GET"])
def get_recipes():
    diet = request.args.get("diet", "all")
    filtered = [r for r in RECIPES if diet != "veg" or r["diet"] == "veg"]
    return jsonify(filtered)

@app.route("/api/plan", methods=["POST"])
def create_plan():
    data = request.json or {}
    people = int(data.get("people", 2))
    nights = int(data.get("nights", 5))
    diet = data.get("diet", "all")
    store = data.get("store", "pyaterochka")

    recipes = [r for r in RECIPES if diet != "veg" or r["diet"] == "veg"]
    if not recipes:
        return jsonify({"error": "Нет подходящих рецептов"}), 400

    plan = []
    used = set()
    for i in range(nights):
        available = [r for r in recipes if r["id"] not in used]
        pool = available if available else recipes
        chosen = random.choice(pool)
        used.add(chosen["id"])

        scaled = [scale_ingredient(ing, people, chosen["baseServings"]) for ing in chosen["ingredients"]]
        cost = sum(ing["cost"] for ing in scaled)

        plan.append({
            "day": ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"][i],
            "recipe": chosen,
            "scaledIngredients": scaled,
            "cost": round(cost)
        })

    return jsonify({
        "plan": plan,
        "store": STORES.get(store, "Примерные цены"),
        "people": people
    })

@app.route("/api/prices", methods=["GET"])
def get_prices():
    """
    Заглушка под реальные цены.
    Для подключения Пятёрочки:
    1. pip install pyaterochka-api
    2. Использовать PyaterochkaAPI для получения актуальных цен по PLU/названию.
    Сейчас возвращаем примерные цены из базы.
    """
    store = request.args.get("store", "pyaterochka")
    # Здесь можно добавить реальный вызов API
    prices = {}
    for r in RECIPES:
        for ing in r["ingredients"]:
            prices[ing["name"]] = ing["pricePerUnit"]
    return jsonify({
        "store": STORES.get(store, "Примерные цены"),
        "note": "Примерные цены. Для реальных подключи pyaterochka-api или другой скрейпер.",
        "prices": prices
    })

@app.route("/")
def index():
    return jsonify({
        "name": "VibeCook API",
        "endpoints": ["/api/recipes", "/api/plan", "/api/prices"]
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
