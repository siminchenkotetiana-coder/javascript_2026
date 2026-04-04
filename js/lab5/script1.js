//Завдання 1. Цикл for: Вивести всі парні числа від 1 до 20.

for (let i = 1; i<20; i++){
    //перевірка чи парне число
    if (i % 2 === 1){
        console.log(i);
    }
}

//Завдання 2. Цикл while: Створити програму, яка зчитує число n і виводить всі числа від n до 1.

let n = 9;
//поки n >= 1, виводимо сило і зменшуємо на 1
while (n >= 1) {
    console.log(n);
    n--;
}

//Завдання 3. Цикл do...while: Запитувати у користувача число, поки він не введе позитивне.

let num;

do{
//запитуємо у користувача число
num = parseInt(prompt("Введіть позитивне число: "));
} while (num <= 0); //повторюємо поки число не буде позитивним

console.log("Введене число: ", num);

//Завдання 4. Цикл for...in: Вивести всі ключі та значення у заданому об’єкті.

let obj = {
    name: "Марк",
    age: 20,
    city: "Київ"
};

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

//Завдання 5. Цикл for...of: Вивести всі елементи масиву у зворотному порядку.

let arr = [1, 2, 3, 4, 5];

for (let value of arr.reverse()) {
    console.log(value);
}

//Завдання 6. Методи масивів:
//  o Використати forEach(), щоб вивести всі елементи масиву.
//  o Використати map(), щоб створити новий масив квадратів чисел.
//  o Використати filter(), щоб створити масив чисел більше 10.

let numbers = [5, 10, 15, 20];

// forEach
numbers.forEach(function(num) {
    console.log(num);
});

// map
let squares = numbers.map(function(num) {
    return num * num;
});
console.log(squares);

// filter
let filtered = numbers.filter(function(num) {
    return num > 10;
});
console.log(filtered);



