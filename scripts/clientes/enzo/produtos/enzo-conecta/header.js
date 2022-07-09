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
        .header, .menu {
            background-color: #000000;
            color: #FFF;
        }

        .menu {
            padding-top: 16px;
            padding-bottom: 16px;
        }

        .header .button--whatsapp {
            margin-right: 32px;
        }

        .header__menu-wrapper, .header__cta {
            display: none !important;
        }

        .menu ul{
            list-style-type: none; 
            padding: 0; 
            margin: 0;
        }

        .menu a {
            color: #fff;
            text-decoration: none;
            font-weight: 700;
        }
        

        @media (min-width: 992px) {
            .navbar-expand-lg {
                -ms-flex-flow: wrap !important;
            }
        }
    `

    const logo = document.querySelector(".navbar-brand img")
    const menuWrapper = document.querySelector(".header__menu-wrapper")
    const botaoArea = document.createElement("div")
    const header = document.querySelector(".header")

    if(logo) {
        logo.setAttribute("src", "https://production.autoforce.com/uploads/portal/logo/1968/logo_comprar-enzo-conecta_95677b7ecf.png")
    }
    
    let btnWhats = document.querySelector(".consortium__button-whatsapp");

    let headerCardWhatsappLink = document.createElement("a");
    headerCardWhatsappLink.classList.add("consortium__button-whatsapp", "btn", "button", "button--whatsapp")
    headerCardWhatsappLink.setAttribute("target", "_blank");
    headerCardWhatsappLink.setAttribute("href", `${btnWhats.getAttribute("data-link")}`);
    headerCardWhatsappLink.setAttribute("target", "_blank");
    headerCardWhatsappLink.setAttribute("data-name", `${btnWhats.getAttribute("data-name")}`);
    headerCardWhatsappLink.setAttribute("data-product", `${btnWhats.getAttribute("data-product")}`);
    headerCardWhatsappLink.setAttribute("data-channel", `${btnWhats.getAttribute("data-channel")}`);
    headerCardWhatsappLink.setAttribute("data-category", `${btnWhats.getAttribute("data-category")}`);
    headerCardWhatsappLink.setAttribute("data-brand", `${btnWhats.getAttribute("data-brand")}`);
    headerCardWhatsappLink.setAttribute("data-link", `${btnWhats.getAttribute("data-link")}`);
    headerCardWhatsappLink.setAttribute("data-units", `${btnWhats.getAttribute("data-units")}`);
    headerCardWhatsappLink.setAttribute("data-show-cpf", `${btnWhats.getAttribute("data-show-cpf")}`);
    headerCardWhatsappLink.setAttribute("data-show-units", `${btnWhats.getAttribute("data-show-units")}`);
    headerCardWhatsappLink.setAttribute("data-show-location-fields", `${btnWhats.getAttribute("data-show-location-fields")}`);
    headerCardWhatsappLink.innerHTML = `
        <i class="icon icon-whatsapp"></i>
        Whatsapp
    `

    headerCardWhatsappLink.addEventListener("click", (event) => {
        event.preventDefault();
        const { toBool } = window.helpers;

        const formModal = document.querySelector(
            '.floating-whatsapp__form-modal'
        );
        if (!formModal) return;

        const target = event.target.closest(".consortium__button-whatsapp");

        const data = {
            name: target.getAttribute("data-name"),
            product: target.getAttribute("data-product"),
            channel: target.getAttribute("data-channel"),
            category: target.getAttribute("data-category"),
            brand: target.getAttribute("data-brand"),
            link: target.getAttribute("data-link"),
            units: target.getAttribute("data-units"),
            show_cpf: target.getAttribute("data-show-cpf"),
            show_units: target.getAttribute("data-show-units"),
            show_location_fields: target.getAttribute("data-show-location-fields")
        };

        render(
            h(window.WhatsAppFormModal, {
                modalId: 'floating-whatsapp__form-modal',
                open: true,
                units: data.units ? JSON.parse(data.units) : [],
                product: data.product,
                channel: data.channel,
                category: data.category,
                brand: data.brand,
                link: data.link,
                direction: 'vertical',
                showUnits: JSON.parse(data.show_units),
                showCpf: !!JSON.parse(data.show_cpf),
                showLocationFields: toBool(data.show_location_fields)
            }),
            formModal
        );

    });

    const divPhone = document.createElement("div")
    divPhone.innerHTML = `
        <button type="button" class="btn button button--primary header__phones-button-toggler dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icon icon-phone"></i>
            Telefones
        </button>
        <div id="header-card-phones" class="card-collapse header__card-phones dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
        </div>
    `

    const menu = document.createElement("div")
    menu.classList.add("menu", "d-none", "d-md-block")
    menu.innerHTML = `
        <div class="container">
            <ul class="nav nav--accordion row">
                <li class="nav-item nav-simple__item">
                    <a href="#veiculos" class="nav-link nav-simple__link">
                        Nossos Veículos
                    </a>
                </li>
                <li class="nav-item nav-simple__item">
                    <a href="#pontos" class="nav-link nav-simple__link">
                        Ponto de recarga
                    </a>
                </li>
                <li class="nav-item nav-simple__item">
                    <a href="#pelo-planeta" class="nav-link nav-simple__link">
                        Mil Pelo Planeta
                    </a>
                </li>
                <li class="nav-item nav-simple__item">
                    <a href="#como-funciona" class="nav-link nav-simple__link">
                        Como Funciona
                    </a>
                </li>
                <li class="nav-item nav-simple__item">
                    <a href="#conteudos" class="nav-link nav-simple__link">
                        Conteúdos
                    </a>
                </li>
            <ul/>
        </div>
    `

    divPhone.classList.add("btn-group")

    botaoArea.classList.add("row", "d-none", "d-md-flex")
    menuWrapper.parentNode.appendChild(botaoArea)
    botaoArea.appendChild(headerCardWhatsappLink)
    botaoArea.appendChild(divPhone)
    header.after(menu)

})()