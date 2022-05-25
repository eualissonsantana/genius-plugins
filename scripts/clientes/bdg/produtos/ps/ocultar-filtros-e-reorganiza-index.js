(() => {
    window.addEventListener("DOMContentLoaded", () => {
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

        const insertAfter = (newNode, existingNode) => {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }

        let mapUnitsForm = document.querySelector(".fragment-map-units");

        if(mapUnitsForm){
            mapUnitsForm.innerHTML = `
                 <div><div class="fragment-map-units__render"><div class="map-units"><div class="map-units__map"><iframe class="map-units__map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.000006300999!2d-43.95771938525547!3d-19.966501986583374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697edd6186c75%3A0x6f42c14bbd429ecb!2sValborg!5e0!3m2!1spt-BR!2sbr!4v1652370446458!5m2!1spt-BR!2sbr"></iframe></div></div></div></div>
            `;

            addStyle(`
                @media (min-width: 992px){
                    .map-units__map {
                        -webkit-box-flex: 3.667;
                        -ms-flex: 3.667;
                        flex: 3.667;
                        height: 65vh;
                    }
    
                    .fragment-map-units{
                        background-color: #fff !important;
                        padding-top: 0rem !important;
                        padding-bottom: 0rem !important;
                    }
                }
            `);
        }

        if(location.pathname == "/"  || location.pathname == "/valborg-seminovos" || location.pathname == "/valborg-seminovos/"){
            // Exclui filtros
            let mainVehicleFilter = document.querySelector(".main-filter");
                
            if(mainVehicleFilter){
                mainVehicleFilter.remove();
            }
        
            // Traz seção de compartilhamento nas redes socias para baixo do mapa
            let pageContainer = document.querySelector(".page__container");
            let socialShare = document.querySelector(".social-share");
            let fragmentMapUnits = document.querySelector(".fragment-map-units");
            let textCallsChatOnline = document.querySelector(".text-calls-chat-online");
        
            insertAfter(socialShare, fragmentMapUnits);
            pageContainer.insertBefore(textCallsChatOnline, fragmentMapUnits);
        }
    });
})();