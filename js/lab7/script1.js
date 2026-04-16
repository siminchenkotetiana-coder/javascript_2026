// Оголошення масивів
let arr1 = [14, 54, 31, 63, 85]; // літерал
let arr2 = new Array(34, 72, 45, 87); // конструктор

// 1. sort()
let arrSort = [9, 3, 7, 1, 5];
console.log("Вихідний масив:", arrSort);

let sorted = [...arrSort].sort((a, b) => a - b);
console.log("Відсортований:", sorted);

// 2. reverse() 
let words = ["JavaScript", "HTML", "CSS"];
console.log("До:", words);

let reversedWords = [...words].reverse();
console.log("Після:", reversedWords);

// 3. concat() 
let group1 = ["Іван", "Петро", "Федір"];
let group2 = ["Оля", "Марина"];

let allStudents = group1.concat(group2);
console.log("Результат:", allStudents);

// 4. slice() 
let fruits = ["apple", "banana", "cherry", "pear"];
console.log("До:", fruits);

let someFruits = fruits.slice(2, 4);
console.log("Після:", someFruits);

// 5. splice()
let numbers = [35, 7, 21, 63, 54, 61];
console.log("До:", numbers);

// видаляємо 2 елементи з індексу 1 і додаємо 14 і 15
numbers.splice(1, 2, -14, -15);
console.log("Після:", numbers);

// 6. indexOf()
let animals = ["fish", "parrot", "turtle"];

console.log("Індекс 'fish':", animals.indexOf("fish"));
console.log("Індекс 'dog':", animals.indexOf("dog")); // 

// 7. includes() 
let subjects = ["математика", "фізика", "інформатика"];
console.log("\nincludes:");

console.log("Є 'фізика'?:", subjects.includes("фізика"));

// 8. find()
let students = [
    { name: "Іван", age: 17 },
    { name: "Оля", age: 19 },
    { name: "Петро", age: 16 }
];

let adult = students.find(st => st.age >= 18);
console.log("Перший повнолітній:", adult);

// 9. findIndex()
let products = [
    { name: "smartphone", price: 500 },
    { name: "laptop", price: 1500 },
    { name: "mouse", price: 50 }
];

let expensiveIndex = products.findIndex(p => p.price > 1000);
console.log("Індекс дорогого товару:", expensiveIndex);