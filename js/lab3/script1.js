//Завдання 1. Створіть змінні різних типів (string, number, boolean, undefined, null). Виведіть їхні значення та типи у консоль.

let str = "Hello";
let num = 25;
let bool = true;
let undef;
let empty = null;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(undef, typeof undef);
console.log(empty, typeof empty); // typeof null -> object

//Завдання 2. Виконайте явне перетворення:
//Рядка на число.

let stringNumber = "123";
console.log(typeof stringNumber);
let convertNumber = Number(stringNumber);
console.log(convertNumber, typeof convertNumber);

//Числа на рядок.

let numberValue = 155;
console.log(typeof numberValue);
let convertedString = String(numberValue);
console.log(convertedString, typeof convertedString);

//Значення до булевого типу.

let value1 = 0;
let value2 = "123";
console.log(Boolean(value1), typeof Boolean(value1));
console.log(Boolean(value2), typeof Boolean(value2));

//Завдання3. Виконайте неявне перетворення в математичних виразах та під час конкатенації рядків. Продемонструйте результат у консоль.

//математичні операції

console.log("75" * 2);
console.log("5" + 7); //конкатенація
console.log(10 - "3");
console.log("58" - 5);
console.log(true + 1);

//конкатенація

console.log("Результат:" + 100);

//Завдання 4. Створіть функцію, яка приймає значення будь-якого типу та повертає його тип. Використайте оператор typeof.

function getType(value){
    return typeof value
}

console.log(getType(17));
console.log(getType("9"));
console.log(getType(false));

//Завдання 5. Виконайте порівняння значень різних типів за допомогою операторів == та ===. Поясніть отримані результати.

console.log(7 == "7");
console.log(7 === "7");
console.log(7 === 4+3);

console.log(null == undefined);
console.log(null === undefined);

/*Додаткове завдання.

Функція add повинна вміти складати три числа та виводити результат у консоль. 
Додай функції add три параметри a, b і c, які отримуватимуть значення аргументів під час її виклику.
Доповни console.log() так, щоб він логував рядок "Addition result equals <result>",
де <result> це сума переданих чисел.*/

function add (a, b, c){
    return a + b + c;
}
console.log("Addition result equals: " + add(54, 121, 81));

