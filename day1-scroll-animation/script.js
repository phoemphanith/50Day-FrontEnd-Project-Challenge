const boxes = document.querySelectorAll(".box");

// **Box appear when scrolling
window.addEventListener("scroll", checkboxes);

// **Box appear when loading page
checkboxes();

// **Create scroll animation
// TODO: 1-find height of window display
// TODO: 2-loop to all box and find their value of top position
// TODO: 3-Add class show to the right condition
function checkboxes() {
  const trigerBox = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigerBox) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
