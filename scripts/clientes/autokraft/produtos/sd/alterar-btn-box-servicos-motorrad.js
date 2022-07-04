(() => {
    document.addEventListener('DOMContentLoaded', () => { 
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }
        
        if(isThisPage({ urlPiece: "/servicos" })){
            const showcaseServicesPanel = document.querySelector(".showcase-services .showcase-services__panel");
            
            if(showcaseServicesPanel){
                const addStyle = (styles) => {
                    const css = styles,
                        head = document.head || document.getElementsByTagName('head')[0],
                        style = document.createElement('style');
                    head.appendChild(style);
                    style.setAttribute('type', 'text/css');
                    if (style.styleSheet) {
                        // This is required for IE8 and below.
                        style.styleSheet.cssText = css;
                    } else {
                        style.appendChild(document.createTextNode(css));
                    }
                }
        
                const currentCtaService = showcaseServicesPanel.querySelector("button.showcase-services__panel-btn-schedule");
        
                const newCtaService = document.createElement("a");
                newCtaService.setAttribute("class", "btn button showcase-services__panel-btn-schedule d-block");
                newCtaService.setAttribute("href", "https://api.whatsapp.com/send?phone=552131399000");
                newCtaService.setAttribute("target", "_blank");
        
                newCtaService.innerHTML = `
                    <span 
                        style="gap: 0.1rem;" 
                        class="pb-2"
                    >
                        <i class="icon icon-whatsapp"></i> 
                        WhatsApp
                    </span>
                    <span>
                        (21) 3139-9000
                    </span>
                `;
            
                currentCtaService.after(newCtaService);
                currentCtaService.remove();
        
                addStyle(`
                    .showcase-services .showcase-services__panel .showcase-services__panel-btn-schedule{
                        background-color: #31b74d;
                    }
        
                    .showcase-services .showcase-services__panel .showcase-services__panel-btn-schedule span{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `);
            }
        }
    });
})();