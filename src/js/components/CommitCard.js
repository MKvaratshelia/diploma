export default class CommitCard {
  constructor(container) {
    this.container = container;
  }
  create(data) {
    // const container = document.querySelector(".glide__slides");
    const date = new Date(`${data.commit.committer.date}`);
    const dateFormat = date.toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const slide = document.createElement("div");
    slide.classList.add("glide__slide");
    slide.insertAdjacentHTML(
      "beforeend",
      `
    <div class="glide__slide-container">
    <p class="glide__slide-date"></p>
    <div class="glide__slide-wrapper">
      <div class="glide__slide-avatar" style='background-image: url(${data.author.avatar_url});'></div>
      <div>
        <h3 class="glide__slide-name"></h3>
        <p class="glide__slide-mail"></p>
      </div>
    </div>
    <p class="glide__slide-comment"></p>
  </div>`
    );
    slide.querySelector(".glide__slide-date").textContent = dateFormat;
    slide.querySelector(".glide__slide-name").textContent =
      data.commit.author.name;
    slide.querySelector(".glide__slide-comment").textContent =
      data.commit.message;
    // slide.querySelector(
    //   "glide__slide-avatar"
    // ).style.backgroundImage = `url(${data.author.avatar_url})`;
    // this.container.appendChild(slide);
    return slide;
  }
}
