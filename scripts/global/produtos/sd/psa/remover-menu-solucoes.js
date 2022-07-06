(() => {
    const menuItems = document.querySelectorAll(".header-navbar__items .nav-item")

    if(menuItems) {
        menuItems.forEach(element => {
            if(element.innerHTML.includes("Soluções Citroën") || element.innerHTML.includes("Soluções Peugeot")) {
                element.remove()
            }
        });
    }
})()