export default class CommitCardList {
  constructor(gitApi, commitCard, slider, historyBlock, container) {
    this.gitApi = gitApi;
    this.commitCard = commitCard;
    this.slider = slider;
    this.historyBlock = historyBlock;
    this.container = container;
  }
  render() {
    this.gitApi
      .getCommits()
      .then((res) => {
        if (res.ok) {
          // console.log(res.json());
          this.historyBlock.style = "display: block";
          return res.json();
        }
        Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        const lastTwentyCommits = res.slice(-20);
        for (let items of lastTwentyCommits) {
          this.container.appendChild(this.commitCard.create(items));
        }
        this.slider.mount();
      })
      .catch((err) => {
        console.log(err);
        this.historyBlock.style = "display: none";
      });
    // this.gitApi.getCommits().then(res => {

    //   res.slice(-20);
    //   for (let item of res) {
    //     console.log(res.status);
    //     this.commitCard.create(item);
    //   }
    //   this.slider.mount();
    // });
  }
}
