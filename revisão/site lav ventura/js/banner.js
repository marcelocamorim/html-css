const slides = document.querySelectorAll(".slides picture")
let index = 0

function ativarSlide(i){
    slides.forEach(slide=>slide.classList.remove("active"))
    slides[i].classList.add("active")
}

setInterval(()=>{
    index = (index + 1) % slides.length
    ativarSlide(index)
},3000)