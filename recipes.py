# Большая база ужинов для VibeCook
# Только полноценные ужины, без супов и завтраков

RECIPES = [
  {
    "id": "pasta_tomato",
    "name": "Паста с томатным соусом и чесноком",
    "diet": "veg",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Вскипяти воду, посоли и отвари спагетти до состояния al dente.",
      "На сковороде разогрей масло, обжарь чеснок 1 минуту.",
      "Добавь помидоры, туши 5–7 минут. Посоли, поперчи.",
      "Смешай с пастой, добавь базилик. Подавай сразу."
    ],
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
    "steps": [
      "Промой рис, отвари до готовности.",
      "Куриные бёдра посоли, поперчи, обжарь до румяной корочки.",
      "Добавь нарезанные морковь и лук, туши 10–15 минут.",
      "Полей соевым соусом, подавай с рисом."
    ],
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
    "steps": [
      "Промой чечевицу.",
      "Нарежь картофель и морковь, обжарь с луком.",
      "Добавь чечевицу и помидоры, залей водой, туши 25–30 минут.",
      "Посоли, добавь специи по вкусу."
    ],
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
    "steps": [
      "Картофель нарежь дольками, посоли, сбрызни маслом.",
      "Лосось посоли, поперчи, сбрызни лимоном.",
      "Запекай всё вместе при 200°C 20–25 минут.",
      "Подавай с укропом."
    ],
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
    "steps": [
      "Фасоль разомни вилкой, прогрей на сковороде со специями.",
      "Нагрей тортильи.",
      "Начини фасолью, сыром, салатом и соусом.",
      "Сверни и подавай."
    ],
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
    "steps": [
      "Отвари рис.",
      "Говядину нарежь тонкими полосками, обжарь на сильном огне 2–3 минуты.",
      "Добавь брокколи и перец, жарь ещё 3–4 минуты.",
      "Полей соевым соусом, подавай с рисом."
    ],
    "ingredients": [
      {"name": "Говядина для жарки", "qtyBase": 300, "unit": "г", "pricePerUnit": 0.65, "aisle": "Мясо", "staple": False},
      {"name": "Брокколи", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.25, "aisle": "Овощи", "staple": False},
      {"name": "Перец болгарский", "qtyBase": 1, "unit": "шт", "pricePerUnit": 45, "aisle": "Овощи", "staple": False},
      {"name": "Рис", "qtyBase": 150, "unit": "г", "pricePerUnit": 0.08, "aisle": "Бакалея", "staple": False}
    ]
  },
  {
    "id": "pork_chops",
    "name": "Свиные отбивные с капустой и картофелем",
    "diet": "all",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Отбивные посоли, поперчи, обжарь с двух сторон.",
      "Капусту нашинкуй, обжарь с яблоком.",
      "Картофель отвари или запеки.",
      "Подавай всё вместе."
    ],
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
    "steps": [
      "Куриное филе нарежь и обжарь до готовности.",
      "Нарежь огурцы, помидоры, лук.",
      "Добавь фету и оливки.",
      "Заправь маслом, подавай с тёплой курицей."
    ],
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
    "steps": [
      "Отвари рис.",
      "Обжарь цветную капусту и горошек.",
      "Добавь кокосовое молоко и специи, туши 10 минут.",
      "Подавай с рисом."
    ],
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
    "steps": [
      "Рыбу пропусти через мясорубку или измельчи, добавь яйцо и лук.",
      "Сформируй котлеты и обжарь.",
      "Картофель отвари и сделай пюре.",
      "Подавай вместе."
    ],
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
    "steps": [
      "Рис промой и замочи.",
      "Обжарь курицу, добавь морковь и лук.",
      "Выложи рис, залей водой, туши под крышкой 20–25 минут.",
      "Дай настояться 10 минут перед подачей."
    ],
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
    "steps": [
      "Отвари пасту.",
      "Куриное филе нарежь и обжарь.",
      "Смешай с песто и пастой.",
      "Посыпь сыром."
    ],
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
    "steps": [
      "Говядину нарежь соломкой и обжарь.",
      "Добавь лук и грибы, туши 10 минут.",
      "Влей сметану, посоли, поперчи, туши ещё 5 минут.",
      "Подавай с гречкой."
    ],
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
    "steps": [
      "Курицу нарежь и обжарь с луком.",
      "Добавь специи и томаты, туши 15 минут.",
      "Влей кокосовое молоко, доведи до готовности.",
      "Подавай с рисом."
    ],
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
    "steps": [
      "Курицу и овощи посоли, поперчи, сбрызни маслом.",
      "Выложи на противень.",
      "Запекай при 200°C 30–35 минут.",
      "Подавай горячим."
    ],
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
    "steps": [
      "Отвари спагетти.",
      "Обжарь бекон до хруста.",
      "Смешай яйца с сыром.",
      "Смешай горячую пасту с беконом и яичной смесью вне огня."
    ],
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
    "steps": [
      "Смешай фарш индейки с луком и яйцом.",
      "Сформируй тефтели и обжарь.",
      "Туши в томатном соусе 15 минут.",
      "Подавай с рисом."
    ],
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
    "steps": [
      "Обжарь овощи с томатным соусом.",
      "Собери слои из листов лазаньи и овощей.",
      "Залей соусом бешамель или сыром.",
      "Запекай 25–30 минут."
    ],
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
    "steps": [
      "Рёбрышки посоли и обжарь.",
      "Добавь картофель и лук.",
      "Туши под крышкой 40–45 минут.",
      "Подавай горячими."
    ],
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
    "steps": [
      "Отвари пасту.",
      "Обжарь креветки с чесноком 3–4 минуты.",
      "Смешай с пастой и оливковым маслом.",
      "Посыпь зеленью."
    ],
    "ingredients": [
      {"name": "Паста", "qtyBase": 250, "unit": "г", "pricePerUnit": 0.12, "aisle": "Бакалея", "staple": False},
      {"name": "Креветки", "qtyBase": 300, "unit": "г", "pricePerUnit": 1.1, "aisle": "Морепродукты", "staple": False},
      {"name": "Чеснок", "qtyBase": 1, "unit": "головка", "pricePerUnit": 25, "aisle": "Овощи", "staple": True},
      {"name": "Оливковое масло", "qtyBase": 20, "unit": "мл", "pricePerUnit": 0, "aisle": "Масла", "staple": True},
      {"name": "Петрушка", "qtyBase": 1, "unit": "пучок", "pricePerUnit": 30, "aisle": "Овощи", "staple": False}
    ]
  }
]
