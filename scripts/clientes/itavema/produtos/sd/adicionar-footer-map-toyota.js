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

    addStyle `
        @media (min-width: 1200px){
            .footer .container{
                max-width: 1128px !important;
            }

        }

        .footer-content__col {
            flex-basis: 20%;
        }

        .footer-content__title {
            /* font-size: 16px !important; */
            font-size: 1rem;
            font-weight: bold;
            position: relative;
            color: #fff;
        }

        .footer-content__link-list__link {
            font-size: 13px;
            font-size: .8125rem;
            font-weight: 400;
            color: #8e8e8e;
            display: block;
            -webkit-transition: color .2s ease-in-out;
            transition: color .2s ease-in-out;
            line-height: 25px;
            line-height: 1.5625rem;
        } 
        
        .footer-content__link-list__link:hover {
            color: #fff;
            text-decoration: none;
        }
        
        .footer-content__link-list__link:before {
            content: "-";
            margin-right: 2px;
            display: inline-block;
            -webkit-transition: margin-right .2s ease-in-out;
            transition: margin-right .2s ease-in-out;
        }

        .footer-content__link-list {
            padding-left: 0;
            list-style: none;
        }

        .container--logo-footer {
            padding: 38px 0;
        }

        @media (max-width: 768px){
            .footer-content {
                padding-left: 30px;
            }

            .footer-content__link-list__link {
                font-size: 16px;
                line-height: 32px;
            }

        }
    `

    const styleToyota = `
        .footer-content__title {
            color: #333 !important;
        }
    `
    const logoDiv = document.createElement("div")
    logoDiv.classList.add("container", "container--logo-footer", "px-0")

    logoDiv.innerHTML = ` 
        <div class="text-center">
            <a href="https://itavema.com.br/" target="_blank">
                <img src="https://production.autoforce.com/uploads/group/logo_white/483/logo_comprar-grupo-itavema_c3b4d2fa03.png" width="150">
            </a>
        </div>
    `

    const footer = document.querySelector("footer.footer")
    const footerSeparator = document.querySelector(".footer__signature")

    if (footer) {
        const container = document.createElement("div")
        container.classList.add("container", "px-0")

        const footerContent = document.createElement("div")
        footerContent.classList.add("footer-content", "container", "d-block", "d-md-flex", "flex-wrap")

        container.appendChild(footerContent)

        const divMap = document.createElement("div")

        divMap.classList.add("footer-content__col")

        const makeSitemapItem = (brand, slug) => {
            return `
                    
                    <p class="footer-content__title">${brand}</p>
                    <ul class="footer-content__link-list">
                        <li class="footer-content__link-list__item">
                            <a target="_blank" href="https://itavema.com.br/${slug}/novos" class="footer-content__link-list__link">
                                Novos
                            </a>
                        </li>
                        <li class="footer-content__link-list__item">
                            <a target="_blank" href="https://itavema.com.br/${slug}/seminovos" class="footer-content__link-list__link">
                                Seminovos
                            </a>
                        </li>
                        <li class="footer-content__link-list__item">
                            <a target="_blank" href="https://itavema.com.br/${slug}/ofertas" class="footer-content__link-list__link">
                                Ofertas
                            </a>
                        </li>
                        <li class="footer-content__link-list__item">
                            <a target="_blank" href="https://itavema.com.br/${slug}/servicos" class="footer-content__link-list__link">
                                Serviços
                            </a>
                        </li>
                    </ul>`
        }

        const page = window.location.href

        if(page.includes("fiat")) {
            divMap.innerHTML = makeSitemapItem("Fiat Itavema", "fiat")
        } else if (page.includes("hyundai")) {
            divMap.innerHTML = makeSitemapItem("Hyundai Itavema Motors", "hyundai-itavema-motors")
        } else if (page.includes("itva-motos")) {
            divMap.innerHTML = makeSitemapItem("ITVA Motos", "itva-motos")
        } else if (page.includes("nissan")) {
            divMap.innerHTML = makeSitemapItem("Nissan Itavema Japan ", "nissan-itavema-japan")
        } else if (page.includes("renault")) {
            divMap.innerHTML = makeSitemapItem("Renault Itavema France", "renaultfrance")
        } else if (page.includes("toyota")) {
            divMap.innerHTML = makeSitemapItem("Toyota Inter Japan", "toyota-inter-japan")
            addStyle(styleToyota)
        }

        footerContent.appendChild(divMap)
        console.log(footerSeparator)

        footer.insertBefore(logoDiv, footerSeparator)
        footer.insertBefore(footerContent, footerSeparator)

    }
})()