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