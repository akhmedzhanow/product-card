import './homework-4.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import { Modal } from './Modal.js';
import './Form.js';
import { Book } from './Book.js';
import { PrintedBook } from './PrintedBook.js';
import { AudioBook } from './AudioBook.js';
import { Cafe } from "./Cafe.js";
import { Tea } from "./Tea.js";
import { Coffee } from "./Coffee.js";
import { Lemonade } from "./Lemonade.js";

const book = new Book("Просто книга", "Иван Иванов", 2001, 250);
const printedBook = new PrintedBook("Три товарища", "Эрих Мария Ремарк", 2010, 380, "твердая");
const audioBook = new AudioBook("Мартин Иден", "Джек Лондон", 2015, 480, 18, "Профессиональный диктор");

const books = [book, printedBook, audioBook];

books.forEach(book => {
  console.log(book.getInfo());
});

books[2].playSample();
books[1].placeOnShelf(16);

const check = new Modal('registration-modal');
check.isOpen();

const cafe = new Cafe("Cafe Darknet", "Астрахань");
console.log("Инфо кафе:", cafe.getInfo());

const tea = new Tea("Чай", "300 мл", 120, 25, "зелёный", "средний");
const coffee = new Coffee("Кофе", "250 мл", 190, 30, "arabica", "fine");
const lemonade = new Lemonade("Лимонад", "500 мл", 150, 20, "лимон", true);

cafe.orderDrink(tea);
cafe.orderDrink(coffee);
cafe.orderDrink(lemonade);