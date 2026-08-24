import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.filter((number) => number >= 5);

const movies = ["Интерстеллар", "Матрица", "Начало", "Дюна"];
const hasDune = movies.includes("Дюна");

function reverseArray(array) {
    return [...array].reverse();
}

const reversedNumbers = reverseArray(numbersFromFive);
const reversedMovies = reverseArray(movies);

console.log(numbersFromFive);
console.log(hasDune);
console.log(reversedNumbers);
console.log(reversedMovies);

const commentsWithComEmail = comments.filter((comment) =>
    comment.email.includes(".com"),
);
console.log(commentsWithComEmail);

const commentsWithUpdatedPostId = comments.map((comment) => ({
    ...comment,
    postId: comment.id <= 5 ? 2 : 1,
}));
console.log(commentsWithUpdatedPostId);

const commentAuthors = comments.map(({ id, name }) => ({ id, name }));
console.log(commentAuthors);

const validatedComments = comments.map((comment) => ({
    ...comment,
    isInvalid: comment.body.length > 180,
}));
console.log(validatedComments);


const emailsWithReduce = comments.reduce((emails, comment) => {
    emails.push(comment.email);
    return emails;
}, []);
console.log(emailsWithReduce);

const emailsWithMap = comments.map((comment) => comment.email);
console.log(emailsWithMap);

const emailsAsString = emailsWithReduce.toString();
console.log(emailsAsString);

const emailsJoined = emailsWithMap.join(", ");
console.log(emailsJoined);
