const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.querySelector(".box").classList.toggle("anim");
  document.querySelector(".txt").classList.toggle("anim-p");
});
