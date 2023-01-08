// ==Робота з числами  ===  51.46 хв першого відосу


// Метод   -   Number.parseInt()    -виводить тільки число.
let elementWidth = '2568px';
elementWidth = Number.parseInt(elementWidth);

console.log('Width - ', elementWidth);


// Метод   -   Number.parseFloat()    -виводить дробне число.
let elementHight = '15.336px';
elementHight = Number.parseFloat(elementHight);

console.log("Hight -", elementHight);


// Метод  --  tuFixed  --  визивається на самому числі
let salary = 23.9466651;
salary = salary.toFixed(2);
salary = Number(salary);
// ---або----
// матрошка :)
// salary = Number(salary.toFixed(2))
console.log(salary);
// console.log(Number(salary.toFixed(2)))


// Обєкт   --  Math  --

// Приведенння до степені   --  Math.pow()  --  аналог   --  **  --
const base = 5;
const power = 5;

const result = Math.pow(base, power);
console.log(result);
// console.log(base ** power);

// Генерація псевдовипадкових чисел  --  Math.random()  --  від "0"  до "1"
console.log(Math.random());


// Генерація псевдовипадкових чисел  --  Math.random()  --  в діапазоні від" " до " ".
const max = 80;
const min = 10;

console.log(Math.random() * (max - min) + min);

// Округлення числових данних  -- Math.round()  --

const max2 = 80;
const min2 = 10;
const result2 = Math.random() * (max2 - min2) + min2;

console.log(Math.round(result2))
// або трішки інший варіант
const max3 = 80;
const min3 = 10;
const result3 = Math.round(Math.random() * (max3 - min3) + min3);

console.log(result3);