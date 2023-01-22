/* наптши скрипт, який провіряє входження числа в відрізок позначенний x1 і x2
до x1
Після x2
від x1 до x2
До x1 після x2*/


// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадає в відрізок до ${x1} ?`, number < x1);

// console.log(`Число ${number} попадає в відрізок після ${x2} ?`, number > x2);
// console.log(`Число ${number} попадає в відрізок від ${x1} до ${x2} ?`, number > x1 && number < x2);
// console.log(`Число ${number} попадає в відрізок до ${x1} чи після ${x2} ?`, number < x1 || number > x2);


/* напиши скрипт який перевіряє можливість відкрити чат з користувачем
Для цього користувач повинен бути :
 -другом
 -онлайн
 -без режиму не турбувати
 */

// const isFriend = true;
// const isOnline = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd;
// console.log('Можливо відкрити чат ?', canOpenChat);

/* Скрипт перевірки підписки користувача при доступі до контенту
-- Є три типи підписки: free, pro, vip
-- Отримати доступ можуть тільки користувачі pro nf vip
*/
/* Якщо користувач vip чи pro, то доступ дозволенно,*/

// const sub = 'pro';
// const canAccessContent = sub === 'pro' || sub === 'vip';

// console.log('Доступ дозволенно', canAccessContent);



/* напиши скрипт обробки покупки в магазині ---- 2 й відос (1:04)
сумма покупки зберігається в змінній payment

Перед перевіркою вивисти повідомлення
"Загальна вартість заказа {число} кредитів. Перевіряєм кілкісьть доступних засобів на рахунку"

Якщо сума покупки не перевищує баланс
-вирахувати із балансу сумму покупки
-вивести повідомлкннь "На рахунку залишилось {число} кредитів"
-якщо сумма покупки більша за баланс:
-Вивести "На рахунку недостатньо коштів !"
-в кінці вивести "Операція здійсненна"
*/

// let balanse = 10000;
// const payment = 2000;

// console.log(`Загальна вартість заказа ${payment} кредитів. Перевіряєм кілкісьть доступних засобів на рахунку`);

// if (payment <= balanse) {
//     balanse -= payment;
//     console.log(`На рахунку залишилось ${balanse} кредитів`);
// } else{
//     console.log("На рахунку недостатньо коштів !");
// }

// console.log("Операція здійсненна");



// --------------------------------- 2-й відос (1:16) -----------------------------
/* Напиши скрипт підрахунку покупки зі знижкою в залежності від потраченної сумми за весь час (партнерська программа).
 -загальна сумма витраченного зберіг. в змінній totalSpent
 -сумма поточного платежу - payment
 -Скидка - discount

 -від 100 до 1000 - бронза, знижка 2%
 -від 1000 до 5000 - срібло, знижка 5%
 -більше 5000 - золото, знижка 10%
 -менше 100 - не партнер, знижка 0%

 -В результаті вивести повідомлення
  `Оформлюєм замовлення на сумму ${} зі знтжкою ${}`;
*/
// let totalSpent = prompt("кідькість потраченних коштів");
// totalSpent = Number(totalSpent);

// // let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent < 100) {
//   console.log(`не партнер, знижка 0%`)
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log("бронза, знижка 2%");
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log(`срібло, знижка 5%`);
//   discount = 0.05;
// } else {
//   console.log(`золото, знижка 10%`);
//   discount = 0.1;
// }

// payment -= payment * discount;

// console.log(`Оформлюєм замовлення на сумму ${payment} зі знтжкою ${discount * 100}%`);
 
// totalSpent += payment;
// console.log(`загальна сумма потраченна в магазині ${totalSpent}`)

// ----------------------- Масиви .... 3-й відос 46 хв

// порахувати загальну сумму покупки в корзині...

// const cart = [54, 28, 105, 78, 92, 17, 120];
// 2-зробити змінну total до циклу
// let total = 0;
// 1- перебрати масив
// for (let i = 0; i < cart.length; i += 1) {
  // console.log(cart[i]);
