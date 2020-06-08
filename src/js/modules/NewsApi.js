import { error } from "../utils/utils";

export default class NewsApi {
  constructor(sevenDays, error) {
    this.sevenDays = sevenDays;
    this.error = error;
  }
  getNews(input, preloader) {
    const dateNow = new Date();
    // const sevenDays = 7 * 24 * 3600 * 1000;
    const weekAgo = new Date(dateNow - this.sevenDays);
    const dateTo = `${dateNow.getFullYear()}-${
      dateNow.getMonth() + 1
    }-${dateNow.getDate()}`;
    const dateFrom = `${weekAgo.getFullYear()}-${
      weekAgo.getMonth() + 1
    }-${weekAgo.getDate()}`;
    return fetch(
      "https://newsapi.org/v2/everything?" +
        `q=${input.value}&` +
        `from=${dateFrom}&` +
        `to=${dateTo}&` +
        `pageSize=${100}&` +
        "sortBy=popularity&" +
        "apiKey=cdf5e192105d4960853628cc8faf3bda" +
        "&language=ru"
    ).then((res) => {
      if (res.ok) {
        // console.log(res.json());
        return res.json();
      }
      this.error.style.display = "block";
      return Promise.reject(`Ошибка: ${res.status}`);
    });
    // .then(res => {
    //   if (res.ok) {
    //     // console.log(res.json());
    //     return res.json();
    //   }
    //   return Promise.reject(`Ошибка: ${res.status}`);
    // })
    // .then(res => {
    //   return res;
    // })
    // .catch(err => {
    //   console.log(err);
    // })
    // .finally(() => {
    //   preloader(false);
    // });
  }
}
