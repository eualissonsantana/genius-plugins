(() => {
    // Remove item de vendas diretas, altera 'Endereços' para 'Concessionárias' e ajusta submenu 'Teste' para 'Corretora'
    const navItems = document.querySelectorAll("header .nav-wrapper-dinamic .nav-wrapper-menu .nav > li");

    navItems.forEach(navItem => {
        const navLink = navItem.querySelector("a");

        if(navLink.innerHTML.includes("Vendas Diretas")){
            navItem.remove();
        }
        else if(navLink.innerHTML.includes("Endereços")){
            navLink.innerHTML = `
                Concessionárias
            `;
        }

        const dropdownSubmenuTitles = navItem.querySelectorAll(".dropdown-menu .dropdown-submenu .dropdown-submenu-title a");
        dropdownSubmenuTitles.forEach(dropdownSubmenuTitle => {
            if(dropdownSubmenuTitle.innerHTML.includes("Teste")){
                dropdownSubmenuTitle.innerHTML = `
                    <strong>
                        Corretora <span class="fa fa-angle-right"></span>
                    </strong>
                `;
            }
        });
    });

    // Altera marca 'Teste' para 'Corretora'
    const phoneItems = document.querySelectorAll("header .nav-wrapper-dinamic .wrapper-right .accordion > li");

    phoneItems.forEach(phoneItem => {
        const phoneItemLink = phoneItem.querySelector(".link");
        
        if(phoneItemLink.innerHTML.includes("Teste")){
            phoneItemLink.innerHTML = `
                Corretora
                <i class="fa fa-chevron-down down"></i>
            `;
        }
    });
})();