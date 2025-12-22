let user = null;

const subscribeForm = document.querySelector('#subscribe-form');
const subscribeInput = subscribeForm.querySelector('input[name="email"]');

const modal = document.querySelector('#registration-modal');
const openModalBtn = document.querySelector('#button-registration');
const closeModalBtn = modal.querySelector('.modal-form__close-btn');
const form = document.querySelector('#registration-form');

const passwordInput = form.querySelector('#password-input');
const checkPasswordInput = form.querySelector('#check-password-input');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!subscribeForm.checkValidity()) {
    alert('Введите корректный email.');
    subscribeForm.reportValidity();
    return;
  }

  const formData = new FormData(subscribeForm);
  const data = Object.fromEntries(formData.entries());

  console.log('Подписка:', data);
});

function openModal() {
  modal.classList.add('modal-showed');
}

function closeModal() {
  modal.classList.remove('modal-showed');
}

// Открытие по кнопке "Регистрация"
openModalBtn.addEventListener('click', () => {
  openModal();
});

// Закрытие по крестику
closeModalBtn.addEventListener('click', () => {
  closeModal();
});

// Закрытие по клику на тёмный фон
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Обработка отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // 1. Проверка HTML5-валидации
  if (!form.checkValidity()) {
    alert('Регистрация отклонена: форма заполнена некорректно.');
    form.reportValidity(); // подсветит поля
    return;
  }

  // 2. Проверка совпадения паролей
  if (passwordInput.value !== checkPasswordInput.value) {
    alert('Регистрация отклонена: пароли не совпадают.');
    return;
  }

  // 3. Собираем данные формы в объект
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // 4. Добавляем createdOn
  data.createdOn = new Date();

  // 5. Логируем
  console.log('Регистрация успешна:', data);

  // 6. Записываем во внешнюю переменную user
  user = data;

  // 7. Закрываем модалку и чистим форму
  form.reset();
  closeModal();
});
