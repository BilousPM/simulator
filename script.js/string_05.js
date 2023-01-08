
// кількість символів в рядку   --  .length  --
const message = "Рядок, в якому 26 символів";
console.log(message.length);

// Конкатинація рядка...  --  ""  +  ""

const firstName = 'Petro';
const lastName = 'Bilous';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// ==========шаблонні рядки   -- template strings  -- ` ${} `==============

const goods = 'автомобіль';
const amount = 1;

const orderMesage = `${firstName} ${lastName} готовий купити ${amount} ${goods} !!`;

console.log(orderMesage);

// Нормалізаціяя...   -- .toLowerCase(), toUpperCase()

let brand = 'SamsuNG';
// brand = brand.toLowerCase();
// brand = brand.toUpperCase();

// вибір певного елемента (відрізае все крім..(1))  -- .slice()  --   -- [] -- індекс радка (символ)  1.40 хв першого відоса

brand = brand[0] + brand.slice(1).toLowerCase();

console.log(brand);



// Пошук а рядку... з методом inccludes()

const blaclistWord1 = 'спам';
const blaclistWord2 = 'розпродажа';

const string1 = 'Привіт я принц Абдул, це  не спам, ти виграв міліон';
const string2 = 'отам сьогодні була РОЗПРОДАЖА  трусів';
const string3 = 'рекламна компанія #fatlivesmatter';

console.log(string1.toLowerCase().includes(blaclistWord1));
console.log(string1.toLowerCase().includes(blaclistWord2));

console.log(string2.toLowerCase().includes(blaclistWord1));
console.log(string2.toLowerCase().includes(blaclistWord2));

console.log(string3.toLowerCase().includes(blaclistWord1));
console.log(string3.toLowerCase().includes(blaclistWord2));


// Оператори порівняння >,<,    повертає буль
// операнти з ліва, та операнти зправа обовязково при порівнянні приводяться до числа..

console.log('10' > 5);

// оператори порівняння
// не строгі : == і !=
// строгі: === і !==