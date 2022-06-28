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
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
  },
});