// 3-кожен елемент приплюсувати до total
//   total += cart[i];
// }
// console.log('total', total);

// Таж сама задачка, тільки з FOR OF
// for (const value of cart) {
//   total += value
// }
// console.log('total', total);

// Зразок, коли перевизначається змінна

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Mat.round(cart[i] * 1.1);
// }
// console.log(cart);

// Через FOR OF немає доступу до "i"



// ------------------------------------------------------------------
// Напиши скрипт, який підраховує сумму всіх парних чисел в масиві...

// const numbers = [5, 85, 54, 66, 74, 25, 46, 12, 5];
// let total = 0;
// змінна тотал
// 1- перебрати масив
// for (let i = 0; i < numbers.length; i += 1) {
  // console.log(numbers[i]);
// 2- на кожній ітераціївиділити всі парні числа
  // if (numbers[i] % 2 === 0) {
    // console.log('Парне число...');
    // 3-якщо парні.. сумма парних чисел total
    // total += numbers[i];
    
  // }
// }

// console.log('Сумма...', total);


// ---варіант з фор оф....
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       console.log('Парне число...');
//       total += number;
//     }
// }


// ------ ще один варік (від заперечення)
//   for (const number of numbers) {
//     if (number % 2 !== 0) {
//       console.log('цю ітерацію пропускаєм', number);
//       continue;
//     }
    
//     console.log('Парне число...');
//       total += number;
// }
// console.log('Сумма...', total);
  


// --------------------------------------------------- 3-й відос 1.13хв
// Напиши скрипт пошуку логіна
// Якщо логін відсутній, то виводим повідомлення `Користувавч з логіном ${user} відсутній`;
// Якщо логін знайденно, то виводим `Привіт ${user}`;

// const logins = ['nijnjldl', 'jfngtni', 'ppoliscute', 'jjgwkk604', 'jjfjj36egn'];
// const loginToFind = 'ppoliscute';
// let message = `Користувавч з логіном ${loginToFind} відсутній`;

// ----через for


// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log('login ', login);
//   console.log(`${login} === ${loginToFind}`, login === loginToFind );


//   if (login === loginToFind) {
//     message = `Привіт ${loginToFind}`;
//     break;
//   }
// }

// // ----чкркз for of ---- логіка break

// for (const login of logins) {
  
//   if (login === loginToFind) {
//     message = `Привіт ${loginToFind}`;
//     break;
//   }
// }

// // ----метод includes(); з тернарним оператором.

// const message = logins.includes(loginToFind) ? `Привіт ${loginToFind}` : `Користувавч з логіном ${loginToFind} відсутній`

// console.log(message);

// -------------------------------------------- 3-й відос 1.32 хв

// напиши скрипт пошуку свмого маленького числа в масиві, при умові, що числа унікальні, і не повторюються...

// const numbers = [32, 54, 23, 76, 12, 34,];
// let smoleNumber = numbers[0];

// console.log(smoleNumber);

// for (const number of numbers) {
//   if (number < smoleNumber) {
//     smoleNumber = number;
//   }
// }

// console.log(smoleNumber);

// ----------------------------------------------3-й відос 1.41 хв

// -Напиши скрипт, який обєднує всі єлементи масива в одне рядкове значення.
// -Елементів може буди довільна кількість. Елементів
// -нехай елементи в рядку будуть розділенні комою
// -потім через join()

// const friends = ['Mango', 'Poli', 'Kiwi', 'Ajax'];
// // let string = '';

// for(const frend of friends) {
//   string += frend + ',';
// }
// string = string.slice(0, string.length - 1);

// console.log(string)
// повинно вийти 'Mango,Poli,Kiwi,Ajax'

// ------------------АБО----------------
// const string = friends.join(',');
// console.log(string);

// ---------------------------------------------------3-й відос 1.49 хв
 
// Напиши скрипт який замінює регістер кожного символу на протилежний

// const string = "JavaScript";
// const leters = string.split('');
// let invertedString = "";
// // console.log(leters);

// for (const leter of leters) {
//   console.log(leter);

