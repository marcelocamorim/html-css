const linksMenu = document.querySelectorAll(".link-menu")
const sectionSubMenus = document.querySelectorAll(".submenu")
const setaLinksMenu = document.querySelectorAll(".seta-link-menu")


const fecharTudo = () => {
    sectionSubMenus.forEach((el => el.classList.remove("ativo")))
    linksMenu.forEach((el => el.classList.remove("ativo")))
    setaLinksMenu.forEach((el => el.classList.remove("ativo")))
}








