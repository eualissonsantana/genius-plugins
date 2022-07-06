(() => {
    const socialIcons = document.querySelectorAll(".footer__signature-networks a")

    if(socialIcons) {
        socialIcons.forEach(element => {
            if(element.getAttribute("href").includes("facebook")) {
                element.setAttribute("href", "https://www.facebook.com/eurofleetriopreto")
            } else if(element.getAttribute("href").includes("instagram")) {
                element.setAttribute("href", "https://www.instagram.com/euro.fleet/")
            }
        });
    }
})()