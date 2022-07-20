(() => {
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

        // Interna novos
        const currentVehiclesShowcaseCtaBoxButton = document.querySelector(".showcase-new__whatsapp-box .cta-box #new-vehicles-showcase_cta-box-button");

        if(currentVehiclesShowcaseCtaBoxButton){
            const newVehiclesShowcaseCtaBoxButton = currentVehiclesShowcaseCtaBoxButton.cloneNode(true);

            newVehiclesShowcaseCtaBoxButton.setAttribute("onclick", `window.open('${headerWhatsappDataLink}')`);

            currentVehiclesShowcaseCtaBoxButton.after(newVehiclesShowcaseCtaBoxButton);
            currentVehiclesShowcaseCtaBoxButton.remove();
        }

        // Interna ofertas
        const currentShowcaseOfferConversionWhatsappBox = document.querySelector(".showcase-offer__conversion-whatsapp-box .cta-box__button-container #modal-whatsapp-button");

        if(currentShowcaseOfferConversionWhatsappBox){
            const newShowcaseOfferConversionWhatsappBox = currentShowcaseOfferConversionWhatsappBox.cloneNode(true);

            newShowcaseOfferConversionWhatsappBox.setAttribute("onclick", `window.open('${headerWhatsappDataLink}')`);

            currentShowcaseOfferConversionWhatsappBox.after(newShowcaseOfferConversionWhatsappBox);
            currentShowcaseOfferConversionWhatsappBox.remove();
        }
    });
})();
        