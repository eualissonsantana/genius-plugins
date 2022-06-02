(() => {
    const footerSeparator = document.querySelector("footer.footer .footer__separator");
    const footerSocialNetworksMobile = document.querySelector("footer.footer .footer__social-networks");

    const addAddressFooter = (footer) => {
        const footerOpeningHours = document.createElement("div");
        footerOpeningHours.classList.add("footer__horario__funcionamento");
        footerOpeningHours.style = `
            color: #999999;
            font-size: 14px;
        `;
        footerOpeningHours.innerHTML = `
            - Segunda a Sexta : 8:00 às 18:00
            <br>
            - Sábado: 08:00 às 14:00
        `;

        footer.before(footerOpeningHours);
    }
    
    if(footerSeparator && footerSocialNetworksMobile){
        if(window.matchMedia("(min-width: 768px)").matches){
            addAddressFooter(footerSeparator);
        }
        else{
            addAddressFooter(footerSocialNetworksMobile);
        }
    }
})();