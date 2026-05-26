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



// Додаткове завдання: Реалізувати функцію з частковим застосуванням аргументів.

// Функція partial() реалізує часткове застосування аргументів
function partial(fn, ...fixedArgs) {

    // Повертається нова функція
    return function(...remainingArgs) {

        // Викликаємо основну функцію,
        // об'єднуючи зафіксовані та нові аргументи
        return fn(...fixedArgs, ...remainingArgs);
    };
}

// Функція обчислення кінцевої вартості товару
function calculatePrice(tax, discount, price) {

    // Додаємо податок та віднімаємо знижку
    return price + (price * tax) - discount;
}

// Створюємо нову функцію,
// де податок = 20%, знижка = 5
const calculateStorePrice = partial(calculatePrice, 0.20, 5);

// Передаємо лише ціну товару
console.log("Кінцева вартість товару 1:", calculateStorePrice(100));

// Ще один виклик для іншої ціни
console.log("Кінцева вартість товару 2:", calculateStorePrice(200));


