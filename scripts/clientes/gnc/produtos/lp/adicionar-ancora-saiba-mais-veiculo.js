(() => {
    const learnMoreVehicle = document.querySelector(".more-about");
    const vehicleDetailsInfo = document.querySelector(".vehicle-details .vehicle-details__info");
    
    if(learnMoreVehicle && vehicleDetailsInfo){
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }

        if(isThisPage({ urlPiece: "novos" })){
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
            
            learnMoreVehicle.querySelector("p").remove();
    
            const buttonLearnMore = document.createElement("a");
            buttonLearnMore.setAttribute("href", "#vehicle-details-info");
            buttonLearnMore.innerHTML = `
                Saiba mais sobre o Veículo 
                <i class="icon icon-arrow-left"></i>
            `;
    
            vehicleDetailsInfo.setAttribute("id", "vehicle-details-info");
    
            learnMoreVehicle.appendChild(buttonLearnMore);
    
            addStyle(`
                .more-about a{
                    font-weight: bold;
                    color: #000;
                    margin: 40px 0 0;
                }
    
                @media screen and (max-width: 991.98px){
                    .more-about a {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
                
            `);
        }
    }
})();