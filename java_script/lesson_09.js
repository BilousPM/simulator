
// ------------- NOTIFICATION-------------
// const NOTIFICATION_DELAY = 3000;

// let timeoutId = null;

// const refs = {
//     notification: document.querySelector('.js-alert'),
// };

// refs.notification.addEventListener('click', onNotificationClick);

// showNotification();

// function onNotificationClick() {
//     hideNOtification();
//     clearInterval(timeoutId);
// }

// function showNotification() {
//     refs.notification.classList.add('is-visible');

//    timeoutId = setTimeout(()=> {
//         console.log('closed alert');
//         hideNOtification();
//     }, NOTIFICATION_DELAY);

// }

// function hideNOtification() {
//     refs.notification.remove('is-visible');
// }



//-------------------Subscription-----------
// const refs = {
//     modal: document.querySelector('#sunscription-modal'),
//     subscribeBTN: document.querySelector('.btn-primary')
// };

// const PROMT_DELAY = 1000;
// const MAX_PROMT_ATTEMMPTS = 3;
// let promptCounter = 0;
// let hasSubscribet = false;

// const modal = new BSN.Modal('#sunscription-modal');

// openModal();

// refs.modal.addEventListener('hide.bs.modal', () => {
//     openModal();
// });

// refs.subscribeBTN.addEventListener('click', onSubscribenBtnClick)

// function openModal() {
//     if (promptCounter === MAX_PROMT_ATTEMMPTS || hasSubscribet) {
//         console.log('Максимальна кількість набридань, або людина підписалась');
//         return;
//     }

//     setTimeout(() => {
//     console.log('відкриваєм модалку');
//         modal.show();
//         promptCounter += 1;
//     }, PROMT_DELAY)
// }

// function onSubscribenBtnClick() {
//       hasSubscribet = true;
//     modal.hide();
// }


// --------------------DATE----------------------
// const date = new Date();
// console.log(date
// );

// setTimeout(() => {
//     const date2 = new Date();
//     console.log(date2 - date);
// }, 3000)


// Створюємо таймер-----
// const refs = {
//     startBtn: document.querySelector('button[data-action-start]'),
//     stopBtn: document.querySelector('button[data-action-stop]'),
//     clockface: document.querySelector('.js-clockface')
// };

// const timer = {
//     intervalId: null,
//     isActive: false,
//     start() {
//         if(this.isActive) {
//             return
//         }
//         const startTime = Date.now();
//         this.isActive = true;
       
//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const time = getTimeComponents(deltaTime);
           
//             updateClockface(time);
//         }, 1000);
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     }
// };


// refs.startBtn.addEventListener('click', () => {
//     timer.start()
// });

// refs.stopBtn.addEventListener('click', () => {
//     timer.stop();
// })

// function updateClockface({ hours, mins, secs }) {
//     refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// function pad(value) {
//     return String(value).padStart(2, '0');
// }



// function getTimeComponents(time) {
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return {hours, mins, secs}
// }


// ----------------Проміси --------------------
const promis = new Promise((resolve, reject) => {
    const canFulfild = Math.random() > 0.5;

    setTimeout(() => {
        if (canFulfild) {
        resolve('Ok')
    }

    reject('Error')

   }, 1000)
});
promis.then(
    result => {
    console.log(result);
},
    error => {
        console.log(error);
})
