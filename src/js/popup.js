import { petsArray } from "./petsArray";
let cards = document.querySelectorAll(".card");
let popup = document.querySelector(".popup");
let popupBtn = document.querySelector(".popup__btn");

function makePopup(card) {
  let popupPetName = card.firstElementChild.children[1].innerHTML;
  let popupPetInfo = petsArray.filter((el) => el.name === popupPetName)[0];
  //change image
  let popupOldImage = document.querySelector(".popup__img");
  let popupNewImage = card.firstElementChild.children[0].cloneNode();
  popupOldImage.replaceChildren(popupNewImage);

  //change heading
  let popupOldHeading = document.querySelector(".popup__heading");
  popupOldHeading.innerHTML = popupPetName;

  //change subheading
  let popupOldSubheading = document.querySelector(".popup__subheading");
  popupOldSubheading.innerHTML = `${popupPetInfo.type} - ${popupPetInfo.breed}`;

  //change paragrpah
  let popupOldParagraph = document.querySelector(".popup__paragraph");
  popupOldParagraph.innerHTML = popupPetInfo.description;

  //change list
  let popupOldList = document.querySelector(".popup__list");

  // li age
  popupOldList.children[0].children[1].innerHTML = popupPetInfo.age;

  // li inoculations
  popupOldList.children[1].children[1].innerHTML =
    popupPetInfo.inoculations.toString();

  // li diseases
  popupOldList.children[2].children[1].innerHTML =
    popupPetInfo.diseases.toString();

  // li parasites
  popupOldList.children[3].children[1].innerHTML =
    popupPetInfo.parasites.toString();
}

function showPopup(e) {
  let card = e.target.closest(".card");
  makePopup(card);
  //off scroll
  document.querySelector("body").style.overflow = "hidden";
  popup.classList.add("popup--active");

  popupBtn.addEventListener("click", removePopup);
  popup.addEventListener("click", removePopup);
}

function removePopup(e) {
  if (e.target === popup || e.target === popupBtn) {
    popup.classList.remove("popup--active");
    document.querySelector("body").style.overflow = "auto";
  }
}
cards.forEach((card) => card.addEventListener("click", showPopup));
