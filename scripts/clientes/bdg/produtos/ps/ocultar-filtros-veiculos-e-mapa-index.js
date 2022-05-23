(() => {
    window.addEventListener("DOMContentLoaded", () => {
        if(location.pathname == "/" || location.pathname == "/valborg-seminovos"){
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
        
            let mainVehicleFilter = document.querySelector(".main-filter");
            let mapUnitsForm = document.querySelector(".fragment-map-units .fragment-map-units__render .map-units .map-units__form");
    
            if(mainVehicleFilter && mapUnitsForm){
                mainVehicleFilter.remove();
                mapUnitsForm.remove();
    
                addStyle(`
                    @media (min-width: 992px){
                        .map-units__map {
                            -webkit-box-flex: 3.667;
                            -ms-flex: 3.667;
                            flex: 3.667;
                            height: 80vh;
                        }
                    }
                `);
            }
        }
    });
})();