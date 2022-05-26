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
        .header__logo-right{
            width: 3.5rem !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            max-width: unset !important;
        }

        .header-mobile__logo-right{
            width: 2rem !important;
            max-width: unset !important;
            margin: 0 !important;
        }
    `);
})();