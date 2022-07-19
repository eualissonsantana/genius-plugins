(() => {
    const addStyle = (styles) => {
        const css = styles,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        head.appendChild(style);
        style.setAttribute('type', 'text/css');
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    addStyle`
        .gallery-with-thumbs, .vehicle-details, 
        .list-vehicles-new__list .card__trigger-description {
            display: none !important;
        }
    `
    const menuItems = document.querySelectorAll(".nav--accordion-mobile .nav-item")
    const carouselTitle = document.querySelector(".vehicles-new__title ")
    const listlTitle = document.querySelector(".list-vehicles-new__title ")
    const breadcrumbItems = document.querySelectorAll(".breadcrumb-item ")

    if(menuItems) {
        menuItems.forEach(element => {
            if(element.innerHTML.includes("Novos")) {
                element.innerHTML = element.innerHTML.replace("Novos", "Pneus")
            }
        });
    }

    if(carouselTitle) {
        carouselTitle.innerHTML = carouselTitle.innerHTML.replace("Veículos Novos", "Pneus")
    }
    
    if(listlTitle) {
        listlTitle.innerHTML = listlTitle.innerHTML.replace("Nossos Veículos", "Pneus")
    }

    if(breadcrumbItems) {
        breadcrumbItems.forEach(element => {
            if(element.innerHTML.includes("Novos")) {
                element.innerHTML = element.innerHTML.replace("Novos", "Pneus")
            }
        });
    }

    document.title = document.title.replace("Veículos Novos", "Pneus")
})()