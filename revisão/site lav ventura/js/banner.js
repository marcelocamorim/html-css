const banner = document.querySelector(".banner")
const slides = document.querySelectorAll(".slides picture")
const btnPrev = document.querySelector(".prev")
const btnNext = document.querySelector(".next")
const dotsContainer = document.querySelector(".dots")

let index = 0
let autoSlide = null

slides.forEach((el, i) => {
    const dot = document.createElement("span")

    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click",()=>{
        index= i
        mostrarSlide(index)
        restartAutoSlide()
    })

    dotsContainer.appendChild(dot)

})

function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"))
    slides[i].classList.add("active")

    document.querySelectorAll(".dots span").forEach(dot=>{
        dot.classList.remove("active")
    })

    document.querySelectorAll(".dots span")[i].classList.add("active")
}


function startAutoSlide() {

    autoSlide = setInterval(() => {
        index = (index + 1) % slides.length
        mostrarSlide(index)
    }, 5000)

}

function stopAutoSlide() {
    clearInterval(autoSlide)
}

function restartAutoSlide(){
    stopAutoSlide()
    startAutoSlide()
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
