(() => {
    window.addEventListener("DOMContentLoaded", () => {
        let slug = "empresa/avalieseuveiculo";
        let pagePathName = window.location.pathname;
        let rootSlug = pagePathName.split("/")[1];
        
        let navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

        if(navItems.length > 0){
            navItems.forEach(navItem => {
                let navItemLink = navItem.querySelector(".nav-link").getAttribute("href");

                if(navItemLink == `/${slug}`){
                    navItem.remove();
                }
                else if(navItemLink == `/${rootSlug}/${slug}`){
                    navItem.remove();
                }
            });
        }
    });
})();