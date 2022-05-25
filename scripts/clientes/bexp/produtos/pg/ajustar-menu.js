(() => {
    const submenuServicosAudi = document.querySelectorAll(".dropdown-submenu .dropdown-submenu-title");

    if(submenuServicosAudi) {
        submenuServicosAudi.forEach(element => {
            if(element.innerHTML.includes("Serviços Audi")) {
                const subitens = element.parentNode.querySelectorAll("a")
                subitens.forEach(subitem => {
                    if(!subitem.innerHTML.includes("Serviços Audi")) {
                        subitem.remove()
                    }
                });
            }
        });

        const navItems = document.querySelectorAll(".nav-wrapper-menu .menu-geral li");

        navItems.forEach(navItem => {
            if(navItem.classList.length == 0){
                if(navItem.innerHTML.includes("Serviços Audi") || navItem.innerHTML.includes("Serviços Jeep")){
                    navItem.remove();
                }
            }
            else if(navItem.classList.contains("dropdown-submenu-title")
                    && navItem.querySelector("a").innerHTML.includes("Fale Conosco")
            ){
                navItem.querySelector("a").setAttribute("target", "_blank");    
            }
            else if(navItem.classList.contains("dropdown")
                    && navItem.querySelector("a").innerHTML.includes("Vendas Corporativas")
            ){
                let dropdownSubmenus = navItem.querySelectorAll(".dropdown-menu .dropdown-submenu");

                dropdownSubmenus.forEach(dropdownSubmenu => {
                    let dropdownSubmenuTitle = dropdownSubmenu.querySelector(".dropdown-submenu-title").innerHTML;

                    dropdownSubmenu.innerHTML = ``;

                    if(dropdownSubmenuTitle.includes("Jeep")){
                        dropdownSubmenu.innerHTML += `
                            <li class="dropdown-submenu-title">
                                <a 
                                    target="_blank" 
                                    href="https://bexp.com.br/jeep/empresa/frotas"
                                >
                                    <strong>Jeep</strong>
                                </a>
                            </li>
                        `;
                    }
                    else if(dropdownSubmenuTitle.includes("Audi")){
                        dropdownSubmenu.innerHTML += `
                            <li class="dropdown-submenu-title">
                                <a 
                                    target="_blank" 
                                    href="https://audialphaville.com.br/empresa/vendas-corporativas"
                                >
                                    <strong>Audi</strong>
                                </a>
                            </li>
                        `;
                    }
                });
            }
        });
    }
})()