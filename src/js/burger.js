let burger = document.querySelector(".burger");
let burgerIcon = document.querySelector(".burger-icon");
let burgerWrapper = document.querySelector(".burger-icon__wrapper");
let body = document.querySelector("body");

console.log(burgerIcon);

function showBurger(e) {
  burger.classList.toggle("--active");
  burgerIcon.classList.toggle("--active");
  //overflow
  body.classList.toggle("--active");
}

burgerWrapper.addEventListener("click", showBurger);
