const html5 = document.getElementById("html5")
const css3 = document.getElementById("css3")
const javaScript = document.getElementById("javaScript")
const fechar = document.querySelectorAll(".fechar")

const guias = document.querySelectorAll(".guia")
const conteudos = document.querySelectorAll(".conteudo")

guias.forEach((el) => {
    el.addEventListener("click", (evt) => {
        guias.forEach((guia) => {
            guia.classList.remove("ativo")
        })
        conteudos.forEach((conteudo) => {
            conteudo.classList.remove("visivel")
            conteudo.classList.add("invisivel")
        })


        const clicado = evt.target
        if (clicado.innerHTML === "HTML") {
            clicado.classList.add("ativo")

            html5.classList.remove("invisivel")
            html5.classList.add("visivel")

        } else if (clicado.innerHTML === "CSS") {
            clicado.classList.add("ativo")

            css3.classList.remove("invisivel")
            css3.classList.add("visivel")
        } else if (clicado.innerHTML === "JavaScript") {
            clicado.classList.add("ativo")

            javaScript.classList.remove("invisivel")
            javaScript.classList.add("visivel")
        }


    })
})


fechar.forEach((el) => {
    el.addEventListener("click", () => {
        guias.forEach((guia) => {
            guia.classList.remove("ativo")
        })
        conteudos.forEach((conteudo) => {
            conteudo.classList.remove("visivel")
            conteudo.classList.add("invisivel")
        })
    })
})