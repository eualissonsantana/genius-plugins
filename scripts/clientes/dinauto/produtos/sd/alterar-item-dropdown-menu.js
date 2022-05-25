(() => {
    let navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

    navItems.forEach(navItem => {
        let navItemText = navItem.querySelector(".nav-link").innerHTML;

        if(navItemText.includes("Seminovos")){
            let navItemsSubMenu = navItem.querySelectorAll(".nav-simple-sub .list li");

            navItemsSubMenu.forEach(navItemSubMenu => {
                if(navItemSubMenu.innerHTML.includes("Veículos")){
                    navItemSubMenu.querySelector("a").innerHTML = `Ipatinga`;
                }
            });
        }
    });
})();