const allBoxes = Array.from(document.querySelectorAll(".box"));

let currentIndex = 0;

allBoxes.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    const el = e.target;
    currentIndex = allBoxes.indexOf(el);

    allBoxes.forEach((box, index) => {
      if (index === currentIndex) return;
      box.classList.add("flou");
    });
  });

  box.addEventListener("mouseleave", (e) => {
    allBoxes.forEach((box, index) => {
      if (index === currentIndex) return;
      box.classList.remove("flou");
    });
  });
});
