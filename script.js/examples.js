/* наптши скрипт, який провіряє входження числа в відрізок позначенний x1 і x2
до x1
Після x2
від x1 до x2
До x1 після x2*/


const x1 = 10;
const x2 = 30;
const number = 50;

console.log(`Число ${number} попадає в відрізок до ${x1} ?`, number < x1);

console.log(`Число ${number} попадає в відрізок після ${x2} ?`, number > x2);
console.log(`Число ${number} попадає в відрізок від ${x1} до ${x2} ?`, number > x1 && number < x2);
console.log(`Число ${number} попадає в відрізок до ${x1} чи після ${x2} ?`, number < x1 || number > x2);


/* напиши скрипт який перевіряє можливість відкрити чат з користувачем
Для цього користувач повинен бути :
 -другом
 -онлайн
 -без режиму не турбувати
 */

const isFriend = true;
const isOnline = true;
const isDnd = false;

const canOpenChat = isFriend && isOnline && !isDnd;
console.log('Можливо відкрити чат ?', canOpenChat);

/* Скрипт перевірки підписки користувача при доступі до контенту
-- Є три типи підписки: free, pro, vip
-- Отримати доступ можуть тільки користувачі pro nf vip
*/
/* Якщо користувач vip чи pro, то доступ дозволенно,*/

const sub = 'pro';
const canAccessContent = sub === 'pro' || sub === 'vip';

console.log('Доступ дозволенно', canAccessContent);
