class Book {
  constructor(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
  }

  getInfo() {
    return `${this.title} — ${this.author}, ${this.year} год, ${this.pages} стр.`;
  }
}

class PrintedBook extends Book {
  constructor(title, author, year, pages, coverType) {
    super(title, author, year, pages);
    this.coverType = coverType;
  }

  getInfo() {
    return `${super.getInfo()} [Печатная, обложка: ${this.coverType}]`;
  }

  placeOnShelf(shelfNumber) {
    console.log(`Книга "${this.title}" поставлена на полку №${shelfNumber}.`);
  }
}

class AudioBook extends Book {
  constructor(title, author, year, pages, durationHours, narrator) {
    super(title, author, year, pages);
    this.durationHours = durationHours;
    this.narrator = narrator;
  }

  getInfo() {
    return `${this.title} — ${this.author}, аудиокнига ${this.durationHours} ч., чтец: ${this.narrator}`;
  }

  playSample() {
    console.log(`Проигрываем отрывок аудиокниги "${this.title}" в исполнении ${this.narrator}...`);
  }
}

const books = [
  new Book("Просто книга", "Иван Иванов", 2001, 250),
  new PrintedBook("Три товарища", "Эрих Мария Ремарк", 2010, 380, "твердая"),
  new AudioBook("Мартин Иден", "Джек Лондон", 2015, 480, 18, "Профессиональный диктор"),
];

books.forEach(book => {
  console.log(book.getInfo());
});

const martinAudio = books[2];
martinAudio.playSample();

const shelfBooks = books[1];
shelfBooks.placeOnShelf(16);

