export class Drink {
  #temperature;
  #isPrepared = false;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return {
      name: this.name,
      size: this.size,
      price: this.price,
      temperature: this.#temperature,
      prepared: this.#isPrepared,
    };
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
  }
  
  prepare() {
    this.#prepare();
  }
  
  #prepare() {
    console.log(`Готовится ${ this.name }`);
    this.#isPrepared = true;
  }

  serve() {
    console.log(`Запрос на подачу: ${ this.name }`);

    if (!this.#isPrepared) {
      this.prepare();
    }

    console.log(`${ this.name } подан. Объём: ${ this.size }. Цена: ${ this.price }₽. Температура: ${ this.#temperature }°C`);
  }
}
