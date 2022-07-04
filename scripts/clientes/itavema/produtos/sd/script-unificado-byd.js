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

    // 27/06/22 | OCULTANDO MENU DE Agende Test Drive
    // INSERIDO POR: Bruno
    // SOLICITADO POR: Rafael
    function ocultarMenuAgendeTestDrive(){
        const items = document.querySelectorAll(".nav-link.nav-simple__link");
        
        if(items){
            items.forEach(element => {
                if(element.innerHTML.includes("Agende Test Drive")){
                    element.parentNode.remove(element.parentNode);
                }
            });
        }    
    }

    removeFormWhatsapp();
    adicionaRedirectPaginaAgradecimento();
    ocultarMenuAgendeTestDrive();
})();