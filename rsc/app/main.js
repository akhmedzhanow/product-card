// Сменить цвет всех карточек.

const productCards = document.querySelectorAll('.product-card__list')
const changeColorCardsButton = document.querySelector('#change-all-card-color')
const colorCadedBlue = '#5F9EA0'

changeColorCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = colorCadedBlue)
})

// Сменить цвет карточки

const firstProductCard = document.querySelector('.product-card__list')
const changeColorFirstCardButton = document.querySelector('#change-color-card-mousse')
const colorCitrine = '#E4D00A'

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = colorCitrine;
})

// Открыть страницу Google

const openGoogleButton = document.querySelector('#open-page-google')
const googleURL = ('https://google.com')

openGoogleButton.addEventListener('click', () => {
  window.open(googleURL)
})

// вывести сообщение в консоль log

const outputLogButton = document.querySelector('#output-console-log')

outputLogButton.addEventListener('click', () => outputConsoleLogMessage('ДЗ №04'))

function outputConsoleLogMessage(message) {
  alert(message)
  console.log(message)
}

// Изменение цвета при нажатии кнопки


const colorChangeButton = document.querySelector('#change-color-button');

colorChangeButton.addEventListener('click', () => {
  changeColorButton()
})

function changeColorButton() {
  colorChangeButton.classList.toggle('bg-citrine');
}

// Вывод названия главной заголовки в консоль лог при наведении

const mainTitle = document.querySelector('.product-catalog__title');
mainTitle.addEventListener('mouseover', () => {
  outputConsoleLogTitle('Выбери свой продукт')
});

function outputConsoleLogTitle(message) {
  console.log(message);
}