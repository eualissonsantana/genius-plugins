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
        .showcase-new-cars__seal-list {
            top: 7rem !important;
            left: 1rem !important;
        }

        .showcase-new-cars__thumb-wrapper {
            top: 40px;
        }
    `

    const paginaOfertas = window.location.href.includes("/ofertas/")

    if(paginaOfertas) {
        addStyle(styles)
    }
})()