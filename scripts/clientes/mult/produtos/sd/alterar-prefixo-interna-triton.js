(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }

        if(isThisPage({ urlPiece: "/novos/l200-triton" })){
            let vehicleDetailsTitle = document.querySelector(".vehicle-details .container .section-component__title");

            if(vehicleDetailsTitle){
                let partsOfVehicleDetailsTitle = String(vehicleDetailsTitle.innerText).split(" ");
                let newVehicleDetailsTitle = ``;
                
                vehicleDetailsTitle.innerHTML = ``;

                partsOfVehicleDetailsTitle.forEach((partOfVehicleDetailsTitle, index) => {
                    if(index == 1){
                        newVehicleDetailsTitle += ` a `;
                    }
                    else if(index == 2){
                        newVehicleDetailsTitle += `<span>${partOfVehicleDetailsTitle}`;
                    }
                    else if(partOfVehicleDetailsTitle == "em"){
                        newVehicleDetailsTitle += ` </span>${partOfVehicleDetailsTitle}`;
                    }
                    else{
                        newVehicleDetailsTitle += ` ${partOfVehicleDetailsTitle}`;
                    }
                });

                vehicleDetailsTitle.innerHTML = newVehicleDetailsTitle;
            }
        }
    });
})();