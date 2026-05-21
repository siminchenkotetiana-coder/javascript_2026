// Варіант 13: відфільтрувати слова, що починаються на певну літеру.

const words = ["Китай", "книга", "сонце", "комп'ютер", "нога", "код", "Кінотеатр", "Космос"];
const firstLetter = "К";

const filteredWords = words.filter((word) =>
  word.toLocaleLowerCase("uk-UA").startsWith(firstLetter.toLocaleLowerCase("uk-UA"))
);

console.log("Початковий масив слів:", words);
console.log(`Слова, що починаються на літеру '${firstLetter}':`, filteredWords);
