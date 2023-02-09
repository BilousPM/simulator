/* массив.forEach(function callback(element, index, array) {
 * // Тіло колбек-функції
 *});
*
*- Поелементо перебирає масив.
*- Викликає колбек-функцію для кожного елемента масиву.
*- Нічого не повертає.
*/

// const numbers = [4, 10, 39, 54, 3];


// numbers.forEach(function (number, index, array) {
//     console.log('Number,', number);
// });
 
// console.log(numbers);

/*--------------------   .map   --------------------
* поелементно перебирає масив
* не змінює оригінальний масив
* повертає новий масив такоїж довжини
*/

// const numbers = [4, 10, 39, 54, 3];

// // const doubleNumbers = numbers.map(function (number) {
//     // або стрілкова функція :
// const doubleNumbers = numbers.map((number) => {
//     console.log(number);

//     return number * 3;
// });

// console.log(numbers);
// console.log(doubleNumbers);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Polii', timePlayed: 356, points: 36, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 250, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 120, points: 95, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 74, online: true },
// ];



// const playerNames = players.map((player) => {
//     console.log(player);
//     return player.name;
//  });
// console.log('playerNames', playerNames)

// теж саме, тільки спрощенний запис.

// const playerNames = players.map(player => player.id);
// console.log(playerNames);

// const updatePlayers = players.map(player => {
//     return {
//         ...players,
//         points: player.points * 1.1,
//     };
// });
// console.table(updatePlayers);

// Або простіше.....

// const updatePlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1,
// }))
    
// console.table(updatePlayers);
// console.log(updatePlayers);

// const playerUpdateId = 'player-3';

// const UpdateIdPlayer = players.map(player => {
//     if (playerUpdateId === player.id) {
//         console.log ('ось і знайшли ')
    
//       return {
//         ...player,
//         timePlayed: player.timePlayed + 100,
//         }
//     }
//   return player;
// })

// console.table(UpdateIdPlayer);
 
// const UpdateIdPlayer = players.map(player =>
//   playerUpdateId === player.id ? { ...player, timePlayed: player.timePlayed + 100, } : player);

// console.table(UpdateIdPlayer);


//  --------------------------   .filter    ----------------------


// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Polii', timePlayed: 356, points: 36, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 250, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 120, points: 95, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 74, online: true },
// ];


// const onlinePlayars = players.filter(player => player.online);
// console.table(onlinePlayars);

// const noOnlinePlayars = players.filter(player => !player.online);
// console.table(noOnlinePlayars);

// const coolPlayars = players.filter(player => player.timePlayed > 220);
// console.table(coolPlayars)

// ------------------------   .Find   -----------------------
// пошук унікального обєкту в масиві перший підходящий.

// const numbers = [2, 5, 5, 66, 12, 23];
// const number = numbers.find(number => number > 18);
// console.log(number)

// const playerIdToFind = 'player-4';

// const playerWithId = players.find(player => player.id === playerIdToFind);
// console.log(playerWithId)

// ------- Напишим функцію пошуку користуввача по "ID"   -----------

// const findPlayerByID = (allPlayers, playerId) => {
//     return allPlayers.find(player => player.id === playerId);
// };

// переробити на деструктурізацію
//
// console.log(findPlayerByID(players, 'player-3'));
// console.log(findPlayerByID(players, 'player-1'));


// ------------------ .every     .some  --------------
// every - коли всі


// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline', isAllOnline);

// const isOllCoolPlayer = (allPlayers, playerPoints) => {
//     return allPlayers.every(player => player.points > playerPoints);
// };

// console.log('it is cool players', isOllCoolPlayer(players, 25));

// .some  - коли хочаб один.....

// const isAllOnline = players.some(player => player.online);
// console.log(isAllOnline);


// ---------------------- .reduce()  -----------------

// const numbers = [5, 7, 32, 25, 65];

// const total = numbers.reduce((acc, number) => {return acc + number}, 0);
// console.log(total);


// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//     return total + value;
//  }, 0);
// console.log(totalSalary);
// -------------------------------------------------------------------------------

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Polii', timePlayed: 356, points: 36, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 250, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 120, points: 95, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 74, online: true },
// ];

// const totalTimePlayed = players.reduce((total, player) => total + player.timePlayed, 0);
// console.log(totalTimePlayed);

// ----------------------- .sort () ---------------

// const numbers = [1, 3, 65, 54, 34];
// numbers.sort();
// console.table('numbers', numbers);
// --------------------------------------------
// const num = [...numbers].sort((curEl, nextEl) => {
//     return curEl - nextEl;
// });
// console.log(num);


// const letters = ['a', 'h', 'Tr', 'd', 'kj'];
// letters.sort();
// console.log('letters', letters);

// ------------------------------   .flat()
// розглажує масив, до вказанної глибини...

// const array = [1, 2, [4, [5,[3], 6], 7, 8], 9, 10];

// console.log(array.flat(3).sort((a, b) => a - b));




// мутуючі та не мутуючі методи масиву


class StringBuilder{
constructor(initialValue) {
  this.value = initialValue
}

    getValue() {
        console.log(this.value)
    
    }
    
    padEnd(str) {
      console.log(str + this.value)
  }
  
  padStart(str) {
  }
  
  padBoth(str){}
}


// Change code above this line
const builder = new StringBuilder(".");
builder.getValue('hg')
console.log(builder.getValue()); // "."
builder.padStart("551516");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
