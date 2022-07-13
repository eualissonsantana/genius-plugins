(() => {
    const addStyle = (styles) => {
        const css = styles,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        head.appendChild(style);
        style.setAttribute('type', 'text/css');
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    addStyle`
        .link-catalogo img{
            display: block;
            max-height: auto;
            max-width: 32px;
        }

        .link-catalogo {
            margin-top: 30px;
        }
    `
    
    const page = window.location.pathname
    const slug = page.split('/novos')[1];
    const urlBase = "https://legado.autoforce.com.br/plugins/files/global/marcas/massey-ferguson"
    const urlPdf = urlBase + slug + ".pdf"
    const detailsInfo = document.querySelector(".vehicle-details__info")

    if(detailsInfo) {
        const linkCatalogo = document.createElement("section")
        linkCatalogo.classList.add("link-catalogo")
        linkCatalogo.innerHTML = `
            <a href="${urlPdf}" target="_blank" title="BAIXAR O CATÁLOGO">
                <img src="https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/download-a-brochure.svg" alt="BAIXAR O CATÁLOGO">
                <h2 class="section-component__title section-component__title--small">BAIXAR O CATÁLOGO</h2>
                <small>Explore os detalhes da plantadeira MF 100 e saiba como ela pode ajudá-lo. </small>
            </a>
        `

        detailsInfo.after(linkCatalogo)
    }
})()