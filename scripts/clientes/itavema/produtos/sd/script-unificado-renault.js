(() => {
    // 04/07/2022 | Remove form de whatsapp nas CTAs de whatsapp
    // Inserido por: João Carlos
    // Solicitado por: Mayara Machado
    function removeFormWhatsapp() {
        window.addEventListener("DOMContentLoaded", () => {
            // Header
            const headerWhatsappItemsDesktop = document.querySelectorAll(".header__navbar-item .header__phones-container #header-card-whatsapp #wpp-content-0 .list .header__card-whatsapp-item");
            const currentHeaderWhatsappButtonDesktop = document.querySelector(".header__navbar-item .header__phones-container .button--whatsapp");
            const headerWhatsappCardCollapseDesktop = document.querySelector(".header__navbar-item .header__phones-container #header-card-whatsapp .card-collapse__header");
    
    
            const headerWhatsappItemsMobile = document.querySelectorAll(".header-mobile__buttons #header-card-whatsapp-mobile #wpp-content-mobile-0 .list .header__card-whatsapp-item");
            const currentHeaderWhatsappButtonMobile = document.querySelector(".header-mobile__buttons > div button.button-icon--whatsapp");
            const headerWhatsappCardCollapseMobile = document.querySelector(".header-mobile__buttons #header-card-whatsapp-mobile .card-collapse__header");
    
    
            let headerWhatsappDataLink;
    
            const changeWhatsappHeader = (headerWhatsappItems, currentHeaderWhatsappButton, headerWhatsappCardCollapse) => {
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
                    headerWhatsappCardCollapse.click();
                });
            };
    
            changeWhatsappHeader(headerWhatsappItemsDesktop, currentHeaderWhatsappButtonDesktop, headerWhatsappCardCollapseDesktop);
            changeWhatsappHeader(headerWhatsappItemsMobile, currentHeaderWhatsappButtonMobile, headerWhatsappCardCollapseMobile);
    
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
                    newBtnSchedule.href = "http://itavema.com.br/renaultfrance/empresa/agendamento-de-servico";
    
                    currentBtnSchedule.after(newBtnSchedule);
                    currentBtnSchedule.remove();
                }
            }
        });
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
        document.querySelectorAll('.nav-link.nav-simple__link').forEach(navLinks => {
            if(navLinks.innerHTML.includes("Ofertas Únicas")){
                navLinks.parentNode.classList.add('d-none');
            }
        });
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
    
        const footer = document.querySelector("footer.footer .container")
        const footerSeparator = document.querySelector(".footer__separator")
    
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
            }
    
            footerContent.appendChild(divMap)
    
            footer.insertBefore(logoDiv, footerSeparator)
            footer.insertBefore(footerContent, footerSeparator)
    
        }
    }

    // Altera texto alternativo da logo do footer
    function alterarTextoAltLogoFooter(){
        const logoFooter = document.querySelector(".container--logo-footer img");

        if(logoFooter) {
            logoFooter.setAttribute("alt", "Grupo Itavema");
        }
    }

    // 15/06/2022 | ALTERAR TITULO DO FORMULARIO DA PAGINA RENAULT ON DEMAND
    // INSERIDO POR: LIZZIE
    // SOLICITADO POR: RAFAEL
    function alterarTituloFormularioPaginaRenaultOnDemand(){
        window.onload = function () {
            if (window.location.pathname.includes("/empresa/renault-on-demand")) {
                document.querySelector(".form-conversion__title").innerText =
                "ESTOU INTERESSADO";
                document.querySelector(".conversion-form__header-phrase p").innerText =
                "Preencha o formulário abaixo para receber o contato de um de nossos especialistas:";
            }
        };
    }

    // 21/06/2022 | SCRIPT PARA RENOMEAR MENU PRINCIPAL - ALTERANDO DE OFERTAS PARA PÓS VENDA
    // INSERIDO POR: Bruno
    // SOLICITADO POR: Rafael
    function alterarMenuOfertasParaPosVenda(){
        document.querySelectorAll('.nav .nav-link').forEach(navLink => {
            if(String(navLink.innerHTML).trim() == "Serviços"){
                navLink.innerHTML = `Pós Venda`;
            }
        });
    }

    // 22/06/2022 | Altera ordem do menu
    // Inserido por: João Carlos
    // Solicitado por: Mayara Machado
    function alterarOrdemMenu(){
        window.addEventListener("DOMContentLoaded", () => {
            const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

            if(navItems.length > 0){
                const reorder = (before, after) => after.parentNode.insertBefore(before, after);
        
                reorder(navItems[9], navItems[7]);
                reorder(navItems[10], navItems[8]);
            }
        });
    }

    removeFormWhatsapp();
    alterarOrdemMenu();
    alterarMenuOfertasParaPosVenda();
    alterarDirecionamentoBotaoAgendamentoRevisao();
    adicionaRedirectPaginaAgradecimento();
    ocultarMenuOfertasUnicas();
    adicionarLinksNavegacaoFooter();
    alterarTextoAltLogoFooter();
    alterarTituloFormularioPaginaRenaultOnDemand();
})();