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
        .menu-geral li:nth-child(4), .menu-geral li:nth-child(5) {
            display: none !important;
        }
    `
    
    const submenuServicosAudi = document.querySelectorAll(".dropdown-submenu .dropdown-submenu-title")
    const itensMenu = document.querySelectorAll(".menu-geral>li")

    if(submenuServicosAudi) {
        submenuServicosAudi.forEach(element => {
            if(element.innerHTML.includes("Serviços Audi")) {
                const subitens = element.parentNode.querySelectorAll("a")
                subitens.forEach(subitem => {
                    if(!subitem.innerHTML.includes("Serviços Audi")) {
                        subitem.remove()
                    }
                });
            }
        });
    }
})()