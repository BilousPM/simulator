// ----------------------- Масиви ------------
 
// const frends = ['Mango', 'Kiwi', 'Poli', 'Ajax'];
// console.log(frends);
// console.log(frends.length);
// console.table(frends);

// ------------останній індекс -------------

// const lastIndex = frends.length - 1;
// console.log(lastIndex);

// --------- звернення до елементів мпсиву ------------
// console.log(frends[2]);

// ---------------- перевизначення едлемента масиву -----
// frends[3] = "frends";
// console.log(frends);

// ---- Примітиви {передаються і порівнюються по значенню} ---

// let c = 10;
// let d = c;

// console.log('c', c);
// console.log('d', d);

// c = 40;

// console.log('c', c);
// console.log('d', d);


// ---- Масиви (складнітипи данних) {передаються по посиланню, порівнюються по адрессі}-----

// const a = [1, 2, 3, 4];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[2] = 550;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);


// --------------------- Ітерація масиву --------- "FOR"
// const frends = ['Mango', 'Kiwi', 'Poli', 'Ajax'];
// // console.log(frends);
// // const lastIndex = frends.length - 1;

// // for (let i = 0; i <= lastIndex; i += 1) {
// //     console.log(i);
// //     console.log(frends[i]);
// // }

// --------------------- Ітерація масиву --------- "FOR  OF"
// використовується, коли не потрібен індекс елемента, та не потріно змінювати елемент масиву.

// for (const friend of frends) {
//   console.log(friend)  
// }