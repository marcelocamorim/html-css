const parallax = document.querySelector("#paralax");
const img = parallax.querySelector("img");

window.addEventListener("scroll", () => {
  const rect = parallax.getBoundingClientRect();
  const offset = -rect.top * 0.3;
  img.style.transform = `translateY(${offset}px)`;
});
