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

different("Сливки 10%", "Сливки 33%");
same("Филе куриное", "Куриная грудка");
same("Филе куриное", "Куриная грудка без кожи");
same("Филе куриное", "Куриные грудки без кожи");
same("Курица", "Отварная курица");
same("Филе куриного бедра", "Куриные ножки филе");
same("Лимонный сок", "Лимонный сок для соуса");
same("Сметана", "Сметана 25%");
same("Соль", "Морская соль");
same("Чёрный перец", "Молотый черный перец");


const recipes = context.window.SALPCOOK_RECIPES;
assert.equal(recipes.length, 200, "Unexpected recipe catalog size");
const ingredientNames = recipes.flatMap(recipe => recipe.ingredients.map(item => item.name));
assert.equal(ingredientNames.length, 1913, "Ingredient occurrence count changed; review the audit");
assert.ok(!ingredientNames.some(name => name.toLocaleLowerCase("ru-RU").split(/[^а-яёa-z0-9]+/iu).includes("или")), "Found an unresolved alternative (или)");
assert.ok(!ingredientNames.some(name => / для (соуса|жарки|начинки|теста|пасты|блинов)$/iu.test(name)), "Found a purpose qualifier in an ingredient name");
assert.ok(!ingredientNames.some(name => /^сметана\s*\d/iu.test(name)), "Sour cream fat percentages should be unified");
assert.ok(ingredientNames.includes("Сливки 10%"), "Cream fat percentages should remain meaningful distinctions");
assert.ok(ingredientNames.includes("Сметана"), "Sour cream canonical name missing");
const indexHtml = fs.readFileSync("index.html", "utf8");
const excludedStart = indexHtml.indexOf("const SHOPPING_EXCLUDED_INGREDIENTS = new Set([");
const excludedEnd = indexHtml.indexOf("]);", excludedStart);
assert.ok(excludedStart >= 0 && excludedEnd > excludedStart, "Shopping exclusions set missing");
const excluded = new Set([...indexHtml.slice(excludedStart, excludedEnd).matchAll(/"([^"]+)"/g)].map(match => match[1]));
for (const staple of ["Соль", "Морская соль", "Морская крупная соль", "Соль для соуса", "Чёрный перец", "Молотый черный перец", "Чёрный перец горошком", "Растительное масло", "Подсолнечное масло", "Оливковое масло", "Оливковое масло extra virgin", "Сливочное масло"]) {
  assert.ok(excluded.has(canonical(staple)), `Staple should be excluded from shopping: ${staple}`);
}
console.log(`Ingredient normalization checks passed: ${recipes.length} recipes, ${ingredientNames.length} ingredient occurrences.`);