//   if (leter === leter.toLowerCase()) {
//     console.log('Ця буква в нижньому регістрі', leter);

//     invertedString += leter.toUpperCase();
//   } else {
//     console.log('ця буква в верхньому регістрі', leter);
//     invertedString += leter.toLowerCase();
//   }

// ---Інший варіант....
// invertedString += leter === leter.toLowerCase() ? leter.toUpperCase() : leter.toLowerCase();
// }
  
// console.log(invertedString);



// -----------------------------------------'SLUG' відос 3 на 2.00 хв
// робим Slug в URL із назви статї. Заголовок складається тільки з букв і пробілів.

// -нормалізуєм рядок
// -розбиваєм по словам
// -зшиваєм в строку з розділювачем

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// ---- Інший метод----
// метод чейнінг, або ланцюжки викликів методу...     --- 3-й відос 2.06 хв

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);


// -------------------------------------Метод .concat (зшивання двох і бвльше масивів)
// // Напши скрипт який рахує суму елементів двух масивів..
// const array1 = [5, 12, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }
// console.log(total);


// ---------------------------------- метод splice();  3-й відос 2.17хв
// робота з колекцією карточок в trello
// метод splice();
// -видалити
// -добавити
// -обновити

// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

// ----Видалення елементів (по індексу)...

// const cardToRemove = "card-3";
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.log(cards);

// -----Додавання (по індексу)....

// const cardToInsert = 'card-6';
// const index = 3;
// cards.splice(2, 0, cardToInsert);

// console.log(cards);

// ---- Обновлення (по індексу).....

// const cardToUpdate = 'card - 4'

// cards.splice(3, 1, cardToUpdate);

// console.table(cards);

// ПРАКТИКА  21.01.2023


// Напишіть через світч калькулятор
// Потрібно ввести перше число в prompt, потім математичну операцію
// Тоді ввести наступне число

// const number1 = Number (prompt("Enter first number"));
// const number2 = Number (prompt("Enter second number"));
// const operation = prompt("Enter operation");

// switch (operation) {
//   case "+":
//     console.log(number1 + number2);
//     break;
  
//   case "-":
//     console.log(number1 - number2);
//     break;
  
//   case "/":
//     console.log(number1 / number2);
//     break;
  
//   case "*":
//     console.log(number1 * number2);
//     break;
  
//   default:
// console.log( NaN )
// };

//Напишіть цикл, який виводить у консоль
//1. числа від max до min за спаданням
//2. Виведіть у консоль усіх парні числа від min до max
//3. За допомогою циклу for додайте всі парні числа від min до max
//const max = 90;
//const min = 33;

// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера

// Якщо користувач вводить "Admin",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"

//Пароль перевіряти так:
// Якщо введено пароль "I am admin",
// то вивести рядок "Hello!"
// інакше виводити рядок "Wrong password!"
//
// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум
//
// Напишіть через світч калькулятор
// Потрібно ввести перше число в prompt, потім математичну операцію
// Тоді ввести наступне число

// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Після введення число додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.

// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."

// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.
// (
// while
// do {
  
//   } while (condition);

//   let number = prompt("Enter number");
// let total = 0;

// while (number !== null) {
//   if (!isNaN(Number(number))) {
//     total += Number(number);
//   }

//   // total += Number(number);
//   number = prompt("Enter number");
// }

// console.log(total);
// )

// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt



// За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const salary = 1000;
// const tax = 0.05;
// let fullSalary = 0;
// let fullTax = 0;
// const period = 12;

// for (let i = 0; i < period; i += 1) {
//   fullSalary += salary - salary * tax;
//   fullTax += salary - salary * (1 - tax);
// }
// console.log(fullSalary);
// console.log(fullTax);




// Напишіть програму для перевірки чи є число простим чи ні
// const number = prompt ('Веедите число');
// let isPrime = true;

// for ( let i=2; i < number; i+=1) {
//     if ( number%i === 0) {
//         isPrime = false;
//         break;
//     }

// }

// console.log (number);
// console.log (isPrime);