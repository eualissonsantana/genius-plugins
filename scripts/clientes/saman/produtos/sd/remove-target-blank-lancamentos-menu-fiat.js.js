(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

        if(navItems.length > 0){
            navItems.forEach(navItem => {
                const navLink = navItem.querySelector(".nav-link");

                if(navLink.innerHTML.includes("Pulse")
                ){
                    navLink.removeAttribute("target");
                }
            }); 
        }
    });
})();