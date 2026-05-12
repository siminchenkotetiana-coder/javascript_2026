// Створення об'єкта з кількома властивостями
let person = {
    name: "Олесь",
    age: 20,
    country: "Україна"
};

// Виведення початкового об'єкта
console.log("Початковий об'єкт:");
console.log(person);

// Зміна значення властивостей
person.age = 22;
person.country = "Польща";

// Додавання нової властивості
person.city = "Київ";

// Видалення властивості
delete person.country;

// Перевірка наявності властивості
console.log("Чи існує властивість age?");
console.log("age" in person);

// Перебір усіх властивостей об'єкта
console.log("Властивості об'єкта:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//Варіант13. Створити об'єкт "телефон" з властивостями бренд, модель, ціна. 
//Змінити значення властивості "ціна" на нову та вивести весь об'єкт у консоль.

let phone = {
    brand: "Samsung",
    model: "Galaxy S26 Ultra",
    price: 30000
};

console.log("Початковий об'єкт:");
console.log(phone);

phone.price = 35000;

console.log("Змінений об'єкт:");
console.log(phone);

//Додаткове завдання
// Створити об'єкт "фільм" з властивостями назва,
// режисер, рік випуску. Додати властивість "оцінка" до об'єкта "фільм".
let movie = {
    title: "F1 Фільм",
    director: "Джозеф Косінскі",
    year: 2025
};

console.log("Початковий об'єкт:");
console.log(movie);

movie.rating = 9.3;

console.log("Оновлений об'єкт:");
console.log(movie);

