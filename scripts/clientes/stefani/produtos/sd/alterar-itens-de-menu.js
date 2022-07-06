(() => {
    const navItems = document.querySelectorAll(".nav--accordion-mobile .nav-simple__item");
    const navLinks = document.querySelectorAll(".nav--accordion-mobile a");

    navLinks.forEach(element => {
        if(element.innerHTML.includes("Novos") ) {
            element.innerHTML = `
                Veículos
                <i class="icon icon-dropdown icon-arrow-d"></i>
            `
        } else if(element.innerHTML.includes("Veículos")) {
            element.innerHTML = element.innerHTML.replace("Veículos", "Novos")
        }
    });

    const reorder = (before, after) => after.parentNode.insertBefore(before, after)

    const orders = [ { before: navItems[5], after: navItems[3] } ]
    orders.forEach(({before, after}) => reorder(before, after))
})();