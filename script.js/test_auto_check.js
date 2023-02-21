// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];

// const worker = Object.create(students);
// console.log(students.isPrototypeOf(worker));

// console.log(worker)

// // const sortByIncreasingPoints = [...students].sort((a, b) => b.score - a.score).map(student => student.name)

// // console.log(sortByIncreasingPoints)

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

class Student{
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
 
};

const mango = new Student({ name: 'Yrick', email: "bilous@gmail.com"})
console.log(mango)

const Matvii = new Student({name: 'щлпкщкл', email: " og,ro,wa@ovdfsgf"})
console.log(Matvii)









// Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.




//
// / Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.


// function camelize(str, callback) {
//   return str.split('-').map((item, index) => index === 0 ? item : callback(item)).join('');
// }

// function chengToUpper(string) {
//   return string[0].toUpperCase()+string.slice(1)
// }

// console.log(camelize("background-color", chengToUpper))



// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';