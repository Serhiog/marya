const body = document.querySelector("body");

const headerTop = document.querySelector(".header__top");

const searchBtn = document.querySelector(
  ".header__list-user-item-link--search"
);

const activeSearchBtn = document.querySelector(
  ".header__list-user-item-link--search--active"
);

const searchPanel = document.querySelector(".header__search");

const list = document.querySelector(".header__list");

const header = document.querySelector(".header");

const main = document.querySelector(".main");

const locationBtn = document.querySelector(
  ".header__list-user-item-link--location"
);

const searchResult = document.querySelector(".header__search-result");

const searchInput = document.querySelector(".header__search-input");

const burgerBtn = document.querySelector(".header__burger-link");

const burgerMenu = document.querySelector(".header__menu");

const mainContent = document.querySelector(".main__dark-wrapper");

const slider = document.querySelector(".slider");

searchBtn.addEventListener("click", () => {
  if (header.classList.contains("header__burger-active")) {
  } else {
    body.classList.toggle("body__noScroll");
  }

  burgerMenu.classList.remove("header__menu--active");

  header.classList.remove("header__sticked");
  header.classList.remove("header__burger-active");

  searchPanel.classList.toggle("header__search--hidden");
  searchBtn.classList.toggle("header__list-user-item-link--search--active");
  list.classList.toggle("header__list--active");
  main.classList.toggle("main__search");
  mainContent.classList.toggle("main__search");
  slider.classList.toggle("slider__hide");
});

searchInput.addEventListener("click", () => {
  searchResult.style.display = "block";
});

document.addEventListener("click", (evt) => {
  if (evt.target !== searchInput) {
    searchResult.style.display = "none";
  }
});

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 329) {
    header.classList.add("header__sticked");
  } else {
    header.classList.remove("header__sticked");
  }
});

burgerBtn.addEventListener("click", () => {
  if (main.classList.contains("main__search")) {
    console.log("est");
  } else {
    body.classList.toggle("body__noScroll");
  }

  searchPanel.classList.remove("header__search--hidden");
  searchBtn.classList.remove("header__list-user-item-link--search--active");
  list.classList.remove("header__list--active");
  main.classList.remove("main__search");

  headerTop.classList.toggle("header__top-hide");
  burgerMenu.classList.toggle("header__menu--active");
  header.classList.toggle("header__sticked");
  header.classList.toggle("header__burger-active");
});

$(document).ready(function () {
  $(".slider__left").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    variableWidth: true,
    asNavFor: ".slider__right",
    rtl: false,
  });
  $(".slider__right").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    variableWidth: true,
    asNavFor: ".slider__left",
    rtl: false,
  });
});
