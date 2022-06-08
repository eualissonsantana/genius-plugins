(() => {
    window.addEventListener("DOMContentLoaded", () => {
        navItems = document.querySelectorAll(".nav-simple .nav .nav-simple__item");

        if(navItems.length > 0){
            const reorder = (before, after) => after.parentNode.insertBefore(before, after)
    
            const orders = [ { before: navItems[5], after: navItems[2] } ]
            orders.forEach(({before, after}) => reorder(before, after));
        }
    });
})();