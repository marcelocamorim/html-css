const btnMenu = document.querySelector(".btn-menu");
const nav = document.querySelector(".nav");

btnMenu.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("ativo");
  btnMenu.setAttribute("aria-expanded", isOpen);
});
