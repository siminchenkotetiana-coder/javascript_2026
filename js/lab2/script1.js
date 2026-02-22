// скрипт для аналізу HTML сторінки структури списку

// Отримуємо всі елементи <li> з класом 'item' і зберігаємо їх у змінну list
const list = document.querySelectorAll("li.item");

// Виводимо в консоль кількість категорій
console.log(`Number of categories: ${list.length}`);

// Отримуємо всі дочірні елементи <li> у списку з id "categories"
const ul = document.querySelectorAll("#categories>li");

// Перебираємо кожен елемент списку
ul.forEach((el) => {
  // Виводимо назву категорії (текст першого дочірнього елемента, як правило <h2>)
  console.log(`Category: ${el.firstElementChild.textContent}`);
  // Виводимо кількість елементів у кожній категорії (кількість дітей у <ul>)
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});