let staff = undefined;

const personTemplate = document.getElementById('user-card-template');
const loaderBox = document.getElementById('container-data');
const staffBox = document.getElementById('container-users');
const staffList = document.getElementById('user-list');

const deleteBtnAll = document.getElementById('btn-delete-all');
const addBtnAll = document.getElementById('btn-get-all');

const toggleClasses = (element, addClass, removeClass) => {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
};

async function fetchStaff() {
  const response = await fetch('./users.json');
  const data = await response.json();
  return data.users;
}

async function initStaff() {
  const savedStaff = localStorage.getItem('users');

  if (savedStaff) {
    staff = JSON.parse(savedStaff);
    renderStaff(staff);
    return;
  }

  await new Promise(resolve => setTimeout(resolve, 3000));

  staff = await fetchStaff();
  localStorage.setItem('users', JSON.stringify(staff));
  renderStaff(staff);
}

const renderStaff = (staff) => {
  staffList.innerHTML = '';

  toggleClasses(loaderBox, 'close-data-loading', 'show-data-loading');
  toggleClasses(staffBox, 'show-container-users', 'close-container-users');

  staff.forEach(person => {
    const personClone = personTemplate.content.cloneNode(true);

    personClone.querySelector('.authentication-info').textContent = `ID: ${ person.id }`;
    personClone.querySelector('.name-info').textContent = `Имя: ${ person.name }`;
    personClone.querySelector('.surname-info').textContent = `Фамилия: ${ person.surname }`;
    personClone.querySelector('.email-info').textContent = `Почта: ${ person.email }`;
    personClone.querySelector('.city-info').textContent = `Город: ${ person.city }`;
    personClone.querySelector('.profession-info').textContent = `Профессия: ${ person.profession }`;

    const deleteBtn = personClone.querySelector('.button-delete');
    deleteBtn.dataset.id = person.id;

    staffList.appendChild(personClone);
  });
};

deleteBtnAll.addEventListener('click', () => {
  localStorage.removeItem('users');
  staffList.innerHTML = 'Список пользователей пустой';
});

addBtnAll.addEventListener('click', async () => {
  staff = await fetchStaff();

  const saved = localStorage.getItem('users');
  const savedStaff = saved ? JSON.parse(saved) : [];

  if (savedStaff.length !== staff.length) {
    localStorage.setItem('users', JSON.stringify(staff));
    renderStaff(staff);
  } else {
    alert('Все пользователи уже отображены!');
  }
});

staffList.addEventListener('click', (event) => {
  if (event.target.classList.contains('button-delete')) {
    const personId = Number(event.target.dataset.id);

    staff = staff.filter(person => person.id !== personId);
    localStorage.setItem('users', JSON.stringify(staff));
    renderStaff(staff);
  }
});

initStaff();