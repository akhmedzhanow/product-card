export class Drink {
    #temperature;

    constructor(name, size, price, temperature) {
        if (new.target === Drink) {
            throw new Error("Нельзя создать экземпляр абстрактного класса Drink");
        }

        this.name = name;
        this.size = size;
        this.price = price;
        this.setTemperature(temperature);
    }

    getInfo() {
        return `Название: ${this.name}, Размер: ${this.size}, Цена: ${this.price} руб., Температура: ${this.getTemperature()}°C`;
    }

    getTemperature() {
        return this.#temperature;
    }

    setTemperature(newTemperature) {
        if (typeof newTemperature !== "number" || Number.isNaN(newTemperature)) {
            throw new Error("Температура должна быть числом");
        }

        if (newTemperature < -50 || newTemperature > 100) {
            throw new Error("Температура должна быть в диапазоне от -50 до 100");
        }

        this.#temperature = newTemperature;
    }

    getServingTemperature() {
        throw new Error("Метод getServingTemperature() должен быть реализован в подклассе");
    }

    #prepare() {
        console.log(`Подготовка напитка: ${this.name}`);
        const servingTemperature = this.getServingTemperature();
        this.setTemperature(servingTemperature);
        console.log(`${this.name} приготовлен. Температура: ${this.getTemperature()}°C`);
    }

    serve() {
        this.#prepare();
        console.log(`Напиток ${this.name} подан гостю.`);
    }
}