import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
    constructor(name, size, price, temperature, flavor, isCarbonated = true) {
        super(name, size, price, temperature);
        this.flavor = flavor;
        this.isCarbonated = isCarbonated;
    }

    getServingTemperature() {
        return 5;
    }

    getInfo() {
        return `${super.getInfo()}, Вкус: ${this.flavor}, Газированная: ${this.isCarbonated ? "Да" : "Нет"}`;
    }
}