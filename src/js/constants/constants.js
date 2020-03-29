const form = document.querySelector(".search-field");
const input = document.querySelector(".search-field__input");
const month = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря"
];

const newsBlock = document.querySelector(".news");
const cardList = document.querySelector(".news__cardlist");
const notFound = document.querySelector(".nothing-found");
const gitUrl = "https://api.github.com/repos/MKvaratshelia/diploma/commits";
const historyBlock = document.querySelector(".history");
const container = document.querySelector(".glide__slides");
const errorMesage = document.querySelector(".search-field__input-error");
const showMore = document.querySelector(".news__button");
export { form, input, notFound, errorMesage, newsBlock, showMore, cardList };
export { month };
export { gitUrl };
export { container, historyBlock };
