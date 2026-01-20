const menu = document.getElementById("lista-menu");
const submenus = document.querySelectorAll(".submenu");
const links = document.querySelectorAll(".link-menu");
const setas = document.querySelectorAll(".seta-link-menu");

const fecharTudo = () => {
  submenus.forEach(s => s.classList.remove("ativo"));
  links.forEach(l => l.classList.remove("ativo"));
  setas.forEach(s => s.classList.remove("ativo"));
};

menu.addEventListener("click", (e) => {
  const link = e.target.closest(".link-menu");
  if (!link) return;

  e.preventDefault();

  const targetId = link.dataset.target;
  const submenu = document.getElementById(targetId);
  const seta = link.querySelector(".seta-link-menu");

  if (!submenu) return;

  const isOpen = submenu.classList.contains("ativo");

  fecharTudo();

  if (!isOpen) {
    submenu.classList.add("ativo");
    link.classList.add("ativo");
    seta.classList.add("ativo");
  }
});
