// ----  Функція зворотнього  виклику ---  (Callback)   ---

// const fnA = function (message, callback) {
//     // console.log(message);

//     // console.log(callback);
//     callback();//визов функціі fnB
// };

// const fnB = function () {
//     console.log("Це лог при визові fnB")
//  };

// fnA('hi, it is my functions..', fnB);

// -----------------------------------------------------------------

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

// console.log(result)
// }

// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 6, add);
// doMath(6, 2, sub);

// doMath(6, 2, function (x, y) {
//     return x + y;
// });
// doMath(6, 2, function (x, y) {
//     return x - y;
// });


// --------------------------------------------------------------

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// console.log(processCall("Mango"));
// // ------------------------------------------------------------------



// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index, array) {
//   console.log(`Індекс ${index}, значення ${number} ${array} `);
// });

