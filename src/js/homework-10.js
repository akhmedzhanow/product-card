import { products } from "./products.js";

const productDescriptions = products.reduce((descriptions, product) => {
    descriptions.push({
        [product.name]: product.description,
    });

    return descriptions;
}, []);

console.log(productDescriptions);

function getCardsCount() {
    const answer = prompt("Сколько карточек отобразить? От 1 до 5");
    const cardsCount = Number(answer);

    if (
        answer === null ||
        !Number.isInteger(cardsCount) ||
        cardsCount < 1 ||
        cardsCount > products.length
    ) {
        alert("Введите целое число от 1 до 5");
        return getCardsCount();
    }

    return cardsCount;
}

function renderProductCards(productsToRender) {
    const productsList = document.querySelector(".products");
    const productTemplate = document.querySelector("#product-template");
    const cardsFragment = document.createDocumentFragment();

    productsToRender.forEach((product) => {
        const card = productTemplate.content.cloneNode(true);
        const image = card.querySelector(".card__image");
        const ingredientsList = card.querySelector(".compound__list");

        image.src = product.image;
        image.alt = product.name;
        card.querySelector(".card__text").textContent = product.skinType;
        card.querySelector(".card__title").textContent = product.name;
        card.querySelector(".card__description").textContent =
            product.description;
        card.querySelector(".price__tag").textContent =
            `${product.price} ${product.currency}`;

        product.ingredients.forEach((ingredient) => {
            const ingredientItem = document.createElement("li");

            ingredientItem.classList.add("compound__text");
            ingredientItem.textContent = ingredient;
            ingredientsList.append(ingredientItem);
        });

        cardsFragment.append(card);
    });

    productsList.replaceChildren(cardsFragment);
}

const cardsCount = getCardsCount();
const productsToRender = products.slice(0, cardsCount);

renderProductCards(productsToRender);
