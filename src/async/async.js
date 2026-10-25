const STORAGE_KEY = 'async-users';
const USERS_COUNT_KEY = 'async-users-count';
const message = document.getElementById('message');
const userContainer = document.getElementById('users-container');
const getAllUsersBtn = document.getElementById('get-all-users-btn');
const deleteAllUsersBtn = document.getElementById('delete-all-users-btn');
let users = [];
let isLoading = false;

function showMessage(messageText) {
  message.textContent = messageText;
}

function saveUsersToStorage(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function getUsersFromStorage() {
  const storedUsers = localStorage.getItem(STORAGE_KEY);
  if (storedUsers === null) {
    return null;
  }

  const parsedUsers = JSON.parse(storedUsers);
  if (!Array.isArray(parsedUsers)) {
    throw new Error('Сохранённые пользователи не являются массивом');
  }

  return parsedUsers;
}

function renderUsers(usersToRender) {
  userContainer.replaceChildren();

  if (usersToRender.length === 0) {
    showMessage('Пользователей нет. Нажмите «Получить всех пользователей».');
    return;
  }

  showMessage('');
  usersToRender.forEach(user => {
    const card = document.createElement('article');
    card.className = 'user-card';

    const title = document.createElement('h2');
    title.textContent = `${user.name} ${user.surname}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${user.email}`;

    const age = document.createElement('p');
    age.textContent = `Возраст: ${user.age}`;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', () => {
      users = users.filter(item => item.id !== user.id);
      saveUsersToStorage(users);
      renderUsers(users);
    });

    card.append(title, email, age, deleteButton);
    userContainer.appendChild(card);
  });
}

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function loadUsers() {
  if (isLoading) {
    return;
  }

  isLoading = true;
  document.body.classList.add('loading');
  getAllUsersBtn.disabled = true;
  deleteAllUsersBtn.disabled = true;
  showMessage('Данные загружаются');

  try {
    await wait(2000);
    const response = await fetch('./users.json');
    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data.users)) {
      throw new Error('В JSON отсутствует массив users');
    }

    users = data.users;
    saveUsersToStorage(users);
    localStorage.setItem(USERS_COUNT_KEY, String(users.length));
    renderUsers(users);
  } catch (error) {
    console.error(error);
    showMessage('Ошибка при загрузке данных');
  } finally {
    isLoading = false;
    document.body.classList.remove('loading');
    getAllUsersBtn.disabled = false;
    deleteAllUsersBtn.disabled = false;
  }
}

getAllUsersBtn.addEventListener('click', () => {
  const originalCount = Number(localStorage.getItem(USERS_COUNT_KEY));
  if (users.length > 0 && users.length === originalCount) {
    showMessage('Все пользователи уже отображены');
    return;
  }

  loadUsers();
});

deleteAllUsersBtn.addEventListener('click', () => {
  users = [];
  saveUsersToStorage(users);
  renderUsers(users);
});

try {
  const savedUsers = getUsersFromStorage();
  if (savedUsers === null) {
    loadUsers();
  } else {
    users = savedUsers;
    renderUsers(users);
  }
} catch (error) {
  console.error(error);
  showMessage('Ошибка при загрузке данных');
}
