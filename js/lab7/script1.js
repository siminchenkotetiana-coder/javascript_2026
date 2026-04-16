// Оголошення масивів
let arr1 = [14, 54, 31, 63, 85]; // літерал
let arr2 = new Array(34, 72, 45, 87); // конструктор

console.log("arr1:", arr1);
console.log("arr2:", arr2);

// 1. sort()
let sorted = [...arr1].sort((a, b) => a - b);
console.log("sort():", sorted);

// 2. reverse()
let reversed = [...arr1].reverse();
console.log("reverse():", reversed);

// 3. concat()
let combined = arr1.concat(arr2);
console.log("concat():", combined);

// 4. slice()
let sliced = arr1.slice(1, 3);
console.log("slice():", sliced);

// 5. splice()
let arrSplice = [...arr1];
arrSplice.splice(1, 2, 10, 20);
console.log("splice():", arrSplice);

// 6. indexOf()
console.log("indexOf(9):", arr1.indexOf(9));
console.log("indexOf(100):", arr1.indexOf(100));

// 7. includes()
console.log("includes(2):", arr1.includes(2));
console.log("includes(100):", arr1.includes(100));

// 8. find()
let found = arr1.find(x => x > 79);
console.log("find (>79):", found);

// 9. findIndex()
let foundIndex = arr1.findIndex(x => x > 63);
console.log("findIndex (>63):", foundIndex);


