//Створити та викликати просту функцію без параметрів.
function sayHello() {
    console.log("Today is Wednesday!");
}

sayHello();

//Оголосити функцію з параметрами та викликати її з різними аргументами.
function showWeather(city, temperature) {
    return "У місті " + city + " зараз " + temperature + "°C";
}

// виклики з різними аргументами
console.log(showWeather("Київ", 18));
console.log(showWeather("Львів", 15));
console.log(showWeather("Одеса", 22));

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
