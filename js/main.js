const navBtn = document.querySelector(".navigation__burger");
const navigation = document.querySelector(".navigation__list");
const opinions = document.querySelectorAll(".opinions__opinion");
const next = document.querySelector(".opinions__next");
const previous = document.querySelector(".opinions__previous");
let index = 0;
const hanlerNextOpinion = () => {
  for (let i = 0; i < opinions.length; i++) {
    opinions[i].classList.remove("opinions--active");
  }
  index++;
  if (index === opinions.length) {
    index = 0;
  }
  opinions[index].classList.add("opinions--active");
};
const hanlerPreviousOpinion = () => {
  for (let i = 0; i < opinions.length; i++) {
    opinions[i].classList.remove("opinions--active");
  }
  index--;
  if (index < 0) {
    index = opinions.length - 1;
  }
  opinions[index].classList.add("opinions--active");
};

const handlerNavigation = () => {
  navigation.classList.toggle("navigation__list--active");
};

navBtn.addEventListener("click", handlerNavigation);
next.addEventListener("click", hanlerNextOpinion);
previous.addEventListener("click", hanlerPreviousOpinion);
