(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "novos" })){
        const listVehiclesNewSearchFilter = document.querySelector(".list-vehicles-new__search-filter");
    
        if(listVehiclesNewSearchFilter){
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
    
            const currentDivider = document.querySelector(".list-vehicles-new .list-vehicles-new__hr");
            currentDivider.remove();
        
            const textWrapper = document.createElement("div");
            textWrapper.classList.add("description-vehicles-new");
            textWrapper.innerHTML += `
                <hr class="list-vehicles-new__hr">
            `;
        
            const text = document.createElement("h6");
            text.innerHTML = `
                <strong>ATENÇÃO:</strong> Todo e qualquer pagamento referente a compra de veículos, peças e serviços, devem ser realizados na conta da empresa vendedora.
            `;
        
            textWrapper.appendChild(text);
            textWrapper.innerHTML += `
                <hr class="list-vehicles-new__hr">
            `;
    
            listVehiclesNewSearchFilter.after(textWrapper);
        
            addStyle(`
                .description-vehicles-new h6{
                    color: #fff;
                }
        
                .description-vehicles-new h6 strong{
                    color: #FFB300;
                }
    
                .description-vehicles-new .list-vehicles-new__hr{
                    margin: 1.5rem 0 !important;
                }
            `);
        }
    }
})();