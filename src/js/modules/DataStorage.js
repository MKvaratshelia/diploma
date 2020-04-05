export default class DataStorage {
  constructor() {}
  localStorage(result, request) {
    localStorage.setItem("result", JSON.stringify(result));
    localStorage.setItem("req", JSON.stringify(request));
    // let strData = localStorage.getItem("result");
    // let data = JSON.parse(strData);
  }
}
