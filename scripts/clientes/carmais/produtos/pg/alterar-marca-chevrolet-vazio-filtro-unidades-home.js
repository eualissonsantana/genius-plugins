(() => {
    document.addEventListener('readystatechange', event => { 

        // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
        if (event.target.readyState === "complete") {
            // function
            const selectUnits = document.querySelectorAll("#filter_unit_by_brand .options li")
            const itemSelected = document.querySelector("#filter_unit_by_brand .SelectBox span")

            changeNames()
        
            if(selectUnits) {
                selectUnits.forEach(element => {
                    if(element.innerHTML.includes("Chevrolet_Vazio")) {
                        element.innerHTML = element.innerHTML.replace("Chevrolet_Vazio", "Chevrolet")
                    }
                });
            }

            const observer = new MutationObserver(function(){
                if(itemSelected.innerHTML.includes("Chevrolet_Vazio")) {
                    changeNames()
                }
            });
            
            if(itemSelected) {
                // Setando as alterações que o observer deve assistir
                observer.observe(itemSelected, {
                    childList: true,
                    subtree: true
                });
            }
        }
    });
})()

function changeNames() {
    const itemSelected = document.querySelector("#filter_unit_by_brand .SelectBox span")
    
    if(itemSelected) {
        itemSelected.innerHTML = itemSelected.innerHTML.replace("Chevrolet_Vazio", "Chevrolet")
    }
}