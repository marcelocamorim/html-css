const elementos = document.querySelectorAll("[data-anima]")

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animacao");
            observer.unobserve(entry.target); // para de observar esse elemento
        }

    })
}, {
    threshold: 0.25
})

elementos.forEach(el => observer.observe(el))

