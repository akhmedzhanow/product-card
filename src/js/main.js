const productCard = document.querySelector('.card');
const productCards = document.querySelectorAll('.card');
const changeColorCardButton = document.querySelector('.change-color-card');
const changeColorAllCardsButton = document.querySelector('.change-all-color-cards');
const openGoogleButton = document.querySelector('.open-google');
const outputConsoleLogButton = document.querySelector('.output-console-log');
const title = document.querySelector('.title');
const changeColorBtn = document.querySelector('.change-color-btn');

const redColor = '#FF5133';
const greenColor = '#6EFF75';

changeColorCardButton.addEventListener('click', () => {
    productCard.style.backgroundColor = redColor;
});

changeColorAllCardsButton.addEventListener('click', () => {
    productCards.forEach(card => {
        card.style.backgroundColor = greenColor;
    });
});

openGoogleButton.addEventListener('click', () => {
    window.open('https://www.google.com');
});

function outputConsoleLog(message) {
    alert(message);
    console.log(message);
};

outputConsoleLogButton.addEventListener('click', () => {
    outputConsoleLog('ДЗ №6');
});

title.addEventListener('mouseenter', () => {
    console.log(title.textContent);
});


changeColorBtn.addEventListener('click', () => {
    changeColorBtn.classList.toggle('color-red');
});