import { Book } from "./Book.js";

export class AudioBook extends Book {
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