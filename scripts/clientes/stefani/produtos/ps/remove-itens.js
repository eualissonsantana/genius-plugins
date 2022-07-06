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

    const styles = `
        .social-share, .fragment-map-units, .text-calls-chat-online {
            display: none;
        }

        .main-filter {
            display: none;
        }

    `

    addStyle(styles)


    const carouselTop = document.getElementsByClassName('carousel-brands')[0]
    const carouselFooter = document.getElementsByClassName('footer-carousel-brands')[0]
    const filter = document.querySelector(".main-filter")

    if(carouselTop) {
        carouselTop.parentNode.removeChild(carouselTop);
    }

    if(carouselFooter) {
        carouselFooter.parentNode.removeChild(carouselFooter);
    }

    if(filter) {
        filter.parentNode.removeChild(filter)
    }

})()