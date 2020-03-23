import "./styles/pages/index.css";
import "./images/favicon.png";
import "./images/github-logo.svg";
import "./images/facebook-logo.svg";
import "./images/smile.svg";

// const key = cdf5e192105d4960853628cc8faf3bda;
let dateOffset = 24 * 60 * 60 * 1000 * 6; //7 days
let myDate = new Date();
let ddate = new Date(dateOffset);
console.log(ddate.getDate(dateOffset));
let newDate = new Date(myDate.setTime(myDate.getTime() - dateOffset));
let date = `${myDate.getFullYear(newDate)}-${myDate.getMonth(
  newDate
)}-${myDate.getDate(newDate)}`;
console.log(date);

const options = {
  baseUrl: "http://newsapi.org/v2/everything",
  apiKey: "cdf5e192105d4960853628cc8faf3bda"
};

// function newsApi(options) {
//   fetch(this.options.baseUrl + "/вирус/", {

//   })
//     .then(result => {
//       if (result.ok) {
//         return result.json();
//       }
//       return Promise.reject(`Ошибка: ${result.status}`);
//     })
//     .then(result => {
//       return result;
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }
// newsApi();
