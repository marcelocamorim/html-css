const parallax = document.querySelector("#paralax");
const img = parallax.querySelector("img");

const work = document.getElementById("tituloWork")

window.addEventListener("scroll", () => {
  const rect = parallax.getBoundingClientRect();
  const offset = -rect.top * 0.3;
  img.style.transform = `translateY(${offset}px)`;
});
