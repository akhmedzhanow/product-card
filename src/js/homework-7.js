const speedLight = 299792458;
const product = "Яблочный сок"
const priceProduct = 96;

function weather(city, temperature) {
    console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`)
}

function checkSpeeds(speed) {
    if(speed > speedLight) {
        console.log("Сверхсветовая скорость");
    } else if(speed < speedLight) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

function paymentVerification(currentBudget) {
    if(currentBudget >= priceProduct) {
        console.log(`${product} приобритен. Спасибо за покупку!`);
    } else {
        const difference = priceProduct - currentBudget;
        console.log(`Вам не хватает ${difference}$, пополните баланс`);
    }
}

weather("Астрахань", 40);
checkSpeeds(299792459);
paymentVerification(78);