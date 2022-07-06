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
        .showcase-new-cars__variants {
            display: none !important;
        }
    `

    const isLikePage = window.location.href.includes("ofertas/like")

    if(isLikePage) {
        addStyle(style)
    }
})()