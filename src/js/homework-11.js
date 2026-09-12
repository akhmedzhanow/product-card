const subscriptionForm = document.querySelector(".subscription-form");
const emailInput = document.querySelector("#subscription-email");

subscriptionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    emailInput.value = emailInput.value.trim();

    if (!subscriptionForm.reportValidity()) {
        return;
    }

    console.log({ email: emailInput.value });
});

let user = null;

const registrationButton = document.querySelector(".registration-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".modal__close");
const pageContent = document.querySelector(".page-content");
const registrationForm = document.querySelector(".registration-form");
const message = document.querySelector(".registration-form__message");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const birthDateInput = document.querySelector("#birth-date");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
birthDateInput.max = `${today.getFullYear()}-${month}-${day}`;

function openModal() {
    modal.classList.add("modal-showed");
    overlay.classList.add("overlay-showed");
    document.body.classList.add("modal-open");
    pageContent.inert = true;
    message.textContent = "";
    firstNameInput.focus();
}

function closeModal() {
    modal.classList.remove("modal-showed");
    overlay.classList.remove("overlay-showed");
    document.body.classList.remove("modal-open");
    pageContent.inert = false;
    registrationButton.focus();
}

registrationButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "";

    firstNameInput.value = firstNameInput.value.trim();
    lastNameInput.value = lastNameInput.value.trim();
    loginInput.value = loginInput.value.trim();

    if (!registrationForm.checkValidity()) {
        message.textContent = "Регистрация отклонена. Проверьте заполнение всех полей.";
        registrationForm.reportValidity();
        return;
    }

    if (firstNameInput.value.length < 2 || lastNameInput.value.length < 2) {
        message.textContent = "Регистрация отклонена. Имя и фамилия должны содержать минимум 2 символа.";
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        message.textContent = "Регистрация отклонена. Пароли не совпадают.";
        confirmPasswordInput.focus();
        return;
    }

    user = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        birthDate: birthDateInput.value,
        login: loginInput.value,
        password: passwordInput.value,
        confirmPassword: confirmPasswordInput.value,
        createdOn: new Date(),
    };

    console.log(user);
    registrationForm.reset();
    closeModal();
});
