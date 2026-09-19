import { Drink } from "./Drink.js";

export class Tea extends Drink {
    constructor(name, size, price, temperature, teaType, hasLemon = false) {
        super(name, size, price, temperature);
        this.teaType = teaType;
        this.hasLemon = hasLemon;
    }

    getServingTemperature() {
        return 75;
    }

    getInfo() {
        return `${super.getInfo()}, Тип чая: ${this.teaType}, С лимоном: ${this.hasLemon ? "Да" : "Нет"}`;
    }

}