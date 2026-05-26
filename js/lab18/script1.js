// Варіант 13: відфільтрувати слова, що починаються на певну літеру.

const words = ["Китай", "книга", "сонце", "комп'ютер", "нога", "код", "Кінотеатр", "Космос"];
const firstLetter = "К";

const filteredWords = words.filter((word) =>
  word.toLocaleLowerCase("uk-UA").startsWith(firstLetter.toLocaleLowerCase("uk-UA"))
);

console.log("Початковий масив слів:", words);
console.log(`Слова, що починаються на літеру '${firstLetter}':`, filteredWords);


// Додаткове завдання: вилучити з масиву всі числа, що знаходяться в заданому діапазоні.

const numbers = [7, 12, 18, 25, 30, 41, 50, 77];

// Межі діапазону
const min = 5;
const max = 30;

const filteredNumbers = numbers.filter(
  (num) => num < min || num > max
);

console.log("Початковий масив:", numbers);
console.log(`Масив без чисел у діапазоні від ${min} до ${max}:`, filteredNumbers);


