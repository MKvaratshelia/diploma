export default class Statistics {
  constructor(localStorage, container) {
    this._localStorage = localStorage;
    this._obj = {};
    this._container = container;
  }
  buildGraph(analiticsRequest, weeklyNews, mentionsInTitles) {
    const strData = localStorage.getItem("result");
    const data = JSON.parse(strData);
    const strRequest = this._localStorage.getItem("req");
    const request = JSON.parse(strRequest);

    // отсортировал даты по возрастанию
    const newData = data.articles.sort(function (a, b) {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateA - dateB;
    });
    // добавляю только элементы содержащие ключевое слово
    const headersWeek = newData.filter(
      (el) =>
        el.title.toLowerCase().includes(request.toLowerCase()) ||
        el.description.toLowerCase().includes(request.toLowerCase())
    );

    analiticsRequest.textContent = `<${request}>`;
    weeklyNews.textContent = data.totalResults;
    mentionsInTitles.textContent = headersWeek.length;
    for (const element of headersWeek) {
      const date = new Date(`${element.publishedAt}`);
      const day = date.toLocaleString("ru", {
        day: "numeric",
      });
      const weekDay = date.toLocaleString("ru", {
        weekday: "short",
      });
      if (this._obj.hasOwnProperty(`${day},${weekDay}`)) {
        this._obj[`${day},${weekDay}`] += 1;
      } else {
        this._obj[`${day},${weekDay}`] = 1;
      }
    }
    for (const element in this._obj) {
      this._createDiagram(element, this._obj[element]);
    }
  }
  _createDiagram(day, number) {
    const diagramItem = document.createElement("div");
    diagramItem.classList.add("diagram__item");
    diagramItem.insertAdjacentHTML(
      "beforeend",
      `<span class="diagram__item-day">${day}</span>
    <div class="diagram__item-number-block">
      <div class="diagram__item-number-container" style="width: ${number}%">
        <span class="diagram__item-number">${number}</span>
      </div>
    </div>`
    );
    this._container.appendChild(diagramItem);
  }
}
