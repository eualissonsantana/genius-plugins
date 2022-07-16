(() => {
    const footerSocialNetworks = document.querySelectorAll(".footer__social-networks a")
    const linksMenu = document.querySelectorAll(".nav--accordion-mobile a")
    
    if(footerSocialNetworks) {
        footerSocialNetworks.forEach(element => {
            element.setAttribute("target", "_blank")
        });
    }
    
    if(linksMenu) {
        linksMenu.forEach(element => {
            if(element.getAttribute("href").includes("https://")) {
                element.setAttribute("target", "_blank")
            }
        });
    }
})()