(() => {
    const pahtName = location.pathname;
    const hostName = location.hostname;
    
    let contentWrapper;
    let unitsReference;

    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    const debounce = (func, wait, immediate) => {
        var timeout;
      
        return function executedFunction() {
            var context = this;
            var args = arguments;
                
            var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
            };
        
            var callNow = immediate && !timeout;
            
            clearTimeout(timeout);
        
            timeout = setTimeout(later, wait);
            
            if (callNow) func.apply(context, args);
        };
    };

    const changeTestReferencesInUnits = (contentUnitsIndex, unitsReference) => {
        const changeTestReferenceInUnits = (contentUnitsIndex) => {
            let filterOptionsIndex = contentUnitsIndex.querySelectorAll("#filter_unit_by_brand .optWrapper .options .opt");
            let filterSelectBox = contentUnitsIndex.querySelector("#filter_unit_by_brand .SelectBox");
            let units = contentUnitsIndex.querySelectorAll(`${unitsReference}`);

            filterOptionsIndex.forEach(filterOptionIndex => {
                const labelText = filterOptionIndex.querySelector("label");

                if(labelText.innerHTML == "Teste"){
                    labelText.innerHTML = `Corretora`;
                }
            });

            units.forEach(unit => {
                const unitSubtitle = unit.querySelector("footer hgroup h5");

                if(unitSubtitle.innerHTML == "Teste"){
                    const newFilterBoxText = filterSelectBox.querySelector("span");

                    unitSubtitle.innerHTML = `Corretora`;
                    newFilterBoxText.innerHTML = newFilterBoxText.innerHTML.replace("Teste", "Corretora");
                }
            });
        };

        changeTestReferenceInUnits(contentUnitsIndex);

        const observer = new MutationObserver(debounce(function(){
            changeTestReferenceInUnits(contentUnitsIndex);
        }, 200));
    
        observer.observe(contentUnitsIndex, {
            attributes: true,
            subtree: true
        });
    };

    if(pahtName == "/" || (hostName.includes("autodromo.app") && pahtName == "grupo-enzo")){
        contentWrapper = "#units";
        unitsReference = ".unit-carousel .owl-item .item";
        
    }
    else if(isThisPage({ urlPiece: "enderecos" })){
        contentWrapper = "#content";
        unitsReference = ".item-list .row .item";
    }

    const contentUnits = document.querySelector(`${contentWrapper} .content-units`);
    changeTestReferencesInUnits(contentUnits, unitsReference);
})();