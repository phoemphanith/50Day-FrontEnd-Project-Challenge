const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generatJoke();
jokeBtn.addEventListener("click", generatJoke);

//!Way One
// async function generatJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   const res = await fetch("https://icanhazdadjoke.com", config);
//   const data = await res.json();
//   joke.innerHTML = data.joke;
// }
//!way two

function generatJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => (joke.innerHTML = data.joke));
}
