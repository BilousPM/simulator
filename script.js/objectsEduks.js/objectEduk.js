



const playlist = {
    name: 'Rok musik',
    tracks: ['track-1', 'track-1', 'track-1'],
    raiting: 5,
    trackCount: 3,
}

// добавлення властивості в обєкт
playlist.qwe = 5;

const propertyName = 'tracks';
console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.raiting);
// деструктуруємо....
const { name, tracks, raiting, trackCount, qwe} = playlist
console.log(tracks);
console.log(raiting)

// -- або 
console.log(playlist['tracks']);
console.log(playlist['trackCount']);

// -- коли ключ зберігається в змінній
console.log(playlist.propertyName);
console.log(playlist[propertyName]);

// ---------короткий запис Властивостей-------
const name1 = 'Mango'
const userName = "Policarbonat"

// const signupData = {
//     name1: name1,
//     userName: userName,
// }
// console.log(signupData);

// якщо імя властивості такеж саме як імя змінної, значення, то можна так =>

const signupData = {
    name1,
    userName,
}
console.log(signupData);

// ---------  Обчислювані властивості  -------------------------

// <input name="color" value="tomato">

const inputName = "color";
const inputValue = "tomato"
//  для того щоб зробити з змінної ключ потрібно :

const colorPickerData = {
    [inputName]: inputValue,
   
}
console.log(colorPickerData);


// --------------------  Ссилочні данні  -------------------

const a = { x: 1, y : 2 };
const b = a;

console.log(a === b);
    
// в данному випадку вони не рівні
console.log([] === []);