(() => {
    const menuLinks = document.querySelectorAll(".nav-item a")

    if(menuLinks) {
        menuLinks.forEach(element => {
            if(element.getAttribute("href").includes("/consorcios") || element.getAttribute("href").includes("/que-somos") || element.getAttribute("href").includes("/vendas-diretas/linha-professional") || element.getAttribute("href").includes("/vendas-diretas/peugeot-profissional") || element.getAttribute("href").includes("/pecas") || element.getAttribute("href").includes("/servicos")) {
                element.setAttribute("target", "_self")
            }
        });
    }
})()