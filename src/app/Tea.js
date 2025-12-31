import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, temperature, type, strength) {
    super(name, size, price, temperature);
    this.type = type;
    this.strength = strength;
  }

  prepare() {
    super.prepare();
    console.log(`Завариваю чай: тип — ${ this.type }, крепость — ${ this.strength }`);
    this.setTemperature(80);
  }
}