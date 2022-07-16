(() => {
    const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

    const insertAfter = (newNode, existingNode) => {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    insertAfter(navItems[6], navItems[4]);
})();