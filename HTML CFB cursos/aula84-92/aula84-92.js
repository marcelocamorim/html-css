const elementos = document.querySelectorAll("[data-anima]")
const animacaoClass = "animacao"

function animaScroll() {
    const topoPagina = window.pageYOffset + ((window.innerHeight * 3) / 4)
    elementos.forEach(el => {
        if (topoPagina > el.offsetTop) {
            el.classList.add(animacaoClass)
        } else {
            el.classList.remove(animacaoClass)
        }
    })
}

if (elementos.length) {
    window.addEventListener("scroll", () => animaScroll())
}

function cliqueModal(img) {
    const janelaModal = document.getElementById('modal')
    const imgModal = document.getElementById('imgModal')
    const txtModal = document.getElementById('txtModal')
    const btnFechar = document.getElementById('btnFechar')

    janelaModal.classList.add("mostraJanelaModal")
    janelaModal.classList.remove("escondeJanelaModal")

    imgModal.src = img.src
    imgModal.alt = img.alt
    txtModal.innerHTML = img.alt

    btnFechar.onclick = function () {
        janelaModal.classList.remove("mostraJanelaModal")
        janelaModal.classList.add("escondeJanelaModal")
    }
}