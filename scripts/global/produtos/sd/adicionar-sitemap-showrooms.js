function adicionaSitemapFooter() {

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
        .sitemap-item{
            padding: 6px 18px;
            margin-top: 20px;
        }

        .sitemap-item a {
            font-size: 1rem;
            font-weight: bold;
            position: relative;
            color: #333;
        }

        .sitemap-item ul {
            padding-left: 0;
        }

        .sitemap-item ul li{
            list-style: none;
        }

        .container--logo-footer {
            padding: 38px 0;
        }

        .sitemap-deepitem a{
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

        .sitemap__list-deep-link {
            margin-top: 10px;
        }

        @media (max-width: 768px) {
            .sitemap-item {
                margin-top: 0;
                width: 100%;
            }
        }


    `

    const menuItems = document.querySelectorAll(".nav--accordion-mobile .nav-item") 
    let dataLinkItems = []
    let dataDeepLinkItems = []

    if(menuItems) {
        menuItems.forEach(element => {
            let titleNavLink = element.querySelector(".nav-link").innerText
            let hrefNavLink = element.querySelector(".nav-link").getAttribute("href")
            let targetNavLink = element.querySelector(".nav-link").getAttribute("target")
            let dropdownItems = element.querySelectorAll(".card-collapse-deep__title")
            
            let link = new Object()
            link.texto = titleNavLink
            link.href = hrefNavLink
            link.temDrop = false
            if(targetNavLink) {
                link.target = targetNavLink
            } else {
                link.target = "_self"
            }

            
            let dropdownLinksList = []
            
            if(dropdownItems.length > 0) {
                link.temDrop = true
                dropdownItems.forEach(deepTitle => {
                    let dropdownLink = new Object()
                    let texto = deepTitle.innerText
                    let href = deepTitle.getAttribute("href")
                    let target = deepTitle.getAttribute("target")
                    
                    dropdownLink.pai = titleNavLink
                    dropdownLink.texto = texto
                    dropdownLink.href = href
                    dropdownLink.target = target

                    dropdownLinksList.push(dropdownLink)
                });

                dataDeepLinkItems.push(dropdownLinksList)
            }

            dataLinkItems.push(link)
        });

        const sitemapFooter = document.createElement("div")
        const sitemapRow = document.createElement("div")
        sitemapFooter.classList.add("container", "sitemap-footer")
        sitemapRow.classList.add("row")

        sitemapFooter.appendChild(sitemapRow)
        
        const makeLinkElement = (navLinkText, navLinkHref, navLinkTarget) => {
            return `
                <a href="${navLinkHref}" target="${navLinkTarget}">
                    ${navLinkText}
                </a>
            `  
        }

        const makeDeepLinkElement = (deepLinkText, deepLinkHref, deepLinkTarget) => {
            return `
                <li>
                    <a href="${deepLinkHref}" target="${deepLinkTarget}">
                        - ${deepLinkText}
                    </a>
                </li>
            `  
        }

        // Exclui o primeiro item da lista que é o ícone "home"
        dataLinkItems.shift()

        //Itera a lista com os links principais do menu
        dataLinkItems.forEach(data => {
            let item = document.createElement("div")
            item.classList.add("sitemap-item")

            let clone = item.cloneNode(true)
            clone.innerHTML = makeLinkElement(data.texto, data.href, data.target)

            sitemapRow.appendChild(clone)

            // Cria os elementos do dropdown, caso exista
            if(data.temDrop) {
                let deepLinksList = document.createElement("ul")
                deepLinksList.classList.add("sitemap__list-deep-link")
                dataDeepLinkItems.forEach(deepData => {

                    for (let index = 0; index < deepData.length; index++) {
                        if(deepData[index].pai === data.texto) {
                            let deepItem = document.createElement("div")
                            deepItem.classList.add("sitemap-deepitem")
    
                            let deepClone = deepItem.cloneNode(true)
                            deepClone.innerHTML = makeDeepLinkElement(deepData[index].texto, deepData[index].href, deepData[index].target)
                            deepLinksList.appendChild(deepClone)
                        }
                    }
                });

                clone.appendChild(deepLinksList)
            } 
        });

        const logoDiv = document.createElement("div")
        logoDiv.classList.add("container", "container--logo-footer", "px-0")

        logoDiv.innerHTML = ` 
            <div class="text-center">
                <a href="https://itavema.com.br/" target="_blank">
                    <img src="https://production.autoforce.com/uploads/group/logo_white/483/logo_comprar-grupo-itavema_c3b4d2fa03.png" width="150">
                </a>
            </div>
        `

        const footerSocialNetwors = document.querySelector(".footer__social-networks")
        footerSocialNetwors.after(sitemapFooter)
        footerSocialNetwors.after(logoDiv)

    }
}