//Створити та викликати просту функцію без параметрів.
function sayHello() {
    console.log("Hello, world!");
}

sayHello();

//Оголосити функцію з параметрами та викликати її з різними аргументами.
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Vlad");
greet("Anna");

//Варіант 13
//Напиши функцію max, яка приймає два числа і повертає більше з них.
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// перевірка
console.log(max(72, 63));
console.log(max(7, 21));
