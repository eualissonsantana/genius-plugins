(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const navVerticalItemsDesktop = document.querySelectorAll(".footer-land .footer-land__units--desktop .footer-land-units__sidebar .footer-land-units__nav .nav-vertical__item");

        const navVerticalItemsMobile = document.querySelectorAll(".footer-land .footer-land__units--mobile .footer-land-units__unit-list #footer-land-units-mobile .nav-vertical__item");

        const changeUnits = (navItems, isDesktop) => {
            navItems.forEach(navItem => {
                const navItemLink = navItem.querySelector(".nav-vertical__link");
                
                // Substitui título da unidade Salvador por Terra Forte Paralela
                if(navItemLink.innerHTML.includes("SALVADOR")){
                    if(isDesktop){
                        navItemLink.innerHTML = `
                            <i class="icon nav-vertical__icon icon-arrow-r"></i> 
                            Terra Forte Paralela
                        `;
                    }
                    else{
                        navItemLink.innerHTML = `
                            <i class="icon nav-vertical__icon icon-arrow-d"></i>  
                            Terra Forte Paralela
                        `;
                    }
                }
                else if(navItemLink.innerHTML.includes("Terra Forte Lauro de Freitas")){
                    if(isDesktop){
                        navItemLink.click();
                    }
                }
                else if(navItemLink.innerHTML.includes("Terra Forte Pará de Minas") 
                    || navItemLink.innerHTML.includes("Terra Forte Montes Claros")
                    || navItemLink.innerHTML.includes("Terra Forte Divinópolis")
                ){
                    navItem.remove();
                }
            });
        }

        if(navVerticalItemsDesktop && navVerticalItemsMobile){
            changeUnits(navVerticalItemsDesktop, true);
            changeUnits(navVerticalItemsMobile, false);
        }
    });
})();