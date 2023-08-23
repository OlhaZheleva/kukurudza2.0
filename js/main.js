("use strict");

// mobile menu
const iconMenu = document.querySelector(".menu-btn");
const menuBody = document.querySelector(".menu");
const navLinks = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".header-logo");
const menuWord = document.querySelector(".word");
const header = document.querySelector(".header");
const containerHeader = header.querySelector(":scope > .container");

iconMenu.addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("_lock");
  menuBody.classList.toggle("_active");
  menuWord.classList.toggle("_hidden");
  iconMenu.classList.toggle("rotate");
  containerHeader.classList.toggle("back-white");
});

if (navLinks) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
      document.body.classList.remove("_lock");
      menuBody.classList.remove("_active");
      menuWord.classList.remove("_hidden");
      iconMenu.classList.remove("rotate");
      containerHeader.classList.remove("back-white");
    });
  });
}

// video scale effect
const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("click", function () {
    video.classList.toggle("videop-play");
  });
});

// sliders
$(document).ready(function () {
  
  // events
  $(".events-slider").slick({
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 2000,
  });

  // cases
  $(".cases-slider").slick({
    variableWidth: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
  });

  // medias
  $(".medias-slider").slick({
    variableWidth: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
  });

  // partners
  $(".partner-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    pauseOnHover: false,
    cssEase: 'linear', 
    arrows: false,
  });

  // blog
  $(".blog-slider").slick({
    variableWidth: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ],
  });
});
// animation

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("The element is intersecting >");

      entry.target.style.animation = entry.target.dataset.animate;
    } else {
      //entry.target.style.animation="none";
    }
  });
};
const observer = new IntersectionObserver(callback);
const animationItems = document.querySelectorAll(".animate");
animationItems.forEach((item) => {
  observer.observe(item);
});
