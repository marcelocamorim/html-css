const elementos=document.querySelectorAll("[data-anima]")
const animacaoClass="animacao"

function animaScroll(){
    const topoPagina=window.pageYOffset+((window.innerHeight*3)/4)
    elementos.forEach(el=>{
        if(topoPagina > el.offsetTop){
            el.classList.add(animacaoClass)
        }else{
            el.classList.remove(animacaoClass)
        }
    })
}

if(elementos.length){
    window.addEventListener("scroll",()=>animaScroll())
}