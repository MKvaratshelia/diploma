import "./styles/pages/index.css";
import "./images/favicon.png";
import "./images/github-logo.svg";
import "./images/facebook-logo.svg";
import "./images/smile.svg";
import {
  form,
  input,
  notFound,
  errorMesage,
  newsBlock,
  showMore,
  cardList,
  sevenDays,
  errorServer,
  searchButton
} from "./js/constants/constants";
import NewsApi from "./js/modules/NewsApi";
import { preloader, error } from "./js/utils/utils";
import DataStorage from "./js/modules/DataStorage";
import NewCard from "./js/components/NewCard";
import NewsCardList from "./js/components/NewsCardList";
// import sevenDays from "./js/constants/constants";
// const errorInput = document.querySelector(".search-field__input-error");
// input.addEventListener("input", function() {
//   if (!input.validity.valid) {
//     errorInput.textContent = "Ошибка";
//   } else if (input.value === "") {
//     errorInput.textContent = "";
//   }
// });
// const newscontainer = document.querySelector(".news__container");
// const notFound = document.querySelector(".nothing-found");
const newCard = new NewCard();
const newsapi = new NewsApi(sevenDays);
const dataStorage = new DataStorage();
const newsCardList = new NewsCardList(
  newCard,
  newsapi,
  newsBlock,
  notFound,
  preloader,
  form,
  errorMesage,
  showMore,
  input,
  cardList,
  errorServer,
  dataStorage,
  searchButton
);
// проверка поля ввода при загрузке страницы

// function data() {
//   form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     preloader(true);
//     newsapi.getNews(preloader, input).then(res => {
//       // localStorage.setItem("result", JSON.stringify(res));
//       // let strData = localStorage.getItem("result");
//       // let data = JSON.parse(strData);
//       if (res.articles.length == 0) {
//         notFound.style = "display: flex";
//         newscontainer.style = "display: none";
//       } else {
//         notFound.style = "display: none";
//         newscontainer.style = "display: block";
//         for (let el of res.articles) {
//           newCard.create(el);
//         }
//       }
//     });
//   });
// }

// function getWeekDay(date) {
//   let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
//   return days[date.getDay()];
// }
// let date = new Date("2020-03-26T14:36:00Z");
// console.log(getWeekDay(date), date.getDate());
