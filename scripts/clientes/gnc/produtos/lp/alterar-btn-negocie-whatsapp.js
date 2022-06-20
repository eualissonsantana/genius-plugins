(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const ctaWhatsappEndPage = document.querySelector(".text-calls-cta-offer button.button--whatsapp");
        const ctaWhatsappAfterForm = document.querySelector(".showcase .cta-box .cta-box__button-container button.button--whatsapp");

        if(ctaWhatsappEndPage && ctaWhatsappAfterForm){
            const hostName = location.hostname
            const pahtName = location.pathname;

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

            if(pahtName.includes("terra-forte-toyota-divinopolis/novos") 
               || (hostName.includes("divinopolis") && pahtName.includes("novos"))
            ){
                changeCtaWhatsapp("https://bit.ly/3Q8xY3N", ctaWhatsappEndPage);
                changeCtaWhatsapp("https://bit.ly/3Q8xY3N", ctaWhatsappAfterForm);
            }
            else if(pahtName.includes("terra-forte-toyota-para-de-minas/novos")
                || (hostName.includes("para-de-minas") && pahtName.includes("novos"))
            ){
                changeCtaWhatsapp("https://bit.ly/395xBWO", ctaWhatsappEndPage);
                changeCtaWhatsapp("https://bit.ly/395xBWO", ctaWhatsappAfterForm);
            }
            else if(pahtName.includes("terra-forte-toyota-montes-claros/novos")
                || (hostName.includes("montes-claros") && pahtName.includes("novos"))
            ){
                changeCtaWhatsapp("https://bit.ly/3zDNu1R", ctaWhatsappEndPage);
                changeCtaWhatsapp("https://bit.ly/3zDNu1R", ctaWhatsappAfterForm);
            }
            else if(pahtName.includes("terra-forte-toyota/novos")
                || (hostName.includes("salvador") && pahtName.includes("novos"))
            ){
                changeCtaWhatsapp("https://bit.ly/3O0NT20", ctaWhatsappEndPage);
                changeCtaWhatsapp("https://bit.ly/3O0NT20", ctaWhatsappAfterForm);
            }
        }
    });
})();