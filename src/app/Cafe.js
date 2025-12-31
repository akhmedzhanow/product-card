export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return {
      name: this.name,
      location: this.location,
    };
  }

  orderDrink(drink) {
    console.log(`Заказ в "${ this.name }" (${ this.location }): ${ drink.name }`);
    drink.serve();
    console.log(`Заказ завершён: ${ drink.name }`);
    console.log("Инфо напитка:", drink.getInfo());
  }
}