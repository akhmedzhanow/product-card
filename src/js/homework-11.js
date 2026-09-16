import { Modal } from "./Modal.js";
import { Form } from "./Form.js";

const subscriptionForm = document.querySelector(".subscription-form");
const emailInput = document.querySelector("#subscription-email");
const subscriptionFormManager = new Form("subscription-form");

subscriptionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    emailInput.value = emailInput.value.trim();

    if (!subscriptionFormManager.isValid()) {
        subscriptionForm.reportValidity();
        return;
    }

    const subscriptionData = subscriptionFormManager.getValues();
    console.log(subscriptionData);
});

let user = null;

const registrationButton = document.querySelector(".registration-button");
const registrationForm = document.querySelector(".registration-form");
const message = document.querySelector(".registration-form__message");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const birthDateInput = document.querySelector("#birth-date");
const loginInput = document.querySelector("#login");
const confirmPasswordInput = document.querySelector("#confirm-password");

const registrationFormManager = new Form("registration-form");

const registrationModal = new Modal("registration-modal");

const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
birthDateInput.max = `${today.getFullYear()}-${month}-${day}`;

function openModal() {
    registrationModal.open();
    message.textContent = "";
    firstNameInput.focus();
}

registrationButton.addEventListener("click", openModal);

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "";

    firstNameInput.value = firstNameInput.value.trim();
    lastNameInput.value = lastNameInput.value.trim();
    loginInput.value = loginInput.value.trim();

    if (!registrationFormManager.isValid()) {
        message.textContent = "Регистрация отклонена. Проверьте заполнение всех полей.";
        registrationForm.reportValidity();
        return;
    }

    const registrationData = registrationFormManager.getValues();

    if (registrationData.firstName.length < 2 || registrationData.lastName.length < 2) {
        message.textContent = "Регистрация отклонена. Имя и фамилия должны содержать минимум 2 символа.";
        return;
    }

    if (registrationData.password !== registrationData.confirmPassword) {
        message.textContent = "Регистрация отклонена. Пароли не совпадают.";
        confirmPasswordInput.focus();
        return;
    }

    user = {
        firstName: registrationData.firstName,
        lastName: registrationData.lastName,
        birthDate: registrationData.birthDate,
        login: registrationData.login,
        password: registrationData.password,
        confirmPassword: registrationData.confirmPassword,
        createdOn: new Date(),
    };

    console.log(user);
    registrationFormManager.reset();
    registrationModal.close();
});
