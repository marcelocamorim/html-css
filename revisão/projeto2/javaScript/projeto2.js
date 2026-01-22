const menu = document.getElementById("lista-menu");
const submenus = document.querySelectorAll(".submenu");
const links = document.querySelectorAll(".link-menu");
const setas = document.querySelectorAll(".seta-link-menu");

const fecharTudo = () => {
  submenus.forEach(s => s.classList.remove("ativo"));
  links.forEach(l => l.classList.remove("ativo"));
  setas.forEach(s => s.classList.remove("ativo"));
};

//add listener no menu
//pegar o link mais próximo
//se não for o link ignora
//usar o data-target do html para pegar o submenu
//pegar a seta do link
//verificar se o submenu ja está aberto
//fechar tudo
//adicionar classes ativo

menu.addEventListener("click", (evt) => {
  const link = evt.target.closest(".link-menu")
  if (!link) return
  evt.preventDefault()

  const submenu = document.getElementById(link.dataset.target)
  const seta = link.querySelector(".seta-link-menu")
  if (!submenu) return

  
  const isOpen = submenu.classList.contains("ativo")
  fecharTudo()

  if(!isOpen){
    link.classList.add("ativo")
    submenu.classList.add("ativo")
    seta.classList.add("ativo")
  }

})