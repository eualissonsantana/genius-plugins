(() => {
    window.addEventListener("DOMContentLoaded", () => {
        if(window.matchMedia('(max-width: 768px)').matches){
            const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");
    
            if(navItems.length > 0){
                navItems.forEach(navItem => {
                    const navItemIcon = navItem.querySelector(".nav-link i");
    
                    if(navItemIcon.classList.contains("d-none")){
                        navItemIcon.classList.remove("d-none");
    
                        if(!navItemIcon.classList.contains("icon-menu-group")){
                            navItemIcon.classList.add("icon-menu-group");
                        }
                    }
                });
            }
        }
    });
})();