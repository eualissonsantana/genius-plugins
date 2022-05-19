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

    const footerCarouselrBrand = document.querySelector(".footer-carousel-brands")
    const carouselFooter = document.createElement("div")
    const rowFooter = document.querySelectorAll("footer .container-fluid .row")
    console.log(rowFooter)

    const makeItem = (src, href) => {
        return `<a target="_blank" href="${href}"> <img src="${src}" width="100px"> </a>`  
    }

    carouselFooter.classList.add("row", "carrossel-footer")

    const audi = makeItem('https://production.autoforce.com/uploads/brand/logo_white/8/logo_brand_thumb_comprar-audi_e2c80bbe11.png', 'http://audialphaville.com.br')
    const jeep = makeItem('https://production.autoforce.com/uploads/brand/logo_white/18/logo_brand_thumb_logo_brand_jeep-branco_co_pia_74575a8da7.png', 'https://bexp.com.br/jeep')
    const seminovos = makeItem('http://legado.autoforce.com.br/mods/bexp/img/bexp_branca.png', 'https://seminovos.bexp.com.br/')

    carouselFooter.innerHTML = audi
    carouselFooter.innerHTML = carouselFooter.innerHTML + jeep
    carouselFooter.innerHTML = carouselFooter.innerHTML + seminovos

    footerCarouselrBrand.parentNode.insertBefore(carouselFooter, footerCarouselrBrand)
    footerCarouselrBrand.remove()

})()