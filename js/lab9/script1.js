//Написати та протестувати стрілкові функції в різних сценаріях

// Стрілкова функція для додавання чисел
const add = (a, b) => a + b;

// Стрілкова функція для множення
const multiply = (a, b) => a * b;

// Стрілкова функція для обчислення квадрата числа
const square = x => x * x;

console.log(add(5, 3));
console.log(multiply(4, 2));
console.log(square(6));


//Реалізувати callback-функцію для роботи з масивами.

// Функція для обробки масиву
function processArray(arr, callback) {
    return arr.filter(callback);
}

const numbers = [3, 8, 12, 5, 20, 7, 15];

// Callback-функція для перевірки чисел більше 10
const greaterThanTen = number => number > 10;

const res = processArray(numbers, greaterThanTen);

console.log(res);


//Варіант13. Напишіть стрілкову функцію для фільтрації парних чисел з масиву за допомогою .filter().

// Стрілкова функція для фільтрації парних чисел
const filterEvenNumbers = arr => arr.filter(number => number % 2 === 0);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterEvenNumbers(num);

console.log("Парні числа:", result);

