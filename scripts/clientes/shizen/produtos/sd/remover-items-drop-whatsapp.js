(() => {
    const desktopWhatsappItems = document.querySelectorAll(".header__card-phones-items #wpp-content-0 .list--header-phones .header__card-whatsapp-item");
    const mobileWhatsappItems = document.querySelectorAll("#header-card-whatsapp-mobile #wpp-content-mobile-0 .header__card-whatsapp-item");

    const removeWhatsappItems = (whatsappItems) => {
        whatsappItems.forEach(whatsappItem => {
            const whatsappItemText = whatsappItem.querySelector("a strong").innerHTML;
    
            if(whatsappItemText.includes("teste")){
                whatsappItem.remove();
            }
        });
    };

    removeWhatsappItems(desktopWhatsappItems);
    removeWhatsappItems(mobileWhatsappItems);
})();