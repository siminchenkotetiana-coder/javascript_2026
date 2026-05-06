// 1. Оголосити масиви різними способами (через літерали, конструктор Array).

// Через літерал
let arr1 = [7, 9, 3];

// Через конструктор
let arr2 = new Array(8, 5, 1);

console.log("Початкові масиви:");
console.log(arr1);
console.log(arr2);

// 2. Додати та видалити елементи масиву за допомогою методів push(), pop(), unshift(), shift().

// push()
arr1.push(10, 15);
console.log("Після push:", arr1);

// pop()
arr1.pop();
console.log("Після pop:", arr1);

// shift()
arr2.shift();
console.log("Після shift:", arr2);

// unshift()
arr2.unshift(0, 2);
console.log("Після unshift:", arr2);

// 3. Варіант 13 — об'єднання масивів

//метод concat
let part1 = ["Monday", "Tuesday", "Wednesday", "Thursday"];
let part2 = ["Friday", "Saturday", "Sunday"];

let result = part1.concat(part2);
console.log("Об'єднаний масив:", result);

//оператор spread
const array1 = [10, 20, 30];
console.log("Перший масив:", array1);

const array2 = [40, 50, 60];
console.log("Другий масив:", array2);

const combined = [...array1, ...array2];
console.log("Об'єднаний масив:", combined);

// 4. Створити масив слів та вивести тільки ті, що містять більше 5 літер
let words = ["book", "sun", "computer", "rainbow", "sunset", "monday"];

console.log("Початковий масив слів:");
console.log(words);

let longWords = words.filter(word => word.length > 5);

console.log("Слова, що містять більше 5 літер:");
console.log(longWords);


