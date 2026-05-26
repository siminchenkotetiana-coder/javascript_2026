// Варіант 13: створити масив, у якому всі значення округлені до цілого.

const numbers = [2.3, 5.7, 9.49, 10.5, -3.2, 0.8, 14.01];
const roundedNumbers = numbers.map((num) => Math.round(num));

console.log("Початковий масив:", numbers);
console.log("Округлений масив:", roundedNumbers);


// Додаткове завдання:
// Перетворити масив об'єктів з координатами у формат "x, y".

const points = [
    { x: 2, y: 5 },
    { x: -3, y: 7 },
    { x: 10, y: 0 },
    { x: 4, y: -8 }
];

const formattedPoints = points.map((point) => {
    return `${point.x}, ${point.y}`;
});

console.log("Координати у форматі 'x, y':", formattedPoints);
