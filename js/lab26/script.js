"use strict";

// Варіант 13: кнопка після натискання видаляє саму себе.

const button = document.getElementById('selfDestructBtn');

// Додаємо обробник події кліку
button.addEventListener('click', function() {
  info.textContent = "Кнопку натиснуто, і вона видалила сама себе.";
    // Метод remove() видаляє елемент з DOM
    this.remove(); 
    console.log('Кнопку було успішно видалено.');
}, { once: true }); // { once: true } гарантує, що обробник спрацює лише один раз