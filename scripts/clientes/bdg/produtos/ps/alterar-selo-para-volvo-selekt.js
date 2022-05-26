(() => {
    const usedVehiclesSeals = document.querySelectorAll(".used-vehicles-showcase__table .used-vehicles__seals .used-vehicles__seal");

    if(usedVehiclesSeals.length > 0){
        usedVehiclesSeals.forEach(usedVehiclesSeal => {
            if(usedVehiclesSeal.innerHTML.includes("veículo de não-fumante")){
                usedVehiclesSeal.innerHTML = `Volvo Selekt`;
            }
        });
    }
})();