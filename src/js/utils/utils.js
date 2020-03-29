function preloader(isLoading) {
  const preloader = document.querySelector(".loading");
  if (isLoading) {
    preloader.style = "display: flex";
  } else if (!isLoading) {
    preloader.style = "display: none";
  }
}

function error() {
  const notfound = document.querySelector(".nothing-found");
  notfound.style = "display: flex";
}
export { preloader, error };
