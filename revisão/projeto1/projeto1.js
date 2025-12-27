const parallax = document.querySelector("#parallax");
const img = parallax.querySelector("img");

window.addEventListener("scroll", () => {
  const rect = parallax.getBoundingClientRect();
  const scrollProgress = -rect.top * 0.2;
  img.style.transform = `translateY(${scrollProgress}px)`;
});
