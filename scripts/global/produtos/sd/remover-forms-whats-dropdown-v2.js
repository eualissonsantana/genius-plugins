(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const headerWhatsappWrapperDesktop = document.querySelectorAll(".header__phones-container")[1];
        const headerWhatsappButtonDesktop = headerWhatsappWrapperDesktop ? headerWhatsappWrapperDesktop.querySelector("button") : null;
        const headerWhatsappItemsDesktop = headerWhatsappButtonDesktop ? headerWhatsappButtonDesktop.parentNode.querySelectorAll("#header-card-whatsapp .card-collapse__content .list .header__card-whatsapp-item") : [];

        const headerWhatsappWrapperMobile = document.querySelectorAll(".header-mobile .header-mobile__buttons > div")[1];
        const headerWhatsappButtonMobile = headerWhatsappWrapperMobile ? headerWhatsappWrapperMobile.querySelector("button") : null;
        const headerWhatsappItemsMobile = headerWhatsappButtonMobile ? headerWhatsappButtonMobile.parentNode.querySelectorAll("#header-card-whatsapp-mobile #wpp-content-mobile-0 .list .header__card-whatsapp-item") : [];
        
        const changeHeaderWhatsappButton = (currentWhatsappButtonDesktop, headerWhatsappItems) => {
            let dataLink;

            if(headerWhatsappItems.length > 0){
                headerWhatsappItems.forEach(headerWhatsappItem => {
                    const headerWhatsappLink = headerWhatsappItem.querySelector(".header-mobile__whatsapp-link");
                    dataLink = headerWhatsappLink.getAttribute("data-link");
                });

                const newWhatsappButton = currentWhatsappButtonDesktop.cloneNode(true);
                newWhatsappButton.setAttribute("onclick", `window.open('${dataLink}')`);
                currentWhatsappButtonDesktop.after(newWhatsappButton);
                currentWhatsappButtonDesktop.remove();
            }
        };

        changeHeaderWhatsappButton(headerWhatsappButtonDesktop, headerWhatsappItemsDesktop);
        changeHeaderWhatsappButton(headerWhatsappButtonMobile, headerWhatsappItemsMobile);
    });
})();