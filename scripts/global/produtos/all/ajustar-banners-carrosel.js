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
        @media (min-width: 1200px) and (max-width: 1920px){
            .slide__image{
                min-height: unset !important;
            }

            .showcase .swiper-pagination{
                bottom: 4rem !important;
            }

            .showcase-simple .slide__pagination{
                bottom: 4rem !important;
            }
        }
    `);
})();