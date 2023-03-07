const onglets = document.querySelectorAll(".onglet");
const content = document.querySelectorAll(".content");
let index = 0;

onglets.forEach((onglet) => {
  onglet.addEventListener("click", () => {
    if (onglet.classList.contains("active")) {
      return;
    } else {
      onglet.classList.add("active");
    }

    index = onglet.getAttribute("data-anim");
    console.log(index);

    for (i = 0; i < onglets.length; i++) {
      if (onglets[i].getAttribute("data-anim") != index) {
        onglets[i].classList.remove("active");
      }
    }

    for (j = 0; j < content.length; j++) {
      if (content[j].getAttribute("data-anim") == index) {
        content[j].classList.add("active-content");
      } else {
        content[j].classList.remove("active-content");
      }
    }
  });
});
