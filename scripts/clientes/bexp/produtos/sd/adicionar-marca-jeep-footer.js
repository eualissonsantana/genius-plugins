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

    const jeep = makeItem('https://production.autoforce.com/uploads/brand/logo_white/18/logo_brand_thumb_logo_brand_jeep-branco_co_pia_74575a8da7.png', 'https://bexp.com.br/jeep')
    carouselFooter.innerHTML = jeep

    footerSeparator.parentNode.insertBefore(carouselFooter, footerSeparator)
})()