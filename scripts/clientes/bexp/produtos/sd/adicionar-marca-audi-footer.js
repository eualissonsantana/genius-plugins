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
        .carrossel-footer {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap
        }

        .carrossel-footer a {
            margin: 12px;
            align-items: center;
            display: flex;
        }
    `

    const footerSeparator = document.querySelector("footer.footer .container .footer__separator")
    const carouselFooter = document.createElement("div")
    const rowFooter = document.querySelectorAll("footer .container-fluid .row")

    const makeItem = (src, href) => {
        return `<a target="_blank" href="${href}"> <img src="${src}" width="100px"> </a>`  
    }

    carouselFooter.classList.add("row", "carrossel-footer")

    const audi = makeItem('https://production.autoforce.com/uploads/brand/logo_white/8/logo_brand_thumb_comprar-audi_e2c80bbe11.png', 'http://audialphaville.com.br')
    carouselFooter.innerHTML = audi

    footerSeparator.parentNode.insertBefore(carouselFooter, footerSeparator)
})()