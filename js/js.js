$(function () {
  // Маска для телефона
  $("#phone").mask("+38(000)000-00-00");

  // Дата
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + "." + mm + "." + yyyy;

  document.getElementById("order_date").innerHTML += today;
});

// Таймер
let countDownDate = new Date().getTime() + 2 * 60 * 60 * 1000;

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
