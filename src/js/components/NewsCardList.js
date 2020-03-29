// import NewCard from "./NewCard";

export default class NewsCardList {
  constructor(
    card,
    newsApi,
    newsBlock,
    nothingFound,
    preloader,
    form,
    errorMesage,
    showMore,
    inputNews,
    cardList
  ) {
    this.card = card;
    this.newsApi = newsApi;
    this.newsBlock = newsBlock;
    this.nothingFound = nothingFound;
    this.form = form;
    this.preloader = preloader;
    this.errorMesage = errorMesage;
    this.showMore = showMore;
    this.inputNews = inputNews;
    this.cardList = cardList;
    this.news = [];
    this.curentPost = 0;

    this.form.addEventListener("submit", event => this.search(event));
    this.showMore.addEventListener("click", event => this.cardsRender());
  }
  cardsRender() {
    const container = document.createDocumentFragment();
    const newsNumber = this.news.length - this.curentPost;
    const cardsNumbers = newsNumber < 3 ? newsNumber : 3;
    for (let i = 0; i < cardsNumbers; i++) {
      container.appendChild(this.card.create(this.news[this.curentPost]));
      this.curentPost += 1;
    }
    this.cardList.appendChild(container);
    let elementCount = this.cardList.childElementCount;
    if (elementCount === this.news.length) {
      this.showMore.style = "display: none";
    }
  }
  // отчистит контейнер карточек
  clearCardList() {
    while (this.cardList.firstChild) {
      this.cardList.removeChild(this.cardList.firstChild);
    }
  }
  search(event) {
    event.preventDefault();
    const input = this.inputNews.value;
    // отчистим контейнер карточек, от карточек с прошлым запросом
    if (this.news.length !== 0) {
      this.clearCardList();
    }

    if (input.length === 0) {
      this.errorMesage.textContent = "Поле поиска не может быть пустым";
      this.errorMesage.style = "display: block";
      this.nothingFound.style = "display: none";
      this.newsBlock.style = "display: none";
    } else {
      this.errorMesage.style = "display: none";
      this.nothingFound.style = "display: none";
    }

    this.preloader(true);
    this.newsApi.getNews(this.inputNews, this.preloader).then(res => {
      console.log(res);
      if (res.articles.length === 0) {
        this.nothingFound.style = "display: flex";
        this.newsBlock.style = "display: none";
      } else {
        this.nothingFound.style = "display: none";
      }
      if (res.articles.length > 0) {
        this.newsBlock.style = "display: block";
      }

      this.news = res.articles;
      this.cardsRender();
    });
  }
}
