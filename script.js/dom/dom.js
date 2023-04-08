// import products from '../../data/products.js';






// const navEl = document.querySelector('.site-nav__link');
// console.log(navEl);
// console.dir(navEl);

// const navItemEl = document.querySelector('.site-nav');

// console.log(navItemEl.classList);

// navItemEl.classList.add('super_cool');
// navItemEl.classList.remove('site-nav');
// navItemEl.classList.replace('super_cool', 'qwerty');
// console.log(navItemEl.classList.contains('qwerty'));

// console.log(navItemEl.children[1]);
// console.log(navItemEl.firstElementChild);
// console.log(navItemEl.lastElementChild);

// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'It is page title'
// console.log(titleEl);

// document.body.appendChild(titleEl);// добавляє в кінець

// console.log(document.body)

// const imageEl = document.createElement('img');
// imageEl.src = "https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_640.jpg";
// imageEl.alt = 'Space';
// imageEl.width = 320;

// const heroEl = document.querySelector('.hero');

// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

// heroEl.append(titleEl, imageEl);
// // heroEl.prepend(titleEl, imageEl);

// // document.body.appendChild(imageEl)

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Profiles';
// navLinkEl.href = '/profile';

// navItemEl.appendChild(navLinkEl);
// // console.log(navItemEl);

// const navEl = document.querySelector('.site-nav');
// // navEl.appendChild(navItemEl);
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.insertBefore(navItemEl, navEl.children[1]);
// console.log(navEl)




// const colorPickerOptions = [
//     { label: 'red', color: '#f44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// const option = colorPickerOptions[2];

// const buttonEl = document.createElement('button');
// buttonEl.type = "button"
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// console.log(buttonEl);


//створення масиву кнопок

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map(option => {
//    const buttonEl = document.createElement('button');
//     buttonEl.type = "button"
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl
// });

// console.log(elements);

// colorPickerContainerEl.append(...elements);


//колекція за допомогою функції


//  const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const makeColorPickerOptions = (options) => {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.type = "button"
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;

//         return buttonEl
//     });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
//  colorPickerContainerEl.append(...elements);


//створення масиву кнопок старим способом

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i];

//     const buttonEl = document.createElement('button');
// buttonEl.type = "button"
// buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
    
//     elements.push(buttonEl);

// }
// console.log(elements);

// colorPickerContainerEl.append(...elements);




/*
console.log(products);

const prodactsContainerEL = document.querySelector('.js-products');

const makeProductCard = ({name, description, price}) => {
   const productEl = document.createElement('article');
productEl.classList.add('product');

const nameEl = document.createElement('h2');
nameEl.textContent = name;
nameEl.classList.add('product__name');

const descrEl = document.createElement('p');
descrEl.textContent = description;
descrEl.classList.add('product__descr');


const priceEl = document.createElement('p');
priceEl.textContent = `Ціна : ${price} кредитів`;
    priceEl.classList.add('product__price'); 
    
    productEl.append(nameEl, descrEl, priceEl);

    return productEl;
}
console.log(makeProductCard(products[0]));

const elements = products.map(makeProductCard);//передаєм колбек

console.log(elements);
prodactsContainerEL.append(...elements);
*/

// const titleEl = document.querySelector('.title');
// console.log(titleEl);
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);
// titleEl.innerHTML = '<a href="">Це посилання</a>';
// titleEl.innerHTML = '';// очищує вміст тегу..

// titleEl.insertAdjacentHTML('beforebegin', '<a href="">Це посилання</a>')
// titleEl.insertAdjacentHTML('afterend', '<a href="">Це посилання</a>');
// titleEl.insertAdjacentHTML('afterbegin', '<a href="">Це посилання</a>');
// titleEl.insertAdjacentHTML('beforeend', '<a href="" class="title__link">Це посилання</a>');


