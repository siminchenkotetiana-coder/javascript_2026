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

numbers.splice(2, 3, 14);
console.log("Після:", numbers);


// 6. indexOf()

let animals = ["fish", "parrot", "turtle"];

console.log("Індекс 'собака':", animals.indexOf("fish"));
// якщо нема → -1

// 7. includes() (слова)

let subjects = ["математика", "фізика", "інформатика"];
console.log("\nincludes:");

console.log("Є 'фізика'?:", subjects.includes("фізика"));
// повертає true/false :contentReference[oaicite:4]{index=4}

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