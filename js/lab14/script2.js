// 1. Function Declaration + обчислення

// Оголошена функція для обчислення периметра прямокутника
function calcPerimeter(length, width) {

  // перевірка значень
  if (length <= 0 || width <= 0) {
    console.log("Сторони повинні бути більшими за 0");
    return;
  }

  const perimeter = 2 * (length + width);

  return perimeter;
}

// виклик функції
console.log(calcPerimeter(8, 4));


// 2. Function Expression + умова

// Функціональний вираз
// Функція перевіряє, чи число додатне
const checkNumber = function(number) {

  if (number > 0) {
    return "Число додатне";
  } else if (number < 0) {
    return "Число від’ємне";
  } else {
    return "Число дорівнює нулю";
  }

};

console.log(checkNumber(-7));


// 3. Arrow Function + робота з масивом

// Масив оцінок
const grades = [45, 78, 90, 56, 32, 100, 67];

// Стрілкова функція для пошуку оцінок більше 60
const highGrades = grades.filter((grade) => {

  return grade > 60;

});

// вивід результату
console.log(highGrades);


// 4. Функція з параметрами за замовчуванням + об’єкт

// Функція створює товар
function createProduct(name = "Без назви", price = 0) {

  const product = {
    name: name,
    price: price,
    available: price > 0
  };

  return product;
}

console.log(createProduct("Ноутбук", 25000));
console.log(createProduct());


// 5. Вища функція + замикання + асинхронність

// Функція створює лічильник переглядів
function createViewsCounter() {

  let views = 0;

  // повертаємо іншу функцію
  return () => {

    views++;

    console.log("Кількість переглядів:", views);

  };

}

// створення лічильника
const videoViews = createViewsCounter();

videoViews(); // 1
videoViews(); // 2

// асинхронний виклик через 2 секунди
setTimeout(() => {

  videoViews(); // 3

}, 2000);

// 6. IIFE (Immediately Invoked Function Expression)

// функція створюється і одразу виконується
(function() {

  const text = "Функція IIFE виконана";

  console.log(text);

})();

// варіант 13
// Функціональний вираз для отримання парних чисел з масиву
const getEvenNumbers = function(arr) {
    return arr.filter(function(number) {
        return number % 2 === 0;
    });
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = getEvenNumbers(numbers);

console.log(result);