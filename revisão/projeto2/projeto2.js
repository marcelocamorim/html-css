const linksMenu =document.querySelectorAll(".link-menu")
const sectionSubMenus = document.querySelectorAll(".submenu")
const setaLinksMenu = document.querySelectorAll(".seta-link-menu")


const fecharTudo=()=>{
    linksMenu.forEach((el=>el.classList.remove("ativo")))
    sectionSubMenus.forEach((el=>el.classList.remove("ativo")))
    setaLinksMenu.forEach((el=>el.classList.remove("ativo")))
}


document.addEventListener("click",(evt)=>{
    const link = evt.target.closest(".link-menu")
    const seta = evt.target.closest(".seta-link-menu")
    if(!link)return
    fecharTudo()

    link.classList.toggle("ativo")
    seta.classList.toggle("ativo")

    const sectionAlvo = document.getElementById(link.dataset.target)
})







