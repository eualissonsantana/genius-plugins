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
            margin-right: 16px;
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

        .header-mobile__buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-right: 15px;
        }

        .header .btn {
            text-transform: capitalize !important;
        }

        .header__whatsapp-mobile {
            margin-right: 16px;
        }

        .header .card-collapse__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .header__card-phones, .header__card-whatsapp {
            z-index: 503;
            min-width: 290px;
        }

        .header .card-collapse__header--active, .header .card-collapse__header:not(.collapsed) {
            background-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
        }

        .header__card-phones-item, .header__card-whatsapp-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 50px;
        }

        .header__card-phones-item .icon-phone, .header__card-phones-item .icon-whatsapp, .header__card-whatsapp-item .icon-phone, .header__card-whatsapp-item .icon-whatsapp {
            flex: 0 0 30px;
            width: 30px;
            height: 30px;
            background-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            color: #fff;
            font-size: 14px;
        }

        .header__phones-container {
            position: relative;
        }

        .header .card-collapse {
            margin-top: 15px;
        }

        .dropdown-toggle:after {
            display: none !important;
        }
        
        @media (max-width: 768px) {
            .header__card-phones, .header__card-whatsapp {
                left: 15px;
                right: 15px;
            }
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
        <div id="header-card-phones" class="card-collapse header__card-phones dropdown-menu ">
            <div class="header__card-phones-items">
                <div
                    data-parent="#header-card-phones"
                    data-toggle="collapse"
                    data-target="#phone-content-0"
                    class="card-collapse__header"
                > Lorem Ipsum
                    <i class="icon icon-arrow-d"></i>
                </div>
                <div id="phone-content-0" class="card-collapse__content show">
                    <ul class="list list--header-phones list--border-bottom">
                        <li class="header__card-phones-item">
                            <a class="card-collapse__phone-link" href="tel:1111111111">
                                <span>
                                    <strong>Central de Atendimento:</strong>
                                    <span class="text-nowrap text-mask-phone">(11) 1111-1111</span>
                                </span>
                            </a>
                            <i class="icon icon-phone"></i>
                        </li>
                    </ul>
                </div>
            </div>
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

    const headerMobileButtons = document.createElement("div")
    headerMobileButtons.classList.add("header-mobile__buttons", "ml-auto", "d-md-none")
    headerMobileButtons.innerHTML = `
        <div>
            <a class="header__whatsapp-mobile button-icon button-icon--whatsapp header__phones-button-toggler-mobile">
                <i class="icon icon-whatsapp"></i>
            </a>
        </div>
        <div class="">
            <button
                aria-label="Telefone"
                class="button-icon header__phones-button-toggler-mobile"
                data-toggle="dropdown"
                aria-expanded="false"
            >
                <i class="icon icon-phone"></i>
            </button>
            <div id="header-card-phones-mobile" class="card-collapse header__card-phones dropdown-menu">
                <div class="header__card-phones-items">
                    <div
                        data-toggle="collapse"
                        data-target="#phone-content-mobile-0"
                        data-parent="#header-card-phones-mobile"
                        class="card-collapse__header"
                        aria-expanded="true"
                    > Lorem Ipsum
                        <i class="icon icon-arrow-d"></i>
                    </div>
                    <div id="phone-content-mobile-0" class="card-collapse__content collapse show">
                        <ul class="list list--border-bottom">
                            <li class="header__card-phones-item">
                                <a href="tel:1111111111" class="header-mobile__phone-link">
                                    <strong>Central de Atendimento:</strong>
                                    <span class="header-mobile__phone-number text-mask-phone">(11) 1111-1111</span>
                                </a>
                                <i class="icon icon-phone"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
    setTimeout(() => {
        let headerCardWhatsappLinkMobile = document.querySelector(".header__whatsapp-mobile")
        headerCardWhatsappLinkMobile.setAttribute("target", "_blank");
        headerCardWhatsappLinkMobile.setAttribute("href", `${btnWhats.getAttribute("data-link")}`);
        headerCardWhatsappLinkMobile.setAttribute("target", "_blank");
        headerCardWhatsappLinkMobile.setAttribute("data-name", `${btnWhats.getAttribute("data-name")}`);
        headerCardWhatsappLinkMobile.setAttribute("data-product", `${btnWhats.getAttribute("data-product")}`);
        headerCardWhatsappLinkMobile.setAttribute("data-channel", `${btnWhats.getAttribute("data-channel")}`);
        headerCardWhatsappLinkMobile.setAttribute("data-category", `${btnWhats.getAttribute("data-category")}`);
        headerCardWhatsappLinkMobile.setAttribute("data-brand", `${btnWhats.getAttribute("data-brand")}`);
        headerCardWhatsappLinkMobile.setAttribute("data-link", `${btnWhats.getAttribute("data-link")}`);
        headerCardWhatsappLinkMobile.setAttribute("data-units", `${btnWhats.getAttribute("data-units")}`);
        headerCardWhatsappLinkMobile.setAttribute("data-show-cpf", `${btnWhats.getAttribute("data-show-cpf")}`);
        headerCardWhatsappLinkMobile.setAttribute("data-show-units", `${btnWhats.getAttribute("data-show-units")}`);
        headerCardWhatsappLinkMobile.setAttribute("data-show-location-fields", `${btnWhats.getAttribute("data-show-location-fields")}`);
        
        headerCardWhatsappLinkMobile.addEventListener("click", (event) => {
            event.preventDefault();
            const { toBool } = window.helpers;
    
            const formModal = document.querySelector(
                '.floating-whatsapp__form-modal'
            );
            if (!formModal) return;
    
            const target = event.target.closest(".header__whatsapp-mobile");
    
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
    }, 900);
       // função

    divPhone.classList.add("btn-group", "header__phones-container")

    botaoArea.classList.add("row", "d-none", "d-md-flex")
    menuWrapper.parentNode.appendChild(botaoArea)
    botaoArea.appendChild(headerCardWhatsappLink)
    botaoArea.appendChild(divPhone)
    header.after(menu)
    menuWrapper.after(headerMobileButtons)

})()