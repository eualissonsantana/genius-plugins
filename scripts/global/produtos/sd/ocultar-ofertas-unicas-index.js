(() => {
    const addStyle = (styles) => {
        const css = styles,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        head.appendChild(style);
        style.setAttribute('type', 'text/css');
        if (style.styleSheet){
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    
    addStyle`
        .carousel-offers-used-models {
            display: none !important;
        }

    `
    const menuItems = document.querySelectorAll(".nav--accordion-mobile .nav-item")

    if(menuItems) {
        menuItems.forEach(element => {
            if(element.innerHTML.includes("Ofertas Únicas")) {
                element.remove()
            }
        });
    }
})();