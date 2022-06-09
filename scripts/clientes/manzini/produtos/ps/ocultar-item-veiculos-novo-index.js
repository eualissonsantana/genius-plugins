(() => {
    window.addEventListener("DOMContentLoaded", () => {
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

        const pathName = location.pathname;

        if(pathName == "/" || pathName == "/manzini-veiculos"){
            addStyle(`
                .search-filter-main .search-filter-main__form .choices .choices__list--dropdown .choices__list .choices__item[data-id="3"][data-value="ofertas-especiais"]{
                    display: none !important;
                }
            `);
        }
    });
})();