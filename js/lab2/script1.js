// 1. Створіть три змінні, використовуючи var, let, і const. Присвойте їм відповідні значення.

var numberVar = 5; 
let numberLet = "45";
const numberConst = null;

// 2. Визначте тип кожної змінної за допомогою оператора typeof і виведіть результат у консоль.

console.log(typeof numberVar);
console.log(typeof numberLet);
console.log(typeof numberConst);

// 3. Створіть об'єкт із полями: ім'я, вік, статус студента (булевий тип).

let student = {
    name: "Mark",
    age: "20",
    isTrue: false
};

// 4. Додайте до об'єкта нове поле "університет" і виведіть об'єкт у консоль.

student.university = "KRFK KAI"
console.log(student)

// 5. Виконайте зміну типу змінної, що була оголошена за допомогою let. Наприклад, змініть її значення з числа на рядок.

numberLet = "Тепер це рядок";
console.log(numberLet);
console.log(typeof numberLet);

// 6. Спробуйте змінити значення змінної, оголошеної через const. Перевірте, що станеться.

//numberConst = 5; 
// Неможливо змінити значення змінної, оголошеної через const, оскільки воно задається один раз і залишається незмінним, тому при зміні значення виникає помилка.

//Додаткове завдання
/*Оголоси змінну message та запиши в неї повідомлення про купівлю,
рядок у форматі: "You picked <ім'я товару>, price per item is <ціна товару> credits". 
Де<ім'я товару> і <ціна товару> це значення змінних productName і pricePerItem. 
Використовуй синтаксис шаблонних рядків.*/

let productName = "apple";
let pricePerItem = 20;
let message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

console.log(message);
