//1.

function getCityTemperature (city, temperature) {
  console.log(`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию`);
}

getCityTemperature("Астрахань", 13);

//2.

const soundSpeed = 343;

function checkSpeed (speed) {
  if (speed > soundSpeed) {
    console.log("сверхзвуковая скорость");
  } else {
    console.log("дозвуковая скорость");
  }
}

checkSpeed(350)

//3.

const productName = "Мясо";
const productPrice = 900;

function buyMeat (currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${productPrice - currentBudget}, пополните баланс`);
  }
}

buyMeat(700)

//4.

function squareNumber(num) {
  console.log(num * num);
}

squareNumber(5);

//5.

var name = "Галим";
let age = 27;
const city = "Астрахань";