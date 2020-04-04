import "./about.css";
import "../images/favicon.png";
import "../images/css.svg";
import "../images/HTML.svg";
import "../images/js.svg";
import "../images/webpack.svg";

import { gitUrl } from "../js/constants/constants";
import GitApi from "../js/modules/GitApi";
import CommitCard from "../js/components/CommitCard";
import { slider } from "../js/components/slider.js";
import CommitCardList from "../js/components/CommitCardList";
import { container, historyBlock } from "../js/constants/constants";
const gitApi = new GitApi(gitUrl, historyBlock);
const commitcard = new CommitCard();
const commitCardList = new CommitCardList(
  gitApi,
  commitcard,
  slider,
  historyBlock,
  container
);
commitCardList.render();
// gitApi.getCommits().then(res => {
//   console.log(res);
//   res.slice(-20);

//   for (let item of res) {
//     console.log(item);
//     commitcard.create(item);
//   }

//   slider.mount();
// });
