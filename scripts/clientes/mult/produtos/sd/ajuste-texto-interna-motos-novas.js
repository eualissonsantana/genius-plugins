(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }

        if(isThisPage({ urlPiece: "/novos" })){
            let vehicleDetailsTitle = document.querySelector(".vehicle-details header .section-component__title");
            
            if(vehicleDetailsTitle){
                let vehicleDetailsTitleText = String(document.querySelector(".vehicle-details header .section-component__title").innerText).trim();
                let partsOfVehicleDetailsTitle = vehicleDetailsTitleText.split(" ");

                let newVehicleDetailsTitle = ``;

                const changeCarTitle = (prefix, partsOfVehicleDetailsTitle) => {
                    newVehicleDetailsTitle = `
                        Conheça ${prefix} <span>
                    `;

                    partsOfVehicleDetailsTitle.forEach((partOfVehicleDetailsTitle, index) => {
                        if(index > 1){
                            if(partOfVehicleDetailsTitle == "em"){
                                newVehicleDetailsTitle += `</span> em`;
                            }
                            else{
                                newVehicleDetailsTitle += ` ${partOfVehicleDetailsTitle}`;
                            }
                        }
                    });

                    vehicleDetailsTitle.innerHTML = newVehicleDetailsTitle;
                };

               
                changeCarTitle(`a`, partsOfVehicleDetailsTitle)
            }
        }
    });
})();