// for (службова частина) {
//     тіло циклу
// };


// for (let i = 0; i <= 5; i += 1) {
//     console.log(i)
// }
// console.log("jgnjh")

// for (let i = 10; i < 51; i += 5) {
//     console.log(i)
// }
// console.log("jgnjh")

// ------------------------ зразок задачі ------ відос 2. 36 хв

/* напиши скрипт який підраховує загальну суму зарплати зобітникам.
кількість робітників зберігається у змінній employees
ЗП кожно робітника, це випадкове число від 500 до 5000
записати сумму в змінну  totalSalary і вивисти в консоль
*/

// // 1 - зробити вари
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;
// // 2 - перебрати робітників в циклі
// for (let i = 1; i <= employees; i += 1) {
// // 3 - згенерувати случайну зп
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary
//     );

//     console.log(`зп робітника ${i} = ${salary}`);

// //     // 4 - добавити до тотала
//     totalSalary += salary;
// }

// console.log("totalSalary", totalSalary);

// ------- відос 2: 45 хв


/* Напиши скрипт який підраховує сумму всіх парних чисел, які входять в діапазон
  в діапазон чисел в перемінних від min до max.Наприклад якщо мін = 0 і мах = 5, 
  то діапазон 0-5, то в ньому два парних числа 2 і 4, і їх сума 6.
*/

// 1 зробити змінні.
// const min = 5;
// const max = 13;
// let total = 0;
// ====---------------------------- 1 й варік ------------------=========
// 2 перебрати числа від min до max
// for (let i = min; i <= max; i += 1) {
//     console.log(i);

// // 3 виділити прні числа.(провіряєм остаток від ділення)
//     if (i % 2 === 0) {
//         console.log(`парне :`, i);
//         // 4  порахувати їх сумму.
//         total += i;
//     }
// }
// // 5 вивести лог.
// console.log("total =", total);

// ==========------------------- 2й варік-----------------------=====

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log(` Не парне :`, i);
//         continue;
//           }
//         console.log(`парне :`, i);
//         total += i;
    
// }
// console.log("total =", total);