import { Drink } from "./Drink.js";

export class Coffee extends Drink {
    constructor(name, size, price, temperature, beanType, milkType) {
        super(name, size, price, temperature);
        this.beanType = beanType;
        this.milkType = milkType;
    }

    getServingTemperature() {
        return 65;
    }

    getInfo() {
        return `${super.getInfo()}, Тип зерна: ${this.beanType}, Тип молока: ${this.milkType}`;
    }
}