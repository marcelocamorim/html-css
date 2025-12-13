const botoes = document.querySelectorAll('.acordeon');

botoes.forEach(el => {
    const painel = el.nextElementSibling;

    el.addEventListener('click', () => {
        if (painel.style.maxHeight) {
            painel.style.maxHeight = null;
        } else {
            painel.style.maxHeight = painel.scrollHeight + 'px';
        }
    });
});