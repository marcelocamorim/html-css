const banner = document.querySelector(".banner")
const slides = document.querySelectorAll(".slides picture")
const btnPrev = document.querySelector(".prev")
const btnNext = document.querySelector(".next")

let index = 0
let autoSlide = null

function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"))
    slides[i].classList.add("active")
}


function startAutoSlide() {

    autoSlide = setInterval(() => {
        index = (index + 1) % slides.length
        mostrarSlide(index)
    }, 1000)

}

function stopAutoSlide(){
    clearInterval(autoSlide)
}

startAutoSlide()

banner.addEventListener("mouseenter", stopAutoSlide)
banner.addEventListener("mouseleave", startAutoSlide)














//buttons prev e next
btnPrev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length
    mostrarSlide(index)
})

btnNext.addEventListener("click", () => {
    index = (index + 1) % slides.length
    mostrarSlide(index)
})
