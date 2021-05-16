const searchBtn = document.querySelector(
  ".header__list-user-item-link--search"
);
const searchPanel = document.querySelector(".header__search");

const list = document.querySelector(".header__list");

searchBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  searchPanel.classList.toggle("header__search--hidden");
  searchBtn.classList.toggle("header__list-user-item-link--search--active");
  list.classList.toggle("header__list--active");
});
