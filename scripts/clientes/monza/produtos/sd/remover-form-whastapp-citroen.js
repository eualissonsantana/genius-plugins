(() => {
    window.addEventListener("DOMContentLoaded", () => {
        // Header
        const headerWhatsappItems = document.querySelectorAll(".header__whatsapps .header__contacts-dropdown .contact-group__items-list .contact-group__item");
        let headerWhatsappDataLink;

        if(headerWhatsappItems.length > 0){
            headerWhatsappItems.forEach(headerWhatsappItem => {
                const headerWhatsappLink = headerWhatsappItem.querySelector(".contact-group__item-link").cloneNode(true);
                headerWhatsappDataLink = headerWhatsappLink.getAttribute("data-link");
                headerWhatsappLink.setAttribute("href", headerWhatsappDataLink);
                headerWhatsappLink.setAttribute("target", "_blank");
        
                headerWhatsappItem.querySelector(".contact-group__item-link").remove();
                headerWhatsappItem.querySelector("i").before(headerWhatsappLink);
            });
        }

        // Floating whatsapp
        const currentFloatingWhatsappButton = document.querySelector(".floating-whatsapp .container .floating-whatsapp__button");

        if(currentFloatingWhatsappButton){
            const floatingWhatsappButtonWrapper = currentFloatingWhatsappButton.parentNode;
            const newFloatingWhatsappButton = document.querySelector(".floating-whatsapp .container .floating-whatsapp__button").cloneNode(true);
            const dataLink = newFloatingWhatsappButton.getAttribute("data-link");
            newFloatingWhatsappButton.setAttribute("onclick", `window.open('${dataLink}')`);
            currentFloatingWhatsappButton.remove();
            floatingWhatsappButtonWrapper.appendChild(newFloatingWhatsappButton);
        }

        // Novos
        const newVehiclesButtonWhatsapp = document.querySelector(".section-new-vehicles__container .section-site__ctas .new-vehicles__button-whatsapp");

        if(newVehiclesButtonWhatsapp){
            const newerVechilesButtonWhatsapp = document.querySelector(".section-new-vehicles__container .section-site__ctas .new-vehicles__button-whatsapp").cloneNode(true);
            const dataLink = newerVechilesButtonWhatsapp.getAttribute("data-link");
            newerVechilesButtonWhatsapp.setAttribute("onclick", `window.open('${dataLink}')`);
            newVehiclesButtonWhatsapp.remove();
            document.querySelector(".section-new-vehicles__container .section-site__ctas a").after(newerVechilesButtonWhatsapp);
        }

        // Box whatsapp
        const currentWhatsappBoxButton = document.querySelector(".whatsapp-box .whatsapp-box__content .whatsapp-box__button");

        if(currentWhatsappBoxButton){
            const newWhatsappBoxButton = document.querySelector(".whatsapp-box .whatsapp-box__content .whatsapp-box__button").cloneNode(true);
            const dataLink = newWhatsappBoxButton.getAttribute("data-link");
            newWhatsappBoxButton.setAttribute("onclick", `window.open('${dataLink}')`);
            currentWhatsappBoxButton.remove();
            document.querySelector(".whatsapp-box .whatsapp-box__content .whatsapp-box__form-modal").before(newWhatsappBoxButton);
        }

        // Dealer voice
        const currentWhatsappDealerVoice = document.querySelector(".dealer-voice .whatsapp-box .cta-box-with-model__content .button--whatsapp");

        if(currentWhatsappDealerVoice){
            const newWhatsappDealerVoice = document.querySelector(".dealer-voice .whatsapp-box .cta-box-with-model__content .button--whatsapp").cloneNode(true);
            newWhatsappDealerVoice.setAttribute("onclick", `window.open('${headerWhatsappDataLink}')`);
            currentWhatsappDealerVoice.remove();
            document.querySelector(".dealer-voice .whatsapp-box .cta-box-with-model__content .cta-box-with-model__button-container").appendChild(newWhatsappDealerVoice);
        }
    });
})();