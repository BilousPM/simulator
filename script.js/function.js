// -------------------- Функції------------------
// --- Функціональне вираженіє.....

// const add = function (x, y) {
    // ........

    // const result = x * y;

    // console.log(result);
    // return result;
// }

// --- виклик функції ........

// const ri = add(5, 2);
// console.log(ri);


// -------------------Стек викликів---------------- Відос-4......26 хв.

// -------------------Пошук помилок у функцій Відос-4......37 хв.

// ---------------------Написання задачок  (функції)

// Напиши функцію calculateTotalPrice(items)
// яка приймає масив цін (чисел), і повертає їх сумму.

// const cart = [54, 28, 105, 78, 92, 17, 120];
// let total = 0;



// const calculateTotalPrice = function (items) {
//     console.log(items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// };
 
// const r1 = calculateTotalPrice([54, 28, 105, 78, 92, 17, 1222]);

// console.log(r1);

// console.log(calculateTotalPrice([4, 28, 105, 8, 92, 7, 12]));
// console.log(calculateTotalPrice([54, 4, 566, 651, 61,]));
// console.log(calculateTotalPrice([24,105, 65, 92, 1, 10]));

// .-----------------------------------------------------------------------

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(string) {

//   let array = string.split(" ");
//   let result;
//   let wordlength = 0;
    
//     for (let word of array) {
  
//     if(wordlength <= word.length){
//     wordlength = word.length;
//     result = word;
//   }
//     }

//   return result;

// };


// findLongestWord("The quick brown fox jumped over the lazy dog");
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// findLongestWord("May the force be with you");
//  console.log(findLongestWord("May the force be with you"))
// findLongestWord("Google do a roll");


// -------------------------------------------------------------------------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for(let i = min; i <= max; i += 1){
//   numbers.push(i)
// }
//   // Change code above this line
//   return numbers;
// }
// // const array =  createArrayOfNumbers(1, 3);
// const array = createArrayOfNumbers(14, 17);
// // const array = createArrayOfNumbers(29, 34);

// console.log(array);