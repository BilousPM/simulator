const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', targetButtonClickHandler);

// патерни неймінгу колбек функцій
// -handle: hendleEvent or hendleSubjectEvent

function handleTargetButtonClick() {
    console.log('click')
}

// патерни неймінгу колбек функцій
// -handler: eventHendler or subjectEventHendler
function targetButtonClickHandler() {
    console.log('click')
}


// патерни неймінгу колбек функцій
// on: on or onSubjectEvent
function onTargetButtonClick(event) {
    console.log('click')
}


// function logMessage() {
//     console.log('Клік по цільовій кнопці');
// }

addListenerBtn.addEventListener('click', (event) => {
    console.log("вішає слушателя події");
    targetBtn.addEventListener('click', onTargetButtonClick)
})

removeListenerBtn.addEventListener('click', (event) => {
    console.log('знімає слушателя')

    targetBtn.removeEventListener('click', onTargetButtonClick)
})



