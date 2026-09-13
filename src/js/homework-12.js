class MediaContent {
    constructor(title, genre, releaseYear, ageRating, rating) {
        this.title = title;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.ageRating = ageRating;
        this.rating = rating;
        this.isWatched = false;
    }

    getInfo() {
        return `Название: ${this.title}, Жанр: ${this.genre}, Год выпуска: ${this.releaseYear}, Возрастное ограничение: ${this.ageRating}, Рейтинг: ${this.rating}`;
    }

    markAsWatched() {
        this.isWatched = true;
    }

    hasHighRating() {
        return this.rating >= 8;
    }
}

class Movie extends MediaContent {
    constructor(title, genre, releaseYear, ageRating, rating, duration, director) {
        super(title, genre, releaseYear, ageRating, rating);
        this.duration = duration;
        this.director = director;
    }

    getMovieDetails() {
        return `Режиссер: ${this.director}, Продолжительность: ${this.duration} минут`;
    }
}

class Series extends MediaContent {
    constructor(title, genre, releaseYear, ageRating, rating, seasons, episodes) {
        super(title, genre, releaseYear, ageRating, rating);
        this.seasons = seasons;
        this.episodes = episodes;
    }

    getSeriesDetails() {
        return `Сезоны: ${this.seasons}, Эпизоды: ${this.episodes}`;
    }
}

const interstellar = new Movie("Интерстеллар", "Фантастика", 2014, "12+", 8.7, 169, "Кристофер Нолан");
const breakingBad = new Series("Breaking Bad", "Драма", 2008, "16+", 9.5, 5, 62);

console.log(interstellar);
console.log(breakingBad);

console.log(interstellar.getInfo());
console.log(interstellar.getMovieDetails());

console.log(breakingBad.getInfo());
console.log(breakingBad.getSeriesDetails());

console.log(interstellar.isWatched);
interstellar.markAsWatched();
console.log(interstellar.isWatched);

console.log(breakingBad.isWatched);
breakingBad.markAsWatched();
console.log(breakingBad.isWatched);

console.log(interstellar.hasHighRating());
console.log(breakingBad.hasHighRating());
