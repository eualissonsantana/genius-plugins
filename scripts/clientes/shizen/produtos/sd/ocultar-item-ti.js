(() => {
    const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

    if(navItems.forEach(navItem => {
        const navLink = navItem.querySelector(".nav-link");

        if(navLink.innerHTML.includes("T.I")){
            navItem.remove();
        }
    }));
})();