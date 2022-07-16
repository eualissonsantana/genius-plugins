(() => {
    let headerNavbarItems = document.querySelectorAll(".header-navbar .header-navbar__items .nav-item");

    const hostName = location.hostname;
    const pathName = hostName.includes('autodromo.app') ? '/eiffel-peugeot' : '';

    if(headerNavbarItems){
        // Serviços
        const newNavItem = document.createElement("li");
        newNavItem.classList.add("nav-item");
        newNavItem.innerHTML = `
            <a class="nav-link" href="${pathName}/servicos"> 
                Serviços 
            </a>
        `;

        const reorder = (before, after) => {
            after.parentNode.insertBefore(before, after);
        }

        headerNavbarItems.forEach(headerNavbarItem => {
            const headerNavbarLink = headerNavbarItem.querySelector(".nav-link");

            if(headerNavbarLink.innerHTML.includes("Novos")){
                headerNavbarItem.remove();
            }
            else if(headerNavbarLink.innerHTML.includes("Soluções Peugeot")){
                const headerNavbarSubItems = headerNavbarItem.querySelectorAll(".nav-dropdown__items .nav-dropdown__item");

                headerNavbarLink.innerHTML = `
                    Novos
                    <i class="icon icon-dropdown icon-arrow-d"></i>
                `;

                headerNavbarSubItems.forEach(headerNavbarSubItem => {
                    const headerNavbarSubLink = headerNavbarSubItem.querySelector(".nav-dropdown__link");

                    if(headerNavbarSubLink.innerHTML.includes("Serviços")){
                        headerNavbarSubLink.setAttribute("href", `${pathName}/novos`);
                        headerNavbarSubLink.innerHTML = `
                            Novos
                        `;
                    }
                });
                
                headerNavbarItem.after(newNavItem);
            }
        });

        headerNavbarItems = document.querySelectorAll(".header-navbar .header-navbar__items .nav-item");
        reorder(headerNavbarItems[2], headerNavbarItems[1]);
    }
})();