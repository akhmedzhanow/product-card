import { userComments } from "../app/comments.js";

// 1. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = numberList.filter(num => num >= 5)

console.log(filteredNumbers);

// 2. Создать массив строк, проверить, есть ли в массиве какая-то определенная сущность.

const favoriteBooks = [
  "Мартин Иден",
  "Цветы для Элджернона",
  "Три товарища",
  "На западном фронте без перемен"
];

const hasMartinEden = favoriteBooks.includes("Мартин Иден");
console.log(hasMartinEden);

const hasHarryPotter = favoriteBooks.includes("Гарри Поттер");
console.log(hasHarryPotter);

// 3.  Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный.

function reverseArray(array) {
  return array.reverse();
}

const reversedNumbers = reverseArray(numberList);
const reversedFavoriteBooks = reverseArray(favoriteBooks);

console.log(reversedNumbers);
console.log(reversedFavoriteBooks);

// 4. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const commentsWithComEmail = userComments.filter(comment =>
  comment.email.includes(".com")
);

console.log(commentsWithComEmail);

// 5.  Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updatedComments = userComments.map((userComments) => ({...userComments, postId:userComments.id <= 5 ? 2 : 1}))

console.log(updatedComments);

// 6. Перебрать массив, что бы объекты состояли только из айди и имени

const shortComments = userComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

console.log(shortComments);

// 7. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const commentsWithValidity = userComments.map(userComments => ({...userComments, isInvalid:userComments.body.length > 180}))

console.log(commentsWithValidity);

// 8. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailsFromReduce = userComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsFromReduce);

const emailsFromMap = userComments.map(comment => comment.email);
console.log(emailsFromMap);

// 9. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsFromReduceString = emailsFromReduce.toString();
console.log(emailsFromReduceString);

const emailsFromMapString = emailsFromMap.join(", ");
console.log(emailsFromMapString);
