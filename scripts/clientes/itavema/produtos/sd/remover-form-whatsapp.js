(() => {
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
})();