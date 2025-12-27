import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(name, size, price, temperature, beansType, grind) {
    super(name, size, price, temperature);
    this.beansType = beansType;
    this.grind = grind;
  }

  prepare() {
    super.prepare();
    console.log(
      `Готовлю кофе: зёрна — ${this.beansType}, помол — ${this.grind}`
    );
    this.setTemperature(65);
  }
}