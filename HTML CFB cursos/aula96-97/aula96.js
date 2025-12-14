const guias = document.querySelectorAll(".guia")
const conteudos = document.querySelectorAll(".conteudo")

const fecharTudo=()=>{
    guias.forEach(el=>el.classList.remove("ativo"))
    conteudos.forEach((el)=>{
        el.classList.remove("visivel")
        el.classList.add("invisivel")
    })
}

document.addEventListener("click",(evt)=>{
    const fechar=evt.target.closest(".fechar")
    if(fechar){
        fecharTudo()
        return
    }

    const guia=evt.target.closest(".guia")
    if(!guia)return
    fecharTudo()

    guia.classList.add("ativo")

    const alvo=document.getElementById(guia.dataset.target)
    alvo.classList.remove("invisivel")
    alvo.classList.add("visivel")
    

})


