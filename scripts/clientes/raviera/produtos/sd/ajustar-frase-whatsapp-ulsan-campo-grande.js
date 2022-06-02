(() => {
    window.addEventListener("load", () => {
        const changeWhatsappPhrase = (headerWhatsappItems) => {
            headerWhatsappItems.forEach(whatsappItem => {
                let whatsappLink = whatsappItem.querySelector("a").getAttribute("href");
                let whatsappDataName = whatsappItem.querySelector("a").getAttribute("data-name");
                let modifiedWhatsappLink;
    
                if(whatsappDataName == "Pós Vendas - Agendamentos"){
                    modifiedWhatsappLink = `${whatsappLink.split("&")[0]}&text=Olá, vim através do WhatsApp Site! Gostaria de agendar um serviço.`;
                }
                else if(whatsappDataName == "Ulsan Hyundai - Vendas"){
                    modifiedWhatsappLink = `${whatsappLink.split("&")[0]}&text=Olá, vim através do WhatsApp Site! Gostaria de mais informações sobre os carros.`;
                }
                
                console.log(whatsappItem.querySelector("a"));
                whatsappItem.querySelector("a").setAttribute("href", modifiedWhatsappLink);
                whatsappItem.querySelector("a").setAttribute("data-link", modifiedWhatsappLink);
            }); 
        };
    
        const headerPhonesContainerDesktop = document.querySelectorAll(".header-desktop .header__phones .header__phones-container")[1];
        const headerCardWhatsappItemsDesktop = headerPhonesContainerDesktop.querySelectorAll("#header-card-whatsapp #wpp-content-0 .list .header__card-whatsapp-item");
    
        const headerPhonesContainerMobile = document.querySelector(".header-mobile .header-mobile__row .header-mobile__buttons");
        const headerCardWhatsappItemsMobile = headerPhonesContainerMobile.querySelectorAll("#header-card-whatsapp-mobile #wpp-content-mobile-0 .list .header__card-whatsapp-item");
    
        changeWhatsappPhrase(headerCardWhatsappItemsDesktop);
        changeWhatsappPhrase(headerCardWhatsappItemsMobile);
    });
})();