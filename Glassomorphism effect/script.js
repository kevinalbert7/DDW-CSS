const asideTogglers = document.querySelectorAll(".menu-toggler");
const curtainMenu = document.querySelector(".curtain-menu");

asideTogglers.forEach((btn) => btn.addEventListener("click", toggleCurtainMen));

function toggleCurtainMen() {
  curtainMenu.classList.toggle("active");
}
