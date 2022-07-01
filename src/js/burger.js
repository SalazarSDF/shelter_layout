let burger = document.querySelector(".burger");
let burgerIcon = document.querySelector(".burger-icon");
let burgerWrapper = document.querySelector(".burger-icon__wrapper");

function closeBurger(e) {
  let burgerContant = document.querySelector(".burger__contant");
  console.log(burgerContant);
  if (e.target !== burgerContant) {
    burger.classList.toggle("--active");
    burgerIcon.classList.toggle("--active");
  }
}

function showBurger() {
  burger.classList.toggle("--active");
  burgerIcon.classList.toggle("--active");
  //overflow
  //
}

burgerWrapper.addEventListener("click", showBurger);
burger.addEventListener("click", closeBurger);
