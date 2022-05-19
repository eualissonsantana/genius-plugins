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
        .footer-phones {
            display: flex;
            flex-wrap: wrap;
        }
        
        .footer-phone-item {
            display: flex;
        }
    
        .footer-phone-item .titulo {
            color: #fff;
        }
    
        .footer-phone-item .text-mask-phone {
            color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
        }

        .footer-phone-item .text-mask-phone {
            margin-left: 16px;
        }

        .footer__unit-infos-list {
            display: block !important;
        }

        .footer-phone-title {
            margin-bottom: 24px;
            color: #fff;
        }

        .footer-phone-title .titulo{
            margin-left: 8px;
        }

        .footer-phone-title .icon-phone {
            color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
        }


        @media (max-width: 768px) {
            .footer-phone-item {
                margin-bottom: 28px;
            }
        }
    `
})()

function criaItensTelefoneFooter(data) {
    const footerUnitInfo = document.querySelector(".footer__unit-infos-list")

    if(footerUnitInfo) {
        
        const numeros = document.createElement("div")
        numeros.classList.add("justify-content-between", "footer-phones")

        const makeItem = (titulo, telefone) => {
            return `
                <span class="titulo">${titulo}</span>
                <strong class="text-nowrap text-mask-phone">${telefone}</strong>
            `  
        }

        let title = document.createElement("div")
        title.classList.add("footer-phone-title")

        title.innerHTML = `
            <i class="icon icon-phone"></i>
            <strong class="titulo">TELEFONES</strong>
        `

        data.forEach(element => {
            let newItem = document.createElement("div")
            newItem.classList.add("footer-phone-item")

            newItem.innerHTML = makeItem(element.titulo, element.telefone)
            numeros.appendChild(newItem)
        });

        footerUnitInfo.appendChild(title)
        footerUnitInfo.appendChild(numeros)

    }
}