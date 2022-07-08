(() => {
    // Remove item de vendas diretas
    const navItems = document.querySelectorAll("header .nav-wrapper-dinamic .nav-wrapper-menu .nav > li");

    navItems.forEach(navItem => {
        const navLink = navItem.querySelector("a");

        if(navLink.innerHTML.includes("Vendas Diretas")){
            navItem.remove();
        }
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