//1. Створення об'єкта та додавання методів

let student = {
    name: "Данило",
    age: 19,

    greet: function() {
        console.log("Привіт, мене звати " + this.name);
    },

    showAge: function() {
        console.log("Мені " + this.age + " років");
    }
};

student.greet();
student.showAge();

//2. Використання прототипів

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Вітаю, я " + this.name);
};

let person1 = new Person("Світлана");

person1.sayHello();

//Наслідування через прототипи
let animal = {
    speak: function() {
        console.log("Тварина видає звук");
    }
};

let dog = Object.create(animal);

dog.bark = function() {
    console.log("Гав-гав!");
};

dog.speak();
dog.bark();

//Перевизначення методів

function Car(model) {
    this.model = model;
}

Car.prototype.showInfo = function() {
    console.log("Модель автомобіля: " + this.model);
};

let car1 = new Car("BMW");
let car2 = new Car("Audi");

car2.showInfo = function() {
    console.log("Автомобіль Audi перевизначив метод");
};

car1.showInfo();
car2.showInfo();

//Додавання методів до вбудованих об'єктів
String.prototype.reverseString = function() {
    return this.split("").reverse().join("");
};

let text = "JavaScript";

console.log(text.reverseString());

//Варіант 13
//Створити клас "Калькулятор" з методами додати(), відняти(), помножити().
class Calculator {

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }
}

let calc = new Calculator();

console.log("Додавання: " + calc.add(51, 3));
console.log("Віднімання: " + calc.subtract(31, 4));
console.log("Множення: " + calc.multiply(9, 7));

//Додаткове завдання
//Створити об'єкт "Банк" із методами покласти(), зняти(), отримати баланс().
let bank = {

    balance: 0,

    deposit(amount) {
        this.balance += amount;
        return "На рахунок покладено " + amount + " грн";
    },

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return "Знято " + amount + " грн";
        } else {
            return "Недостатньо коштів";
        }
    },

    getBalance() {
        return "Баланс: " + this.balance + " грн";
    }
};

console.log(bank.deposit(1000));
console.log(bank.withdraw(400));
console.log(bank.getBalance());




