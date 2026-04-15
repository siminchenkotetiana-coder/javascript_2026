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

console.log("Перший масив:");
console.log(arr1);

console.log("Другий масив:");
console.log(arr2);

let combined = arr1.concat(arr2);

console.log("Об'єднаний масив:", combined);

