function preloader(isLoading, preloaderBlock) {
  // const preloader = document.querySelector(".loading");
  if (isLoading) {
    preloaderBlock.style = "display: flex";
  } else if (!isLoading) {
    preloaderBlock.style = "display: none";
  }
}

function error(notfoundBlock) {
  // const notfound = document.querySelector(".nothing-found");
  notfoundBlock.style = "display: flex";
}
export { preloader, error };
