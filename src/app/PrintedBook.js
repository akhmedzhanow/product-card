import { Book } from "./Book.js";

export class PrintedBook extends Book {
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