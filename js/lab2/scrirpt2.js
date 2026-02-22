// Цей код динамічно створює список інгредієнтів у HTML, використовуючи DOM-методи.
//  Замість багаторазового виклику appendChild він використовує розпакування масиву
//  liArray для ефективного додавання всіх елементів одразу.

// створюємо масив рядків з назвами інгридієнтів
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Знаходимо елемент <ul> за ідентифікатором "ingredients"
const list = document.querySelector("#ingredients");

// Створюємо порожній масив, у який додаватимемо <li> елементи
const liArray = [];

// Проходимося по кожному інгредієнту з масиву
ingredients.forEach((ingredient) => {
  // Створюємо новий елемент <li>
  const item = document.createElement("li");
  // Додаємо клас "item" до <li>
  item.className = "item";
  // Задаємо текстовий вміст елемента — назву інгредієнта
  item.textContent = ingredient;
  // Додаємо <li> до масиву
  liArray.push(item);
});

// Додаємо всі <li> елементи до списку <ul> за одну операцію
list.append(...liArray);