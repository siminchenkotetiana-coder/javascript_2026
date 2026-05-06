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

