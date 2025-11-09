// 1.

const userProfile = {
  firstName: "Галим",
  lastName: "Ахмеджанов",
  email: "galim@gmail.com",
  jobTitle: "Газоспасатель 5 разряда",
  age: 27,
  country: "Россия",
  city: "Астрахань",
  maritalStatus: "Не женат",
};

console.log(userProfile.firstName, userProfile.lastName)

// 2.

const car = {
  brand: "КамАЗ",
  model: "43114",
  year: 2005,
  color: "Красный",
  transmission: "Механика"
};

car.owner = userProfile;

console.log(car.owner.firstName);

// 3.

function ensureMaxSpeed(car) {
  if (!Object.hasOwn(car, "maxSpeed")) {
    car.maxSpeed = 120;
    console.log("Добавлено свойство 'maxSpeed':", car.maxSpeed);
  } else {
    console.log("Свойство 'maxSpeed' уже существует. Действие не требуется.");
  }
}

ensureMaxSpeed(car);

// 4.

function printProperty(obj, propName) {
  if (Object.hasOwn(obj, propName)) {
    console.log(obj[propName]);
  } else {
    console.log("Такого свойства нет в объекте");
  }
}

printProperty(car, "maxSpeed");
printProperty(userProfile, "firstName");

// 5.

const productsName = [
  "Увлажняющий мусс",
  "Увлажняющая маска",
  "Гель для умывания",
  "Подарочный набор №1",
  "Подарочный набор №5"
];

console.log(productsName[2])

// 6.

const myBooks = [
  {
    title: "Мартин Иден",
    author: "Джек Лондон",
    year: 1909,
    coverColor: "синий",
    genre: "Роман"
  },
  {
    title: "Цветы для Элджернона",
    author: "Дэниел Киз",
    year: 1966,
    coverColor: "зелёный",
    genre: "Научная фантастика"
  },
  {
    title: "Три товарища",
    author: "Эрих Мария Ремарк",
    year: 1936,
    coverColor: "красный",
    genre: "Роман"
  }
];

myBooks.push({
  title: "На западном фронте без перемен",
  author: "Эрих Мария Ремарк",
  year: 1929,
  coverColor: "чёрный",
  genre: "Военный роман"
});

console.log(myBooks);

// 7.

const favoriteBooks = [
  { 
    title: "Мартин Иден",
    author: "Джек Лондон",
    year: 1909,
    coverColor: "синий",
    genre: "Роман"
  },
  { 
    title: "Цветы для Элджернона",
    author: "Дэниел Киз",
    year: 1966,
    coverColor: "зелёный",
    genre: "Научная фантастика"
  },
  { 
    title: "Три товарища",
    author: "Эрих Мария Ремарк",
    year: 1936,
    coverColor: "красный",
    genre: "Роман"
  }
];

const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "красный",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "зелёный",
    genre: "Фэнтези"
  }
];

const allBooks = [...myBooks, ...favoriteBooks, ...harryPotterBooks];

console.log(allBooks);

// 8.

function markRareBooks(books) {
  books.forEach(book => {
    book.isRare = book.year > 2000;
  });
}

markRareBooks(allBooks);
console.log(allBooks);
