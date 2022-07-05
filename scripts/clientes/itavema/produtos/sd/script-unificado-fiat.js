(() => {
    // 04/07/2022 | Remove form de whatsapp nas CTAs de whatsapp
    // João Carlos
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

    function alteraRedirectAgendamentoRevisao() {
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
                    newBtnSchedule.href = "https://itavema.com.br/fiat/empresa/agendamento-de-servico";
    
                    currentBtnSchedule.after(newBtnSchedule);
                    currentBtnSchedule.remove();
                }
            }
        });
    }

    // 17/06/2022 | Adicionar redirecionamento das páginas de ofertas para páginas de agradecimento
    // Alisson Santana
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

    // Oculta carrossel de Ofertas Únicas 0Km da Index
    // Bruno
    function ocultaCarrosselOfertasUnicas() {
        if(window.location.pathname == '/' || window.location.pathname == '/fiat'){
            let carouselUsedModels = document.querySelector(".section-component.carousel-offers-used-models");
    
            if(carouselUsedModels){
                carouselUsedModels.remove();
            }
        }
    }

    // Oculta carroseu
    function ocultaOfertasUnicasMenu() {
        Array.prototype.slice.call(document.querySelectorAll('.nav-link.nav-simple__link'))
        .filter(function (el) {
            return el.textContent === ' Ofertas Únicas '
        })[0].parentNode.classList.add('d-none')
    }

    function ocultaOfertas0km() {
        let carouselUsedModels = document.querySelector(".section-component.carousel-offers-used-models");

        if(carouselUsedModels){
            carouselUsedModels.remove();
        }
    }

    // SCRIPT PARA RENOMEAR MENU PRINCIPAL - ALTERANDO DE OFERTAS PARA NOSSO ESTOQUE
    function alteraOfertasParaNossoEstoque() {
        Array.prototype.slice.call(document.querySelectorAll('.nav .nav-link'))
        .filter(function (el) {
            return el.textContent === ' Serviços '
        })[0].innerText = ' Pós Venda ';
    }

    function alteraOrdemMenu() {
        const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

        if(navItems.length > 0){
            const insertAfter = (newNode, existingNode) => {
                existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
            }
    
            insertAfter(navItems[7], navItems[9]);
            insertAfter(navItems[6], navItems[7]);
        }
    }

    removeFormWhatsapp()
    alteraRedirectAgendamentoRevisao()
    adicionaRedirectPaginaAgradecimento()
    ocultaCarrosselOfertasUnicas()
    ocultaOfertasUnicasMenu()
    ocultaOfertas0km()
    alteraOfertasParaNossoEstoque()
    alteraOrdemMenu()
})()
