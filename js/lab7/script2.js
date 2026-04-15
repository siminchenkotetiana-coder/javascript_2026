// Перший масив 
let numbers1 = [];

for (let i = 0; i < 5; i++) {
    numbers1.push(Math.floor(Math.random() * 100));
}

console.log("Масив 1:", numbers1);

// Другий масив 
let numbers2 = [];

for (let i = 0; i < 5; i++) {
    numbers2.push(Math.floor(Math.random() * 100));
}

console.log("Масив 2:", numbers2);

let combined = numbers1.concat(numbers2);
console.log("\nОб'єднаний масив (concat):", combined);