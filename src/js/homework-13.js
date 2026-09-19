import { Cafe } from "./Cafe.js";
import { Lemonade } from "./Lemonade.js";
import { Tea } from "./Tea.js";
import { Coffee } from "./Coffee.js";

const urban = new Cafe("Urban Cafe", "ул. Савушкина, д. 13");
const lemonade = new Lemonade("Лимонад", "500 мл", 150, 5, "Лимонный");
const tea = new Tea("Чай", "300 мл", 100, 75, "Черный", true);
const coffee = new Coffee("Капучино", "250 мл", 200, 65, "Арабика", "Безлактозное");

console.log(urban.getInfo());
urban.orderDrink(lemonade);
urban.orderDrink(tea);
urban.orderDrink(coffee);