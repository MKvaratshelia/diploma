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
    cardList,
    errorServer,
    dataStorage,
    searchButton
  ) {
    this._card = card;
    this._newsApi = newsApi;
    this._newsBlock = newsBlock;
    this._nothingFound = nothingFound;
    this._form = form;
    this._preloader = preloader;
    this._errorMesage = errorMesage;
    this._showMore = showMore;
    this._inputNews = inputNews;
    this._cardList = cardList;
    this._news = [];
    this._curentPost = 0;
    this._errorServer = errorServer;
    this._dataStorage = dataStorage;
    this._searchButton = searchButton;

    this._form.addEventListener("submit", (event) => this._search(event));
    this._showMore.addEventListener("click", (event) => this._cardsRender());
    this._inputNews.addEventListener("input", (event) => this._inputValidate());
  }
  _cardsRender() {
    const container = document.createDocumentFragment();
    const newsNumber = this._news.length - this._curentPost;
    const cardsNumbers = newsNumber < 3 ? newsNumber : 3;
    for (let i = 0; i < cardsNumbers; i++) {
      container.appendChild(this._card.create(this._news[this._curentPost]));
      this._curentPost += 1;
    }
    this._cardList.appendChild(container);
    let elementCount = this._cardList.childElementCount;
    if (elementCount === this._news.length) {
      this._showMore.style = "display: none";
    }
  }
  _inputValidate() {
    if (this._inputNews.value.length === 0) {
      this._errorMesage.textContent = "Поле поиска не может быть пустым";
      this._searchButton.setAttribute("disabled", true);
    } else if (this._inputNews.value.length !== 0) {
      this._errorMesage.textContent = "";
      this._searchButton.removeAttribute("disabled");
    }
  }
  // отчистит контейнер карточек
  _clearCardList() {
    while (this._cardList.firstChild) {
      this._cardList.removeChild(this._cardList.firstChild);
    }
  }
  _search(event) {
    event.preventDefault();
    this._inputValidate();
    const input = this._inputNews.value;
    this._showMore.style = "display: block";
    // отчистим контейнер карточек, от карточек с прошлым запросом
    if (this._news.length !== 0) {
      this._clearCardList();
    }

    if (input.length === 0) {
      // this.errorMesage.textContent = "Поле поиска не может быть пустым";
      // this.errorMesage.style = "display: block";
      this._nothingFound.style = "display: none";
      this._newsBlock.style = "display: none";
    } else {
      // this.errorMesage.style = "display: none";
      this._nothingFound.style = "display: none";
    }
    this._errorServer.style = "display: none";
    this._preloader(true);
    // this.newsApi.getNews(this.inputNews, this.preloader).then(res => {
    //   console.log(res);
    //   if (res.articles.length === 0) {
    //     this.nothingFound.style = "display: flex";
    //     this.newsBlock.style = "display: none";
    //   } else {
    //     this.nothingFound.style = "display: none";
    //   }
    //   if (res.articles.length > 0) {
    //     this.newsBlock.style = "display: block";
    //   }

    //   this.news = res.articles;
    //   this.cardsRender();
    // });
    this._newsApi
      .getNews(this._inputNews)
      .then((res) => {
        if (res.ok) {
          // console.log(res.json());
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        this._dataStorage.localStorage(res, this._inputNews.value);
        console.log(res);
        if (res.articles.length === 0) {
          this._nothingFound.style = "display: flex";
          this._newsBlock.style = "display: none";
        } else {
          this._nothingFound.style = "display: none";
        }
        if (res.articles.length > 0) {
          this._newsBlock.style = "display: block";
        }
        this._news = res.articles;
        console.log(this._news.length);
        this._cardsRender();
      })
      .catch((err) => {
        console.log(err);
        this.errorServer.style = "display: block";
      })
      .finally(() => {
        this._preloader(false);
      });
  }
}
