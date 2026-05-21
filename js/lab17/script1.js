// Варіант 13: створити масив, у якому всі значення округлені до цілого.

const numbers = [2.3, 5.7, 9.49, 10.5, -3.2, 0.8, 14.01];
const roundedNumbers = numbers.map((num) => Math.round(num));

console.log("Початковий масив:", numbers);
console.log("Округлений масив:", roundedNumbers);
