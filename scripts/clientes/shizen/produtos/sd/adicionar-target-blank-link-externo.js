(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const navLinks = document.querySelectorAll(".nav-simple .nav .nav-item a")
        ;

        if(navLinks.length > 0){
            navLinks.forEach(navLink => {
                const href = navLink.getAttribute("href");

                if(!(href.includes("shizen") || href.includes("empresa/"))){
                    navLink.setAttribute("target", "_blank");
                }
            });
        }
    });
})();