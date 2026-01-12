let staff = undefined;

const personTemplate = document.getElementById('user-card-template');
const loaderBox = document.getElementById('container-data');
const staffBox = document.getElementById('container-users');
const staffList = document.getElementById('user-list');

const deleteBtnAll = document.getElementById("btnDeleteAll");
const addBtnAll = document.getElementById("btnGetAll");

const toggleClasses = (element, addClass, removeClass) => {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
};

async function initStaff() {
  const savedStaff = localStorage.getItem("users");

  if (savedStaff) {
    staff = JSON.parse(savedStaff);
    renderStaff(staff);
    return;
  }

  await new Promise(resolve => setTimeout(resolve, 3000));

  const response = await fetch("./users.json");
  const data = await response.json();

  staff = data.users;
  localStorage.setItem("users", JSON.stringify(staff));
  renderStaff(staff);
}

const renderStaff = (staff) => {
  staffList.innerHTML = "";

  toggleClasses(loaderBox, "close-data__loading", "show-data__loading");
  toggleClasses(staffBox, "show-container__users", "close-container__users");

  staff.forEach(person => {
    const personClone = personTemplate.content.cloneNode(true);

    personClone.querySelector('.authentication-info').textContent = `ID: ${person.id}`;
    personClone.querySelector('.name-info').textContent = `Имя: ${person.name}`;
    personClone.querySelector('.surname-info').textContent = `Фамилия: ${person.surname}`;
    personClone.querySelector('.email-info').textContent = `Почта: ${person.email}`;
    personClone.querySelector('.city-info').textContent = `Город: ${person.city}`;
    personClone.querySelector('.profession-info').textContent = `Профессия: ${person.profession}`;

    const deleteBtn = personClone.querySelector('.button-delete');
    deleteBtn.dataset.id = person.id;

    staffList.appendChild(personClone);
  });
};

deleteBtnAll.addEventListener("click", () => {
  localStorage.removeItem("users");
  staffList.innerHTML = 'Список пользователей пустой';
});

addBtnAll.addEventListener("click", async () => {
  const response = await fetch("./users.json");
  const data = await response.json();
  staff = data.users;

  const saved = localStorage.getItem("users");
  const savedStaff = saved ? JSON.parse(saved) : [];

  if (savedStaff.length !== staff.length) {
    localStorage.setItem("users", JSON.stringify(staff));
    renderStaff(staff);
  } else {
    alert("Все пользователи уже отображены!");
  }
});

staffList.addEventListener("click", event => {
  if (event.target.classList.contains("button-delete")) {
    const personId = +event.target.dataset.id;

    staff = staff.filter(person => person.id !== personId);
    localStorage.setItem("users", JSON.stringify(staff));
    renderStaff(staff);
  }
});

initStaff();