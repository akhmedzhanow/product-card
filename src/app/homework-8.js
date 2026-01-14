import { productCards } from "./product-сards.js";

const productTemplate = document.getElementById("product-template");
const productList = document.getElementById("product-list");

function outputProductCards(cards) {
  cards.forEach(product => {
    const clone = productTemplate.content.cloneNode(true);
    clone.querySelector(".product-img").src = `../img/${ product.img }.png`;
    clone.querySelector(".product-img").alt = product.name;
    clone.querySelector(".skin-type").textContent = product.category;
    clone.querySelector(".product-card__title").textContent = product.name;
    clone.querySelector(".product-description").textContent = product.description;
    clone.querySelector(".product-compound").innerHTML = product.compound.map(item => `<li>${item}</li>`).join("");
    clone.querySelector(".price__tag").innerHTML = `${ product.price.toLocaleString() } &#x20BD`;
    productList.appendChild(clone);
  });
}


const productNamesString = productCards.reduce((acc, product, index) =>
  acc + product.name + (index === productCards.length - 1 ? "" : ";"),"");

console.log(productNamesString);


const productNameDescriptionArray = productCards.reduce((acc, product) => {
  acc.push({ [product.name]: product.description });
  return acc;
}, []);

console.log(productNameDescriptionArray);


function renderUserCards() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");

  const cardsCount = Number(userInput);

  if (!cardsCount || cardsCount < 1 || cardsCount > 5) {
    alert("Ошибка. Нужно ввести число от 1 до 5.");
    return;
  }

  const limitedCards = productCards.slice(0, cardsCount);

  outputProductCards(limitedCards);
}

renderUserCards();

const userTemplate = document.getElementById("user-card-template");
const userList = document.getElementById("user-list");

function renderUsers(users) {
  userList.innerHTML = "";

  users.forEach(user => {
    const clone = userTemplate.content.cloneNode(true);

    clone.querySelector(".title").textContent = `${ user.name } ${ user.surname }`;

    clone.querySelector(".tagId").textContent = `ID: ${ user.id }`;

    clone.querySelector(".email").textContent = `Email: ${ user.email }`;

    clone.querySelector(".age").textContent = `Возраст: ${ user.age }`;

    clone.querySelector(".city").textContent = `Город: ${ user.city ?? "—" }`;

    const deleteBtn = clone.querySelector(".btnRemove");
    deleteBtn.dataset.id = user.id;

    userList.appendChild(clone);
  });
}