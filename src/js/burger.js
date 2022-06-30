let burger = document.querySelector(".burger");
let burgerIcon = document.querySelector(".burger-icon");
let burgerWrapper = document.querySelector(".burger-icon__wrapper");
let body = document.querySelector("body");

function showBurger(e) {
  burger.classList.toggle("--active");
  burgerIcon.classList.toggle("--active");
  //overflow
}

burgerWrapper.addEventListener("click", showBurger);
