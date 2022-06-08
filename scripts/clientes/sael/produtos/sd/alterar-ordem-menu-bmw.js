(() => {
    window.addEventListener("DOMContentLoaded", () => {
        navItems = document.querySelectorAll(".nav-simple .nav .nav-simple__item");

        const reorder = (before, after) => after.parentNode.insertBefore(before, after)

        const orders = [ { before: navItems[8], after: navItems[2] } ]
        orders.forEach(({before, after}) => reorder(before, after));
    });
})();