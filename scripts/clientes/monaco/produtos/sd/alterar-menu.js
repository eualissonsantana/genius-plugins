(() => {
    let menu = document.querySelector(".nav-simple .nav");
    let navItems = document.querySelectorAll(".nav-simple .nav .nav-item");
    let listSubNavItems = [
        {
            text: "Leves",
            link: "novos?sort=ordination%2C-created_at&category%5B%5D=Leves"
        },
        {
            text: "Médios",
            link: "novos?sort=ordination%2C-created_at&category%5B%5D=M%C3%A9dios"
        },
        {
            text: "Pesados",
            link: "novos?sort=ordination%2C-created_at&category%5B%5D=Pesados"
        },
        {
            text: "Extrapesados",
            link: "novos?sort=ordination%2C-created_at&category%5B%5D=Pesados&category%5B%5D=Extrapesados"
        }
    ];

    if(menu && navItems.length > 0){
        const reorderAnimationIndex = (menu) => {
            menu.querySelectorAll("li.nav-item").forEach((menuItem, index) => {
                menuItem.setAttribute(`style`, `--animation-index: ${index}`);
            });
        };

        const createSimpleNavItem = (text, link) => {
            let navItem = document.createElement("li");
            navItem.classList.add("nav-item", "nav-simple__item");
            navItem.innerHTML = `
                <a 
                    href="${link}" 
                    class="nav-link nav-simple__link"
                > 
                    ${text} 
                </a>
            `;

            return navItem;
        };

        const createDropdownNavItem = (dropdownText, listSubNavItems) => {
            let dropdownIsOpen = false;

            let navItem = document.createElement("li");
            navItem.classList.add("nav-item", "nav-simple__item");

            navItem.innerHTML += `
                <a 
                    href="/monaco-volkswagen-caminhoes-e-onibus#" 
                    class="nav-link nav-simple__link" 
                    data-toggle="dropdown"
                > 
                    ${dropdownText}
                    <i class="icon icon-dropdown icon-arrow-d"></i>
                </a>
            `;

            let cardCollapseDeep = document.createElement("div");
            cardCollapseDeep.classList.add("nav-simple-sub", "card-collapse-deep", "dropdown-menu");
            
            let listCardCollapseDeep = document.createElement("ul");
            listCardCollapseDeep.classList.add("list", "list--border-bottom");

            listSubNavItems.forEach(subNavItem => {
                let navItemLink = document.createElement("li");
                navItemLink.innerHTML = `
                    <a 
                        href="${subNavItem.link}" 
                        class="card-collapse-deep__title"
                    > 
                        ${subNavItem.text}
                    </a>
                `;
                
                listCardCollapseDeep.appendChild(navItemLink);
            });

            cardCollapseDeep.appendChild(listCardCollapseDeep);

            navItem.appendChild(cardCollapseDeep);
            navItem.addEventListener("click", function(event){
                event.preventDefault();

                if(dropdownIsOpen){
                    this.classList.remove("show");
                    cardCollapseDeep.classList.remove("show");

                    dropdownIsOpen = false;
                }
                else{
                    this.classList.add("show");
                    cardCollapseDeep.classList.add("show");

                    dropdownIsOpen = true;
                }
            });

            return navItem;
        };

        const reorder = (before, after) => {
            after.parentNode.insertBefore(before, after)
        };
    
        navItems.forEach(navItem => {
            let navItemText = String(navItem.innerHTML).trim();
    
            if(navItemText.includes("Novos") || navItemText.includes("Pós-venda")){
                navItem.remove();
            }
        });

        menu.appendChild(createDropdownNavItem('Caminhões', listSubNavItems));
        menu.appendChild(createSimpleNavItem('Ônibus', 'novos?sort=ordination%2C-created_at&category%5B%5D=%C3%94nibus'));
        menu.appendChild(createSimpleNavItem('Peças', 'pecas'));
        menu.appendChild(createSimpleNavItem('Serviços', 'servicos'));
        
        navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

        let orders = [ 
            { before: navItems[3], after: navItems[1] }, 
            { before: navItems[4], after: navItems[1]}, 
            { before: navItems[5], after: navItems[2]},
            { before: navItems[6], after: navItems[2]}
        ];
        orders.forEach(({before, after}) => {
            reorder(before, after)
        });
        
        reorderAnimationIndex(menu);
    }
})();