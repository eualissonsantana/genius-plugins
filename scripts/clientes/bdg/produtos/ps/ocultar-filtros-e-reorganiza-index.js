(() => {
    window.addEventListener("DOMContentLoaded", () => {
        if(location.pathname == "/" || location.pathname == "/valborg-seminovos"){
            let mainVehicleFilter = document.querySelector(".main-filter");

            if(mainVehicleFilter){
                mainVehicleFilter.remove();
            }
        }
    });

    window.addEventListener("DOMContentLoaded", () => {
        if(location.pathname == "/" || location.pathname == "/seminovos" || location.pathname == "/valborg-seminovos" || location.pathname == "/valborg-seminovos/seminovos"){
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
        
            // Exclui filtros
            let mapUnitsForm = document.querySelector(".fragment-map-units .fragment-map-units__render .map-units .map-units__form");
    
            if(mapUnitsForm){
                mapUnitsForm.remove();
    
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

            // Traz seção de compartilhamento nas redes socias para baixo do mapa
            let pageContainer = document.querySelector(".page__container");
            let socialShare = document.querySelector(".social-share");
            let fragmentMapUnits = document.querySelector(".fragment-map-units");
            let fragmentMapUnitsContainer = document.querySelector(".fragment-map-units .container");
            let textCallsChatOnline = document.querySelector(".text-calls-chat-online");

            // Removendo a classe container
            fragmentMapUnitsContainer.setAttribute("class", "");

            insertAfter(socialShare, fragmentMapUnits);
            pageContainer.insertBefore(textCallsChatOnline, fragmentMapUnits);
        }
    });
})();