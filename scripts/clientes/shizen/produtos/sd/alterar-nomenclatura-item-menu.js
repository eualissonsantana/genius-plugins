(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");
    
        if(navItems.length > 0){
            navItems.forEach(navItem => {
                const navItemText = navItem.querySelector(".nav-link").innerHTML;

                if(navItemText.includes("Pós-venda")){
                    const subNavItens = navItem.querySelectorAll(".nav-simple-sub .list li");

                    subNavItens.forEach(subNavItem => {
                        const subNavItemText = String(subNavItem.querySelector("a").innerHTML).trim();

                        if(subNavItemText == "Serviços"){
                            subNavItem.querySelector("a").innerHTML = "Revisões";
                        }
                    });
                }
            });
        }
    });
})();