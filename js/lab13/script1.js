// Копіювання масивів – використання spread для створення нових масивів без зміни вихідних даних.
let numbers = [1, 2, 3, 4, 5];
let copyNumbers = [...numbers];
copyNumbers.push(6)

console.log(numbers);
console.log(copyNumbers);

// Об’єднання масивів – застосування spread для злиття двох або більше масивів.
let firstArray = [11, 22, 33];
let secondArray = [44, 55, 66];

let mergedArray = [...firstArray, ...secondArray];

console.log(mergedArray);

// Копіювання об’єктів – створення нових об’єктів на основі існуючих.
let student = {
    name: "Валентина",
    age: 18
};

let group = {
    course: 2,
    specialty: "Програмування"
};

let fullStudent = {
    ...student,
    ...group
};

console.log(fullStudent);

// варіант 13
// Використати spread для створення масиву об’єктів із окремих об’єктів.
let book1 = {
    title: "Голлі",
    author: "Стівен Кінг"
};

let book2 = {
    title: "Пазл",
    author: "Франк Тілье"
};

let book3 = {
    title: "Книга Еміля",
    author: "Іларіон Павлюк"
};

let library = [
    { ...book1 },
    { ...book2 },
    { ...book3 }
];

console.log(library);








