// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера
// Якщо користувач вводить "Admin",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"

// Пароль перевіряти так:
// Якщо введено пароль "I am admin",
// то вивести рядок "Hello!"
// інакше виводити рядок "Wrong password!"

/*const login = "Admin";
const password = "I am admin";

const userLogin = prompt('pleas enter your login :');
console.log(userLogin);
if (userLogin === login) {
  const userPssword = prompt('pleas enter your password :')
  if (userPssword === password) {
    console.log('Hello')
  } else {console.log("Wrong password!")}
} else if (userLogin === null || userLogin === '') {
  console.log("Cancel")
} else {console.log("I don't know you")}
*/



// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

/*
const language = prompt('Enter lenguage of programing')

switch (language?.toLocaleLowerCase()) {
  case 'PHP':
    console.log('PHP Расмус Лердорф')
    break;
  case 'C#':
    console.log('C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота')
    break;
  case 'swift':
    console.log('Swift Кріс Латтнер')
    break;
  case 'js':
    console.log('JS Брендан Ейх')
    break;
  case 'java':
    console.log('Java Джеймс Гослінг')
    break;
  case 'python':
    console.log('Python Гвідо ван Россум')
    break;
    default:
        console.log("Такої мови немає")
};
*/




// Напишіть через світч калькулятор
// Потрібно ввести перше число в prompt, потім математичну операцію
// Тоді ввести наступне число

/*
let numberOne = Number(prompt('number one:'));
let operator = prompt('enter operator:')
let numberTwo = Number(prompt('number two:'));

switch (operator) {
  case '+':
    console.log(numberOne + numberTwo);
    break;
  case '-':
    console.log(numberOne - numberTwo);
    break;
  case '*':
    console.log(numberOne * numberTwo);
    break;
  case '/':
    console.log(numberOne / numberTwo);
    break;
  default:
}
*/


//Напишіть цикл, який виводить у консоль
//1. числа від max до min за спаданням
//2. Виведіть у консоль усіх парні числа від min до max
//3. За допомогою циклу for додайте всі парні числа від min до max

// const max = 90;
// const min = 33;

// for (let i = max; i > min; i -= 1) {
//   console.log(i)
//   if (i % 2 === 0) {
//     console.log(i)
//   }
  // console.log(i)
// }





// Напишіть програму, щоб обертати рядок введений в propmt у зворотньому напрямку
// При цьому потрібно залишити першу літеру на своєму місці



// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Після введення число додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."
// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.



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


// Напишіть програму для перевірки чи є число простим чи ні