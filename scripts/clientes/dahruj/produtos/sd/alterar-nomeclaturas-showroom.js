(() => {
    const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");
    
    if(navItems.length > 0){
        navItems.forEach(navItem => {
            let navItemText = String(navItem.querySelector(".nav-link").innerHTML).trim();
    
            if(navItemText == "Novos"){
                navItem.querySelector(".nav-link").innerText = `Novas`;
            }
        });
    }

    if(location.pathname == "/" || location.pathname == "/yamaha-dahruj" || location.pathname == "/yamaha-dahruj/"){
        const vehiclesNewTitle = document.querySelector(".vehicles-new .vehicles-new__header .vehicles-new__title");

        if(vehiclesNewTitle){
            vehiclesNewTitle.innerText = `Motos 0km`;
        }

        const carouselDirectSalesSubtitle = document.querySelector(".carousel-direct-sales .carousel-direct-sales__header .section-component__subtitle");

        if(carouselDirectSalesSubtitle){
            carouselDirectSalesSubtitle.innerText = `A moto certa para suas necessidades`;
        }
    }
})();