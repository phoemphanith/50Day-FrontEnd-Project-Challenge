const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => {
      return `<span style="transition: ${idx * 200}ms;">${letter}</span>`;
    })
    .join("");
});
