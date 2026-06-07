// Отримуємо елементи сторінки для відображення результатів
const rawCountEl = document.getElementById('raw-count');
const throttledCountEl = document.getElementById('throttled-count');
const coordsEl = document.getElementById('coords');

// Лічильник усіх викликів події mousemove
let rawCounter = 0;

// Лічильник викликів після застосування тротлінгу
let throttledCounter = 0;

// Функція вищого порядку для реалізації тротлінгу
// Дозволяє викликати функцію не частіше одного разу за заданий інтервал часу
function throttle(func, delay) {
    let isWaiting = false; // Прапорець блокування викликів

    return function(...args) {

        // Якщо затримка ще не завершилась, ігноруємо виклик
        if (isWaiting) return;

        // Виконуємо передану функцію
        func.apply(this, args);

        // Блокуємо наступні виклики
        isWaiting = true;

        // Через delay мс дозволяємо новий виклик функції
        setTimeout(() => {
            isWaiting = false;
        }, delay);
    };
}

// Функція оновлення координат миші
function updateMouseTracking(event) {

    // Збільшуємо лічильник оптимізованих викликів
    throttledCounter++;
    throttledCountEl.textContent = throttledCounter;

    // Виводимо поточні координати курсора
    coordsEl.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
}

// Створюємо оптимізовану версію обробника
// Виклик дозволяється не частіше одного разу на 100 мс
const throttledMouseMove = throttle(updateMouseTracking, 100);

// Звичайний обробник події mousemove
// Спрацьовує при кожному русі миші
window.addEventListener('mousemove', () => {

    // Рахуємо всі виклики події
    rawCounter++;
    rawCountEl.textContent = rawCounter;
});

// Оптимізований обробник з використанням тротлінгу
window.addEventListener('mousemove', throttledMouseMove);