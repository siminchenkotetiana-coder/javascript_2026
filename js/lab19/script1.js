// Варіант 13: перетворити масив у словник.

// Масив слів
const words = [
  { word: "computer", translation: "комп’ютер", meaning: "Електронний пристрій для обробки інформації" },
  { word: "keyboard", translation: "клавіатура", meaning: "Пристрій для введення тексту" },
  { word: "monitor", translation: "монітор", meaning: "Екран для відображення інформації" },
  { word: "mouse", translation: "миша", meaning: "Пристрій для керування курсором" },
];

// Перетворення масиву у словник
const dictionary = words.reduce((accumulator, item) => {
  const { word, translation, meaning } = item;
  accumulator[word] = { translation, meaning };
  
  return accumulator;
}, {});

console.log("Початковий масив:", words);
console.log("Словник:", dictionary);
