(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");
    
        if(navItems.length > 0){
            navItems.forEach(navItem => {
                let navItemLink = navItem.querySelector(".nav-link");
                let navItemContent = navItemLink.innerHTML;
        
                if(navItemContent.includes("Diferenciais")){
                    navItemLink.innerHTML = `
                        <i class="fa-solid fa-medal icon-menu-group"></i>
                        Diferenciais 
                    `;
                }
                else if(navItemContent.includes("Financiamento")){
                    navItemLink.innerHTML = `
                        <i class="fa-solid fa-dollar-sign icon-menu-group"></i>
                        Financiamento 
                    `;
                }
            });
        }
    });
})();