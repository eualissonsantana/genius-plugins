(() => {
    const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

    if(navItems.length > 0){
        navItems.forEach(navItem => {
            const navLinkContent = String(navItem.querySelector(".nav-link").innerHTML).trim();

            if(navLinkContent == `<i class="icon icon-menu-group icon-car d-none d-md-block"></i> Seminovos`){
                navItem.querySelector(".nav-link").innerHTML = `
                    <i class="icon icon-menu-group icon-car d-none d-md-block"></i> 
                    Estoque
                `;
            }
        });
    }
})();