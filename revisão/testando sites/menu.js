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