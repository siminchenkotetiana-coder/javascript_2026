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


// Додаткове завдання:
// Перетворити вкладений масив у плоский.

const nestedArray = [1, 2, [3, 4], [5, 6], 7, [8, 9]];

// Перетворення вкладеного масиву у плоский
const flatArray = nestedArray.flat();

console.log("Вкладений масив:", nestedArray);

console.log("Плоский масив:", flatArray);


