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

    addStyle`
        .whats-link {
            margin-top: 10px;
            background: #25d366 !important;
            box-shadow: none !important;
        }

        .whats-link a {
            margin-top: 16px;
            color: #fff !important;
            text-align: center;
            background-color: #25d366;
        }

        .whats-link a > p {
            margin: 0;
        }

        .whats-link .fa-whatsapp {
            margin-right: 4px;
        }

    `
    const internaSeminovos = window.location.href.includes("/seminovos/")

    if (internaSeminovos) {
        const productStore = document.querySelector(".product-store")
        const number = document.querySelector(".product-store > a")
        const whatsLink = document.createElement("div")
        whatsLink.classList.add("whats-link", "btn", "btn-default")
        whatsLink.innerHTML = `
            <a href="https://api.whatsapp.com/send?phone=5584991156600" target="_blank">
                <p class="atendimento">Central de Atendimento</p>
                <p><i class="fa fa-whatsapp"></i> (84) 99115-6600</p>
            </a>
        `

        productStore.appendChild(whatsLink)
        number.remove()
    }
})()