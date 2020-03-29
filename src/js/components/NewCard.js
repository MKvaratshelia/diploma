import { month } from "../constants/constants";
export default class NewCard {
  constructor() {
    // this.container = container;
  }
  create(data) {
    // const container = document.querySelector(".news__cardlist");
    const date = new Date(`${data.publishedAt}`);
    const dateFormat = date.toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const card = document.createElement("a");
    card.classList.add("card");
    card.innerHTML = `<div class="">
    <div class="card__image"></div>
    <div class="card__container">
      <p class="card__date"></p>
      <h3 class="card__title"></h3>
      <p class="card__description"></p>
      <p class="card__source"></p>
    </div>
  </div>`;
    card.setAttribute("href", `${data.url}`);
    card.setAttribute("target", "_blank");
    card.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${data.urlToImage})`;
    card.querySelector(".card__date").textContent = dateFormat;
    card.querySelector(".card__title").textContent = data.title;
    card.querySelector(".card__description").textContent = data.description;
    card.querySelector(".card__source").textContent = data.source.name;
    // container.appendChild(card);
    return card;
  }
}
