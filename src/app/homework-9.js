const subscribeForm = document.getElementById("subscribe-form");

if (!subscribeForm) {
  console.log("Не найдена форма");
} else {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!subscribeForm.checkValidity()) {
      alert("Введите корректный email");
      return;
    }

    const email = subscribeForm.email.value;

    console.log({ email });

    subscribeForm.reset();
  });
};
