// Варіант 13: підрахувати кількість елементів, що задовольняють умову.

const numbers = [4, 12, 7, 18, 21, 3, 30, 11, 8, 16];

let count = 0;

numbers.forEach((num) => {
    if (num > 10) {
        count++;
    }
});

console.log("Масив:", numbers);
console.log(`Кількість елементів, що задовольняють умову: ${count}`);

// Додаткове завдання:
// Додати до кожного елемента масиву певний суфікс.

// Додаткове завдання:
// Додати до кожного елемента масиву певний суфікс.

const fruits = ["apple", "banana", "orange", "grape", "melon"];

const suffix = "_fruit";

const updatedFruits = fruits.map((fruit) => {
    return fruit + suffix;
});

console.log("Початковий масив:", fruits);
console.log("Масив після додавання суфікса:", updatedFruits);




