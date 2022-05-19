(() => {
    window.addEventListener("DOMContentLoaded", () => {
        let dropdownLinkMenu = document.querySelector(".showcase-slides .nav-wrapper-menu .navbar-nav li.dropdown a.dropdown-toggle");

        if(dropdownLinkMenu){
            dropdownLinkMenu.innerText = `Marcas`;
        }
    });
})();