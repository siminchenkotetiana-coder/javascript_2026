// 1. Function Declaration + обчислення

// Оголошення функції (Function Declaration)
// Функція рахує площу прямокутника
function calcArea(width, height) {
  // перевірка параметрів
  if (width <= 0 || height <= 0) {
    console.log("Невірні розміри");
    return;
  }

  const area = width * height; // обчислення площі
  return area; // повернення результату
}

// виклик функції
console.log(calcArea(5, 10));

//   2. Function Expression + умова

// Функціональний вираз (Function Expression)
// Функція перевіряє повноліття користувача
const checkAge = function (age) {
  if (age >= 18) {
    return "Доступ дозволено";
  } else {
    return "Доступ заборонено";
  }
};

console.log(checkAge(20));

//   3. Arrow Function + робота з масивом

// Стрілочна функція для фільтрації масиву
const numbers = [5, 12, 8, 20, 3];

// метод filter приймає callback-функцію
const filtered = numbers.filter((num) => {
  // залишаємо тільки числа більше 10
  return num > 10;
});

console.log(filtered);

// 4. Функція з параметрами за замовчуванням + об’єкт

// Функція створює користувача
function createUser(name = "Unknown", age = 0) {
  // створюємо об'єкт
  const user = {
    name: name,
    age: age,
    isAdult: age >= 18, // логічне поле
  };

  return user;
}

console.log(createUser("Oleg", 25));
console.log(createUser());

//   5. Вища функція + замикання + асинхронність

// Вища функція (повертає іншу функцію)
function createCounter() {
  let count = 0; // змінна зберігається в замиканні

  // повертаємо стрілочну функцію
  return () => {
    count++; // збільшуємо лічильник
    console.log("Поточне значення:", count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2

// Асинхронний виклик
setTimeout(() => {
  counter(); // 3 (викликається через 1 секунду)
}, 1000);

//  6. Приклад IIFE (Immediately Invoked Function Expression)

// IIFE — функція, яка створюється і одразу викликається

(function () {
  // цей код виконається одразу після створення функції

  const message = "Hello from IIFE";

  console.log(message);
})();