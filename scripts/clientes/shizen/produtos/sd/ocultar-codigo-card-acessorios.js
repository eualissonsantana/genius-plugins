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
        .carousel-products .swiper-wrapper .carousel__item .card .card__content div[data-match-height='product-card-list'],
        .list-accessories .list-accessories__list .card .card__content div[data-match-height='list-accessories-card-list']{
            display: none;
        }

        .carousel-products .swiper-wrapper .carousel__item .card .card__footer,
        .list-accessories .list-accessories__list .card .card__footer
        {
            margin-top: 0 !important;
        }
    `);
})();