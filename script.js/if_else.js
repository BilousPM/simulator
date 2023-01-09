//  Оператор розгалудження -- "if" --

if (5 > 6) {
    // якщо true, то тіло виконується.
    console.log('Привіт');
}
console.log('Далі')



// Оператор розгалудження --"if....else" --

if (5 > 30) {
    console.log('помідори');
} else {
    console.log('огірки');
};



// Оператор розгалудження --"else....if" --

const salery = 500;

if (salery < 500) {
    console.log('бідолага')
} else if (salery >= 500 && salery <= 2000) {
    console.log('може бути')
} else if (salery > 2000 && salery < 3000) {
    console.log('Айтішнік')
} else if (salery > 3000) {
    console.log('босс')
} else {
    console.log('Team Lieder')
}



// Тернарний оператор  --  ? .... :  -- (для простих записів, тільки два варіанти.


const balans = 100;
const message = balans >= 0 ? 'позитивний баланс' : 'негативний баланс';

console.log(message);