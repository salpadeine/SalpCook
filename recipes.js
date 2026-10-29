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
    "id": "shrimp_garlic_rice",
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
];;
