(() => {
    window.addEventListener("DOMContentLoaded", () => {
        let qualityMobility = "";
        const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

        if(navItems.length > 0){
            navItems.forEach(navItem => {
                const navLink = navItem.querySelector(".nav-link");

                if(navLink.innerHTML.includes('Quality Mobilidade')){
                    navLink.innerHTML = `
                        <i class="icon icon-menu-group icon-users d-none d-md-block"></i>
                        Quality Mobilidade 
                        <i class="icon icon-dropdown icon-arrow-d"></i>
                    `;
                    
                    qualityMobility = navItem;
                }
            })

            const reorder = (before, after) => {
                after.parentNode.insertBefore(before, after)
            };
        
            reorder(qualityMobility, navItems[1]);
        }
    });
})();