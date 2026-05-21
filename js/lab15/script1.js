// 1. Реалізувати функцію, що приймає інші функції як аргументи.

function applyOperation(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log("Сума:", applyOperation(5, 3, add));


// 2. Функція, яка повертає іншу функцію

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);

console.log("Подвоєння:", double(5));


// Варіант 13
// Функція з таймером та затримкою

function delayedCall(fn, delay) {
    return function(...args) {
        setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function showMessage(message) {
    console.log("Повідомлення:", message);
}

const delayedMessage = delayedCall(showMessage, 2000);

delayedMessage("Виклик через 2 секунди");

