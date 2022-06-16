(() => {
    const currentCtaWhatsapp = document.querySelector(".text-calls-cta-offer button.button--whatsapp");

    if(currentCtaWhatsapp){
        const pahtName = location.pathname;

        const changeCtaWhatsapp = (link, currentCtaWhatsapp) => {
            const newCtaWhatsapp = document.createElement("a");
            newCtaWhatsapp.href = link;
            newCtaWhatsapp.target = "_blank";
            newCtaWhatsapp.setAttribute("class", "btn button button--large button--whatsapp w-100");
            newCtaWhatsapp.setAttribute("data-proxy-event", "click@.cta-box__button-container>button");
            newCtaWhatsapp.innerHTML = `
                <i class="icon icon-whatsapp"></i> 
                Negocie pelo WhatsApp
            `;

            currentCtaWhatsapp.after(newCtaWhatsapp);
            currentCtaWhatsapp.remove();
        };

        if(pahtName.includes("terra-forte-toyota-divinopolis/novos")){
            changeCtaWhatsapp("https://bit.ly/3Q8xY3N", currentCtaWhatsapp);
        }
        else if(pahtName.includes("terra-forte-toyota-para-de-minas/novos")){
            changeCtaWhatsapp("https://bit.ly/395xBWO", currentCtaWhatsapp);
        }
        else if(pahtName.includes("terra-forte-toyota-montes-claros/novos")){
            changeCtaWhatsapp("https://bit.ly/3zDNu1R", currentCtaWhatsapp);
        }
        else if(pahtName.includes("terra-forte-toyota/novos")){
            changeCtaWhatsapp("https://bit.ly/3O0NT20", currentCtaWhatsapp);
        }
    }
})();