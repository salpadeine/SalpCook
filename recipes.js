// Каталог рецептов SalpCook. Добавляйте новые блюда в этот массив, не меняя интерфейс.
window.SALPCOOK_RECIPES = [
  {
    "id": "homemade_cutlets",
    "name": "Домашние котлеты из говядины и свинины с пюре",
    "baseServings": 2,
    "time": 55,
    "steps": [
      "Хлеб без корочки залейте молоком и оставьте на 10 минут.",
      "Мясо нарежьте кубиками, лук и чеснок очистите.",
      "Пропустите всё через мясорубку (можно дважды).",
      "Добавьте яйцо, соль, перец. Вымесите фарш руками 2–3 минуты и отобейте.",
      "Уберите в холодильник на 15–20 минут.",
      "Сформируйте котлеты мокрыми руками.",
      "Обжарьте на масле по 3–4 минуты с каждой стороны до корочки, затем томите под крышкой 8–10 минут.",
      "Картофель отварите и разомните с молоком и маслом."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Свинина",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.42,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 5,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Хлеб белый",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.1,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Молоко",
        "qtyBase": 80,
        "unit": "мл",
        "pricePerUnit": 0.08,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Яйцо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Растительное масло",
        "qtyBase": 30,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Масла",
        "staple": true
      }
    ]
  },
  {
    "id": "baked_chicken_veg",
    "name": "Запечённая курица с овощами и картофелем",
    "baseServings": 2,
    "time": 50,
    "steps": [
      "Куриные бёдра посолите и поперчите.",
      "Картофель нарежьте дольками, кабачок и перец — кусками.",
      "Смешайте овощи с чесноком, маслом и солью.",
      "Выложите всё на противень.",
      "Запекайте при 200°C 35–40 минут."
    ],
    "ingredients": [
      {
        "name": "Куриные бёдра",
        "qtyBase": 600,
        "unit": "г",
        "pricePerUnit": 0.32,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Кабачок",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 60,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 20,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Масла",
        "staple": true
      }
    ]
  },
  {
    "id": "bolognese_pasta",
    "name": "Паста болоньезе с домашним фаршем",
    "baseServings": 2,
    "time": 45,
    "steps": [
      "Мелко нарежьте лук, морковь и чеснок.",
      "Обжарьте овощи на масле.",
      "Добавьте фарш из говядины, разбивая комочки.",
      "Влейте томаты, посолите и тушите 25–30 минут.",
      "Отварите пасту и смешайте с соусом. Посыпьте сыром."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Говяжий фарш",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Помидоры в собственном соку",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 20,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 5,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Сыр твёрдый",
        "qtyBase": 40,
        "unit": "г",
        "pricePerUnit": 0.6,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "baked_salmon",
    "name": "Запечённый лосось с лимоном и рисом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Отварите рис.",
      "Лосось посолите, сбрызните лимоном.",
      "Запекайте при 200°C 12–15 минут с укропом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Лосось филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 1.2,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 30,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_pilaf",
    "name": "Плов с курицей",
    "baseServings": 3,
    "time": 60,
    "steps": [
      "Рис промойте и замочите.",
      "Обжарьте курицу с луком и морковью.",
      "Выложите рис, залейте водой, добавьте чеснок.",
      "Томите под крышкой 25–30 минут."
    ],
    "ingredients": [
      {
        "name": "Рис",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Куриные бёдра",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.32,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_stroganoff",
    "name": "Бефстроганов с гречкой",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Отварите гречку.",
      "Нарежьте говядину соломкой и обжарьте.",
      "Добавьте лук и грибы.",
      "Влейте сметану и тушите 10 минут."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Гречка",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.09,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.35,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сметана",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "fish_cutlets",
    "name": "Рыбные котлеты из минтая с пюре",
    "baseServings": 2,
    "time": 45,
    "steps": [
      "Пропустите минтай и лук через мясорубку.",
      "Добавьте яйцо, соль. Сформируйте котлеты.",
      "Обжарьте до корочки.",
      "Сделайте картофельное пюре."
    ],
    "ingredients": [
      {
        "name": "Минтай",
        "qtyBase": 450,
        "unit": "г",
        "pricePerUnit": 0.35,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 450,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Яйцо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_teriyaki",
    "name": "Курица терияки с рисом и овощами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Отварите рис.",
      "Обжарьте курицу.",
      "Добавьте овощи и соевый соус.",
      "Тушите 5 минут."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 40,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      }
    ]
  },
  {
    "id": "stuffed_peppers",
    "name": "Фаршированные перцы",
    "baseServings": 2,
    "time": 55,
    "steps": [
      "Подготовьте перцы.",
      "Смешайте фарш с полуготовым рисом и луком.",
      "Нафаршируйте и тушите в томатах 35–40 минут."
    ],
    "ingredients": [
      {
        "name": "Перец болгарский",
        "qtyBase": 4,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Говядина",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры в собственном соку",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_mushroom_cream",
    "name": "Курица с грибами в сливочном соусе",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте грибы и лук.",
      "Влейте сливки и тушите 10 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.35,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 150,
        "unit": "мл",
        "pricePerUnit": 0.3,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_chops_cabbage",
    "name": "Свиные отбивные с тушёной капустой",
    "baseServings": 2,
    "time": 45,
    "steps": [
      "Отбейте и обжарьте свиные отбивные.",
      "Нашинкуйте капусту, обжарьте с луком и морковью.",
      "Тушите капусту 15–20 минут.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Свиные отбивные",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.42,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Капуста белокочанная",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.03,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "pasta_tomato_garlic",
    "name": "Паста с томатным соусом и чесноком",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Отварите пасту.",
      "Обжарьте чеснок в масле.",
      "Добавьте томаты и тушите 7–10 минут.",
      "Смешайте с пастой и базиликом."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры в собственном соку",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Базилик",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_potato_stew",
    "name": "Тушёная говядина с картофелем",
    "baseServings": 3,
    "time": 70,
    "steps": [
      "Обжарьте говядину.",
      "Добавьте лук, морковь и картофель.",
      "Тушите под крышкой 50–60 минут.",
      "Посолите в конце."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_rice_simple",
    "name": "Курица с рисом и овощами",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Обжарьте курицу с луком.",
      "Добавьте рис и воду.",
      "Тушите до готовности риса.",
      "Можно добавить морковь."
    ],
    "ingredients": [
      {
        "name": "Куриные бёдра",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.32,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_ribs_potato",
    "name": "Свиные рёбрышки с картофелем",
    "baseServings": 2,
    "time": 60,
    "steps": [
      "Обжарьте рёбрышки.",
      "Добавьте картофель и лук.",
      "Тушите под крышкой 40–45 минут."
    ],
    "ingredients": [
      {
        "name": "Свиные рёбрышки",
        "qtyBase": 600,
        "unit": "г",
        "pricePerUnit": 0.38,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "pasta_carbonara",
    "name": "Паста карбонара",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Отварите спагетти.",
      "Обжарьте бекон.",
      "Смешайте яйца с сыром.",
      "Соедините всё вне огня."
    ],
    "ingredients": [
      {
        "name": "Спагетти",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Бекон",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.55,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Яйца",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Сыр твёрдый",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.6,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "turkey_meatballs",
    "name": "Тефтели из индейки с рисом",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Смешайте фарш индейки с луком и яйцом.",
      "Сформируйте тефтели и обжарьте.",
      "Тушите в томатном соусе.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Фарш индейки",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.48,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры в собственном соку",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Яйцо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "shrimp_pasta",
    "name": "Паста с креветками и чесноком",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Отварите пасту.",
      "Обжарьте креветки с чесноком.",
      "Смешайте с пастой и зеленью."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Креветки",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 1.1,
        "aisle": "Морепродукты",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Петрушка",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 30,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_fajitas",
    "name": "Фахитас с курицей",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте курицу с перцем и луком.",
      "Добавьте специи.",
      "Подавайте в тортильях со сметаной."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Тортильи",
        "qtyBase": 4,
        "unit": "шт",
        "pricePerUnit": 18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сметана",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_tacos",
    "name": "Тако с говядиной",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте фарш с луком и специями.",
      "Нагрейте тортильи.",
      "Начините мясом, сыром и салатом."
    ],
    "ingredients": [
      {
        "name": "Говяжий фарш",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.55,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Тортильи",
        "qtyBase": 4,
        "unit": "шт",
        "pricePerUnit": 18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Сыр",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.55,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Салат",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 40,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_wings",
    "name": "Куриные крылышки в медово-соевом соусе",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Смешайте крылышки с соевым соусом и мёдом.",
      "Запекайте при 200°C 30–35 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриные крылышки",
        "qtyBase": 600,
        "unit": "г",
        "pricePerUnit": 0.28,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 40,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      },
      {
        "name": "Мёд",
        "qtyBase": 30,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_schnitzel",
    "name": "Свиной шницель с картофелем",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Отбейте свинину, обваляйте в сухарях.",
      "Обжарьте до золотистой корочки.",
      "Отварите картофель."
    ],
    "ingredients": [
      {
        "name": "Свиная вырезка",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.55,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сухари панировочные",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.2,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Яйцо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "cod_potatoes",
    "name": "Треска с картофелем и зеленью",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Запеките или обжарьте треску с лимоном.",
      "Отварите картофель.",
      "Посыпьте укропом."
    ],
    "ingredients": [
      {
        "name": "Треска",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 30,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_curry",
    "name": "Куриное карри с рисом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Обжарьте курицу с луком.",
      "Добавьте специи и томаты.",
      "Тушите 15 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.2,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "mushroom_pasta",
    "name": "Паста с грибами и сливками",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Отварите пасту.",
      "Обжарьте грибы с чесноком.",
      "Добавьте сливки.",
      "Смешайте с пастой."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.35,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 150,
        "unit": "мл",
        "pricePerUnit": 0.3,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_broccoli",
    "name": "Говядина с брокколи",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте говядину.",
      "Добавьте брокколи.",
      "Полейте соевым соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 30,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      }
    ]
  },
  {
    "id": "pork_apple",
    "name": "Свинина с яблоками",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Обжарьте свинину.",
      "Добавьте яблоки и лук.",
      "Тушите 15–20 минут.",
      "Подавайте с картофелем."
    ],
    "ingredients": [
      {
        "name": "Свиная вырезка",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.55,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Яблоко",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 25,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_potato_bake",
    "name": "Запеканка из курицы и картофеля",
    "baseServings": 3,
    "time": 50,
    "steps": [
      "Нарежьте картофель и курицу.",
      "Выложите слоями.",
      "Запекайте 35–40 минут со сметаной и сыром."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 600,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сыр",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.55,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Сметана",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "lentil_stew",
    "name": "Чечевичное рагу с овощами",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Обжарьте овощи.",
      "Добавьте чечевицу и томаты.",
      "Тушите 25–30 минут."
    ],
    "ingredients": [
      {
        "name": "Чечевица",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.14,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Помидоры в собственном соку",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_caesar",
    "name": "Салат Цезарь с курицей",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Обжарьте курицу.",
      "Нарежьте салат.",
      "Добавьте сухарики и сыр.",
      "Заправьте соусом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Салат романо",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 50,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сыр твёрдый",
        "qtyBase": 40,
        "unit": "г",
        "pricePerUnit": 0.6,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Сухарики",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.3,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_cabbage",
    "name": "Свинина с тушёной капустой",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Обжарьте свинину.",
      "Добавьте капусту и лук.",
      "Тушите 25 минут."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Капуста белокочанная",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.03,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "salmon_dill",
    "name": "Лосось с укропом и картофелем",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Запеките лосось с укропом и лимоном.",
      "Отварите картофель.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Лосось филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 1.2,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 30,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_pepper_rice",
    "name": "Курица с перцем и рисом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу с перцем и луком.",
      "Отварите рис.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_onion",
    "name": "Говядина с луком",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Обжарьте говядину.",
      "Добавьте много лука.",
      "Тушите 25 минут.",
      "Подавайте с картофелем."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 3,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "shrimp_garlic",
    "name": "Креветки в чесночном масле",
    "baseServings": 2,
    "time": 15,
    "steps": [
      "Обжарьте чеснок в масле.",
      "Добавьте креветки на 3–4 минуты.",
      "Посыпьте зеленью."
    ],
    "ingredients": [
      {
        "name": "Креветки",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 1.1,
        "aisle": "Морепродукты",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "головки",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 30,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Масла",
        "staple": true
      },
      {
        "name": "Петрушка",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 30,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_garlic_butter",
    "name": "Курица в чесночном масле",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте чеснок и масло.",
      "Тушите 10 минут.",
      "Подавайте с картофелем."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "головки",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Сливочное масло",
        "qtyBase": 30,
        "unit": "г",
        "pricePerUnit": 0.6,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "veg_fried_rice",
    "name": "Жареный рис с овощами и яйцом",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Отварите и остудите рис.",
      "Обжарьте овощи.",
      "Добавьте рис, яйцо и соевый соус."
    ],
    "ingredients": [
      {
        "name": "Рис",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Горошек",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Яйцо",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 25,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      }
    ]
  },
  {
    "id": "chicken_broccoli_rice",
    "name": "Курица с брокколи и рисом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте брокколи.",
      "Отварите рис и смешайте."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "pork_mushroom",
    "name": "Свинина с грибами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте свинину.",
      "Добавьте грибы и лук.",
      "Тушите 15 минут.",
      "Подавайте с картофелем."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.35,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "fish_tomato",
    "name": "Рыба в томатном соусе",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте рыбу.",
      "Добавьте томаты и чеснок.",
      "Тушите 10 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Белая рыба",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Помидоры в собственном соку",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_soy_ginger",
    "name": "Курица с имбирём и соевым соусом",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте имбирь и чеснок.",
      "Полейте соевым соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Имбирь",
        "qtyBase": 20,
        "unit": "г",
        "pricePerUnit": 0.3,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Соевый соус",
        "qtyBase": 30,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_potato_simple",
    "name": "Говядина с картофелем",
    "baseServings": 2,
    "time": 45,
    "steps": [
      "Обжарьте говядину.",
      "Добавьте картофель и лук.",
      "Тушите под крышкой 30 минут."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_simple_rice",
    "name": "Простая курица с рисом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу с луком.",
      "Отварите рис.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_simple",
    "name": "Простая свинина с картофелем",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Обжарьте свинину.",
      "Отварите картофель.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "fish_simple",
    "name": "Простая рыба с картофелем",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Запеките или обжарьте рыбу с лимоном.",
      "Отварите картофель.",
      "Посыпьте укропом."
    ],
    "ingredients": [
      {
        "name": "Белая рыба",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 30,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_simple",
    "name": "Простая говядина с рисом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте говядину с луком.",
      "Отварите рис.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_veg_stir",
    "name": "Курица с овощами стир-фрай",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте овощи.",
      "Полейте соевым соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pasta_alfredo",
    "name": "Паста альфредо с курицей",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Отварите пасту.",
      "Обжарьте курицу.",
      "Приготовьте сливочный соус.",
      "Смешайте всё."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Куриное филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 150,
        "unit": "мл",
        "pricePerUnit": 0.3,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Сыр твёрдый",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.6,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "turkey_veg",
    "name": "Индейка с овощами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте индейку.",
      "Добавьте овощи.",
      "Тушите 15 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Филе индейки",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Кабачок",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 60,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_honey",
    "name": "Свинина в медовом соусе",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Обжарьте свинину.",
      "Добавьте мёд и соевый соус.",
      "Тушите 15 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Свиная вырезка",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.55,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Мёд",
        "qtyBase": 30,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 25,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      }
    ]
  },
  {
    "id": "chicken_tomato_basil",
    "name": "Курица с томатами и базиликом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте томаты и чеснок.",
      "Тушите 10 минут.",
      "Добавьте базилик."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.2,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Базилик",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Паста",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_garlic",
    "name": "Говядина с чесноком",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Нарежьте говядину тонко.",
      "Обжарьте с чесноком.",
      "Полейте соевым соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "головки",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 25,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      }
    ]
  },
  {
    "id": "chicken_spinach",
    "name": "Курица со шпинатом",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте шпинат и сливки.",
      "Тушите 5 минут.",
      "Подавайте с пастой."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Шпинат",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 100,
        "unit": "мл",
        "pricePerUnit": 0.3,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Паста",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_ginger",
    "name": "Свинина с имбирём",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте свинину с имбирём.",
      "Добавьте овощи.",
      "Полейте соевым соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Имбирь",
        "qtyBase": 20,
        "unit": "г",
        "pricePerUnit": 0.3,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "cod_lemon",
    "name": "Треска с лимоном",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Запеките треску с лимоном и травами.",
      "Подавайте с картофелем."
    ],
    "ingredients": [
      {
        "name": "Треска",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 30,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_cashew",
    "name": "Курица с кешью",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте овощи и кешью.",
      "Полейте соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Кешью",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_soy",
    "name": "Свинина в соевом соусе",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте свинину.",
      "Добавьте соевый соус и чеснок.",
      "Тушите 15 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 40,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "chicken_lemon",
    "name": "Курица в лимонном соусе",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте лимонный сок и чеснок.",
      "Тушите 10 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "shrimp_rice",
    "name": "Креветки с рисом",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Отварите рис.",
      "Обжарьте креветки с чесноком.",
      "Смешайте или подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Креветки",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 1.1,
        "aisle": "Морепродукты",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_potato_simple",
    "name": "Курица с картофелем просто",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Нарежьте курицу и картофель.",
      "Посолите и запеките.",
      "Добавьте чеснок."
    ],
    "ingredients": [
      {
        "name": "Куриные бёдра",
        "qtyBase": 450,
        "unit": "г",
        "pricePerUnit": 0.32,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_veg_simple",
    "name": "Говядина с овощами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте говядину.",
      "Добавьте овощи.",
      "Тушите 15 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "shrimp_veg",
    "name": "Креветки с овощами",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Обжарьте креветки.",
      "Добавьте овощи.",
      "Полейте соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Креветки",
        "qtyBase": 280,
        "unit": "г",
        "pricePerUnit": 1.1,
        "aisle": "Морепродукты",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_onion",
    "name": "Курица с луком",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте лук.",
      "Тушите 15 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_potato",
    "name": "Свинина с картофелем",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Обжарьте свинину.",
      "Добавьте картофель и лук.",
      "Тушите под крышкой 25 минут."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "fish_rice",
    "name": "Рыба с рисом",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Отварите рис.",
      "Обжарьте или запеките рыбу.",
      "Подавайте вместе с лимоном."
    ],
    "ingredients": [
      {
        "name": "Белая рыба",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_feta",
    "name": "Курица с фетой и овощами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте овощи.",
      "В конце добавьте фету."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Сыр фета",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.7,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.2,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Огурцы",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 20,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_pepper",
    "name": "Говядина с перцем",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте говядину.",
      "Добавьте перец и лук.",
      "Полейте соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_sweet_potato",
    "name": "Курица с бататом",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Нарежьте батат и курицу.",
      "Запекайте вместе при 200°C.",
      "Посолите и добавьте специи."
    ],
    "ingredients": [
      {
        "name": "Куриные бёдра",
        "qtyBase": 450,
        "unit": "г",
        "pricePerUnit": 0.32,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Батат",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "pork_cutlets_mushroom",
    "name": "Свиные котлеты с грибным соусом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Обжарьте котлеты из свинины.",
      "Отдельно обжарьте грибы.",
      "Сделайте соус из грибов и сливок.",
      "Подавайте с пюре."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.42,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.35,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 100,
        "unit": "мл",
        "pricePerUnit": 0.3,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_rice_bowl",
    "name": "Боул с курицей и овощами",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Отварите рис.",
      "Обжарьте курицу.",
      "Нарежьте овощи.",
      "Соберите боул."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Авокадо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 80,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Огурец",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 20,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "salmon_teriyaki",
    "name": "Лосось терияки",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Обжарьте или запеките лосось.",
      "Полейте соусом терияки.",
      "Подавайте с рисом и овощами."
    ],
    "ingredients": [
      {
        "name": "Лосось филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 1.2,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Соус терияки",
        "qtyBase": 40,
        "unit": "мл",
        "pricePerUnit": 0.4,
        "aisle": "Соусы",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_noodles",
    "name": "Говядина с лапшой",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте говядину с овощами.",
      "Отварите лапшу.",
      "Смешайте с соусом."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Лапша яичная",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.15,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 30,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      }
    ]
  },
  {
    "id": "chicken_skewers",
    "name": "Куриные шашлычки с овощами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Нарежьте курицу и овощи.",
      "Нанижите на шпажки.",
      "Обжарьте или запеките.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_veg",
    "name": "Свинина с овощами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте свинину.",
      "Добавьте овощи.",
      "Тушите 15 минут.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Кабачок",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 60,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "fish_herb",
    "name": "Рыба с травами",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Посолите рыбу и посыпьте травами.",
      "Запеките или обжарьте.",
      "Подавайте с лимоном и овощами."
    ],
    "ingredients": [
      {
        "name": "Белая рыба",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 30,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_tomato_rice",
    "name": "Курица с томатами и рисом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте томаты.",
      "Отварите рис.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.2,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "shrimp_garlic_lemon_rice",
    "name": "Креветки с чесноком и рисом",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Отварите рис.",
      "Обжарьте креветки с чесноком.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Креветки",
        "qtyBase": 280,
        "unit": "г",
        "pricePerUnit": 1.1,
        "aisle": "Морепродукты",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_soy_rice",
    "name": "Говядина в соевом соусе с рисом",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте говядину.",
      "Добавьте соевый соус и чеснок.",
      "Отварите рис.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 30,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "chicken_mushroom_rice",
    "name": "Курица с грибами и рисом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте грибы.",
      "Отварите рис.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.35,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_garlic_rice",
    "name": "Свинина с чесноком и рисом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте свинину с чесноком.",
      "Отварите рис.",
      "Полейте соевым соусом."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "головки",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Соевый соус",
        "qtyBase": 25,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      }
    ]
  },
  {
    "id": "fish_potato_herb",
    "name": "Рыба с картофелем и травами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Запеките картофель.",
      "Запеките рыбу с травами.",
      "Подавайте вместе."
    ],
    "ingredients": [
      {
        "name": "Белая рыба",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 450,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 30,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_broccoli_cheese",
    "name": "Курица с брокколи и сыром",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Обжарьте курицу.",
      "Отварите брокколи.",
      "Залейте сырным соусом и запеките."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сыр",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.55,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 100,
        "unit": "мл",
        "pricePerUnit": 0.3,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_mushroom_pie",
    "name": "Говядина с грибами под крышкой",
    "baseServings": 3,
    "time": 50,
    "steps": [
      "Обжарьте говядину и грибы.",
      "Выложите в форму.",
      "Накройте картофелем или тестом.",
      "Запекайте 25 минут."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.35,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_pesto_pasta",
    "name": "Курица с пастой и песто",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Отварите пасту.",
      "Обжарьте курицу.",
      "Смешайте с песто.",
      "Посыпьте сыром."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Паста",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Песто",
        "qtyBase": 80,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Соусы",
        "staple": false
      },
      {
        "name": "Помидоры черри",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_belly",
    "name": "Свиная грудинка с овощами",
    "baseServings": 2,
    "time": 50,
    "steps": [
      "Нарежьте грудинку и обжарьте.",
      "Добавьте овощи.",
      "Тушите под крышкой 30 минут."
    ],
    "ingredients": [
      {
        "name": "Свиная грудинка",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Капуста",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.03,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_satay",
    "name": "Курица сатай с арахисовым соусом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Нарежьте курицу и обжарьте.",
      "Приготовьте арахисовый соус.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Арахисовая паста",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 20,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Соусы",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_kebab",
    "name": "Говяжий кебаб с овощами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Нарежьте говядину и замаринуйте.",
      "Нанижите на шпажки с овощами.",
      "Обжарьте или запеките.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_quinoa",
    "name": "Курица с киноа и овощами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Отварите киноа.",
      "Обжарьте курицу.",
      "Добавьте овощи.",
      "Смешайте всё."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Киноа",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.35,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Кабачок",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 60,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "salmon_avocado",
    "name": "Лосось с авокадо и рисом",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Запеките или обжарьте лосось.",
      "Отварите рис.",
      "Нарежьте авокадо.",
      "Соберите боул."
    ],
    "ingredients": [
      {
        "name": "Лосось филе",
        "qtyBase": 280,
        "unit": "г",
        "pricePerUnit": 1.2,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Авокадо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 80,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Огурец",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 20,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_avocado_salad",
    "name": "Салат с курицей и авокадо",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Обжарьте курицу.",
      "Нарежьте овощи и авокадо.",
      "Смешайте всё.",
      "Заправьте маслом и лимоном."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Авокадо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 80,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Салат",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 40,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Помидоры черри",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_pepper_stir",
    "name": "Свинина с перцем стир-фрай",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте свинину.",
      "Добавьте перец и лук.",
      "Полейте соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "turkey_stirfry",
    "name": "Стир-фрай с индейкой",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Нарежьте индейку и обжарьте.",
      "Добавьте овощи.",
      "Полейте соевым соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Филе индейки",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_enchiladas",
    "name": "Энчиладас с курицей",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Обжарьте курицу с луком.",
      "Заверните в тортильи.",
      "Залейте соусом и сыром.",
      "Запекайте 15–20 минут."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Тортильи",
        "qtyBase": 4,
        "unit": "шт",
        "pricePerUnit": 18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры в собственном соку",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Сыр",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.55,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "beef_stew",
    "name": "Тушёная говядина с овощами",
    "baseServings": 3,
    "time": 90,
    "steps": [
      "Обжарьте говядину.",
      "Добавьте овощи и томаты.",
      "Тушите на медленном огне 1–1.5 часа."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_parmesan",
    "name": "Курица пармезан с пастой",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Обваляйте курицу в сухарях и обжарьте.",
      "Положите сверху томатный соус и сыр.",
      "Запекайте 10 минут.",
      "Подавайте с пастой."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Паста",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры в собственном соку",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Сыр моцарелла",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.6,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "baked_cod",
    "name": "Запечённая треска с лимоном",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Посолите треску.",
      "Сбрызните лимоном и маслом.",
      "Запекайте при 190°C 15–18 минут.",
      "Подавайте с овощами."
    ],
    "ingredients": [
      {
        "name": "Треска",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 35,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 15,
        "unit": "мл",
        "pricePerUnit": 0,
        "aisle": "Масла",
        "staple": true
      }
    ]
  },
  {
    "id": "chicken_tikka",
    "name": "Курица тикка масала",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Замаринуйте курицу в йогурте со специями.",
      "Обжарьте курицу.",
      "Тушите в томатно-сливочном соусе.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Йогурт",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.2,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.2,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 100,
        "unit": "мл",
        "pricePerUnit": 0.3,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "pasta_arrabbiata",
    "name": "Паста аррабьята",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Отварите пасту.",
      "Обжарьте чеснок и чили.",
      "Добавьте томаты и тушите.",
      "Смешайте с пастой."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры в собственном соку",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Перец чили",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 15,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_potatoes_rosemary",
    "name": "Курица с картофелем и розмарином",
    "baseServings": 2,
    "time": 45,
    "steps": [
      "Нарежьте картофель и курицу.",
      "Посолите, добавьте розмарин и масло.",
      "Запекайте при 200°C 35 минут."
    ],
    "ingredients": [
      {
        "name": "Куриные бёдра",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.32,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.04,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Розмарин",
        "qtyBase": 1,
        "unit": "веточка",
        "pricePerUnit": 20,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "головка",
        "pricePerUnit": 25,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_rice_bowl",
    "name": "Боул с говядиной",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Отварите рис.",
      "Обжарьте говядину.",
      "Добавьте овощи.",
      "Соберите боул."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.25,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.05,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "shrimp_avocado_salad",
    "name": "Салат с креветками и авокадо",
    "baseServings": 2,
    "time": 15,
    "steps": [
      "Обжарьте креветки.",
      "Нарежьте авокадо и овощи.",
      "Смешайте всё.",
      "Заправьте лимоном."
    ],
    "ingredients": [
      {
        "name": "Креветки",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 1.1,
        "aisle": "Морепродукты",
        "staple": false
      },
      {
        "name": "Авокадо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 80,
        "aisle": "Фрукты",
        "staple": false
      },
      {
        "name": "Салат",
        "qtyBase": 1,
        "unit": "пучок",
        "pricePerUnit": 40,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Помидоры черри",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_cashew_rice",
    "name": "Курица с кешью и рисом",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте курицу.",
      "Добавьте овощи и кешью.",
      "Полейте соусом.",
      "Подавайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Кешью",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 45,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.08,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  }
];

// Дополнительные домашние блюда и рецепты по мотивам современных наборов ужинов.
window.SALPCOOK_RECIPES.push(...[
  {
    "id": "chicken_gremolata_potatoes",
    "name": "Курица с лимонной гремолатой и картофелем",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Петрушку, чеснок и цедру лимона мелко нарубите и смешайте с маслом.",
      "Курицу посолите, обжарьте до готовности и сбрызните лимонным соком.",
      "Картофель запеките дольками до золотистого цвета и подайте с ароматной зеленью."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Петрушка",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 20,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "turkey_mustard_batata",
    "name": "Индейка в горчично-медовом соусе с бататом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Батат нарежьте дольками, перемешайте с маслом и запеките при 200 °C около 25 минут.",
      "Смешайте горчицу, мёд и немного лимонного сока.",
      "Обжарьте индейку до готовности, добавьте соус и прогрейте пару минут."
    ],
    "ingredients": [
      {
        "name": "Филе индейки",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Батат",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Дижонская горчица",
        "qtyBase": 20,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Мёд",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 20,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "chicken_mozzarella_basil",
    "name": "Курица с моцареллой, базиликом и томатами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Курицу посолите, поперчите и обжарьте с двух сторон.",
      "Добавьте нарезанные помидоры и чеснок, готовьте до мягкости.",
      "Положите сверху моцареллу и базилик, накройте до расплавления сыра."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Моцарелла",
        "qtyBase": 125,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Базилик",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 15,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "pork_apple_mustard",
    "name": "Свинина с яблоком и горчичным соусом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Свинину нарежьте медальонами и быстро обжарьте.",
      "Добавьте лук и яблоко тонкими ломтиками, слегка подрумяньте.",
      "Влейте сливки с горчицей и тушите до готовности мяса."
    ],
    "ingredients": [
      {
        "name": "Свиная вырезка",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Яблоко",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Дижонская горчица",
        "qtyBase": 20,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 150,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Растительное масло",
        "qtyBase": 15,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_ginger_rice",
    "name": "Говядина в имбирном соусе с рисом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Рис отварите до готовности.",
      "Говядину нарежьте тонкими полосками и обжарьте на сильном огне.",
      "Добавьте морковь, имбирь и чеснок, влейте соевый соус и немного воды, быстро потушите."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 35,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Имбирь",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Растительное масло",
        "qtyBase": 15,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_bulgur_pumpkin",
    "name": "Говядина с булгуром и тыквой",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Булгур отварите по инструкции.",
      "Говядину нарежьте небольшими кусочками и обжарьте с луком.",
      "Добавьте тыкву и паприку, немного воды и тушите до мягкости; подавайте с булгуром."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Булгур",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Тыква",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Паприка",
        "qtyBase": 5,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      },
      {
        "name": "Растительное масло",
        "qtyBase": 15,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "turkey_coconut_curry",
    "name": "Курица в кокосовом карри с рисом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Рис отварите отдельно.",
      "Курицу и перец нарежьте и обжарьте до лёгкой корочки.",
      "Добавьте пасту карри и кокосовое молоко, тушите 10–12 минут; подавайте с рисом и лаймом."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Кокосовое молоко",
        "qtyBase": 250,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Паста карри",
        "qtyBase": 20,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Лайм",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "cod_cream_couscous",
    "name": "Треска в сливочном соусе с кускусом",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Кускус залейте кипятком по инструкции и накройте.",
      "Треску приправьте и обжарьте или запеките до готовности.",
      "Прогрейте сливки с чесноком, лимонной цедрой и укропом, подайте к рыбе."
    ],
    "ingredients": [
      {
        "name": "Филе трески",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Кускус",
        "qtyBase": 160,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 150,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 1,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "salmon_dill_potatoes",
    "name": "Лосось с укропным соусом и картофелем",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Картофель отварите или запеките.",
      "Лосось посолите, сбрызните лимоном и запеките до готовности.",
      "Смешайте сметану с рубленым укропом и подайте как соус."
    ],
    "ingredients": [
      {
        "name": "Филе лосося",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сметана",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "shrimp_soba_vegetables",
    "name": "Гречневая лапша с креветками и овощами",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Лапшу приготовьте по инструкции.",
      "На горячей сковороде быстро обжарьте креветки, морковь и перец.",
      "Добавьте лапшу, соевый соус и кунжут, перемешайте и прогрейте."
    ],
    "ingredients": [
      {
        "name": "Креветки",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Гречневая лапша",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Соевый соус",
        "qtyBase": 30,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Кунжут",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "mussels_cream_baguette",
    "name": "Мидии в сливочном соусе с багетом",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Чеснок слегка прогрейте в глубокой сковороде.",
      "Добавьте мидии и сливки, готовьте до полного прогрева и раскрытия раковин, если они свежие.",
      "Посыпьте петрушкой, сбрызните лимоном и подайте с багетом."
    ],
    "ingredients": [
      {
        "name": "Мидии",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 180,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Петрушка",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Багет",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_texmex_rice",
    "name": "Курица по-текс-мекс с рисом и фасолью",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Рис отварите.",
      "Курицу нарежьте, смешайте с паприкой и обжарьте до готовности.",
      "Добавьте фасоль, кукурузу и томаты, тушите 10 минут и подайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Куриные бёдра",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Фасоль консервированная",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      },
      {
        "name": "Кукуруза консервированная",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Томаты в собственном соку",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Паприка",
        "qtyBase": 5,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "meatballs_tomato_orzo",
    "name": "Фрикадельки в томатном соусе с орзо",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Сформируйте небольшие фрикадельки из фарша с солью и перцем.",
      "Обжарьте лук и чеснок, добавьте томаты и немного воды.",
      "Положите фрикадельки и орзо, тушите до готовности пасты, при необходимости подливая воду; подавайте с пармезаном."
    ],
    "ingredients": [
      {
        "name": "Говяжий фарш",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Паста орзо",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Томаты в собственном соку",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Пармезан",
        "qtyBase": 30,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "baked_meat_potato_cheese",
    "name": "Картофельная запеканка с мясным фаршем и сырным соусом",
    "baseServings": 2,
    "time": 55,
    "steps": [
      "Картофель нарежьте тонкими ломтиками и слегка отварите.",
      "Обжарьте фарш с луком до изменения цвета.",
      "Сделайте простой соус из масла, муки, молока и сыра; выложите картофель и фарш слоями, залейте соусом и запекайте до мягкости."
    ],
    "ingredients": [
      {
        "name": "Говяжий фарш",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 700,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Молоко",
        "qtyBase": 200,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Сыр твёрдый",
        "qtyBase": 120,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Мука",
        "qtyBase": 20,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "greek_moussaka_easy",
    "name": "Домашняя мусака с баклажаном и картофелем",
    "baseServings": 2,
    "time": 60,
    "steps": [
      "Картофель и баклажан нарежьте кружками и слегка запеките.",
      "Обжарьте фарш с луком и томатами, приправьте орегано.",
      "Выложите овощи и мясной соус слоями, сверху добавьте йогурт с сыром и запекайте до румяной корочки."
    ],
    "ingredients": [
      {
        "name": "Говяжий фарш",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Баклажан",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Томаты в собственном соку",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Йогурт натуральный",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Сыр твёрдый",
        "qtyBase": 80,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_cutlets_bulgur",
    "name": "Куриные котлеты с булгуром и огуречным салатом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Смешайте куриный фарш с яйцом, сухарями, солью и перцем, сформируйте котлеты.",
      "Обжарьте котлеты до золотистой корочки и доведите до готовности под крышкой.",
      "Булгур отварите; огурец нарежьте и смешайте с йогуртом и зеленью."
    ],
    "ingredients": [
      {
        "name": "Куриный фарш",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Яйцо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Панировочные сухари",
        "qtyBase": 30,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Булгур",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Огурцы",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Йогурт натуральный",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_rolls_bacon",
    "name": "Свиные рулетики с беконом и хреновым соусом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Свинину нарежьте тонкими пластинами, слегка отбейте и сверните рулетиками.",
      "Обверните рулетики беконом и обжарьте, затем доведите до готовности под крышкой.",
      "Смешайте сметану с хреном и подайте к мясу с отварным картофелем."
    ],
    "ingredients": [
      {
        "name": "Свиная вырезка",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Бекон",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Сметана",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Хрен столовый",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Растительное масло",
        "qtyBase": 15,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_stew_mushrooms",
    "name": "Тушёная говядина с грибами и пюре",
    "baseServings": 2,
    "time": 70,
    "steps": [
      "Говядину нарежьте кубиками и обжарьте порциями.",
      "Добавьте лук, морковь, грибы и воду; тушите под крышкой до мягкости мяса.",
      "Картофель отварите и разомните с молоком, подайте с тушёной говядиной."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 450,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 600,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Молоко",
        "qtyBase": 120,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_buckwheat_mushrooms",
    "name": "Свинина с гречкой и грибами",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Гречку отварите.",
      "Свинину нарежьте небольшими кусочками и обжарьте с луком.",
      "Добавьте грибы, доведите до готовности, в конце вмешайте сметану и подайте с гречкой."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Гречка",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сметана",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_paprikash",
    "name": "Куриный паприкаш с рисом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Рис отварите.",
      "Курицу обжарьте с луком и паприкой, добавьте перец и немного воды.",
      "Тушите до готовности, в конце добавьте сметану и прогрейте без сильного кипения."
    ],
    "ingredients": [
      {
        "name": "Куриные бёдра",
        "qtyBase": 450,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сметана",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Паприка",
        "qtyBase": 6,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "shakshuka_feta",
    "name": "Шакшука с фетой и зеленью",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Обжарьте лук и перец до мягкости.",
      "Добавьте помидоры, приправьте паприкой и тушите до густого соуса.",
      "Сделайте углубления, вбейте яйца, накройте и готовьте до желаемой степени; раскрошите фету и посыпьте зеленью."
    ],
    "ingredients": [
      {
        "name": "Яйцо",
        "qtyBase": 4,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Фета",
        "qtyBase": 80,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Петрушка",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "frittata_potato_spinach",
    "name": "Фриттата с картофелем и шпинатом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Картофель нарежьте небольшими кубиками и обжарьте до мягкости.",
      "Взбейте яйца с молоком, добавьте шпинат и тёртый сыр.",
      "Залейте картофель яичной смесью и готовьте на слабом огне под крышкой или доведите в духовке."
    ],
    "ingredients": [
      {
        "name": "Яйцо",
        "qtyBase": 5,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Шпинат",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сыр твёрдый",
        "qtyBase": 70,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Молоко",
        "qtyBase": 50,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "lentil_tomato_soup",
    "name": "Чечевичный суп с томатами",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Лук и морковь нарежьте и обжарьте в кастрюле с небольшим количеством масла.",
      "Добавьте чеснок, чечевицу, томаты и бульон.",
      "Варите 20–25 минут до мягкости чечевицы, приправьте и подавайте."
    ],
    "ingredients": [
      {
        "name": "Чечевица красная",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Томаты в собственном соку",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Овощной бульон",
        "qtyBase": 900,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_noodle_soup",
    "name": "Куриный суп с лапшой и овощами",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Курицу залейте водой и сварите бульон, снимая пену.",
      "Добавьте картофель, морковь и лук, варите до мягкости овощей.",
      "Положите лапшу и варите до готовности, в конце добавьте укроп."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.45,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Лапша яичная",
        "qtyBase": 120,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Укроп",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "tomato_basil_pasta",
    "name": "Паста с томатами, базиликом и моцареллой",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Пасту сварите до состояния аль денте, оставив немного воды от варки.",
      "Чеснок прогрейте в оливковом масле, добавьте черри и готовьте, пока они не лопнут.",
      "Смешайте с пастой, добавьте моцареллу и базилик, при необходимости влейте немного воды от пасты."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 220,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры черри",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Моцарелла",
        "qtyBase": 125,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Базилик",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 20,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "tuna_pasta_peas",
    "name": "Паста с тунцом и зелёным горошком",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Пасту сварите и сохраните немного воды от варки.",
      "Прогрейте тунец с горошком и сливками, добавьте цедру лимона.",
      "Смешайте с пастой, доведите соус до нужной густоты водой от варки."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 220,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Тунец консервированный",
        "qtyBase": 160,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Горошек зелёный",
        "qtyBase": 120,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 100,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "baked_feta_chickpeas",
    "name": "Запечённый нут с томатами и фетой",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Нут обсушите, смешайте с черри, чесноком и маслом.",
      "Сверху положите фету и запекайте при 200 °C около 20 минут.",
      "Разомните часть феты с соком овощей, перемешайте и посыпьте петрушкой."
    ],
    "ingredients": [
      {
        "name": "Нут консервированный",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры черри",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Фета",
        "qtyBase": 120,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 20,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      },
      {
        "name": "Петрушка",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "stuffed_peppers_rice",
    "name": "Фаршированные перцы с рисом и мясом",
    "baseServings": 2,
    "time": 60,
    "steps": [
      "Рис отварите до полуготовности, смешайте с фаршем и мелко нарезанным луком.",
      "Перцы очистите от семян и наполните начинкой.",
      "Поставьте в кастрюлю или форму, добавьте морковь, томаты и немного воды; тушите или запекайте до готовности."
    ],
    "ingredients": [
      {
        "name": "Перец болгарский",
        "qtyBase": 4,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Говяжий фарш",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Томаты в собственном соку",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "oven_sausage_vegetables",
    "name": "Колбаски с овощами на одном противне",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Овощи нарежьте крупными кусочками и перемешайте с маслом и приправами.",
      "Разложите овощи и колбаски на противне одним слоем.",
      "Запекайте при 200 °C около 30 минут, один раз перевернув ингредиенты."
    ],
    "ingredients": [
      {
        "name": "Колбаски для жарки",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Кабачок",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Красный лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 20,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_chili_con_carne",
    "name": "Чили кон карне с рисом",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Обжарьте фарш с луком и перцем, разбивая комочки.",
      "Добавьте томаты, фасоль, паприку и немного чили, тушите 20 минут.",
      "Рис отварите и подайте вместе с густым мясным соусом."
    ],
    "ingredients": [
      {
        "name": "Говяжий фарш",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Фасоль консервированная",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      },
      {
        "name": "Томаты в собственном соку",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "couscous_roasted_veg_halloumi",
    "name": "Кускус с запечёнными овощами и халуми",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Кускус залейте кипятком и дайте набухнуть.",
      "Овощи нарежьте и запеките с маслом и специями до золотистого цвета.",
      "Халуми нарежьте ломтиками и обжарьте на сухой сковороде, подайте с кускусом и лимоном."
    ],
    "ingredients": [
      {
        "name": "Кускус",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Сыр халуми",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Кабачок",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Красный лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "potato_pancakes_sourcream",
    "name": "Драники со сметаной и зелёным луком",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Картофель и лук натрите, слегка отожмите лишнюю жидкость.",
      "Смешайте с яйцом, мукой, солью и перцем.",
      "Жарьте небольшие драники на среднем огне до румяной корочки с обеих сторон; подавайте со сметаной и зелёным луком."
    ],
    "ingredients": [
      {
        "name": "Картофель",
        "qtyBase": 700,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Яйцо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Мука",
        "qtyBase": 30,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сметана",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Зелёный лук",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "creamy_mushroom_risotto",
    "name": "Ризотто с грибами и пармезаном",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Грибы обжарьте отдельно до румяности.",
      "Лук мягко обжарьте на сливочном масле, добавьте рис и перемешайте.",
      "Постепенно вливайте горячий бульон, помешивая, пока рис не станет кремовым; вмешайте грибы и пармезан."
    ],
    "ingredients": [
      {
        "name": "Рис для ризотто",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Пармезан",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Сливочное масло",
        "qtyBase": 30,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      },
      {
        "name": "Овощной бульон",
        "qtyBase": 800,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "honey_soy_salmon_broccoli",
    "name": "Лосось в медово-соевом соусе с брокколи",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Рис отварите, брокколи приготовьте на пару или отварите до яркого цвета.",
      "Смешайте соевый соус, мёд и измельчённый чеснок.",
      "Смажьте лосось соусом и запеките 12–15 минут при 200 °C, подавайте с овощами и рисом."
    ],
    "ingredients": [
      {
        "name": "Филе лосося",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.8,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 30,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Мёд",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.12,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "pork_schnitzel_cucumber_salad",
    "name": "Свиная отбивная в хрустящей панировке с салатом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Отбивные слегка отбейте, посолите и поперчите.",
      "Обмакните в яйцо и сухари, обжарьте до золотистой корочки и полной готовности.",
      "Картофель отварите; огурцы нарежьте и заправьте сметаной с зеленью."
    ],
    "ingredients": [
      {
        "name": "Свиная отбивная",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.5,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Яйцо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 12,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Панировочные сухари",
        "qtyBase": 60,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Огурцы",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сметана",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  }
]);


// Ещё одна подборка повседневных блюд: азиатские, средиземноморские и домашние ужины.
window.SALPCOOK_RECIPES.push(...[
  {
    "id": "chicken_teriyaki_noodles",
    "name": "Курица терияки с лапшой и овощами",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Лапшу приготовьте по инструкции.",
      "Курицу нарежьте полосками и обжарьте до готовности.",
      "Добавьте морковь, перец и соус терияки, прогрейте и смешайте с лапшой."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Лапша яичная",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Соус терияки",
        "qtyBase": 50,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_medallions_mushrooms",
    "name": "Свиные медальоны с грибным соусом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Медальоны посолите и обжарьте с двух сторон.",
      "Грибы и лук обжарьте до мягкости.",
      "Добавьте сливки, верните мясо в соус и доведите до готовности."
    ],
    "ingredients": [
      {
        "name": "Свиная вырезка",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 180,
        "unit": "мл",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Горчица",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "salmon_lemon_orzo",
    "name": "Лосось с лимоном и орзо",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Орзо отварите до аль денте.",
      "Лосось приправьте, запеките 12–15 минут при 200 °C.",
      "Смешайте орзо с лимонным соком, шпинатом и небольшим количеством масла, подайте с рыбой."
    ],
    "ingredients": [
      {
        "name": "Филе лосося",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Паста орзо",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Шпинат",
        "qtyBase": 80,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Оливковое масло",
        "qtyBase": 15,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": true
      }
    ]
  },
  {
    "id": "turkey_meatballs_couscous",
    "name": "Фрикадельки из индейки с кускусом",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Смешайте фарш с яйцом, частью лука и специями, сформируйте фрикадельки.",
      "Обжарьте фрикадельки до румяности и доведите под крышкой.",
      "Кускус залейте кипятком, подайте с фрикадельками и йогуртовым соусом."
    ],
    "ingredients": [
      {
        "name": "Фарш из индейки",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Кускус",
        "qtyBase": 160,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Яйцо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Йогурт натуральный",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_tacos_avocado",
    "name": "Тако с говядиной и авокадо",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Фарш обжарьте с паприкой, кумином и луком.",
      "Авокадо разомните с соком лайма.",
      "Наполните тортильи фаршем, салатом, томатами и авокадо."
    ],
    "ingredients": [
      {
        "name": "Говяжий фарш",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Тортильи",
        "qtyBase": 4,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Авокадо",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Салат романо",
        "qtyBase": 80,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лайм",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "creamy_chicken_spinach_pasta",
    "name": "Сливочная паста с курицей и шпинатом",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Пасту отварите, сохранив немного воды.",
      "Курицу обжарьте кусочками до готовности.",
      "Добавьте сливки и шпинат, затем пасту и пармезан; отрегулируйте густоту водой от варки."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 220,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Куриное филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Шпинат",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 150,
        "unit": "мл",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Пармезан",
        "qtyBase": 40,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "cod_tomato_olive_couscous",
    "name": "Треска с томатами и оливками",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Кускус приготовьте по инструкции.",
      "Томаты черри разрежьте, прогрейте с чесноком и оливками.",
      "Добавьте треску и тушите под крышкой до готовности, подайте с кускусом."
    ],
    "ingredients": [
      {
        "name": "Филе трески",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Кускус",
        "qtyBase": 160,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры черри",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Оливки",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "sausage_lentil_stew",
    "name": "Чечевица с копчёными колбасками",
    "baseServings": 2,
    "time": 40,
    "steps": [
      "Лук и морковь обжарьте в кастрюле.",
      "Добавьте чечевицу, томаты и воду или бульон, варите до мягкости.",
      "Колбаски нарежьте, добавьте в конце и прогрейте."
    ],
    "ingredients": [
      {
        "name": "Чечевица зелёная",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Колбаски копчёные",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Томаты в собственном соку",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "eggplant_parmesan",
    "name": "Баклажаны пармиджано",
    "baseServings": 2,
    "time": 45,
    "steps": [
      "Баклажаны нарежьте ломтиками, посолите и запеките до мягкости.",
      "В форму выложите томатный соус, баклажаны и моцареллу слоями.",
      "Посыпьте пармезаном и запекайте до золотистой корочки."
    ],
    "ingredients": [
      {
        "name": "Баклажан",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Моцарелла",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Пармезан",
        "qtyBase": 40,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Пассата томатная",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Базилик",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "shrimp_garlic_lime_rice",
    "name": "Креветки с чесноком и рисом",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Рис отварите до готовности.",
      "Креветки обсушите и быстро обжарьте с чесноком.",
      "Добавьте лимонный сок и петрушку, подайте с рисом."
    ],
    "ingredients": [
      {
        "name": "Креветки очищенные",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 3,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Лимон",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Петрушка",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_fajita_bowl",
    "name": "Боул с курицей фахита",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Рис отварите.",
      "Курицу, перец и лук нарежьте полосками, обжарьте с приправой фахита.",
      "Разложите рис, курицу и овощи по мискам, добавьте кукурузу и йогурт."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Перец болгарский",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Красный лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Кукуруза консервированная",
        "qtyBase": 100,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Йогурт натуральный",
        "qtyBase": 80,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "pork_rice_ginger_bowl",
    "name": "Свинина с рисом и кунжутом",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Рис поставьте вариться.",
      "Свинину тонко нарежьте и обжарьте на сильном огне.",
      "Добавьте имбирь, соевый соус и мёд, подавайте с рисом и огурцом."
    ],
    "ingredients": [
      {
        "name": "Свинина",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Рис",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Огурцы",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 30,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Имбирь",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Кунжут",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      }
    ]
  },
  {
    "id": "pumpkin_sage_pasta",
    "name": "Паста с тыквой и шалфеем",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "Тыкву нарежьте кубиками и запеките или обжарьте до мягкости.",
      "Пасту отварите.",
      "Смешайте пасту с тыквой, сливочным маслом, шалфеем и пармезаном."
    ],
    "ingredients": [
      {
        "name": "Паста",
        "qtyBase": 220,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Тыква",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливочное масло",
        "qtyBase": 30,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Шалфей",
        "qtyBase": 5,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Пармезан",
        "qtyBase": 40,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "chickpea_coconut_curry",
    "name": "Нут в кокосовом карри",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Лук обжарьте с пастой карри.",
      "Добавьте нут и кокосовое молоко, тушите 12–15 минут.",
      "Подавайте с рисом и соком лайма."
    ],
    "ingredients": [
      {
        "name": "Нут консервированный",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Кокосовое молоко",
        "qtyBase": 250,
        "unit": "мл",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Паста карри",
        "qtyBase": 25,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Рис",
        "qtyBase": 160,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Лайм",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "baked_feta_pasta",
    "name": "Запечённая фета с томатами и пастой",
    "baseServings": 2,
    "time": 30,
    "steps": [
      "В форму выложите фету и помидоры черри, сбрызните маслом.",
      "Запекайте 20 минут при 200 °C.",
      "Разомните сыр с томатами, смешайте с готовой пастой и базиликом."
    ],
    "ingredients": [
      {
        "name": "Фета",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Помидоры черри",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Паста",
        "qtyBase": 220,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Базилик",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_shepherds_pie",
    "name": "Пастуший пирог с говядиной",
    "baseServings": 2,
    "time": 55,
    "steps": [
      "Картофель отварите и разомните с молоком и маслом.",
      "Фарш обжарьте с луком и морковью, добавьте немного бульона.",
      "Выложите мясо в форму, сверху распределите пюре и запеките до румяной корочки."
    ],
    "ingredients": [
      {
        "name": "Говяжий фарш",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Картофель",
        "qtyBase": 600,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Морковь",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Молоко",
        "qtyBase": 100,
        "unit": "мл",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Сливочное масло",
        "qtyBase": 25,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "chicken_quesadilla",
    "name": "Кесадилья с курицей и сыром",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Курицу нарежьте мелко и обжарьте с паприкой.",
      "На половину тортильи выложите курицу, сыр и кукурузу, накройте второй половиной.",
      "Обжарьте с обеих сторон до хрустящей корочки, нарежьте на сегменты."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Тортильи",
        "qtyBase": 4,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Сыр чеддер",
        "qtyBase": 120,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Кукуруза консервированная",
        "qtyBase": 80,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "miso_salmon_noodles",
    "name": "Лосось в мисо-глазури с лапшой",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Смешайте мисо-пасту, мёд и немного воды.",
      "Смажьте лосось глазурью и запеките 12–15 минут при 200 °C.",
      "Лапшу приготовьте, подайте с рыбой и зелёным луком."
    ],
    "ingredients": [
      {
        "name": "Филе лосося",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Рыба",
        "staple": false
      },
      {
        "name": "Лапша яичная",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Паста мисо",
        "qtyBase": 25,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Мёд",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Зелёный лук",
        "qtyBase": 15,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "turkey_chili_sweetcorn",
    "name": "Чили из индейки с кукурузой",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Фарш индейки обжарьте с луком и специями.",
      "Добавьте фасоль, кукурузу и томаты.",
      "Тушите 20 минут, подавайте с рисом или лепёшками."
    ],
    "ingredients": [
      {
        "name": "Фарш из индейки",
        "qtyBase": 350,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Фасоль консервированная",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Кукуруза консервированная",
        "qtyBase": 120,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Томаты в собственном соку",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "mushroom_barley_pot",
    "name": "Перловка с грибами и пармезаном",
    "baseServings": 2,
    "time": 45,
    "steps": [
      "Перловку промойте и отварите до мягкости.",
      "Грибы с луком обжарьте до золотистого цвета.",
      "Смешайте перловку с грибами, добавьте бульон и пармезан."
    ],
    "ingredients": [
      {
        "name": "Перловка",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Шампиньоны",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      },
      {
        "name": "Пармезан",
        "qtyBase": 40,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Овощной бульон",
        "qtyBase": 500,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      }
    ]
  },
  {
    "id": "halloumi_greek_pita",
    "name": "Пита с халуми и греческим салатом",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Халуми нарежьте ломтиками и обжарьте до золотистой корочки.",
      "Огурец, томаты и лук нарежьте, смешайте с оливками.",
      "Наполните питу овощами и халуми, добавьте йогуртовый соус."
    ],
    "ingredients": [
      {
        "name": "Сыр халуми",
        "qtyBase": 200,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Пита",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Огурцы",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Помидоры",
        "qtyBase": 2,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Оливки",
        "qtyBase": 40,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Йогурт натуральный",
        "qtyBase": 80,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "potato_leek_soup",
    "name": "Картофельный суп-пюре с пореем",
    "baseServings": 2,
    "time": 35,
    "steps": [
      "Лук-порей нарежьте и мягко обжарьте на сливочном масле.",
      "Добавьте картофель и бульон, варите до мягкости.",
      "Пробейте блендером, вмешайте сливки и приправьте."
    ],
    "ingredients": [
      {
        "name": "Картофель",
        "qtyBase": 500,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Лук-порей",
        "qtyBase": 1,
        "unit": "шт",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливки",
        "qtyBase": 100,
        "unit": "мл",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Овощной бульон",
        "qtyBase": 700,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Сливочное масло",
        "qtyBase": 20,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  },
  {
    "id": "tomato_mozzarella_gnocchi",
    "name": "Ньокки в томатном соусе с моцареллой",
    "baseServings": 2,
    "time": 20,
    "steps": [
      "Ньокки отварите до всплытия.",
      "Прогрейте пассату с чесноком и базиликом.",
      "Добавьте ньокки и моцареллу, накройте до расплавления сыра."
    ],
    "ingredients": [
      {
        "name": "Ньокки",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Пассата томатная",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Моцарелла",
        "qtyBase": 125,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      },
      {
        "name": "Базилик",
        "qtyBase": 10,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "beef_broccoli_noodles",
    "name": "Говядина с брокколи и рисовой лапшой",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Рисовую лапшу залейте горячей водой по инструкции.",
      "Говядину быстро обжарьте тонкими полосками.",
      "Добавьте брокколи, чеснок и соевый соус, прогрейте и смешайте с лапшой."
    ],
    "ingredients": [
      {
        "name": "Говядина",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Лапша рисовая",
        "qtyBase": 180,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Брокколи",
        "qtyBase": 250,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Соевый соус",
        "qtyBase": 35,
        "unit": "мл",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Чеснок",
        "qtyBase": 2,
        "unit": "зубчика",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": true
      }
    ]
  },
  {
    "id": "chicken_pesto_gnocchi",
    "name": "Курица с песто и ньокки",
    "baseServings": 2,
    "time": 25,
    "steps": [
      "Ньокки приготовьте по инструкции.",
      "Курицу нарежьте и обжарьте до готовности.",
      "Добавьте песто и немного воды от приготовления ньокки, перемешайте с курицей и ньокки."
    ],
    "ingredients": [
      {
        "name": "Куриное филе",
        "qtyBase": 300,
        "unit": "г",
        "pricePerUnit": 0.65,
        "aisle": "Мясо",
        "staple": false
      },
      {
        "name": "Ньокки",
        "qtyBase": 400,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Песто",
        "qtyBase": 50,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Бакалея",
        "staple": false
      },
      {
        "name": "Помидоры черри",
        "qtyBase": 150,
        "unit": "г",
        "pricePerUnit": 0.18,
        "aisle": "Овощи",
        "staple": false
      },
      {
        "name": "Пармезан",
        "qtyBase": 25,
        "unit": "г",
        "pricePerUnit": 0.4,
        "aisle": "Молочное",
        "staple": false
      }
    ]
  }
]);
