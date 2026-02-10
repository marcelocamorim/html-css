fetch("componentes/header.html")
    .then(res => res.text())
    .then(html => {
        document.querySelector("#header").innerHTML = html
        iniciarMenu()

    })


function iniciarMenu() {
    const btnMenu = document.querySelector(".hamburguer")
    const menu = document.querySelector(".menu")

    if (!btnMenu || !menu) return

    btnMenu.addEventListener("click", () => {
        btnMenu.classList.toggle("active")
        menu.classList.toggle("ativo")

    })
}





/*

const hamburguer = document.getElementById("hamburguer")
const menu = document.getElementById("menu")




hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active")
    menu.classList.toggle("ativo")

})


const breakpoint = 768;
let isMobile = window.innerWidth <= breakpoint;

window.addEventListener("resize", () => {
    const nowIsMobile = window.innerWidth <= breakpoint;

    if (nowIsMobile !== isMobile) {
        hamburguer.classList.remove("active")

        menu.classList.remove("ativo");
        isMobile = nowIsMobile;
    }
});
*/