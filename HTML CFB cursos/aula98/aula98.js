const pesquisa = document.getElementById("pesquisa")
const itens = document.querySelectorAll("[data-item]")



pesquisa.addEventListener("input",()=>{
    const textoBuscado=pesquisa.value.toLowerCase()

    itens.forEach((el)=>{
        const valor=el.dataset.item.toLowerCase()

        el.style.display=valor.includes(textoBuscado)?"block":"none"
    })
})




