export default class GitApi {
  constructor(url, historyBlock) {
    this.url = url;
    this.historyBlock = historyBlock;
  }
  getCommits(url) {
    return fetch(this.url);
    // .then(res => {
    //   if (res.ok) {
    //     // console.log(res.json());
    //     // this.historyBlock.style = "display: block";
    //     return res.json();
    //   }
    //   return Promise.reject(`Ошибка: ${res.status}`);
    // })
    // .then(res => {
    //   return res;
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }
}
