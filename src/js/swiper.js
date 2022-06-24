// core version + navigation, pagination modules:
import Swiper, { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
// import Swiper and modules styles

// init Swiper:
// const swiper = new Swiper(".swiper", {
//   // configure Swiper to use modules
//   modules: [Navigation],
// });

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Default parameters
  slidesPerView: 3,
  loop: true,
  // Responsive breakpoints
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  //   // when window width is >= 640px
  // },
});
