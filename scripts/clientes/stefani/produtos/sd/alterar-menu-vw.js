(() => {
    window.addEventListener("DOMContentLoaded", () => {
        let navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

        if(navItems.length > 0){
            const reorder = (before, after) => after.parentNode.insertBefore(before, after);
            
            const insertAfter = (newNode, existingNode) => {
                existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
            }

            const addStyle = (styles) => {
                const css = styles,
                    head = document.head || document.getElementsByTagName('head')[0],
                    style = document.createElement('style');
                head.appendChild(style);
                style.setAttribute('type', 'text/css');
                if (style.styleSheet) {
                    // This is required for IE8 and below.
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }
            }

            navItems.forEach(navItem => {
                const navLink = navItem.querySelector(".nav-link");

                if(navLink.innerHTML.includes("A Volkswagen") || navLink.innerHTML.includes("Plano de Garantia Estendida Mecânica")) {
                    navItem.remove();
                }
                else if(navLink.innerHTML.includes("Pós-venda")){
                    navLink.innerHTML = `
                        Serviços
                        <i class="icon icon-dropdown icon-arrow-d"></i>
                    `;

                    const navSubItems = navItem.querySelectorAll(".nav-simple-sub .list li");
                    navSubItems.forEach(navSubItem => {
                        const navSubItemContent = navSubItem.querySelector(".card-collapse-deep__title");

                        if(navSubItemContent.innerHTML.includes("Serviços")){
                            navSubItemContent.innerHTML = `
                                Agendamento
                            `;
                        }
                    });
                }
            });

            navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

            reorder(navItems[10], navItems[8]);
            insertAfter(navItems[5], navItems[7]);
            insertAfter(navItems[3], navItems[6]);

            addStyle(`
                header .container,
                .nav-simple .container {
                    max-width: 1300px;
                }

                @media screen and (min-width: 768px){
                    .nav-simple .nav a{
                        font-size: 14px !important;
                    }
                }
            `);
        }
    });
})();