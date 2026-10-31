const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync("ingredients.js", "utf8"), context);
vm.runInContext(fs.readFileSync("recipes.js", "utf8"), context);

const aliases = context.window.SALPCOOK_INGREDIENT_ALIASES;
const normalize = value => String(value).trim().toLocaleLowerCase("ru-RU")
  .replace(/ё/g, "е").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
const canonical = value => aliases[normalize(value)] || normalize(value);
const same = (a, b) => assert.equal(canonical(a), canonical(b), `Expected same ingredient: ${a} / ${b}`);
const different = (a, b) => assert.notEqual(canonical(a), canonical(b), `Expected distinct ingredients: ${a} / ${b}`);

same("Картофель", "Картофель средний");
same("Картофель", "Молодой картофель");
same("Картофель", "Беби-картофель");
different("Картофель", "Батат крупный");

same("Помидоры", "Помидор средний");
same("Помидоры", "Помидор крупный");
same("Помидоры", "Помидоры средние");
different("Помидоры", "Помидоры черри");
different("Помидоры", "Желтые помидоры");
different("Помидоры", "Вяленые томаты");
different("Помидоры", "Консервированные измельчённые помидоры");
different("Помидоры", "Свежие или консервированные помидоры");
different("Помидоры", "Томатная паста");

same("Огурцы", "Огурец средний");
same("Лук репчатый", "Лук репчатый небольшой");
same("Лук красный", "Лук красный небольшой");
same("Перец сладкий", "Болгарский перец средний");
same("Морковь", "Морковь крупная");

same("Фарш говяжий", "Говяжий фарш");
different("Фарш говяжий", "Фарш куриный");
different("Фарш говяжий", "Фарш свиной");
different("Сыр", "Сыр моцарелла");
different("Сыр", "Сыр твёрдый");
different("Масло оливковое", "Масло сливочное");
same("Филе куриное", "Куриная грудка");
same("Филе куриное", "Куриная грудка без кожи");
same("Филе куриное", "Куриные грудки без кожи");
same("Курица", "Отварная курица");
same("Филе куриного бедра", "Куриные ножки филе");
same("Лимонный сок", "Лимонный сок для соуса");
same("Сметана", "Сметана 25%");
same("Соль", "Морская соль");
same("Чёрный перец", "Молотый черный перец");
same("Растительное масло", "Подсолнечное масло");

const recipes = context.window.SALPCOOK_RECIPES;
assert.equal(recipes.length, 200, "Unexpected recipe catalog size");
const ingredientNames = recipes.flatMap(recipe => recipe.ingredients.map(item => item.name));
assert.equal(ingredientNames.length, 1913, "Ingredient occurrence count changed; review the audit");
assert.ok(!ingredientNames.some(name => name.toLocaleLowerCase("ru-RU").split(/[^\\p{L}\\p{N}]+/u).includes("или")), "Found an unresolved alternative (или)");
assert.ok(!ingredientNames.some(name => / для /iu.test(name)), "Found a purpose qualifier in an ingredient name");
assert.ok(!ingredientNames.some(name => /^сметана\\s*\\d/iu.test(name)), "Sour cream fat percentages should be unified");
assert.ok(ingredientNames.includes("Сливки 10%"), "Cream fat percentages should remain meaningful distinctions");
assert.ok(ingredientNames.includes("Сметана"), "Sour cream canonical name missing");
assert.ok(!ingredientNames.some(name => /^Сметана\\s*\\d/iu.test(name)), "Sour cream fat percentages should be unified");
assert.ok(ingredientNames.includes("Сливки 10%"), "Cream fat percentages should remain meaningful distinctions");
console.log(`Ingredient normalization checks passed: ${recipes.length} recipes, ${ingredientNames.length} ingredient occurrences.`);
