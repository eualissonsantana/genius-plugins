(() => {
    const addStyle = (styles) => {
        const css = styles,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        head.appendChild(style);
        style.setAttribute('type', 'text/css');
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    addStyle(`
        .carousel-used-models2 .card .card__footer .card__triggers{
            height: auto !important;
        }

        .carousel-used-models2 .card .card__footer .card__trigger-value{
            font-size: 1.4rem !important;
        }
    `);
})();