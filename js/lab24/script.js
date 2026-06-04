const draggable = document.getElementById('draggable');

let isDragging = false;
let offsetX, offsetY;

// Подія натискання кнопки миші на елементі
draggable.addEventListener('mousedown', (e) => {
    isDragging = true;
    
    // Рахуємо зміщення курсору відносно верхнього лівого кута елемента
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
});

// Подія руху миші
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    // Обчислюємо нові координати елемента
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Встановлюємо нову позицію
    draggable.style.left = `${x}px`;
    draggable.style.top = `${y}px`;
});

// Подія відпускання кнопки миші
document.addEventListener('mouseup', () => {
    isDragging = false;
});