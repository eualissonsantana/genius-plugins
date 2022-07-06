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
        .showcase-services__panel {
            align-items: center;
            background-color: #fff;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            min-height: 190px;
            margin-top: 2rem;
            padding: 30px;
            text-align: center;
            box-shadow: 0 0 18px rgb(0 0 0 / 5%);
        }

        .showcase-services__panel-title {
            font-size: 2.25rem;
            color: #333;
            font-weight: bold;
        }

        .showcase-services__panel>.btn {
            min-width: 330px;
        }

        .showcase-services__panel-btn-schedule {
            margin-top: 22px;
        }

        .content__form-with-banner {
            margin-top: 0 !important;
        }
    `
    const isLuxuryPage = window.location.href.includes("/empresa/luxury-signature")

    if(isLuxuryPage) {
        addStyle(style)
        const componentTitleHeader = document.querySelector(".section-component__title-header .section-component__title-header-text")
        const panel = document.createElement("div")

        panel.classList.add("showcase-services__panel")
        panel.innerHTML = `
            <h2 class="showcase-services__panel-title d-none d-md-block"> Conheça nosso programa de Assinatura Audi </h2>
            <a href="https://api.whatsapp.com/send?phone=5511975846399" target="_blank" class="btn button button--large button--primary
                showcase-services__panel-btn-schedule"> Alugar 
            </a>
        `

        componentTitleHeader.appendChild(panel)

    }
})()