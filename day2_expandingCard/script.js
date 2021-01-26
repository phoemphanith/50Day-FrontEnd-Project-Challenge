const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAllactive();
    panel.classList.add("active");
  });
});

function removeAllactive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
