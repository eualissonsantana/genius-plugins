(() => {
    sol.onReady(() => {
        const carouselBrands = document.querySelectorAll("#brands .brands-carousel .turkey-wrapper-outer .turkey-item .item");

        if(carouselBrands.length > 0 && (location.pathname == "/" || location.pathname == "/grupo-mult")){
            carouselBrands.forEach(carouselBrand => {
                const itemBoxSummary = carouselBrand.querySelector(".item-box-summary");
                const altCarouselBrand = itemBoxSummary.querySelector(".brand-logo a").getAttribute("alt");
                const titleCarouselBrand = itemBoxSummary.querySelector("hgroup h3");

                if(altCarouselBrand == "Mitsubishi"){
                    titleCarouselBrand.innerHTML = `Multicar Mitsubishi`;
                }
                else if(altCarouselBrand == "Nissan"){
                    titleCarouselBrand.innerHTML = `Kobe Nissan`;
                }
                else if(altCarouselBrand == "Royal Enfield"){
                    titleCarouselBrand.innerHTML = `Royal Enfield Vitória`;
                }
                else if(altCarouselBrand == "Renault"){
                    titleCarouselBrand.innerHTML = `Multicar Renault`;
                }
            });
        }
    });
})();