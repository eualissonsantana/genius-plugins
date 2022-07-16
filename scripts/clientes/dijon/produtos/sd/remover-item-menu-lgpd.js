(() => {
    const menuItems = document.querySelectorAll(".nav--accordion-mobile .nav-item")

    if(menuItems) {
        menuItems.forEach(element => {
            if(element.innerHTML.includes("LGPD")) {
                element.remove()
            }
        });
    }
})()