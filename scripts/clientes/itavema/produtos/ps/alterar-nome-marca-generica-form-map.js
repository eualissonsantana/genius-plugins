(() => {
    document.addEventListener('readystatechange', event => { 

        // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
        if (event.target.readyState === "complete") {
            // function
            const formMap = document.querySelector(".fragment-map-units .map-units__form .form-group:nth-child(2)")
            
            const observer = new MutationObserver(function(){
                let brandsItens = formMap.querySelectorAll(".form-group:nth-child(2) .choices__list .choices__item")
                if(brandsItens){
                    brandsItens.forEach(element => {
                        if(element.innerHTML.includes("Marca Genérica")) {
                            changeNames()
                        }
                    });
                }
            });
        
            // Setando as alterações que o observer deve assistir
            observer.observe(formMap, {
                attributes: true,
                characterData: true,
                childList: true,
                subtree: true
            });
        }
    });
})()

function changeNames() {
    const brandsItens = document.querySelectorAll(".map-units__form .form-group:nth-child(2) .choices__list .choices__item")

    brandsItens.forEach(element => {
        if(element.innerHTML.includes("Marca Genérica")) {
            element.innerHTML = element.innerHTML.replace("Marca Genérica", "Dafra e KTM")
        }
    });
}