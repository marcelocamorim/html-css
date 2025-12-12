const menu=document.querySelectorAll("[data-menu]")
const cssAtivo='ativo'
const burguer=document.getElementById("burguer")
const containerIcons=document.getElementById("containerIcons")
const fechaMenu=document.getElementById("fechaMenu")

menu.forEach((el)=>{
    el.addEventListener("click",()=>{
        menu.forEach((elem)=>{
            elem.classList.remove(cssAtivo)
        })
        el.classList.add(cssAtivo)
    })
})

burguer.addEventListener("click",()=>{
    containerIcons.classList.remove("invisivel")
    containerIcons.classList.add("visivel")
})
fechaMenu.addEventListener("click",()=>{
    containerIcons.classList.add("invisivel")
    containerIcons.classList.remove("visivel")
})