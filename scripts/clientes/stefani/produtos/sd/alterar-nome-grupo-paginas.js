(() => {
    const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

    if(navItems.length > 0){
        navItems.forEach(navItem => {
            const navLink = navItem.querySelector(".nav-link");

            if(navLink.innerHTML.includes("Tecnologia agricultura")){
                navLink.innerHTML = `
                    Tecnologia para agricultura 
                    <i class="icon icon-dropdown icon-arrow-d"></i>
                `;
            }
        });
    }
})();