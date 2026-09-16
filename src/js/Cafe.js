import { Drink } from "./Drink.js";

export class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getInfo() {
        return `Название кафе: ${this.name}, Местоположение: ${this.location}`;
    }

    orderDrink(drink) {
        if (!(drink instanceof Drink)) {
            throw new Error("Можно заказать только напиток");
        }
        
        console.log(`Заказ принят: ${drink.name}`);
       console.log(drink.getInfo());
        drink.serve();
    }
}