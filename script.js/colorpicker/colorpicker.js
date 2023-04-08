const colors = [
    { hex: '#FF69B4', rgb: '255, 105, 180' },
    { hex: '#FF8C00', rgb: '255, 140, 0' },
    { hex: '#FFFF00', rgb: '255, 255, 0' },
    { hex: '#FF00FF', rgb: '255, 0, 255' },
    { hex: '#8A2BE2', rgb: '138, 43, 226' },
    { hex: '#DAA520', rgb: '218, 165, 32' },
    { hex: '#800000', rgb: '128, 0, 0' },
    { hex: '#00FFFF', rgb: '0, 255, 255' },
    { hex: '#808000', rgb: '128, 128, 0' },
    { hex: '#C0C0C0', rgb: '192, 192, 192' },
    { hex: '#0000FF', rgb: '0, 0, 255' },
    { hex: '#708090', rgb: '112, 128, 144' },
    { hex: '#000080', rgb: '0, 0, 128' },
];

//1 - Створюємо динамічну розмітку....

const palettContainer = document.querySelector('.js-palette');
const cardMarkup = createColorCardsMarking(colors);

palettContainer.insertAdjacentHTML('beforeend', cardMarkup)

function createColorCardsMarking(colors) {
   return markup = colors.map(({hex, rgb}) => {
       return `
       <div class="color-card">
          <div
           class="color-swatch"
           data-hex="${hex}"
           data-rgb="${rgb}"
           style="background-color:${hex}"
          ></div>
          <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
          </div>
        </div>
        `;
   })
    .join('');
    
}

// 2 - при кліку на колір, додаємо на боді

palettContainer.addEventListener('click', hendleContainerClick);
    
    
function hendleContainerClick(e) {
    const isColorSwatchEl = e.target.classList.contains('color-swatch');    

        if (!isColorSwatchEl) {
            return;
    }

    const swatchEl = e.target;
    const parentColorCard = swatchEl.closest('.color-card');
       
    removeActiveCardClass();
    addActiveCardClass(parentColorCard);
    setBodyBgColor(swatchEl.dataset.hex);
};

function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
};

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');
     if(currentActiveCard) {
     currentActiveCard.classList.remove('is-active')
    }
};

function addActiveCardClass(card) {
    card.classList.add('is-active');
};



// const parentColorCard = swatchEl.parentNode;
// contains() - метод, що перевіряє наявність классу в елементі;
// .parentNode - показує батька улумента.(хранить ссилку на батька);
// .closest('selector') - іде вверх по вложенностях, до вказанного селектораж
// .nodeName - властивість елемента події (event.target.nodeName);
// Java Script guard Clauses - Патерн:"якщо не влаштовує, виходим (if(!'true'){return};
// Оператор "?" - заміняє в деяких випадках if (Відос репети М:7, З:1 (39 хв));
// const selElem = new Set(); -набір унікальних елементів;