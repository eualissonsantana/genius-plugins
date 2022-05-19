(() => {
    document.addEventListener('readystatechange', event => { 

        // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
        if (event.target.readyState === "complete") {
            // function
        }
        const addStyle = (styles) => {
            const css = styles,
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');
                head.appendChild(style);
                style.setAttribute('type', 'text/css');
            if (style.styleSheet){
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
        }
    
        addStyle`
            .unit-carousel footer hgroup h5 {
                display: none;
            }
        `
    
        const selectUnits = document.querySelectorAll("#filter_unit_by_brand .options li")
        const itemSelected = document.querySelector("#filter_unit_by_brand .SelectBox span")
       
        changeNames()
    
        if(selectUnits) {
            selectUnits.forEach(element => {
                if(element.innerHTML.includes("Marca Genérica")) {
                    element.innerHTML = element.innerHTML.replace("Marca Genérica", "Dafra e KTM")
                }
            });
        }
        
        const observer = new MutationObserver(function(){
            if(itemSelected.innerHTML.includes("Marca Genérica")) {
                changeNames()
            }
        });
    
        // Setando as alterações que o observer deve assistir
        observer.observe(itemSelected, {
            childList: true,
            subtree: true
        });
    });
})()

function changeNames() {
    const itemSelected = document.querySelector("#filter_unit_by_brand .SelectBox span")
    
    if(itemSelected) {
        itemSelected.innerHTML = itemSelected.innerHTML.replace("Marca Genérica", "Dafra e KTM")
    }
}