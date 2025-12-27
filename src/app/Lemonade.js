import { Drink } from "./Drink.js";

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor, ice) {
    super(name, size, price, temperature);
    this.flavor = flavor;
    this.ice = ice;
  }

  prepare() {
    super.prepare();
    console.log(
      `Готовлю лимонад: вкус — ${this.flavor}, лёд — ${this.ice ? "да" : "нет"}`
    );
    this.setTemperature(6);
  }
}