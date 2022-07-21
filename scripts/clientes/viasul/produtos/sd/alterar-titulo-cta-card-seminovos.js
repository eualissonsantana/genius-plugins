(() => {
    // Carrossel de seminovos index
    const usedVehiclesCardsIndex = document.querySelectorAll(".carousel-used-models2 .carousel .carousel__item .card");

    const changeCtaTitleCardUsedVehicles = (usedVehiclesCard) => {
        usedVehiclesCard.forEach(usedVehicleCard => {
            const usedvehiclesButton = usedVehicleCard.querySelector(".card__footer .btn");
    
            if(usedvehiclesButton){
                usedvehiclesButton.innerHTML = `TENHO INTERESSE`;
            }
        });
    };

    changeCtaTitleCardUsedVehicles(usedVehiclesCardsIndex);
})();