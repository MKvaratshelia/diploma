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
    slide.innerHTML = `
    <div class="glide__slide-container">
    <p class="glide__slide-date">${dateFormat}</p>
    <div class="glide__slide-wrapper">
      <div class="glide__slide-avatar" style='background-image: url(${data.author.avatar_url});'></div>
      <div>
        <h3 class="glide__slide-name">${data.commit.author.name}</h3>
        <p class="glide__slide-mail">${data.commit.author.email}</p>
      </div>
    </div>
    <p class="glide__slide-comment">${data.commit.message}</p>
  </div>`;
    // slide.querySelector(
    //   "glide__slide-avatar"
    // ).style.backgroundImage = `url(${data.author.avatar_url})`;
    this.container.appendChild(slide);
    return slide;
  }
}
