(() => {
    const addStyle = (styles) => {
        const css = styles,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
            head.appendChild(style);
            style.setAttribute('type', 'text/css');
        if (style.styleSheet){
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    const style = `
        .content__container {
            justify-content: center !important;
            max-width: 2000px !important;
            padding: 0 !important;
            margin-top: 0 !important;
        }

        .content__container p {
            margin-bottom: 0 !important;
        }

        .content--static-page .content__separator {
            display: none;
        }

        .content__text {
            margin-top: 0 !important;
        }

    `

    const isBusClubPage = window.location.href.includes("/empresa/busclub")
    const isFinanciamentoPage = window.location.href.includes("/empresa/simulador-financiamento")
    const isAlliancePage = window.location.href.includes("/empresa/alliance")
    const isMonteSeuCaminhaoPage = window.location.href.includes("/empresa/monte-o-seu-caminhao")

    if(isBusClubPage || isFinanciamentoPage || isAlliancePage || isMonteSeuCaminhaoPage) {
        const container = document.querySelector(".content--static-page > .container")
        const iframe = document.querySelector(".content--static-page .iframe-desktop")
        const width = window.screen.width

        if(container) {
            container.classList.add("container-fluid")
            container.classList.remove("container")
            
            addStyle(style)

            if(width > 768 && width < 1200) {
                iframe.setAttribute("width", "1180")
            } else if(width > 1300 &&  width < 1400) {
                iframe.setAttribute("width", "1340")
            } else if(width >= 1400) {
                iframe.setAttribute("width", "1500")
            }
        }
    }
})()