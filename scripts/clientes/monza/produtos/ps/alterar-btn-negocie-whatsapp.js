(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const ctaWhatsappEndPage = document.querySelector(".text-calls-cta-offer button.button--whatsapp");
        const ctaWhatsappAfterForm = document.querySelector(".showcase .cta-box .cta-box__button-container button.button--whatsapp");
        const ctaWhatsappMobile = document.querySelector(".showcase .button--whatsapp.showcase-new-simple__cta-mobile");

        let dataLink;
        const whatsappWrapper = document.querySelector('#wpp-content-0 ul.list.list--header-phones.list--border-bottom li a');

        if(whatsappWrapper){
            dataLink = whatsappWrapper.getAttribute('data-link');
        }

        const whatsappMobileWrapper = document.querySelector('#wpp-content-mobile-0 ul.list.list--border-bottom li a');
        if(whatsappMobileWrapper){
            dataLink = whatsappMobileWrapper.getAttribute('data-link');
        }

        const changeCtaWhatsapp = (link, currentCtaWhatsapp) => {
            const newCtaWhatsapp = document.createElement("a");
            newCtaWhatsapp.href = link;
            newCtaWhatsapp.target = "_blank";
            newCtaWhatsapp.setAttribute("class", "btn button button--large button--whatsapp w-100");
            newCtaWhatsapp.innerHTML = `
                <i class="icon icon-whatsapp"></i> 
                Negocie pelo WhatsApp
            `;

            currentCtaWhatsapp.after(newCtaWhatsapp);
            currentCtaWhatsapp.remove();
        };

        if(ctaWhatsappEndPage){
            changeCtaWhatsapp(dataLink, ctaWhatsappEndPage);
        }
        if(ctaWhatsappAfterForm){
            changeCtaWhatsapp(dataLink, ctaWhatsappAfterForm);
        }

        changeCtaWhatsapp(dataLink, ctaWhatsappMobile);
    });
})();