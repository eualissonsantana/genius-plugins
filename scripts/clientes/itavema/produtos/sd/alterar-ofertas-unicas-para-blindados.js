(() => {
    const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

    if(navItems.length > 0){
        navItems.forEach(navItem => {
            let navItemText = navItem.querySelector(".nav-link").innerHTML;
    
            if(navItemText.includes("Ofertas Únicas")){
                navItem.querySelector(".nav-link").innerHTML = `Blindados`;
            }
        });
    }

    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "/ofertas-unicas" })){
        let breadCrumbItems;

        if(document.querySelectorAll(".filter-used-models .breadcrumb .breadcrumb-item").length > 0){
            breadCrumbItems = document.querySelectorAll(".filter-used-models .breadcrumb .breadcrumb-item");
        }
        else{
            breadCrumbItems = document.querySelectorAll(".used-vehicles-showcase__top-navigation .breadcrumb .breadcrumb-item");
        }

        let sectionComponentTitle = document.querySelector(".filter-used-models .filter-used-models__header .section-component__title");

        if(breadCrumbItems.length > 0){
            breadCrumbItems.forEach(breadCrumbItem => {
                let breadCrumbItemLink;

                if(breadCrumbItem.querySelector("a")){
                    breadCrumbItemLink = breadCrumbItem.querySelector("a").getAttribute("href");
                }

                if(breadCrumbItemLink && breadCrumbItemLink.includes("/ofertas-unicas")){
                    breadCrumbItem.querySelector("a").innerHTML = `Blindados`;
                }
                else if(breadCrumbItem.innerHTML.includes("Ofertas Únicas")){
                    breadCrumbItem.innerHTML = `Blindados`;
                }
            });
        }

        if(sectionComponentTitle){
            let sectionComponentTitleText = String(sectionComponentTitle.innerHTML);
            sectionComponentTitle.innerHTML = sectionComponentTitleText.replace("Ofertas Únicas", "Blindados");
        }
    }

    window.addEventListener("DOMContentLoaded", () => {
        const carouselOffersUsedModelsTitle = document.querySelector(".carousel-offers-used-models .section-component__header .section-component__title");

        if(carouselOffersUsedModelsTitle){
            carouselOffersUsedModelsTitle.innerHTML = `
                Confira nossos <span>Blindados 0km</span> 
            `;
        }
    });
})();