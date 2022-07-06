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
        .link-denuncia p {
            color: #fff;
            font-weight: bold;
        }

        .link-denuncia {
            margin-top: 45px;
            text-decoration: none;
            display: block;
        }
    `
    const contentBlock = document.querySelectorAll(".footer-units__contents-block")

    if(contentBlock) {
        const linkDenuncia = document.createElement("a")
        linkDenuncia.classList.add("link-denuncia")
        linkDenuncia.setAttribute("href", "https://bariautomoveis.legaletica.com.br/client/se_report_channel.aspx")
        linkDenuncia.setAttribute("target", "_blank")
        linkDenuncia.innerHTML = `
            <div class="text-center">
                <img src="https://legado.autoforce.com.br/plugins/images/global/icones/denuncia.png">
                <p>CANAL DE DENÚNCIA</p>
            </div>
        `

        contentBlock[1].appendChild(linkDenuncia)
        contentBlock[3].appendChild(linkDenuncia.cloneNode(true))
    }
})()