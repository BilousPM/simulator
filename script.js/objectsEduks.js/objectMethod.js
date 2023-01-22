
// ---------  Методи обєкта, і this при зверненні до властивостей в методах  ----


// const playlist = {
//     name: 'Rok musik',
//     tracks: ['track-1', 'track-1', 'track-1'],
//     raiting: 5,
//     //trackCount: 3,// цю властивість вираховуємо за допомогою функції тому вона не потрібна
//     // getName: function () {
//     //     console.log('Так, це getName :)')
//     // }
//     // **** Сучасний синтаксис *** це  "Метод обєкту" (це самі звичайні функції)
//     getName(a) {
//         console.log('It is method of the object', a)
//     },

//     changeName(newName) {
//         console.log("this в середині :", this); 
//         this.name = newName;
//     },

//     addTrack(track) {
//         this.tracks.push(track);
//         this.trackCount = this.tracks.length; //не зовсім правельно, погано так робити, краще через метод обєкту.
//     },

//     updateRaiting(newRating) {
//         this.raiting = newRating;
//     },

//     getTrackCaunt() {
//         return this.tracks.length;
//     },
// }


// // playlist.getName(555);
// playlist.changeName('Нове імя');
// // console.log(playlist);

// playlist.addTrack('Новий трек');
// playlist.addTrack('Новий трек');
// playlist.addTrack('Новий трек');
// // console.log(playlist);

// playlist.updateRaiting(7.65);
// console.log(playlist);

// ;
// console.log(playlist.getTrackCaunt())



// ---------------------- Перебір обєктів   'FOR...IN'  -------------------
/*
const book = {
    title: "The Last Kingdom",
    author: "B. Covenwell",
    rating: 8.38,
}

let totalFeedback = [];

const keys = Object.keys(book);   // дістає всі ключі (властивості) з обєкта
console.log(keys);

for (let key of keys) {
    console.log(key);
    console.log(book[key]);
}

const values = Object.values(book);    // дістає всі значення властивостей обєкта
console.log(values);

for (const value of values) {
    totalFeedback.push(value);
}
console.log(totalFeedback);
*/

// -------------------  Робота з масивом обєктів  --------------------

const friends = [
    { name: "Mango", online: false },
    { name: "Kiwi", online: true },
    { name: "Poly", online: true },
    { name: "Ajax", online: false },
];

console.table(friends);

/* for (const friend of friends) {
     console.log(friend);

     friend.newProp = 555;
 }

 console.table(friends); */

// задачка : Шукаєм користувача по імені....

const findFriendByName = function (allFriends, friendName) {
    for (const friend of friends) {
        // console.log(friend);
        // console.log(friend.name);

        if (friend.name === friendName) {
            return "Helo my diar Friend :)";
        }
    };

    return "Unfortunately :(";
};


// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


const getAllNames = function (allFriends) { };

//задачка: із нашого масиву друзів отримати всі імена друзів... Відос 5; 1.25 хв.





// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (let key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys)
// console.log(values)