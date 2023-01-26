/* // -----------------------  ...(spread)  ----------------------- (розпилення)
// ...array    в масиві під час розпилення важливий порядок розпилення

const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
console.log(numbers);

const numbers2 = [1, 2, 3, ...[4, 5, 6], ...[7, 8, 9]];
console.log(numbers2);


// пошук самої маленької температури....

const temps = [11, 25, 32, 15, 9, 24, 2]

const maxTemp = Math.max(temps);
const maxTemp2 = Math.max(...temps);
const minTemp = Math.min(temps);
const minTemp2 = Math.min(...temps);

console.log(maxTemp);
console.log(maxTemp2);
console.log(minTemp);
console.log(minTemp2);


const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

console.log(a);
console.log(b);
console.log(a === b);
console.log(a[1] === b[1]);

a[2].z = 333;

console.log(a);
console.log(b);


// зшиваєм декільька масивів в один за допомогою concat(), i ...(spread)

const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4, 5, 6];
const nexttWeekTemps = [7, 8, 9];

// const allWeeksTemps = lastWeekTemps.concat(currentWeekTemps, nexttWeekTemps);
const allWeeksTemps = [...lastWeekTemps, ...currentWeekTemps, ...nexttWeekTemps];

console.log(allWeeksTemps);
*/

// ...object
// Object.prototype.assignt() i spread     порядок розпилкння впливає на кінечне значення властивості.

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// const c = {...a, ...b,}


// const b = { x: 1, y: 2, x: 5 };

// console.log(c)

// ----------------------------------------------------------------------------
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: false,
//   rating: 8.38,
// };


// // const accessType = book.isPublic ? "публічному" : "закритому";
// // const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;


// // Деструктуризуємо

// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage);

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

// console.log(message);
// console.log(accessType);
