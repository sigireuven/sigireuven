const navBtn = document.querySelector(".navigation__burger");
const navigation = document.querySelector(".navigation__list");

const handlerNavigation = () => {
  navigation.classList.toggle("navigation__list--active");
};

navBtn.addEventListener("click", handlerNavigation);
