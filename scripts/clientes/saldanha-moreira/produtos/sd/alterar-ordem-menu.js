(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const menuItems = document.querySelectorAll(".nav--accordion-mobile .nav-simple__link");
    
        if(menuItems) {
            menuItems.forEach(element => {
                if(element.innerHTML.includes("Novos") || element.innerHTML.includes("Seminovos")) {
                    element.parentNode.parentNode.removeChild(element.parentNode)
                }
            });

            const newMenuItems = document.querySelectorAll(".nav--accordion-mobile .nav-item")

            if(newMenuItems) {
                const reorder = (before, after) => after.parentNode.insertBefore(before, after)
                
                const orders = [ 
                    { before: newMenuItems[6], after: newMenuItems[1] },
                    { before: newMenuItems[4], after: newMenuItems[3] }
                ]
                orders.forEach(({before, after}) => reorder(before, after))
            }
            
        }
    });
})();