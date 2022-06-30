(() => {
    const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");
    
    if(navItems.length > 0){
        navItems.forEach(navItem => {
            let navItemContent = navItem.querySelector(".nav-link").innerHTML;

            if(navItemContent.includes("Novos")){
                const navSimpleSubItems = navItem.querySelectorAll(".nav-simple-sub .list li");

                navSimpleSubItems.forEach(navSimpleSubItem => {
                    const navSimpleSubLink = navSimpleSubItem.querySelector("a");
                    if(navSimpleSubLink.innerHTML.includes("Nova R 18")){
                        navSimpleSubItem.remove();
                    }
                });
            }
        });
    }
})();