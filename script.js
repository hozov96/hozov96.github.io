//обратный отсчет

// Получение элемента для вывода
const timerElement = document.getElementById("timer");

function updateTimer() {
  // Целевая дата - 1 марта 2025 года
  const newYear = new Date(2025, 2, 1);

  // Текущая дата
  const now = new Date();
  // Разница в миллисекундах
  const diff = newYear - now;
  // Расчет дней
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  // часы
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // минуты
  const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  // сек
  const sec = Math.floor((diff % (1000 * 60)) / 1000);
  // console.log(sec);

  if (diff > 0) {
    timerElement.textContent = `${days} д : ${hours} ч : ${minute} м : ${sec} с`;
  } else {
    timerElement.textContent = "Скидка закончилась!";
    return; // Остановка обновлений
  }
  // Установка следующего обновления через 1 секунду
  setTimeout(updateTimer, 1000);
}

if (timerElement) {
  // Первый запуск
  updateTimer();
}

// модалка
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

function modalOpen() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

if (overlay) {
  setTimeout(modalOpen, 5000); // запуск модального окна

  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
}

//------

//форма логина
let trigger = document.querySelector(".auth-trigger");
let myForm = document.forms[0];

let loginName = document.querySelector(".login-name");
let auth = document.querySelector(".auth");

trigger.addEventListener("click", function () {
  myForm.classList.toggle("show");
});

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let myLogin = myForm.querySelector("#login").value;
  // console.log(myLogin);
  loginName.innerHTML = `Привет, ${myLogin}`;
  auth.style.display = "none";

  localStorage.setItem("userName", myLogin); // сохраняем в локальном хранилище
});

let localName = localStorage.getItem("userName"); // добавляем из локального хранилища

document.addEventListener("DOMContentLoaded", function () {
  if (localName) {
    loginName.innerHTML = "Привет, " + localName;
    auth.style.display = "none";
  }
});

//--- скрипт для кнопки "вверх"
let myBtnTop = document.querySelector(".btn_top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 1500) {
    myBtnTop.style.display = "flex";
  } else {
    myBtnTop.style.display = "none";
  }
});