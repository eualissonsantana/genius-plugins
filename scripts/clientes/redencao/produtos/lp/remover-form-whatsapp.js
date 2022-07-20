(() => {
    document.addEventListener('readystatechange', event => { 
        if (event.target.readyState === "complete") {
            let dataLink;

            const whatsappWrapper = document.querySelector('#wpp-content-0 ul.list.list--header-phones.list--border-bottom');
            const whatsappMobileWrapper = document.querySelector('#wpp-content-mobile-0 ul.list.list--border-bottom');

            const ctaWhatsappEndPage = document.querySelector(".text-calls-cta-offer button.button--whatsapp");
            const ctaWhatsappAfterForm = document.querySelector(".showcase .cta-box .cta-box__button-container button.button--whatsapp");
            const ctaWhatsappMobile = document.querySelector(".showcase .button--whatsapp.showcase-new-simple__cta-mobile");
        
            const changeLinkWhatsapp = (wrapper) => {
                const phones = wrapper.querySelectorAll('li');
                phones.forEach(phone => {
                    phone.innerHTML = phone.innerHTML;

                    const phoneLink = phone.querySelector("a");
                    dataLink = phoneLink.getAttribute("data-link");

                    phoneLink.setAttribute("target", "_blank");
                    phoneLink.setAttribute("href", dataLink);
                });
            }

            const changeCtaWhatsapp = (link, currentCtaWhatsapp) => {
                if(!currentCtaWhatsapp){
                    return;
                }

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
        
            changeLinkWhatsapp(whatsappWrapper);
            changeLinkWhatsapp(whatsappMobileWrapper);

            changeCtaWhatsapp(dataLink, ctaWhatsappEndPage);
            changeCtaWhatsapp(dataLink, ctaWhatsappAfterForm);
            changeCtaWhatsapp(dataLink, ctaWhatsappMobile);
        }
    });
})();
