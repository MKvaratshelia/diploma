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
  "декабря",
];
const daysOfTheWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const newsBlock = document.querySelector(".news");
const cardList = document.querySelector(".news__cardlist");
const notFound = document.querySelector(".nothing-found");
const gitUrl = "https://api.github.com/repos/MKvaratshelia/diploma/commits";
const historyBlock = document.querySelector(".history");
const container = document.querySelector(".glide__slides");
const errorMesage = document.querySelector(".search-field__input-error");
const showMore = document.querySelector(".news__button");
const sevenDays = 6 * 24 * 3600 * 1000;
const errorServer = document.querySelector(".error-server");
const searchButton = document.querySelector(".search-field__button");
export {
  form,
  input,
  notFound,
  errorMesage,
  newsBlock,
  showMore,
  cardList,
  sevenDays,
  errorServer,
  searchButton,
};
const analiticsRequest = document.querySelector(".analytics-result__request");
const weeklyNews = document.querySelector(".analytics-result__week-number");
const mentionsInTitles = document.querySelector(
  ".analytics-result__headers-number"
);
const diagram = document.querySelector(".diagram__items");
export { analiticsRequest, weeklyNews, mentionsInTitles, diagram };
export { month };
export { gitUrl };
export { container, historyBlock };
