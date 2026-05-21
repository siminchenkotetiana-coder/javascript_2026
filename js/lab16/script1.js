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