(() => {
    // 04/07/2022 | Remove form de whatsapp nas CTAs de whatsapp
    // Inserido por: João Carlos
    // Solicitado por: Mayara Machado
    function removeFormWhatsapp() {
        window.addEventListener("DOMContentLoaded", () => {
            // Header
            const headerWhatsappItemsDesktop = document.querySelectorAll(".header__navbar-item .header__phones-container #header-card-whatsapp #wpp-content-0 .list .header__card-whatsapp-item");
            const currentHeaderWhatsappButtonDesktop = document.querySelector(".header__navbar-item .header__phones-container .button--whatsapp");
    
            const headerWhatsappItemsMobile = document.querySelectorAll(".header-mobile__buttons #header-card-whatsapp-mobile #wpp-content-mobile-0 .list .header__card-whatsapp-item");
            const currentHeaderWhatsappButtonMobile = document.querySelector(".header-mobile__buttons > div button.button-icon--whatsapp");
    
            let headerWhatsappDataLink;
    
            const changeWhatsappHeader = (headerWhatsappItems, currentHeaderWhatsappButton) => {
                if(!currentHeaderWhatsappButton){
                    return;
                }
                
                if(headerWhatsappItems.length > 0){
                    if(headerWhatsappItems.length == 1){
                        headerWhatsappDataLink = headerWhatsappItems[0].querySelector(".header-mobile__whatsapp-link").getAttribute("data-link");
        
                        if(currentHeaderWhatsappButton){
                            const newHeaderWhatsappButton = currentHeaderWhatsappButton.cloneNode(true);
                            newHeaderWhatsappButton.setAttribute("onclick", `window.open('${headerWhatsappDataLink}')`)
                            currentHeaderWhatsappButton.after(newHeaderWhatsappButton);
                            currentHeaderWhatsappButton.remove();
                        }
                    }
                    else{
                        headerWhatsappItems.forEach(headerWhatsappItem => {
                            const headerWhatsappLink = headerWhatsappItem.querySelector(".header-mobile__whatsapp-link").cloneNode(true);
                            headerWhatsappDataLink = headerWhatsappLink.getAttribute("data-link");
                            headerWhatsappLink.setAttribute("href", headerWhatsappDataLink);
                            headerWhatsappLink.setAttribute("target", "_blank");
                    
                            headerWhatsappItem.querySelector(".header-mobile__whatsapp-link").remove();
                            headerWhatsappItem.querySelector("i").before(headerWhatsappLink);
                        });
                    }
                }
    
                currentHeaderWhatsappButton.addEventListener("click", () => {
                    const cardWhatsApp = document.querySelector("#header-card-whatsapp div[data-parent='#header-card-whatsapp']");
                    const cardWhatsAppMobile = document.querySelector("#header-card-whatsapp-mobile div[data-parent='#header-card-whatsapp-mobile']");
                    const cardCollapse = document.querySelector("#header-card-whatsapp #wpp-content-0")
                    const cardCollapseMobile = document.querySelector("#header-card-whatsapp-mobile #wpp-content-mobile-0")

                    if(cardWhatsApp && cardWhatsAppMobile && cardCollapse && cardCollapseMobile){
                        cardWhatsAppMobile.classList.remove("collapsed")
                        cardWhatsApp.classList.remove("collapsed")
                        
                        cardWhatsAppMobile.setAttribute("aria-expanded", "true")
                        cardWhatsAppMobile.setAttribute("aria-expanded", "true")

                        cardCollapse.classList.add("show")
                        cardCollapseMobile.classList.add("show")

                        cardCollapse.setAttribute("aria-expanded", "true")
                        cardCollapseMobile.setAttribute("aria-expanded", "true")
                    }
                });
            };
    
            changeWhatsappHeader(headerWhatsappItemsDesktop, currentHeaderWhatsappButtonDesktop);
            changeWhatsappHeader(headerWhatsappItemsMobile, currentHeaderWhatsappButtonMobile);
    
            // Novos
            const newVehiclesButtonWhatsapp = document.querySelector(".vehicles-new .vehicles-new__ctas .vehicles-new__button-whatsapp");
    
            if(newVehiclesButtonWhatsapp){
                const newerVechilesButtonWhatsapp = newVehiclesButtonWhatsapp.cloneNode(true);
                const dataLink = newerVechilesButtonWhatsapp.getAttribute("data-link");
    
                if(dataLink != ""){
                    newerVechilesButtonWhatsapp.setAttribute("onclick", `window.open('${dataLink}')`);
                }
                else{
                    newerVechilesButtonWhatsapp.setAttribute("onclick", `window.open('${headerWhatsappDataLink}')`);
                }
    
                newVehiclesButtonWhatsapp.after(newerVechilesButtonWhatsapp);
                newVehiclesButtonWhatsapp.remove();
            }
        });
    }

    // 12/05/2022 | Altera os títulos "Marca Genérica" para Dafra ou KTM de acordo com modelo
    // Inserido por: Alisson Santana
    function alterarTitulosMarcaGenericaParaDafraouKTM(){
        const slugs = [
            ['cruisym-150', 'Dafra'], ['apache-rtr-200', 'Dafra'], ['nh-190', 'Dafra'], ['citycom', 'Dafra'], ['maxsym', 'Dafra'], 
            ['sx', 'KTM'], ['exc', 'KTM'], ['12edrive', 'KTM'], ['16edrive', 'KTM'], ['duke', 'KTM']
        ];
        
        const url = window.location.href;
    
        slugs.find(([slug, brand]) => {
            if(url.includes(slug)) {
                const breadcrumbs = document.querySelectorAll('.breadcrumb');
                const title = document.querySelector('.showcase__title') ? document.querySelector('.showcase__title') : document.querySelector('.showcase-offertitle');
                const detailsTitle = document.querySelector('.vehicle-details .section-component__title');
        
                Array.prototype.forEach.call(breadcrumbs, (breadcrumb) => {
                    breadcrumb.innerHTML = breadcrumb.innerHTML.replace('Marca Genérica', brand);
                });

                title.innerHTML = title.innerHTML.replace('Marca Genérica', brand);
                detailsTitle.innerHTML = detailsTitle.innerHTML.replace('Marca Genérica', brand);
            }

            return url.includes(slug);
        }); 
    }

    // 12/05/22 | Adiciona condicional de marcas em drop de marcas e modelos
    // Inserido por: Bruno
    // Solicitado por: Junior
    function adicionarCondicionalMarcasEmDrop(){
        window.addEventListener("DOMContentLoaded", () => {
            let brand = document.querySelector("select#marca");
            let model = document.querySelector("select#modelo");
    
            if(brand){
                let dafraModels = [
                    "<option value='Maxsym 400i 18/19'>Maxsym 400i 18/19</option>",
                    "<option value='Citycom S 300i 18/18 e 18/19'>Citycom S 300i 18/18 e 18/19</option>",
                    "<option value='Horizon 150'>Horizon 150</option>",
                    "<option value='Cityclass 200i 18/19'>Cityclass 200i 18/19</option>"
                ];
        
                let ktmModels = [
                    "<option value='Duke 390 ABS'>Duke 390 ABS</option>",
                    "<option value='Duke 200 ABS'>Duke 200 ABS</option>"
                ];
    
                brand.addEventListener("change", (event) => {
                    let chooseOption = event.target.value;
    
                    model.innerHTML = `<option value="">Escolha o modelo</option>`;
    
                    if(chooseOption == ""){
                        model.innerHTML = `<option value="">Escolha o modelo</option>`;
                    }
                    else if(chooseOption == "Dafra"){
                        dafraModels.forEach(dafraModel => {
                            model.innerHTML += dafraModel;
                        });
                    }
                    else if(chooseOption == "KTM"){
                        ktmModels.forEach(ktmModel => {
                            model.innerHTML += ktmModel;
                        });
                    }
                });
            }
        });
    }

    // 12/05/2022 | OCULTAR UNIDADES SELECIONADAS DE UM FORMULÁRIO
    // INSERIDO POR: Bruno
    // SOLICITADO POR: Junior
    function ocultarUnidadesSelecionadasFormulario(){
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
        
        const isMaintenance = window.location.href.includes('/novos')
        
        if(isMaintenance) {
            addStyle`
                .choices__item[data-value="dafra-pecas-de-motos-e-veiculos"]{
                    display: none;
                }
            `;
        }
    }

    // 12/05/2022 | Alterar direcionamento de botão de agendamento de revisão
    // Inserido por: João Carlos
    // Solicitado por: Bruno Mendes
    function alterarDirecionamentoBotaoAgendamentoRevisao(){
        window.addEventListener("DOMContentLoaded", () => {
            const isThisPage = ({ urlPiece }) => {
                const fullURL = window.location.href
                const result = fullURL.includes(urlPiece)
        
                return result
            }
    
            if(isThisPage({ urlPiece: "/servicos" })){
                let currentBtnSchedule = document.querySelector(".showcase-services__panel .showcase-services__panel-btn-schedule");
                
                if(currentBtnSchedule){
                    let newBtnSchedule = document.createElement("a");
                    newBtnSchedule.setAttribute("class", "btn button button--large button--primary showcase-services__panel-btn-schedule");
                    newBtnSchedule.innerText = "Agendar Revisão";
                    newBtnSchedule.href = "https://itavema.com.br/itva-motos/empresa/agendamento-de-servico";
    
                    currentBtnSchedule.after(newBtnSchedule);
                    currentBtnSchedule.remove();
                }
            }
        });
    }

    // 19/05/2022 | Altera o título da página caso tenha "Marca Genérica"
    // Inserido por: Alisson Santana
    function alterarTituloPaginaEmCasoMarcaGenerica(){
        const titlePage = document.querySelector("title");
    
        if(titlePage.innerHTML.includes("Marca Genérica")) {
            titlePage.innerHTML = titlePage.innerHTML.replace("Marca Genérica", "Dafra e KTM");
        }
    }

    // 26/05/2022 | Oculta o item 'Horizon 150' do menu
    // Inserido por: João Carlos
    // Solicitado por: Mayara Machado
    function ocultarItemHorizon150(){
        let navItems = document.querySelectorAll(".nav-simple .nav .nav-item");
    
        if(navItems.length > 0){
            navItems.forEach(navItem => {
                let navItemText = navItem.querySelector(".nav-link").innerHTML;
        
                if(navItemText.includes("Horizon 150")){
                    navItem.remove();
                }
            });
        }
    }

    // 01/06/2022 | Adicionar redirecionamento das páginas de ofertas para páginas de agradecimento
    // Inserido por: Alisson Santana
    function adicionaRedirectPaginaAgradecimento() {
        const itemsMenuToRemove = document.querySelectorAll(".nav--accordion-mobile .nav-simple__item")
        itemsMenuToRemove.forEach(itemMenu => {
            if(itemMenu.innerHTML.includes("Página agradecimento")) {
                itemMenu.remove()
            }
        });
        
        const redirectThanksPage = async (spreadsheetId) => {
            const keyAPI = "AIzaSyD89VGI6wnaT6LE3A7Y4wCyiDmgGIxjobE"
            const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:Z?key=${keyAPI}`)
            const data = await response.json()
            const slugs = data.values
            console.log(slugs)
            let dataRedirect = []
            let url = {
                origem: '',
                destino: ''
            }
        
            if(slugs){
                slugs.forEach(element => {
                    url = {origem: element[0], destino: element[1]}
                    dataRedirect.push(url)
                });
            }
        
            const page = window.location.href
        
            dataRedirect.forEach(element => {
                if(page.includes(element.origem)) {
                    window.location.href = 'https://itavema.com.br' + element.destino
                }
            });
        }
        
        window.hookConversion = function() {  
            const spreadsheetId = "1JbjqtdwfWBgGvwTRn53D8H_e6spAGpRyL1W4KTOLs38"
            redirectThanksPage(spreadsheetId)
        }
    }

    // 09/06/2022 | OCULTANDO MENU DE OFERTAS ÚNICAS
    // Inserido por: Bruno 
    // Solicitado por: Junior
    function ocultarMenuOfertasUnicas(){
        Array.prototype.slice.call(document.querySelectorAll('.nav-link.nav-simple__link'))
        .filter(function (el) {
            return el.textContent === 'Ofertas Únicas'
        })[0].parentNode.classList.add('d-none');
    }

    // 09/06/2022 | Adiciona links de navegação no footer
    // Inserido por: Alisson Santana 
    function adicionarLinksNavegacaoFooter(){
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
        `;

        const styleToyota = `
            .footer-content__title {
                color: #333 !important;
            }
        `;
        const logoDiv = document.createElement("div");
        logoDiv.classList.add("container", "container--logo-footer", "px-0");
    
        logoDiv.innerHTML = ` 
            <div class="text-center">
                <a href="https://itavema.com.br/" target="_blank">
                    <img src="https://production.autoforce.com/uploads/group/logo_white/483/logo_comprar-grupo-itavema_c3b4d2fa03.png" width="150">
                </a>
            </div>
        `;
    
        const footer = document.querySelector("footer.footer .container");
        const footerSeparator = document.querySelector(".footer__separator");
    
        if (footer) {
            const container = document.createElement("div")
            container.classList.add("container", "px-0")
    
            const footerContent = document.createElement("div")
            footerContent.classList.add("footer-content", "d-block", "d-md-flex", "flex-wrap")
    
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
                                ServiÃ§os
                            </a>
                        </li>
                    </ul>`;
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
            }
    
            footerContent.appendChild(divMap)
    
            footer.insertBefore(logoDiv, footerSeparator)
            footer.insertBefore(footerContent, footerSeparator)
        }
    }

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
                color: #fff;
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

    function alterarLinksPoliticaPrivacidade() {
        document.addEventListener('readystatechange', event => { 
    
            // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
            if (event.target.readyState === "complete") {
                // function
                const linkPolicyFormSD = document.querySelector(".form-conversion__footer a")
                const linkPolicyFormPortal = document.querySelector(".form-module .call-modal")
                const linkPolicyFooterSD = document.querySelector(".footer__copyright a")
                const linkPolicyFooterPortal = document.querySelector("#copyright a")
                const page = window.location.href
                const urlBase = "https://www.itavema.com.br/"
                const urlPolicy = "/empresa/politica-de-privacidade"
                const menuItemsSD = document.querySelectorAll(".nav--accordion-mobile .nav-item")
            
                if(linkPolicyFooterPortal ){
                    const newLink = linkPolicyFooterPortal.cloneNode(true)
                    newLink.setAttribute("href", "https://www.itavema.com.br/empresa/politica-de-privacidade")
                    linkPolicyFooterPortal.after(newLink)
                    linkPolicyFooterPortal.remove()
                }
                
                if(linkPolicyFormPortal) {
                    const newLink = linkPolicyFormPortal.cloneNode(true)
                    newLink.setAttribute("href", "https://www.itavema.com.br/empresa/politica-de-privacidade")
                    linkPolicyFormPortal.after(newLink)
                    linkPolicyFormPortal.remove()
                }
            
                if(menuItemsSD) {
                    menuItemsSD.forEach(element => {
                        if(element.innerHTML.includes("Política de Privacidade")) {
                            element.remove()
                        }
                    });
                }
            
                if(linkPolicyFooterSD) {
                    if(page.includes("toyota-inter-japan-rj")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "toyota-inter-japan-rj" + urlPolicy)
                    } else if(page.includes("toyota-inter-japan-sp")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "toyota-inter-japan-sp" + urlPolicy)
                    } else if(page.includes("byd")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "byd" + urlPolicy)
                    } else if(page.includes("nissan-itavema-japan")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "nissan-itavema-japan" + urlPolicy)
                    } else if(page.includes("itva-motos")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "itva-motos" + urlPolicy)
                    } else if(page.includes("renaultfrance")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "renaultfrance" + urlPolicy)
                    } else if(page.includes("fiat")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "fiat" + urlPolicy)
                    } else if(page.includes("hyundai-itavema-motors")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "hyundai-itavema-motors" + urlPolicy)
                    } else if(page.includes("itavema-seminovos")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "itavema-seminovos" + urlPolicy)
                    } 
                }
            
                if(linkPolicyFormSD) {
                    if(page.includes("toyota-inter-japan-rj")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "toyota-inter-japan-rj" + urlPolicy)
                    } else if(page.includes("toyota-inter-japan-sp")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "toyota-inter-japan-sp" + urlPolicy)
                    } else if(page.includes("byd")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "byd" + urlPolicy)
                    } else if(page.includes("nissan-itavema-japan")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "nissan-itavema-japan" + urlPolicy)
                    } else if(page.includes("itva-motos")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "itva-motos" + urlPolicy)
                    } else if(page.includes("renaultfrance")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "renaultfrance" + urlPolicy)
                    } else if(page.includes("fiat")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "fiat" + urlPolicy)
                    } else if(page.includes("hyundai-itavema-motors")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "hyundai-itavema-motors" + urlPolicy)
                    } else if(page.includes("itavema-seminovos")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "itavema-seminovos" + urlPolicy)
                    } 
                }
            }
        });
    }

    removeFormWhatsapp();
    alterarLinksPoliticaPrivacidade();
    alterarTitulosMarcaGenericaParaDafraouKTM();
    adicionarCondicionalMarcasEmDrop();
    ocultarUnidadesSelecionadasFormulario();
    alterarDirecionamentoBotaoAgendamentoRevisao();
    alterarTituloPaginaEmCasoMarcaGenerica();
    ocultarItemHorizon150();
    adicionaRedirectPaginaAgradecimento();
    ocultarMenuOfertasUnicas();
    adicionaSitemapFooter();
})();