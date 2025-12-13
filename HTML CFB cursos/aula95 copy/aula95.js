const botoes = document.querySelectorAll('.acordeon');

botoes.forEach((el) => {
    el.addEventListener("click", () => {

        botoes.forEach((ele) => {
            ele.classList.remove("selecionado")
            ele.nextElementSibling.style.maxHeight = null
        })

        el.classList.add("selecionado")
        const painel = el.nextElementSibling
        painel.style.maxHeight = painel.scrollHeight + "px"
    })
})
