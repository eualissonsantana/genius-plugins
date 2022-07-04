(() => {
    document.addEventListener('readystatechange', event => { 
        if(event.target.readyState === "complete"){
            const isThisPage = ({ urlPiece }) => {
                const fullURL = window.location.href
                const result = fullURL.includes(urlPiece)
        
                return result
            }
            
            if(isThisPage({ urlPiece: "/servicos" })){
                const ctaWhatsappAfterForm = document.querySelector(".showcase .cta-box .cta-box__button-container button.button--whatsapp");
        
                if(ctaWhatsappAfterForm){
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
        
                    changeCtaWhatsapp('https://api.whatsapp.com/send?phone=552131399000', ctaWhatsappAfterForm);
                }
            }
        }
    });
})();