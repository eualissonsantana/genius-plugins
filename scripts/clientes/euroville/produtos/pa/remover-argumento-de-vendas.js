(() => {
    document.addEventListener("DOMContentLoaded", function(event) {
        // função
        const vantagensHome = document.querySelectorAll(".subscription-card__advantages li")
        const vantagensInterna = document.querySelectorAll(".showcase-internal__pitchs-list li")
    
        if(vantagensHome) {
            vantagensHome.forEach(element => {
                if(element.innerHTML.includes("Argumento de vendas")) {
                    element.remove()
                }
            });
        }
    
        if(vantagensInterna) {
            if(vantagensInterna.length <= 1) {
                const destaqueTitulo = document.querySelector(".showcase-internal__pitchs-title")
    
                if(destaqueTitulo) {
                    destaqueTitulo.remove()
                    removeItem()
                }
            }else {
                removeItem()
            }
        }
    
        function removeItem() {
            const vantagensInterna = document.querySelectorAll(".showcase-internal__pitchs-list li")
    
            vantagensInterna.forEach(element => {
                if(element.innerHTML.includes("Argumento de vendas")) {
                    element.remove()
                }
            });
        }
    });
})()