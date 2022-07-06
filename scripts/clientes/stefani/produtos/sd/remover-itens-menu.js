(() => {
    navItems = document.querySelectorAll(".nav--accordion-mobile .nav-simple__item");

    navItems.forEach(element => {
        if(element.innerHTML.includes("A Volkswagen") || element.innerHTML.includes("Plano de Garantia Estendida Mecânica")) {
            element.remove()
        }
    });
})();