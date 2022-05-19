
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
        .header__cta__vazado {
            border-radius: 50px;
            background-color: transparent;
            color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light)) !important;
            border-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
            border: 2px solid;
            padding: 7px 20px !important;
            display: flex;
            align-items: center;
        }

        .header__cta__vazado:hover {
            background: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
            border-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light)) !important;
            color: #fff !important;
        }

        .header__cta__vazado .icon-phone {
            margin-right: 6px;
        }

        .drop-telefone {
            top: 59px !important;
        }

        .text-mask-phone {
            color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
        }

        .drop-telefone .icon-phone {
            color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
            border-radius: 50px;
            padding: 6px;
            box-shadow: 1px 1px 0px #dadada;
        }

        .btn-telefone .titulo {
            margin: 0 6px;
        }

        #telefone-itens-mobile {
            top: 50px !important;
            left: -200px;
        }

        @media (max-width: 768px) {
            .header__cta__vazado {
                padding: 4px 20px !important;
                z-index: 1000;
            }

            .header__navbar-toggler {
                bottom: -55px !important;
                z-index: 1000;
            }

            .navbar-nav {
                margin-top: 40px;
            }

            .header__brand img {
                width: 8rem !important;
            }

            .header__brand {
                margin-left: 0 !important;
            }
        }

        @media (max-width: 340px) {
            .dropdown-item {
                padding: 1rem 1rem 1rem 3rem;
            }
        }
    `

    

    function criaDropDownTelefones(data) {
        const btnMenu = document.querySelector(".header__menu-wrapper .navbar-nav li:last-child")
        const subscriptions = document.querySelector(".showcase-subscriptions")
        const navbarMobile = document.createElement("navbar")

        const makeNumber = (titulo, telefone) => {
            return `
                <i class="icon icon-phone"></i>
                <span class="titulo">${titulo}</span>
                <strong class="text-nowrap text-mask-phone">${telefone}</strong>
            `  
        }
        
        if(btnMenu) {
            const itemTelefone = document.createElement("li")
            const itemTelefoneMobile = document.createElement("div")
            const numeros = document.createElement("span")

            data.forEach(element => {
                let currentItem = document.createElement("a")

                currentItem.classList.add("dropdown-item")
                currentItem.setAttribute("href", element.href)
                currentItem.setAttribute("target", element.target)

                currentItem.innerHTML = makeNumber(element.titulo, element.telefone)
                console.log(element.titulo)
                numeros.appendChild(currentItem)
            });

            itemTelefone.classList.add("nav-item", "d-none", "d-md-block")

            itemTelefone.innerHTML = `
                <div class="dropdown btn-telefone">
                    <button class="nav-link header__cta__vazado btn btn-secondary " type="button" id="dropdownTelefoneButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="icon icon-phone"></i>
                        Telefones
                    </button>
                    <div class="shadow-sm dropdown-menu drop-telefone" id="telefone-itens" aria-labelledby="dropdownTelefoneButton">
                    </div>
                </div>
            `

            itemTelefoneMobile.innerHTML = `
                <div class="dropdown btn-telefone">
                    <button class="nav-link header__cta__vazado btn btn-secondary " type="button" id="dropdownTelefoneButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="icon icon-phone"></i>
                        Telefones
                    </button>
                    <div class="shadow-sm dropdown-menu drop-telefone" id="telefone-itens-mobile" aria-labelledby="dropdownTelefoneButton">
                    </div>
                </div>
            `
            
            btnMenu.parentNode.insertBefore(itemTelefone, btnMenu)

            setTimeout(() => {
                const telefoneItens = document.querySelector("#telefone-itens")
                const telefoneItensMobile = document.querySelector("#telefone-itens-mobile")

                telefoneItens.appendChild(numeros)
                telefoneItensMobile.appendChild(numeros.cloneNode(true))
            }, 200);

            navbarMobile.classList.add("header", "navbar", "navbar-expand-lg", "d-lg-none", "justify-content-end")
            navbarMobile.appendChild(itemTelefoneMobile)

            subscriptions.parentNode.insertBefore(navbarMobile, subscriptions )

        }
    }

    