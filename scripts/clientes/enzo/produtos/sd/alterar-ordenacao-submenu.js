(() => {
    sol.onReady(() => {
        const navItems = document.querySelectorAll(".nav-simple .nav .nav-simple__item");
    
        if(navItems.length > 0){
            navItems.forEach(navItem => {
                const navLinkContent = navItem.querySelector(".nav-link").innerHTML;
    
                if(navLinkContent.includes("Renault PRO+")){
                    const submenu = navItem.querySelector(".nav-simple-sub .list");
    
                    const submenuItems = navItem.querySelectorAll(".nav-simple-sub .list li");
                    
                    submenuItems.forEach(submenuItem => {
                        const submenuItemContent = submenuItem.querySelector(".card-collapse-deep__title").innerHTML;
    
                        if(submenuItemContent.includes("O que é Renault PRO+?")){
                            submenu.insertBefore(submenuItem, navItem.querySelectorAll(".nav-simple-sub .list li")[0]);
                        }
                    });
                }
            });
        }
    });
})();