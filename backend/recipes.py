# Большая база ужинов для VibeCook (50+ вариантов)
# Только полноценные ужины

RECIPES = [
  {
    "id": "pasta_tomato",
    "name": "Паста с томатным соусом и чесноком",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": ["Вскипяти воду, посоли и отвари спагетти до al dente.", "Обжарь чеснок в масле.", "Добавь помидоры, туши 5-7 минут.", "Смешай с пастой и базиликом."],
    "ingredients": [
      {"name": "Спагетти", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Оливковое масло", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True},
      {"name": "Базилик", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 45, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_rice",
    "name": "Куриные бёдра с рисом и овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Отвари рис.", "Обжарь бёдра до румяности.", "Добавь морковь и лук, туши 15 минут.", "Подавай с рисом и соевым соусом."],
    "ingredients": [
      {"name": "Куриные бёдра", "qtyBase": 600, "unit": "г", "pricePerUnit": 0.32, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Морковь", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "lentil_stew",
    "name": "Чечевичное рагу с овощами",
    "diet": "veg",
    "baseServings": 2,
    "time": 40,
    "steps": ["Обжарь овощи.", "Добавь чечевицу и помидоры.", "Туши 25-30 минут.", "Посоли и добавь специи."],
    "ingredients": [
      {"name": "Чечевица", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.14, "aisle": "Бакалея", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "salmon_potato",
    "name": "Запечённый лосось с картофелем",
    "diet": "all",
    "baseServings": 2,
    "time": 35,
    "steps": ["Нарежь картофель дольками.", "Посоли лосось и сбрызни лимоном.", "Запекай при 200°C 20-25 минут.", "Подавай с укропом."],
    "ingredients": [
      {"name": "Лосось филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 1.2, "aisle": "Рыба", "staple": False},
      {"name": "Картофель", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Укроп", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "bean_tacos",
    "name": "Тако с фасолью и овощами",
    "diet": "veg",
    "baseServings": 2,
    "time": 20,
    "steps": ["Разомни и прогрей фасоль.", "Нагрей тортильи.", "Начини сыром и салатом.", "Сверни и подавай."],
    "ingredients": [
      {"name": "Тортильи", "qtyBase": 4, "unit": "шт", "pricePerUnit": 18, "aisle": "Бакалея", "staple": False},
      {"name": "Фасоль консервированная", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.15, "aisle": "Бакалея", "staple": False},
      {"name": "Сыр твёрдый", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Салат листовой", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 40, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "beef_stirfry",
    "name": "Стир-фрай с говядиной и брокколи",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари рис.", "Обжарь говядину на сильном огне.", "Добавь брокколи и перец.", "Полей соевым соусом."],
    "ingredients": [
      {"name": "Говядина для жарки", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Брокколи", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "pork_chops",
    "name": "Свиные отбивные с капустой",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Обжарь отбивные.", "Обжарь капусту с яблоком.", "Отвари картофель.", "Подавай вместе."],
    "ingredients": [
      {"name": "Свиные отбивные", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.42, "aisle": "Мясо", "staple": False},
      {"name": "Капуста белокочанная", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.03, "aisle": "Овощи", "staple": False},
      {"name": "Яблоко", "qtyBase": 1, "unit": "шт", "pricePerUnit": 25, "aisle": "Фрукты", "staple": False},
      {"name": "Картофель", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "greek_salad_chicken",
    "name": "Греческий салат с курицей",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь куриное филе.", "Нарежь овощи.", "Добавь фету и оливки.", "Заправь маслом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Огурцы", "qtyBase": 2, "unit": "шт", "pricePerUnit": 20, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры", "qtyBase": 2, "unit": "шт", "pricePerUnit": 35, "aisle": "Овощи", "staple": False},
      {"name": "Сыр фета", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.7, "aisle": "Молочное", "staple": False},
      {"name": "Оливки", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.4, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "curry_veg",
    "name": "Овощное карри с рисом",
    "diet": "veg",
    "baseServings": 2,
    "time": 30,
    "steps": ["Отвари рис.", "Обжарь овощи.", "Добавь кокосовое молоко и специи.", "Туши 10 минут."],
    "ingredients": [
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Цветная капуста", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Горошек консервированный", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Кокосовое молоко", "qtyBase": 200, "unit": "мл", "pricePerUnit": 0.35, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "fish_cakes",
    "name": "Рыбные котлеты с пюре",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Измельчи рыбу с луком и яйцом.", "Обжарь котлеты.", "Сделай пюре из картофеля.", "Подавай вместе."],
    "ingredients": [
      {"name": "Минтай или хек", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.35, "aisle": "Рыба", "staple": False},
      {"name": "Картофель", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Яйцо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 12, "aisle": "Молочное", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "pilaf",
    "name": "Плов с курицей",
    "diet": "all",
    "baseServings": 3,
    "time": 50,
    "steps": ["Промой и замочи рис.", "Обжарь курицу с морковью и луком.", "Выложи рис и туши под крышкой.", "Дай настояться."],
    "ingredients": [
      {"name": "Рис", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Куриные бёдра", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.32, "aisle": "Мясо", "staple": False},
      {"name": "Морковь", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "pasta_pesto",
    "name": "Паста с песто и курицей",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари пасту.", "Обжарь курицу.", "Смешай с песто.", "Посыпь сыром."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Куриное филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Песто", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.8, "aisle": "Соусы", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 40, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "beef_stroganoff",
    "name": "Бефстроганов с гречкой",
    "diet": "all",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь говядину соломкой.", "Добавь лук и грибы.", "Влей сметану и туши.", "Подавай с гречкой."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Гречка", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.09, "aisle": "Бакалея", "staple": False},
      {"name": "Шампиньоны", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.35, "aisle": "Овощи", "staple": False},
      {"name": "Сметана", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_curry",
    "name": "Куриное карри с рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь курицу с луком.", "Добавь специи и томаты.", "Влей кокосовое молоко.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Кокосовое молоко", "qtyBase": 200, "unit": "мл", "pricePerUnit": 0.35, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Карри специи", "qtyBase": 1, "unit": "порция", "pricePerUnit": 30, "aisle": "Специи", "staple": True}
    ]
  },
  {
    "id": "baked_chicken_veg",
    "name": "Запечённая курица с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 45,
    "steps": ["Посоли курицу и овощи.", "Выложи на противень.", "Запекай при 200°C 30-35 минут.", "Подавай горячим."],
    "ingredients": [
      {"name": "Куриные бёдра", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.32, "aisle": "Мясо", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 2, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Картофель", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "pasta_carbonara",
    "name": "Паста карбонара",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари спагетти.", "Обжарь бекон.", "Смешай яйца с сыром.", "Соедини всё вне огня."],
    "ingredients": [
      {"name": "Спагетти", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Бекон", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.55, "aisle": "Мясо", "staple": False},
      {"name": "Яйца", "qtyBase": 2, "unit": "шт", "pricePerUnit": 12, "aisle": "Молочное", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 50, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "turkey_meatballs",
    "name": "Тефтели из индейки с рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Смешай фарш с луком и яйцом.", "Обжарь тефтели.", "Туши в томатном соусе.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Фарш индейки", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.48, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Яйцо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 12, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "veg_lasagna",
    "name": "Овощная лазанья",
    "diet": "veg",
    "baseServings": 3,
    "time": 50,
    "steps": ["Обжарь овощи с томатами.", "Собери слои с листами лазаньи.", "Залей сыром.", "Запекай 25-30 минут."],
    "ingredients": [
      {"name": "Листы лазаньи", "qtyBase": 8, "unit": "шт", "pricePerUnit": 15, "aisle": "Бакалея", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Баклажан", "qtyBase": 1, "unit": "шт", "pricePerUnit": 70, "aisle": "Овощи", "staple": False},
      {"name": "Сыр", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "pork_ribs",
    "name": "Свиные рёбрышки с картофелем",
    "diet": "all",
    "baseServings": 2,
    "time": 60,
    "steps": ["Обжарь рёбрышки.", "Добавь картофель и лук.", "Туши под крышкой 40-45 минут.", "Подавай горячими."],
    "ingredients": [
      {"name": "Свиные рёбрышки", "qtyBase": 600, "unit": "г", "pricePerUnit": 0.38, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "shrimp_pasta",
    "name": "Паста с креветками и чесноком",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари пасту.", "Обжарь креветки с чесноком.", "Смешай с пастой.", "Посыпь зеленью."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Креветки", "qtyBase": 300, "unit": "г", "pricePerUnit": 1.1, "aisle": "Морепродукты", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Оливковое масло", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True},
      {"name": "Петрушка", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_teriyaki",
    "name": "Курица терияки с рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Нарежь курицу и обжарь.", "Добавь соус терияки.", "Туши 10 минут.", "Подавай с рисом и кунжутом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соус терияки", "qtyBase": 50, "unit": "мл", "pricePerUnit": 0.4, "aisle": "Соусы", "staple": False},
      {"name": "Кунжут", "qtyBase": 10, "unit": "г", "pricePerUnit": 0.8, "aisle": "Специи", "staple": True}
    ]
  },
  {
    "id": "beef_tacos",
    "name": "Тако с говядиной",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь фарш с луком и специями.", "Нагрей тортильи.", "Начини мясом, сыром и салатом.", "Подавай с соусом."],
    "ingredients": [
      {"name": "Говяжий фарш", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.55, "aisle": "Мясо", "staple": False},
      {"name": "Тортильи", "qtyBase": 4, "unit": "шт", "pricePerUnit": 18, "aisle": "Бакалея", "staple": False},
      {"name": "Сыр", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Салат", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 40, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "veg_stirfry",
    "name": "Овощной стир-фрай с тофу",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь тофу до румяности.", "Добавь овощи и жарь на сильном огне.", "Полей соевым соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Тофу", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Брокколи", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "chicken_parmesan",
    "name": "Курица пармезан с пастой",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Обваляй курицу в сухарях и обжарь.", "Положи сверху томатный соус и сыр.", "Запекай 10 минут.", "Подавай с пастой."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Паста", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Сыр моцарелла", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.6, "aisle": "Молочное", "staple": False},
      {"name": "Сухари панировочные", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.2, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "baked_salmon_asparagus",
    "name": "Запечённый лосось со спаржей",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Выложи лосось и спаржу на противень.", "Сбрызни маслом и лимоном.", "Запекай при 200°C 15-18 минут.", "Подавай сразу."],
    "ingredients": [
      {"name": "Лосось филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 1.2, "aisle": "Рыба", "staple": False},
      {"name": "Спаржа", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.9, "aisle": "Овощи", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "pork_tenderloin",
    "name": "Свиная вырезка с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Обжарь вырезку со всех сторон.", "Добавь овощи и туши 20 минут.", "Посоли и поперчи.", "Подавай с гарниром."],
    "ingredients": [
      {"name": "Свиная вырезка", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.55, "aisle": "Мясо", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Картофель", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chickpea_curry",
    "name": "Карри из нута",
    "diet": "veg",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь лук и специи.", "Добавь нут и томаты.", "Влей кокосовое молоко и туши.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Нут консервированный", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.16, "aisle": "Бакалея", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Кокосовое молоко", "qtyBase": 200, "unit": "мл", "pricePerUnit": 0.35, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "beef_broccoli",
    "name": "Говядина с брокколи в соусе",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь говядину.", "Добавь брокколи.", "Влей соус и туши 5 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Брокколи", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 30, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "chicken_fajitas",
    "name": "Фахитас с курицей",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь курицу с перцем и луком.", "Добавь специи.", "Подавай в тортильях со сметаной и сыром.", "Укрась кинзой."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Тортильи", "qtyBase": 4, "unit": "шт", "pricePerUnit": 18, "aisle": "Бакалея", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 2, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Сметана", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "mushroom_risotto",
    "name": "Ризотто с грибами",
    "diet": "veg",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь грибы и лук.", "Добавь рис и вино (или бульон).", "Постепенно вливай бульон, помешивая.", "В конце добавь сыр."],
    "ingredients": [
      {"name": "Рис арборио", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.25, "aisle": "Бакалея", "staple": False},
      {"name": "Шампиньоны", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.35, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 50, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False},
      {"name": "Бульон", "qtyBase": 500, "unit": "мл", "pricePerUnit": 0.1, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "lamb_chops",
    "name": "Бараньи котлеты с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Посоли котлеты и обжарь.", "Обжарь овощи отдельно.", "Подавай вместе с зеленью.", "Можно добавить чесночный соус."],
    "ingredients": [
      {"name": "Бараньи котлеты", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.85, "aisle": "Мясо", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Баклажан", "qtyBase": 1, "unit": "шт", "pricePerUnit": 70, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "tuna_pasta",
    "name": "Паста с тунцом",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари пасту.", "Обжарь чеснок и добавь тунец.", "Смешай с пастой и томатами.", "Посыпь зеленью."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Тунец консервированный", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.45, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "stuffed_peppers",
    "name": "Фаршированные перцы",
    "diet": "all",
    "baseServings": 2,
    "time": 50,
    "steps": ["Смешай фарш с рисом и луком.", "Нафаршируй перцы.", "Туши в томатном соусе 35-40 минут.", "Подавай со сметаной."],
    "ingredients": [
      {"name": "Перец болгарский", "qtyBase": 4, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Говяжий фарш", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.55, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_wings",
    "name": "Куриные крылышки в медово-соевом соусе",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Смешай крылышки с соусом.", "Запекай при 200°C 30-35 минут.", "Подавай с рисом или салатом.", "Посыпь кунжутом."],
    "ingredients": [
      {"name": "Куриные крылышки", "qtyBase": 600, "unit": "г", "pricePerUnit": 0.28, "aisle": "Мясо", "staple": False},
      {"name": "Соевый соус", "qtyBase": 40, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True},
      {"name": "Мёд", "qtyBase": 30, "unit": "г", "pricePerUnit": 0.5, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "veg_pasta_primavera",
    "name": "Паста примавера с овощами",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари пасту.", "Обжарь овощи.", "Смешай с пастой и маслом.", "Посыпь сыром и зеленью."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры черри", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 40, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "beef_stew",
    "name": "Тушёная говядина с овощами",
    "diet": "all",
    "baseServings": 3,
    "time": 90,
    "steps": ["Обжарь говядину.", "Добавь овощи и томаты.", "Туши на медленном огне 1-1.5 часа.", "Подавай с картофелем или хлебом."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "salmon_rice_bowl",
    "name": "Боул с лососем и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари рис.", "Обжарь или запеки лосось.", "Собери боул с овощами.", "Полей соусом."],
    "ingredients": [
      {"name": "Лосось филе", "qtyBase": 250, "unit": "г", "pricePerUnit": 1.2, "aisle": "Рыба", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Авокадо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 80, "aisle": "Фрукты", "staple": False},
      {"name": "Огурец", "qtyBase": 1, "unit": "шт", "pricePerUnit": 20, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "chicken_potatoes_rosemary",
    "name": "Курица с картофелем и розмарином",
    "diet": "all",
    "baseServings": 2,
    "time": 45,
    "steps": ["Нарежь картофель и курицу.", "Посоли, добавь розмарин и масло.", "Запекай при 200°C 35 минут.", "Подавай горячим."],
    "ingredients": [
      {"name": "Куриные бёдра", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.32, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Розмарин", "qtyBase": 1, "unit": "веточка", "pricePerUnit": 20, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Оливковое масло", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "veggie_burgers",
    "name": "Овощные котлеты с салатом",
    "diet": "veg",
    "baseServings": 2,
    "time": 30,
    "steps": ["Измельчи овощи и нут.", "Сформируй котлеты и обжарь.", "Подавай в булочках или с салатом.", "Добавь соус."],
    "ingredients": [
      {"name": "Нут консервированный", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.16, "aisle": "Бакалея", "staple": False},
      {"name": "Морковь", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Салат", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 40, "aisle": "Овощи", "staple": False},
      {"name": "Булочки", "qtyBase": 2, "unit": "шт", "pricePerUnit": 25, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "pork_schnitzel",
    "name": "Свиной шницель с картофелем",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Отбей мясо, обваляй в сухарях.", "Обжарь до золотистой корочки.", "Отвари или пожарь картофель.", "Подавай с лимоном."],
    "ingredients": [
      {"name": "Свиная вырезка", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.55, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Сухари панировочные", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.2, "aisle": "Бакалея", "staple": False},
      {"name": "Яйцо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 12, "aisle": "Молочное", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False}
    ]
  },
  {
    "id": "thai_chicken",
    "name": "Тайская курица с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Добавь овощи и тайский соус.", "Туши 10 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Тайский соус / паста", "qtyBase": 30, "unit": "г", "pricePerUnit": 0.6, "aisle": "Соусы", "staple": False}
    ]
  },
  {
    "id": "eggplant_parmesan",
    "name": "Баклажаны пармезан",
    "diet": "veg",
    "baseServings": 2,
    "time": 45,
    "steps": ["Нарежь баклажаны и обжарь.", "Собери слои с томатным соусом и сыром.", "Запекай 20 минут.", "Подавай горячим."],
    "ingredients": [
      {"name": "Баклажан", "qtyBase": 2, "unit": "шт", "pricePerUnit": 70, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Сыр моцарелла", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.6, "aisle": "Молочное", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 40, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False},
      {"name": "Базилик", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 45, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "fish_tacos",
    "name": "Рыбные тако",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь или запеки рыбу со специями.", "Нагрей тортильи.", "Начини рыбой, капустой и соусом.", "Подавай с лаймом."],
    "ingredients": [
      {"name": "Белая рыба (треска/минтай)", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.4, "aisle": "Рыба", "staple": False},
      {"name": "Тортильи", "qtyBase": 4, "unit": "шт", "pricePerUnit": 18, "aisle": "Бакалея", "staple": False},
      {"name": "Капуста", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.03, "aisle": "Овощи", "staple": False},
      {"name": "Сметана", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False},
      {"name": "Лайм", "qtyBase": 1, "unit": "шт", "pricePerUnit": 40, "aisle": "Фрукты", "staple": False}
    ]
  },
  {
    "id": "beef_burgers",
    "name": "Домашние бургеры",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Сформируй котлеты из фарша и обжарь.", "Поджарь булочки.", "Собери бургеры с сыром, салатом и соусом.", "Подавай с картофелем фри или салатом."],
    "ingredients": [
      {"name": "Говяжий фарш", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.55, "aisle": "Мясо", "staple": False},
      {"name": "Булочки для бургеров", "qtyBase": 2, "unit": "шт", "pricePerUnit": 30, "aisle": "Бакалея", "staple": False},
      {"name": "Сыр", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Салат", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 40, "aisle": "Овощи", "staple": False},
      {"name": "Помидор", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "lentil_bolognese",
    "name": "Чечевичный болоньезе с пастой",
    "diet": "veg",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь лук и морковь.", "Добавь чечевицу и томаты.", "Туши 20 минут.", "Подавай с пастой."],
    "ingredients": [
      {"name": "Чечевица", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.14, "aisle": "Бакалея", "staple": False},
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_satay",
    "name": "Курица сатай с арахисовым соусом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Нарежь курицу и обжарь или запеки.", "Приготовь арахисовый соус.", "Подавай с рисом и овощами.", "Посыпь арахисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Арахисовая паста", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.4, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True},
      {"name": "Огурец", "qtyBase": 1, "unit": "шт", "pricePerUnit": 20, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "cod_potatoes",
    "name": "Треска с картофелем и зеленью",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Отвари или запеки картофель.", "Посоли треску и запеки или обжарь.", "Подавай с зеленью и лимоном.", "Можно добавить сливочный соус."],
    "ingredients": [
      {"name": "Треска", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.5, "aisle": "Рыба", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Укроп", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False},
      {"name": "Сливочное масло", "qtyBase": 20, "unit": "г", "pricePerUnit": 0.6, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "mushroom_pasta",
    "name": "Паста с грибами и сливками",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари пасту.", "Обжарь грибы с чесноком.", "Добавь сливки и туши.", "Смешай с пастой и сыром."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Шампиньоны", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.35, "aisle": "Овощи", "staple": False},
      {"name": "Сливки", "qtyBase": 150, "unit": "мл", "pricePerUnit": 0.3, "aisle": "Молочное", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Сыр пармезан", "qtyBase": 40, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "chicken_quinoa",
    "name": "Курица с киноа и овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Отвари киноа.", "Обжарь курицу.", "Добавь овощи.", "Смешай всё и подавай."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Киноа", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.35, "aisle": "Бакалея", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "pork_belly",
    "name": "Свиная грудинка с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 50,
    "steps": ["Нарежь грудинку и обжарь до румяности.", "Добавь овощи.", "Туши под крышкой 30 минут.", "Подавай с рисом или картофелем."],
    "ingredients": [
      {"name": "Свиная грудинка", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Капуста", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.03, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "veg_pad_thai",
    "name": "Овощной пад тай",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": ["Замочи рисовую лапшу.", "Обжарь овощи и тофу.", "Добавь лапшу и соус.", "Посыпь арахисом и лаймом."],
    "ingredients": [
      {"name": "Рисовая лапша", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.2, "aisle": "Бакалея", "staple": False},
      {"name": "Тофу", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Арахис", "qtyBase": 30, "unit": "г", "pricePerUnit": 0.3, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "steak_vegetables",
    "name": "Стейк с овощами гриль",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Посоли стейк и обжарь до желаемой прожарки.", "Обжарь овощи на гриле или сковороде.", "Дай стейку отдохнуть 5 минут.", "Подавай вместе."],
    "ingredients": [
      {"name": "Говяжий стейк", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.9, "aisle": "Мясо", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Баклажан", "qtyBase": 1, "unit": "шт", "pricePerUnit": 70, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "chicken_enchiladas",
    "name": "Энчиладас с курицей",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Обжарь курицу с луком.", "Заверни в тортильи.", "Залей соусом и сыром.", "Запекай 15-20 минут."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Тортильи", "qtyBase": 4, "unit": "шт", "pricePerUnit": 18, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Сыр", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "ratatouille",
    "name": "Рататуй",
    "diet": "veg",
    "baseServings": 2,
    "time": 50,
    "steps": ["Нарежь овощи кружочками.", "Выложи слоями в форму.", "Залей томатным соусом.", "Запекай 35-40 минут."],
    "ingredients": [
      {"name": "Баклажан", "qtyBase": 1, "unit": "шт", "pricePerUnit": 70, "aisle": "Овощи", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "turkey_stirfry",
    "name": "Стир-фрай с индейкой",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Нарежь индейку и обжарь.", "Добавь овощи.", "Полей соевым соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Филе индейки", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.5, "aisle": "Мясо", "staple": False},
      {"name": "Брокколи", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "pasta_arrabbiata",
    "name": "Паста аррабьята",
    "diet": "veg",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари пасту.", "Обжарь чеснок и перец чили.", "Добавь томаты и туши.", "Смешай с пастой."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Перец чили", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "chicken_caesar",
    "name": "Салат Цезарь с курицей",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Обжарь курицу.", "Нарежь салат.", "Добавь сухарики и сыр.", "Заправь соусом цезарь."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Салат романо", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 50, "aisle": "Овощи", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 40, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False},
      {"name": "Сухарики", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.3, "aisle": "Бакалея", "staple": False},
      {"name": "Соус цезарь", "qtyBase": 60, "unit": "мл", "pricePerUnit": 0.5, "aisle": "Соусы", "staple": False}
    ]
  },
  {
    "id": "beef_noodles",
    "name": "Говядина с лапшой",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь говядину с овощами.", "Отвари лапшу.", "Смешай с соусом.", "Подавай горячим."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Лапша яичная", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.15, "aisle": "Бакалея", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 30, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "stuffed_zucchini",
    "name": "Фаршированные кабачки",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Вырежи сердцевину кабачков.", "Нафаршируй мясом и рисом.", "Запекай 25-30 минут.", "Подавай со сметаной."],
    "ingredients": [
      {"name": "Кабачок", "qtyBase": 2, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Говяжий фарш", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.55, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Сыр", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "shrimp_stirfry",
    "name": "Креветки стир-фрай с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Обжарь креветки 2-3 минуты.", "Добавь овощи и жарь ещё 3 минуты.", "Полей соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Креветки", "qtyBase": 300, "unit": "г", "pricePerUnit": 1.1, "aisle": "Морепродукты", "staple": False},
      {"name": "Брокколи", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "chicken_tikka",
    "name": "Курица тикка масала",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Замаринуй курицу в йогурте со специями.", "Обжарь курицу.", "Туши в томатно-сливочном соусе.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Йогурт", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.2, "aisle": "Молочное", "staple": False},
      {"name": "Помидоры", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Сливки", "qtyBase": 100, "unit": "мл", "pricePerUnit": 0.3, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "veg_chili",
    "name": "Овощное чили с рисом",
    "diet": "veg",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь лук и перец.", "Добавь фасоль и томаты.", "Туши 20 минут со специями.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Фасоль консервированная", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.15, "aisle": "Бакалея", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "pork_cutlets_mushroom",
    "name": "Свиные котлеты с грибным соусом",
    "diet": "all",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь котлеты.", "Отдельно обжарь грибы.", "Сделай соус из грибов и сливок.", "Подавай с пюре."],
    "ingredients": [
      {"name": "Свиные котлеты", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.42, "aisle": "Мясо", "staple": False},
      {"name": "Шампиньоны", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.35, "aisle": "Овощи", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Сливки", "qtyBase": 100, "unit": "мл", "pricePerUnit": 0.3, "aisle": "Молочное", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "baked_cod",
    "name": "Запечённая треска с лимоном",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Посоли треску и выложи на противень.", "Сбрызни лимоном и маслом.", "Запекай при 190°C 15-18 минут.", "Подавай с овощами."],
    "ingredients": [
      {"name": "Треска", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.5, "aisle": "Рыба", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Брокколи", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "veggie_curry_coconut",
    "name": "Овощное кокосовое карри",
    "diet": "veg",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь овощи.", "Добавь специи и кокосовое молоко.", "Туши 15 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Цветная капуста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Батат", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.15, "aisle": "Овощи", "staple": False},
      {"name": "Кокосовое молоко", "qtyBase": 200, "unit": "мл", "pricePerUnit": 0.35, "aisle": "Бакалея", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Карри специи", "qtyBase": 1, "unit": "порция", "pricePerUnit": 30, "aisle": "Специи", "staple": True}
    ]
  },
  {
    "id": "chicken_rice_bowl",
    "name": "Боул с курицей и овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари рис.", "Обжарь курицу.", "Нарежь овощи.", "Собери боул и полей соусом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Авокадо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 80, "aisle": "Фрукты", "staple": False},
      {"name": "Огурец", "qtyBase": 1, "unit": "шт", "pricePerUnit": 20, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "lamb_stew",
    "name": "Тушёная баранина с овощами",
    "diet": "all",
    "baseServings": 3,
    "time": 80,
    "steps": ["Обжарь баранину.", "Добавь овощи.", "Туши на медленном огне 1 час.", "Подавай с хлебом или картофелем."],
    "ingredients": [
      {"name": "Баранина", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.75, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "pasta_seafood",
    "name": "Паста с морепродуктами",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари пасту.", "Обжарь морепродукты с чесноком.", "Добавь томаты.", "Смешай с пастой."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Морепродукты микс", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.9, "aisle": "Морепродукты", "staple": False},
      {"name": "Помидоры", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Петрушка", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_skewers",
    "name": "Куриные шашлычки с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Нарежь курицу и овощи.", "Нанижи на шпажки.", "Обжарь или запеки.", "Подавай с соусом и рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 2, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Йогурт", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "black_bean_tacos",
    "name": "Тако с чёрной фасолью",
    "diet": "veg",
    "baseServings": 2,
    "time": 20,
    "steps": ["Прогрей фасоль со специями.", "Нагрей тортильи.", "Начини сыром, салатом и соусом.", "Подавай сразу."],
    "ingredients": [
      {"name": "Чёрная фасоль", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Тортильи", "qtyBase": 4, "unit": "шт", "pricePerUnit": 18, "aisle": "Бакалея", "staple": False},
      {"name": "Сыр", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Салат", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 40, "aisle": "Овощи", "staple": False},
      {"name": "Авокадо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 80, "aisle": "Фрукты", "staple": False}
    ]
  },
  {
    "id": "pork_apple",
    "name": "Свинина с яблоками",
    "diet": "all",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь свинину.", "Добавь яблоки и лук.", "Туши 15-20 минут.", "Подавай с картофелем."],
    "ingredients": [
      {"name": "Свиная вырезка", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.55, "aisle": "Мясо", "staple": False},
      {"name": "Яблоко", "qtyBase": 2, "unit": "шт", "pricePerUnit": 25, "aisle": "Фрукты", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "salmon_teriyaki",
    "name": "Лосось терияки",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Обжарь или запеки лосось.", "Полей соусом терияки.", "Подавай с рисом и овощами.", "Посыпь кунжутом."],
    "ingredients": [
      {"name": "Лосось филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 1.2, "aisle": "Рыба", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соус терияки", "qtyBase": 40, "unit": "мл", "pricePerUnit": 0.4, "aisle": "Соусы", "staple": False},
      {"name": "Брокколи", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Кунжут", "qtyBase": 10, "unit": "г", "pricePerUnit": 0.8, "aisle": "Специи", "staple": True}
    ]
  },
  {
    "id": "veg_fried_rice",
    "name": "Жареный рис с овощами",
    "diet": "veg",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари рис и остуди.", "Обжарь овощи.", "Добавь рис и соевый соус.", "Жарь 5 минут."],
    "ingredients": [
      {"name": "Рис", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Горошек", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Яйцо", "qtyBase": 2, "unit": "шт", "pricePerUnit": 12, "aisle": "Молочное", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "beef_rice_bowl",
    "name": "Боул с говядиной",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари рис.", "Обжарь говядину.", "Добавь овощи.", "Собери боул и полей соусом."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Брокколи", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "chicken_mushroom",
    "name": "Курица с грибами в сливочном соусе",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Добавь грибы.", "Влей сливки и туши.", "Подавай с рисом или пастой."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Шампиньоны", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.35, "aisle": "Овощи", "staple": False},
      {"name": "Сливки", "qtyBase": 150, "unit": "мл", "pricePerUnit": 0.3, "aisle": "Молочное", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "fish_chips",
    "name": "Рыба с картофелем фри",
    "diet": "all",
    "baseServings": 2,
    "time": 35,
    "steps": ["Нарежь картофель и запеки или пожарь.", "Обваляй рыбу в кляре и обжарь.", "Подавай с лимоном и соусом.", "Можно добавить горошек."],
    "ingredients": [
      {"name": "Белая рыба", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Рыба", "staple": False},
      {"name": "Картофель", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Мука", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.05, "aisle": "Бакалея", "staple": True},
      {"name": "Яйцо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 12, "aisle": "Молочное", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False}
    ]
  },
  {
    "id": "veg_stuffed_peppers",
    "name": "Фаршированные перцы с рисом и овощами",
    "diet": "veg",
    "baseServings": 2,
    "time": 45,
    "steps": ["Смешай рис с овощами.", "Нафаршируй перцы.", "Туши в томатном соусе.", "Подавай со сметаной."],
    "ingredients": [
      {"name": "Перец болгарский", "qtyBase": 4, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "duck_orange",
    "name": "Утка с апельсиновым соусом",
    "diet": "all",
    "baseServings": 2,
    "time": 50,
    "steps": ["Обжарь утку кожей вниз.", "Приготовь соус из апельсина.", "Запеки до готовности.", "Подавай с гарниром."],
    "ingredients": [
      {"name": "Утиная грудка", "qtyBase": 400, "unit": "г", "pricePerUnit": 1.1, "aisle": "Мясо", "staple": False},
      {"name": "Апельсин", "qtyBase": 2, "unit": "шт", "pricePerUnit": 40, "aisle": "Фрукты", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Мёд", "qtyBase": 20, "unit": "г", "pricePerUnit": 0.5, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "spinach_ricotta_pasta",
    "name": "Паста со шпинатом и рикоттой",
    "diet": "veg",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари пасту.", "Обжарь чеснок и шпинат.", "Смешай с рикоттой.", "Соедини с пастой."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Шпинат", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Рикотта", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.6, "aisle": "Молочное", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Сыр пармезан", "qtyBase": 30, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "beef_kebab",
    "name": "Говяжий кебаб с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Нарежь говядину и замаринуй.", "Нанижи на шпажки с овощами.", "Обжарь или запеки.", "Подавай с рисом и соусом."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Йогурт", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "chicken_broccoli_cheese",
    "name": "Курица с брокколи и сыром",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Отвари брокколи.", "Залей сырным соусом.", "Запеки 10 минут."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Брокколи", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Сыр", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Сливки", "qtyBase": 100, "unit": "мл", "pricePerUnit": 0.3, "aisle": "Молочное", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "tofu_stirfry",
    "name": "Тофу стир-фрай",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь тофу до румяности.", "Добавь овощи.", "Полей соевым соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Тофу", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Брокколи", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "pork_cabbage",
    "name": "Свинина с тушёной капустой",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Обжарь свинину.", "Добавь капусту и лук.", "Туши под крышкой 25 минут.", "Подавай с картофелем."],
    "ingredients": [
      {"name": "Свинина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.4, "aisle": "Мясо", "staple": False},
      {"name": "Капуста белокочанная", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.03, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Картофель", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "shrimp_garlic",
    "name": "Креветки в чесночном масле",
    "diet": "all",
    "baseServings": 2,
    "time": 15,
    "steps": ["Обжарь чеснок в масле.", "Добавь креветки и жарь 3-4 минуты.", "Посыпь зеленью.", "Подавай с хлебом или рисом."],
    "ingredients": [
      {"name": "Креветки", "qtyBase": 350, "unit": "г", "pricePerUnit": 1.1, "aisle": "Морепродукты", "staple": False},
      {"name": "Чеснок", "qtyBase": 2, "unit": "головки", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Оливковое масло", "qtyBase": 30, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True},
      {"name": "Петрушка", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False}
    ]
  },
  {
    "id": "chicken_pesto_pasta",
    "name": "Курица с пастой и песто",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари пасту.", "Обжарь курицу.", "Смешай с песто.", "Посыпь сыром."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Песто", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.8, "aisle": "Соусы", "staple": False},
      {"name": "Помидоры черри", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 30, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "beef_mushroom_pie",
    "name": "Говядина с грибами под крышкой",
    "diet": "all",
    "baseServings": 3,
    "time": 50,
    "steps": ["Обжарь говядину и грибы.", "Выложи в форму.", "Накрой тестом или картофелем.", "Запекай 25 минут."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Шампиньоны", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.35, "aisle": "Овощи", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Сметана", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "veg_noodle_bowl",
    "name": "Овощной боул с лапшой",
    "diet": "veg",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари лапшу.", "Обжарь овощи.", "Смешай с соусом.", "Подавай с тофу или яйцом."],
    "ingredients": [
      {"name": "Лапша", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.15, "aisle": "Бакалея", "staple": False},
      {"name": "Брокколи", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "chicken_lemon",
    "name": "Курица в лимонном соусе",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Добавь лимонный сок и чеснок.", "Туши 10 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лимон", "qtyBase": 2, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "salmon_avocado",
    "name": "Лосось с авокадо и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Запеки или обжарь лосось.", "Отвари рис.", "Нарежь авокадо.", "Собери и полей соусом."],
    "ingredients": [
      {"name": "Лосось филе", "qtyBase": 280, "unit": "г", "pricePerUnit": 1.2, "aisle": "Рыба", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Авокадо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 80, "aisle": "Фрукты", "staple": False},
      {"name": "Огурец", "qtyBase": 1, "unit": "шт", "pricePerUnit": 20, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "beef_pepper",
    "name": "Говядина с перцем",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь говядину.", "Добавь перец и лук.", "Полей соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 2, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "chicken_sweet_potato",
    "name": "Курица с бататом",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Нарежь батат и курицу.", "Запекай вместе при 200°C.", "Посоли и добавь специи.", "Подавай с зеленью."],
    "ingredients": [
      {"name": "Куриные бёдра", "qtyBase": 450, "unit": "г", "pricePerUnit": 0.32, "aisle": "Мясо", "staple": False},
      {"name": "Батат", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True},
      {"name": "Розмарин", "qtyBase": 1, "unit": "веточка", "pricePerUnit": 20, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "veg_lasagna_simple",
    "name": "Простая овощная лазанья",
    "diet": "veg",
    "baseServings": 3,
    "time": 45,
    "steps": ["Обжарь овощи.", "Собери слои с листами и сыром.", "Запекай 25 минут.", "Дай постоять перед подачей."],
    "ingredients": [
      {"name": "Листы лазаньи", "qtyBase": 6, "unit": "шт", "pricePerUnit": 15, "aisle": "Бакалея", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Шпинат", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Сыр", "qtyBase": 180, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "turkey_veg",
    "name": "Индейка с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь индейку.", "Добавь овощи.", "Туши 15 минут.", "Подавай с рисом или киноа."],
    "ingredients": [
      {"name": "Филе индейки", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.5, "aisle": "Мясо", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "pasta_alfredo",
    "name": "Паста альфредо с курицей",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари пасту.", "Обжарь курицу.", "Приготовь сливочный соус.", "Смешай всё вместе."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Куриное филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Сливки", "qtyBase": 150, "unit": "мл", "pricePerUnit": 0.3, "aisle": "Молочное", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 50, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "veg_burrito_bowl",
    "name": "Буррито боул вегетарианский",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари рис.", "Прогрей фасоль со специями.", "Собери боул с овощами и сыром.", "Полей соусом."],
    "ingredients": [
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Фасоль консервированная", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.15, "aisle": "Бакалея", "staple": False},
      {"name": "Кукуруза", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Сыр", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Салат", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 40, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "pork_honey",
    "name": "Свинина в медовом соусе",
    "diet": "all",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь свинину.", "Добавь мёд и соевый соус.", "Туши 15 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Свиная вырезка", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.55, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Мёд", "qtyBase": 30, "unit": "г", "pricePerUnit": 0.5, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "fish_tomato",
    "name": "Рыба в томатном соусе",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь рыбу.", "Добавь томаты и чеснок.", "Туши 10 минут.", "Подавай с рисом или картофелем."],
    "ingredients": [
      {"name": "Белая рыба", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Рыба", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Петрушка", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_avocado_salad",
    "name": "Салат с курицей и авокадо",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Обжарь курицу.", "Нарежь овощи и авокадо.", "Смешай всё.", "Заправь маслом и лимоном."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Авокадо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 80, "aisle": "Фрукты", "staple": False},
      {"name": "Салат", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 40, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры черри", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False}
    ]
  },
  {
    "id": "veg_quinoa_bowl",
    "name": "Боул с киноа и овощами",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари киноа.", "Обжарь или запеки овощи.", "Собери боул.", "Полей соусом."],
    "ingredients": [
      {"name": "Киноа", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.35, "aisle": "Бакалея", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Нут консервированный", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.16, "aisle": "Бакалея", "staple": False},
      {"name": "Авокадо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 80, "aisle": "Фрукты", "staple": False}
    ]
  },
  {
    "id": "pork_ginger",
    "name": "Свинина с имбирём",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь свинину с имбирём и чесноком.", "Добавь овощи.", "Полей соевым соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Свинина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.4, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Имбирь", "qtyBase": 20, "unit": "г", "pricePerUnit": 0.3, "aisle": "Овощи", "staple": False},
      {"name": "Брокколи", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "cod_lemon_herb",
    "name": "Треска с травами и лимоном",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Посоли треску и посыпь травами.", "Запеки с лимоном.", "Подавай с овощами.", "Сбрызни маслом."],
    "ingredients": [
      {"name": "Треска", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.5, "aisle": "Рыба", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Укроп", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "chicken_cashew",
    "name": "Курица с кешью",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь курицу.", "Добавь овощи и кешью.", "Полей соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Кешью", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.8, "aisle": "Бакалея", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "veg_stuffed_mushrooms",
    "name": "Фаршированные шампиньоны",
    "diet": "veg",
    "baseServings": 2,
    "time": 30,
    "steps": ["Удали ножки у грибов.", "Нафаршируй сыром и овощами.", "Запекай 15-20 минут.", "Подавай горячими."],
    "ingredients": [
      {"name": "Шампиньоны крупные", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Сыр", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Шпинат", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Хлеб", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.1, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "beef_onion",
    "name": "Говядина с луком",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Обжарь говядину.", "Добавь много лука.", "Туши 25 минут.", "Подавай с картофелем или гречкой."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Лук", "qtyBase": 3, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Сметана", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "shrimp_rice",
    "name": "Креветки с рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари рис.", "Обжарь креветки с чесноком.", "Смешай с рисом.", "Посыпь зеленью."],
    "ingredients": [
      {"name": "Креветки", "qtyBase": 300, "unit": "г", "pricePerUnit": 1.1, "aisle": "Морепродукты", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Петрушка", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_potato_bake",
    "name": "Запеканка из курицы и картофеля",
    "diet": "all",
    "baseServings": 3,
    "time": 50,
    "steps": ["Нарежь картофель и курицу.", "Выложи слоями.", "Залей соусом или сметаной.", "Запекай 35-40 минут."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 600, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Сыр", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.55, "aisle": "Молочное", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Сметана", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "veg_curry_lentil",
    "name": "Чечевичное карри",
    "diet": "veg",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь лук и специи.", "Добавь чечевицу и томаты.", "Туши 25 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Чечевица", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.14, "aisle": "Бакалея", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Кокосовое молоко", "qtyBase": 100, "unit": "мл", "pricePerUnit": 0.35, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "beef_garlic",
    "name": "Говядина с чесноком",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Нарежь говядину тонко.", "Обжарь с большим количеством чеснока.", "Полей соевым соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Чеснок", "qtyBase": 2, "unit": "головки", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True},
      {"name": "Зелёный лук", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 25, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_spinach",
    "name": "Курица со шпинатом",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь курицу.", "Добавь шпинат и сливки.", "Туши 5 минут.", "Подавай с пастой или рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Шпинат", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Сливки", "qtyBase": 100, "unit": "мл", "pricePerUnit": 0.3, "aisle": "Молочное", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Паста", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "pork_pepper_stir",
    "name": "Свинина с перцем стир-фрай",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь свинину.", "Добавь перец и лук.", "Полей соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Свинина", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Мясо", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 2, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "fish_herb",
    "name": "Рыба с травами",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Посоли рыбу и посыпь травами.", "Запеки или обжарь.", "Подавай с лимоном и овощами.", "Сбрызни маслом."],
    "ingredients": [
      {"name": "Белая рыба", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Рыба", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Укроп", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False},
      {"name": "Петрушка", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_tomato_basil",
    "name": "Курица с томатами и базиликом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Добавь томаты и чеснок.", "Туши 10 минут.", "В конце добавь базилик."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Помидоры", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Базилик", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Паста", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "veg_mushroom_risotto",
    "name": "Грибное ризотто",
    "diet": "veg",
    "baseServings": 2,
    "time": 35,
    "steps": ["Обжарь грибы.", "Добавь рис и постепенно бульон.", "Помешивай до готовности.", "В конце добавь сыр."],
    "ingredients": [
      {"name": "Рис арборио", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.25, "aisle": "Бакалея", "staple": False},
      {"name": "Шампиньоны", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.35, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 50, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False},
      {"name": "Бульон", "qtyBase": 500, "unit": "мл", "pricePerUnit": 0.1, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "pork_soy",
    "name": "Свинина в соевом соусе",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь свинину.", "Добавь соевый соус и чеснок.", "Туши 15 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Свинина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.4, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 40, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Зелёный лук", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 25, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_curry_simple",
    "name": "Простое куриное карри",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу с луком.", "Добавь специи и томаты.", "Туши 15 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Карри специи", "qtyBase": 1, "unit": "порция", "pricePerUnit": 30, "aisle": "Специи", "staple": True}
    ]
  },
  {
    "id": "beef_potato_stew",
    "name": "Тушёная говядина с картофелем",
    "diet": "all",
    "baseServings": 3,
    "time": 70,
    "steps": ["Обжарь говядину.", "Добавь картофель и овощи.", "Туши 50-60 минут.", "Посоли в конце."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "shrimp_avocado_salad",
    "name": "Салат с креветками и авокадо",
    "diet": "all",
    "baseServings": 2,
    "time": 15,
    "steps": ["Обжарь креветки.", "Нарежь авокадо и овощи.", "Смешай всё.", "Заправь лимоном и маслом."],
    "ingredients": [
      {"name": "Креветки", "qtyBase": 250, "unit": "г", "pricePerUnit": 1.1, "aisle": "Морепродукты", "staple": False},
      {"name": "Авокадо", "qtyBase": 1, "unit": "шт", "pricePerUnit": 80, "aisle": "Фрукты", "staple": False},
      {"name": "Салат", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 40, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры черри", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.4, "aisle": "Овощи", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False}
    ]
  },
  {
    "id": "chicken_broccoli_rice",
    "name": "Курица с брокколи и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Отвари рис.", "Обжарь курицу.", "Добавь брокколи.", "Смешай всё с соусом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Брокколи", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Соевый соус", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "veg_pasta_tomato_basil",
    "name": "Паста с томатами и базиликом",
    "diet": "veg",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари пасту.", "Обжарь чеснок и томаты.", "Смешай с пастой.", "Добавь базилик и сыр."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Базилик", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Сыр пармезан", "qtyBase": 40, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "beef_broccoli_rice",
    "name": "Говядина с брокколи и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари рис.", "Обжарь говядину.", "Добавь брокколи.", "Полей соусом и подавай."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Брокколи", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "chicken_feta",
    "name": "Курица с фетой и овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Добавь овощи.", "В конце добавь фету.", "Подавай с рисом или салатом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Сыр фета", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.7, "aisle": "Молочное", "staple": False},
      {"name": "Помидоры", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Огурцы", "qtyBase": 1, "unit": "шт", "pricePerUnit": 20, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "pork_mushroom",
    "name": "Свинина с грибами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь свинину.", "Добавь грибы и лук.", "Туши 15 минут.", "Подавай с картофелем."],
    "ingredients": [
      {"name": "Свинина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.4, "aisle": "Мясо", "staple": False},
      {"name": "Шампиньоны", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.35, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Сметана", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "salmon_dill",
    "name": "Лосось с укропом",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Посоли лосось и посыпь укропом.", "Запеки 12-15 минут.", "Подавай с картофелем и лимоном.", "Сбрызни маслом."],
    "ingredients": [
      {"name": "Лосось филе", "qtyBase": 300, "unit": "г", "pricePerUnit": 1.2, "aisle": "Рыба", "staple": False},
      {"name": "Укроп", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Сливочное масло", "qtyBase": 15, "unit": "г", "pricePerUnit": 0.6, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "chicken_pepper_rice",
    "name": "Курица с перцем и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Добавь перец и лук.", "Туши 10 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 2, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "veg_bean_rice",
    "name": "Фасоль с рисом и овощами",
    "diet": "veg",
    "baseServings": 2,
    "time": 30,
    "steps": ["Отвари рис.", "Обжарь овощи.", "Добавь фасоль.", "Смешай всё вместе."],
    "ingredients": [
      {"name": "Фасоль консервированная", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.15, "aisle": "Бакалея", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Кукуруза", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "turkey_rice",
    "name": "Индейка с рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь индейку с луком.", "Добавь рис и воду.", "Туши под крышкой.", "Подавай с овощами."],
    "ingredients": [
      {"name": "Филе индейки", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.5, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "chicken_garlic_butter",
    "name": "Курица в чесночном масле",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь курицу.", "Добавь много чеснока и масло.", "Туши 10 минут.", "Подавай с картофелем."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Чеснок", "qtyBase": 2, "unit": "головки", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Сливочное масло", "qtyBase": 30, "unit": "г", "pricePerUnit": 0.6, "aisle": "Молочное", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Петрушка", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "beef_tomato",
    "name": "Говядина с томатами",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Обжарь говядину.", "Добавь томаты и лук.", "Туши 25 минут.", "Подавай с рисом или пастой."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "veg_stirfry_rice",
    "name": "Овощной жареный рис",
    "diet": "veg",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари и остуди рис.", "Обжарь овощи.", "Добавь рис и соус.", "Жарь 5 минут."],
    "ingredients": [
      {"name": "Рис", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Горошек", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "chicken_soy_ginger",
    "name": "Курица с имбирём и соевым соусом",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь курицу.", "Добавь имбирь и чеснок.", "Полей соевым соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Имбирь", "qtyBase": 20, "unit": "г", "pricePerUnit": 0.3, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Соевый соус", "qtyBase": 30, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "pork_potato",
    "name": "Свинина с картофелем",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Обжарь свинину.", "Добавь картофель и лук.", "Туши под крышкой 25 минут.", "Посоли и поперчи."],
    "ingredients": [
      {"name": "Свинина", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.4, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "fish_rice",
    "name": "Рыба с рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари рис.", "Обжарь или запеки рыбу.", "Подавай вместе с лимоном.", "Посыпь зеленью."],
    "ingredients": [
      {"name": "Белая рыба", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Рыба", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Укроп", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "chicken_veg_stir",
    "name": "Курица с овощами стир-фрай",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь курицу.", "Добавь овощи и жарь на сильном огне.", "Полей соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Брокколи", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "beef_noodle_simple",
    "name": "Говядина с лапшой просто",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь говядину с овощами.", "Отвари лапшу.", "Смешай с соусом.", "Подавай горячим."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Лапша", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.15, "aisle": "Бакалея", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "veg_tomato_pasta",
    "name": "Паста с томатным соусом",
    "diet": "veg",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари пасту.", "Приготовь томатный соус.", "Смешай.", "Посыпь базиликом и сыром."],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Помидоры в собственном соку", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.18, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Базилик", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Сыр пармезан", "qtyBase": 30, "unit": "г", "pricePerUnit": 1.2, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "chicken_mushroom_rice",
    "name": "Курица с грибами и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Добавь грибы.", "Отвари рис.", "Смешай или подавай вместе."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Шампиньоны", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.35, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Сметана", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "pork_garlic_rice",
    "name": "Свинина с чесноком и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь свинину с чесноком.", "Отвари рис.", "Полей соевым соусом.", "Подавай вместе."],
    "ingredients": [
      {"name": "Свинина", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 2, "unit": "головки", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Соевый соус", "qtyBase": 25, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True},
      {"name": "Зелёный лук", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 25, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "fish_potato_herb",
    "name": "Рыба с картофелем и травами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Запеки картофель.", "Запеки рыбу с травами.", "Подавай вместе с лимоном.", "Сбрызни маслом."],
    "ingredients": [
      {"name": "Белая рыба", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Рыба", "staple": False},
      {"name": "Картофель", "qtyBase": 450, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Укроп", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "chicken_onion",
    "name": "Курица с луком",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Добавь много лука.", "Туши 15 минут.", "Подавай с рисом или картофелем."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Лук", "qtyBase": 2, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Сметана", "qtyBase": 80, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "veg_pepper_rice",
    "name": "Перец с рисом",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь перец и лук.", "Отвари рис.", "Смешай всё.", "Посоли и добавь специи."],
    "ingredients": [
      {"name": "Перец болгарский", "qtyBase": 2, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Помидоры", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "beef_soy_rice",
    "name": "Говядина в соевом соусе с рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Обжарь говядину.", "Добавь соевый соус и чеснок.", "Отвари рис.", "Подавай вместе."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 30, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Зелёный лук", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 25, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "chicken_tomato_rice",
    "name": "Курица с томатами и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу.", "Добавь томаты.", "Отвари рис.", "Подавай вместе."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Помидоры", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.2, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True}
    ]
  },
  {
    "id": "shrimp_garlic_rice",
    "name": "Креветки с чесноком и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Отвари рис.", "Обжарь креветки с чесноком.", "Смешай или подавай вместе.", "Посыпь зеленью."],
    "ingredients": [
      {"name": "Креветки", "qtyBase": 280, "unit": "г", "pricePerUnit": 1.1, "aisle": "Морепродукты", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Петрушка", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "pork_veg",
    "name": "Свинина с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь свинину.", "Добавь овощи.", "Туши 15 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Свинина", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Мясо", "staple": False},
      {"name": "Кабачок", "qtyBase": 1, "unit": "шт", "pricePerUnit": 60, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False}
    ]
  },
  {
    "id": "fish_lemon_rice",
    "name": "Рыба с лимоном и рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Отвари рис.", "Запеки рыбу с лимоном.", "Подавай вместе.", "Посыпь зеленью."],
    "ingredients": [
      {"name": "Белая рыба", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Рыба", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Укроп", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "chicken_potato_simple",
    "name": "Курица с картофелем просто",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": ["Нарежь курицу и картофель.", "Посоли и запеки.", "Добавь чеснок.", "Подавай горячим."],
    "ingredients": [
      {"name": "Куриные бёдра", "qtyBase": 450, "unit": "г", "pricePerUnit": 0.32, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 500, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "beef_veg_simple",
    "name": "Говядина с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь говядину.", "Добавь овощи.", "Туши 15 минут.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Брокколи", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Морковь", "qtyBase": 100, "unit": "г", "pricePerUnit": 0.05, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "shrimp_veg",
    "name": "Креветки с овощами",
    "diet": "all",
    "baseServings": 2,
    "time": 20,
    "steps": ["Обжарь креветки.", "Добавь овощи.", "Полей соусом.", "Подавай с рисом."],
    "ingredients": [
      {"name": "Креветки", "qtyBase": 280, "unit": "г", "pricePerUnit": 1.1, "aisle": "Морепродукты", "staple": False},
      {"name": "Брокколи", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Соевый соус", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "chicken_simple_rice",
    "name": "Простая курица с рисом",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь курицу с луком.", "Отвари рис.", "Подавай вместе.", "Можно добавить соус."],
    "ingredients": [
      {"name": "Куриное филе", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.45, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Соевый соус", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  },
  {
    "id": "pork_simple",
    "name": "Простая свинина с гарниром",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь свинину.", "Отвари картофель или рис.", "Посоли и поперчи.", "Подавай вместе."],
    "ingredients": [
      {"name": "Свинина", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Мясо", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Сметана", "qtyBase": 50, "unit": "г", "pricePerUnit": 0.25, "aisle": "Молочное", "staple": False}
    ]
  },
  {
    "id": "fish_simple",
    "name": "Простая рыба с гарниром",
    "diet": "all",
    "baseServings": 2,
    "time": 25,
    "steps": ["Запеки или обжарь рыбу.", "Отвари картофель или рис.", "Подавай с лимоном.", "Посыпь зеленью."],
    "ingredients": [
      {"name": "Белая рыба", "qtyBase": 350, "unit": "г", "pricePerUnit": 0.4, "aisle": "Рыба", "staple": False},
      {"name": "Картофель", "qtyBase": 400, "unit": "г", "pricePerUnit": 0.04, "aisle": "Овощи", "staple": False},
      {"name": "Лимон", "qtyBase": 1, "unit": "шт", "pricePerUnit": 35, "aisle": "Фрукты", "staple": False},
      {"name": "Укроп", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False},
      {"name": "Оливковое масло", "qtyBase": 10, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True}
    ]
  },
  {
    "id": "beef_simple",
    "name": "Простая говядина с гарниром",
    "diet": "all",
    "baseServings": 2,
    "time": 30,
    "steps": ["Обжарь говядину.", "Отвари рис или гречку.", "Посоли и поперчи.", "Подавай вместе."],
    "ingredients": [
      {"name": "Говядина", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Рис", "qtyBase": 200, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False},
      {"name": "Лук", "qtyBase": 1, "unit": "шт", "pricePerUnit": 15, "aisle": "Овощи", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Соевый соус", "qtyBase": 15, "unit": "мл", "pricePerUnit": 0, "aisle": "Соусы", "staple": True}
    ]
  }
]
