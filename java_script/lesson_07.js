const coordsEl = document.querySelector('.js-coords');
let mouseMoveMessage = 0;

const trotleSumm = _.throttle(summ, 200);

const summa = window.addEventListener('mousemove', trotleSumm )

function summ() {
    mouseMoveMessage += 1;
    coordsEl.textContent = `Кількість викликів функцій : ${mouseMoveMessage}`
}
