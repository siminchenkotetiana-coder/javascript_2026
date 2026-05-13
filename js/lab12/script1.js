// Написати функції, що приймають змінну кількість аргументів і використовують оператор rest.
// 1
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// 2
function countArgs(...args) {

    return args.length;
}

console.log(countArgs(10, 20, 30, 40));

// 3
function showEvenNumbers(...numbers) {

    return numbers.filter(number => number % 2 === 0);
}

console.log(showEvenNumbers(1, 2, 3, 4, 5, 6));


// Використати rest у деструктуризації масивів та об'єктів.
// масив
const products = ["Ноутбук", "Мишка", "Клавіатура", "Монітор"];

const [mainProduct, ...otherProducts] = products;

console.log(mainProduct);
console.log(otherProducts);

//об'єкт
const account = {
    login: "admin",
    password: "12345",
    role: "moderator",
    status: "online"
};

const { login, ...info } = account;

console.log(login);
console.log(info);

// Варіант 13
// Використовуючи rest, створити функцію, яка видаляє 
// певну кількість перших елементів масиву.

function removeFirstElements(count, ...array) {
    return array.slice(count);
}

const result = removeFirstElements(5, 30, 40, 50, 60, 70, 80, 90, 20);
console.log(result);


