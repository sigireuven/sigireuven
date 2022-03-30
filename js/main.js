const navBtn = document.querySelector(".navigation__burger");
const navigation = document.querySelector(".navigation__list");
const cardsBtn = document.querySelectorAll(".recomended-islands__btn");
const back = document.querySelectorAll(".recomended-islands__back");
const front = document.querySelectorAll(".recomended-islands__front");

const handlerNavigation = () => {
  navigation.classList.toggle("navigation__list--active");
};

navBtn.addEventListener("click", handlerNavigation);
