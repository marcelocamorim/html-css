const hamburguer=document.getElementById("hamburguer")
const menu=document.getElementById("menu")




hamburguer.addEventListener("click",()=>{
    hamburguer.classList.toggle("active")
    menu.classList.toggle("ativo")
    
})