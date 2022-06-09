(() => {
    sol.onReady(() => {
        let menuItems = document.querySelectorAll(".nav--accordion-mobile li.nav-item");

        if(menuItems){
            const changeItemsPositions = (firstItem, secondItem) => {
                let menu = secondItem.parentNode;

                menu.insertBefore(secondItem, firstItem);
            };

            const insertAfter = (newNode, existingNode) => {
                existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
            }

            const reorderAnimationIndex = (menu) => {
                menu.querySelectorAll("li.nav-item").forEach((menuItem, index) => {
                    menuItem.setAttribute(`style`, `--animation-index: ${index}`);
                });
            };

            let posVenda = document.querySelectorAll(".nav--accordion-mobile li.nav-item")[3];
            let vendasDiretas = document.querySelectorAll(".nav--accordion-mobile li.nav-item")[4];
            let institucional = document.querySelectorAll(".nav--accordion-mobile li.nav-item")[6];
            let convenios = document.querySelectorAll(".nav--accordion-mobile li.nav-item")[7];
            let planoEvolution = document.querySelectorAll(".nav--accordion-mobile li.nav-item")[8];

            let menu = posVenda.parentNode;

            changeItemsPositions(posVenda, vendasDiretas);
            insertAfter(posVenda, planoEvolution);
            insertAfter(institucional, posVenda);
            changeItemsPositions(convenios, planoEvolution);

            reorderAnimationIndex(menu);
        }
    });
})();