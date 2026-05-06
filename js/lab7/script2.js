//Дано два масиви. Використати concat() для їх об’єднання.
// Перший масив 
let numbers1 = [];

for (let i = 0; i < 5; i++) {
    numbers1.push(Math.floor(Math.random() * 100));
}

console.log("Перший масив:", numbers1);

// Другий масив 
let numbers2 = [];

for (let i = 0; i < 5; i++) {
    numbers2.push(Math.floor(Math.random() * 100));
}

console.log("Другий масив:", numbers2);

let combined = numbers1.concat(numbers2);
console.log("Об'єднаний масив:", combined);


//Додаткове завдання. Дано масив об'єктів (ім'я, вік). Використати sort() для сортування за віком.

let people = [
    { name: "Петро", age: 19 },
    { name: "Олена", age: 17 },
    { name: "Катерина", age: 24 },
    { name: "Уляна", age: 21 }
];

console.log("До сортування:", people);
people.sort((a, b) => a.age - b.age);

console.log("Після сортування:", people);
