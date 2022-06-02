(() => {
    let navItems = document.querySelectorAll(".nav-simple .nav .nav-simple__item");

    if(navItems){
        let hostName = window.location.hostname;
        let pathName = "";

        if(hostName.includes("autodromo")){
            pathName = "/plus-car";
        }

        navItems.forEach(navItem => {
            let navItemContent = navItem.innerHTML;

            if(navItemContent == `<a href="${pathName}/seminovos" class="nav-link nav-simple__link"><i class="icon icon-menu-group icon-car d-none d-md-block"></i> Seminovos </a>`){
                navItem.innerHTML = `
                    <a 
                        href="${pathName}/seminovos" 
                        class="nav-link nav-simple__link"
                    >
                            <i class="icon icon-menu-group icon-car d-none d-md-block"></i> 
                            Estoque 
                    </a>
                `;
            } 
            else if(navItem.innerHTML.includes("Quem Somos")) {
                navItem.remove()
            }
            else if(navItem.querySelector("a").getAttribute("href") == `${pathName}/fale-conosco`){
                navItem.remove();
            }
        });

        navItems = document.querySelectorAll(".nav-simple .nav .nav-simple__item");

        const reorder = (before, after) => after.parentNode.insertBefore(before, after)

        const orders = [ { before: navItems[3], after: navItems[1] } ]
        orders.forEach(({before, after}) => reorder(before, after))
    }
})();