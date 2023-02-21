Anna
  2 ч назад
// Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';





Anna
  2 ч назад
// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2


Anna
  2 ч назад
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };
// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");


Anna
  1 ч назад
// Напишіть функцію makeCounter, яка повертає об'єкт із такими методами
// increment - збільшує counter на 1
// decrement - зменшує counter на 1
// getValue - повертає значення counter


Anna
  1 ч назад
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається


Anna
  1 ч назад
Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.


Anna
  1 ч назад
Виправте помилки, щоб код працював
const jeans = {
  price: 500,
  showPrice() {
    console.log(jeans.price);
  },
};
jeans.showPrice();
const phone = {
  price: 1000,
};
phone.showPrice = jeans.showPrice;
phone.showPrice();


Anna
  1 ч назад
/ Виправте помилки, щоб код працював
const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  },
};
function callAction(action) {
  action();
}
callAction(product.showPrice);


Anna
  1 ч назад
Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт laptop
function showPrice() {
  console.log(this.price);
}
const laptop = {
  price: 1500
}


Anna
  1 ч назад
/ Даний об'єкт counter. Напишіть до нього getter та setter
const counter = {
  _count: 3,
}


Anna
  36 мин назад
Створіть об'єкт calculator із такими методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() ділить збережені значення та повертає результат
// const calculator = {
//   read(a, b) {},
//   sum() {},
//   min() {},
//   mult() {},
//   div() {},
// };


Anna
  29 мин назад
parseString(originalString) {
    const [firstOperand, operator, secondOperand ] = originalString.replaceAll(" ", "").split(/(\D)/);
    return {
      firstOperand,
      secondOperand,
      operator,
    };
  }


Anna
  22 мин назад
// Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій
// Типів транзакцій лише два.
// Можна покласти або зняти гроші з рахунку
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
//Кожна транзакція це об'єкт з властивостямиЖ id, type, amount
const account = {
  //поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [],
  //Метод створює та повертає об'єкт транзакцій
  //Приймає суму та тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },
  //Метод відповідає за додавання суми до балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  deposit(amount) {},
  //Метод відповідає за зняття суми з балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {},
  //Метод повертає поточний баланс
  getBalance() {},
  //Метод шукає та повертає об'єкт транзакції по id
  getTransactionDetails(id) {},
  //Метод повертає кількість засобів певного типу
  //транзакції з історії транзакцій
  getTransactionType(type) {},
};