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
        .header .header-navbar__items {
            display: flex !important;
            flex-flow: wrap;
        }

        .header .nav-item {
            font-size: 0.75rem !important;
        }

        .nav-link {
            padding: 0.5rem 0.7rem !important;
        }

        @media (min-width: 1200px) {
            .container {
                max-width: 1360px !important;
            }
        }

    `
    const menuLinks = document.querySelectorAll(".header-navbar__items .nav-link")
    const menuLinksWithSubmenu = document.querySelectorAll(".header-navbar__items .with-submenu")


    if(menuLinks) {
        menuLinks.forEach(element => {
            if(element.innerText == "NOVOS" || element.innerText == "PEÇAS" || element.innerText == "CONSÓRCIO" || element.innerText == "SEGUROS")  {
                element.parentNode.remove()
            }
        });

        const menuItems = document.querySelectorAll(".header-navbar__items .nav-item")
        const reorder = (before, after) => after.parentNode.insertBefore(before, after)
     
        const orders = [ 
            { before: menuItems[6], after: menuItems[1] },  
            { before: menuItems[2], after: menuItems[1] },
            { before: menuItems[7], after: menuItems[3] },
            { before: menuItems[8], after: menuItems[3] },
            { before: menuItems[4], after: menuItems[3] }
        ]
        orders.forEach(({before, after}) => reorder(before, after))

        menuLinksWithSubmenu.forEach(element => {
            if(element.innerHTML.includes("Soluções")) {
                const dropdown = element.querySelector(".nav-dropdown__items")
                dropdown.innerHTML  = `
                    <li class="nav-dropdown__item">
                        <a class="nav-dropdown__link" href="/griffe/empresa/seguros"> Seguros </a>
                    </li>
                    <li class="nav-dropdown__item">
                        <a class="nav-dropdown__link" href="/griffe/empresa/consorcio-peugeot"> Consórcios </a>
                    </li>
                `
            }
        });
    }


})()