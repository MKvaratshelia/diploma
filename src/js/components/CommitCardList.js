export default class CommitCardList {
  constructor(gitApi, commitCard, slider) {
    this.gitApi = gitApi;
    this.commitCard = commitCard;
    this.slider = slider;
  }
  render() {
    this.gitApi.getCommits().then(res => {
      res.slice(-20);
      for (let item of res) {
        console.log(res.status);
        this.commitCard.create(item);
      }
      this.slider.mount();
    });
  }
}
