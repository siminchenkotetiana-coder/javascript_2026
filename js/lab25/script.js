"use strict";

  // Варіант 13: отримати усіх дочірніх елементів певного контейнера.

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#content-container");
  const showButton = document.querySelector("#show-children");
  const output = document.querySelector("#output");

  showButton.addEventListener("click", () => {
    // Отримуємо колекцію HTML-елементів та перетворюємо її в масив
    const childElements = Array.from(container.children);

    // Очищуємо попередній вивід, якщо він був
    output.innerHTML = "";
    
    childElements.forEach((child, index) => {
      // Додаємо CSS клас для візуального підсвічування дочірніх елементів
      child.classList.add("highlight-child");

      // Створюємо елемент списку для відображення інформації
      const item = document.createElement("li");
      item.textContent = `${child.tagName.toLowerCase()}, текст: ${child.textContent.trim()}`;
      output.appendChild(item);
    });

    console.log("Дочірні елементи контейнера:", childElements);
  });
});
