(() => {
    let navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

    if(navItems.length > 0){
        navItems.forEach(navItem => {
            let navItemText = navItem.querySelector(".nav-link").innerHTML;
    
            if(navItemText.includes("Horizon 150")){
                navItem.remove();
            }
        });
    }
})();