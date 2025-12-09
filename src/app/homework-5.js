//1.

function showCityTemperature(city, temperature) {
  console.log(`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию`);
}

showCityTemperature("Астрахань", 13);

//2.

const SOUND_SPEED = 343;

function checkSpeed(speed) {
  if (speed >= SOUND_SPEED) {
    console.log("сверхзвуковая скорость");
  } else {
    console.log("дозвуковая скорость");
  }
}

checkSpeed(400)

//3.

const productName = "Мясо";
const productPrice = 900;

function buyProduct(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${productPrice - currentBudget}, пополните баланс`);
  }
}

buyProduct(700)

//4.

function squareNumber(num) {
  console.log(num * num);
}

squareNumber(5);

//5.

var name = "Галим";
let age = 27;
const city = "Астрахань";