//Варіант 13: клас Птах із властивістю висотаПольоту та методом летіти().
class Bird {
  constructor(name, flightHeight) {
    this.name = name;
    this.flightHeight = flightHeight;
  }

  fly() {
    return `${this.name} летить на висоті ${this.flightHeight} метрів.`;
  }
}

const falcon = new Bird("Сокіл", 1500);
const stork = new Bird("Лелека", 800);
const swallow = new Bird("Ластівка", 120);

console.log(falcon.fly());
console.log(stork.fly());
console.log(swallow.fly());

console.log("falcon instanceof Bird:", falcon instanceof Bird);

// Додаткове завдання
// Створити класс Автомобіль, підклас Електромобіль, що успадковує Автомобіль, додати метод зарядити().
// Базовий клас: Автомобіль
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  // Базовий метод для всіх автомобілів
  drive() {
    return `${this.brand} ${this.model} їде по дорозі.`;
  }
}

// Підклас: Електромобіль, який успадковує властивості та методи класу Car
class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity) {
    super(brand, model);
    this.batteryCapacity = batteryCapacity; // Додаткова унікальна властивість
  }

  // Новий метод, унікальний для електромобілів
  charge() {
    return `${this.brand} ${this.model} заряджається... Батарея ємністю ${this.batteryCapacity} кВт·год буде заповнена!`;
  }
}

const petrolCar = new Car("Toyota", "Camry");
console.log(petrolCar.drive()); 

const myTesla = new ElectricCar("Tesla", "Model 3", 75);

console.log(myTesla.drive()); 

console.log(myTesla.charge()); 

// Перевірка успадкування через instanceof
console.log("myTesla instanceof ElectricCar:", myTesla instanceof ElectricCar); 
console.log("myTesla instanceof Car:", myTesla instanceof Car);


