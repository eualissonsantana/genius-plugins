(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const hostName = location.hostname
        const pahtName = location.pathname;
        
        const ctaWhatsappEndPage = document.querySelector(".text-calls-cta-offer button.button--whatsapp");
        const ctaWhatsappAfterForm = document.querySelector(".showcase .cta-box .cta-box__button-container button.button--whatsapp");
        const ctaWhatsappMobile = document.querySelector(".showcase .button--whatsapp.showcase-new-simple__cta-mobile");

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

        if(pahtName.includes("terra-forte-toyota-divinopolis/novos") 
            || (hostName.includes("divinopolis") && pahtName.includes("novos"))
        ){
            changeCtaWhatsapp("https://bit.ly/3Nq0vz5", ctaWhatsappEndPage);
            changeCtaWhatsapp("https://bit.ly/3Nq0vz5", ctaWhatsappAfterForm);
            changeCtaWhatsapp("https://bit.ly/3Nq0vz5", ctaWhatsappMobile);
        }
        else if(pahtName.includes("terra-forte-toyota-para-de-minas/novos")
            || (hostName.includes("para-de-minas") && pahtName.includes("novos"))
        ){
            changeCtaWhatsapp("https://bit.ly/3Nq0vz5", ctaWhatsappEndPage);
            changeCtaWhatsapp("https://bit.ly/3Nq0vz5", ctaWhatsappAfterForm);
            changeCtaWhatsapp("https://bit.ly/3Nq0vz5", ctaWhatsappMobile);
        }
        else if(pahtName.includes("terra-forte-toyota-montes-claros/novos")
            || (hostName.includes("montes-claros") && pahtName.includes("novos"))
        ){
            changeCtaWhatsapp("https://bit.ly/3OuFN2j", ctaWhatsappEndPage);
            changeCtaWhatsapp("https://bit.ly/3OuFN2j", ctaWhatsappAfterForm);
            changeCtaWhatsapp("https://bit.ly/3OuFN2j", ctaWhatsappMobile);
        }
        else if(pahtName.includes("terra-forte-toyota/novos")
            || (hostName.includes("salvador") && pahtName.includes("novos"))
        ){
            changeCtaWhatsapp("https://bit.ly/3O0NT20", ctaWhatsappEndPage);
            changeCtaWhatsapp("https://bit.ly/3O0NT20", ctaWhatsappAfterForm);
            changeCtaWhatsapp("https://bit.ly/3O0NT20", ctaWhatsappMobile);
        } 
        else if(pahtName.includes("grande-minas/novos")
            || (hostName.includes("grandeminas") && pahtName.includes("novos"))
        ){
            changeCtaWhatsapp("https://bit.ly/3QQWoip", ctaWhatsappEndPage);
            changeCtaWhatsapp("https://bit.ly/3QQWoip", ctaWhatsappAfterForm);
            changeCtaWhatsapp("https://bit.ly/3QQWoip", ctaWhatsappMobile);
        } 
        else if((pahtName.includes("grande-bahia") && pahtName.includes("novos"))
            || (hostName.includes("grandebahia") && pahtName.includes("novos"))
        ){
            changeCtaWhatsapp("https://bit.ly/3OLfjJB", ctaWhatsappEndPage);
            changeCtaWhatsapp("https://bit.ly/3OLfjJB", ctaWhatsappAfterForm);
            changeCtaWhatsapp("https://bit.ly/3OLfjJB", ctaWhatsappMobile);
        }
    });
})();