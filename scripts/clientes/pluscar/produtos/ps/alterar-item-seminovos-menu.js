(() => {
    window.addEventListener("DOMContentLoaded", () => {
        let navItems = document.querySelectorAll(".nav-simple .nav .nav-simple__item");

        if(navItems){
            navItems.forEach(navItem => {
                let navItemContent = navItem.innerHTML;
    
                if(navItemContent == '<a href="/seminovos" class="nav-link nav-simple__link"><i class="icon icon-menu-group icon-car d-none d-md-block"></i> Seminovos </a>'){
                    navItem.innerHTML = `
                        <a 
                            href="/seminovos" 
                            class="nav-link nav-simple__link"
                        >
                                <i class="icon icon-menu-group icon-car d-none d-md-block"></i> 
                                Estoque 
                        </a>
                    `;
                }
            });
        }
    });
})();