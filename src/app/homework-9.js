import { Modal } from "./Modal.js";
import { Form } from "./Form.js";

let user = null;

const registrationModal = new Modal('registration-modal');
const overlay = registrationModal.overlay;
const openModalBtn = document.querySelector('#button-registration');

const subscribeFormInstance = new Form('subscribe-form');
const subscribeForm = subscribeFormInstance.form;

const registrationForm = new Form('registration-form');
const form = registrationForm.form;

const passwordInput = form.querySelector('#password-input');
const checkPasswordInput = form.querySelector('#check-password-input');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!subscribeFormInstance.isValid()) {
    alert('Введите корректный email.');
    subscribeForm.reportValidity();
    return;
  }
  
  const data = subscribeFormInstance.getValues();
  
  console.log('Подписка:', data);
});

openModalBtn.addEventListener('click', () => {
  registrationModal.open();
  registrationModal.isOpen();
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    registrationModal.close();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    alert('Регистрация отклонена: форма заполнена некорректно.');
    form.reportValidity();
    return;
  }

  if (passwordInput.value !== checkPasswordInput.value) {
    alert('Регистрация отклонена: пароли не совпадают.');
    return;
  }

  const data = registrationForm.getValues();

  data.createdOn = new Date();

  console.log('Регистрация успешна:', data);

  user = data;

  registrationForm.reset();
  registrationModal.close();
});
