(() => { 
    window.addEventListener("DOMContentLoaded", () => {
        const desktopButtons = document.querySelector(".page__container .header .header-desktop .header__navbar-item");
        const mobileButtons = document.querySelector(".page__container .header .header-mobile .header-mobile__buttons");

        if(desktopButtons && mobileButtons){
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

            const addBrandHeader = (buttons) => {
                const brandWrapper = document.createElement("div");
                brandWrapper.classList.add("header__brand_right");

                const brand = document.createElement("img");
                brand.src = `https://legado.autoforce.com.br/plugins/images/global/produtos/sd/brand_bmw_motorrad.png`;

                brandWrapper.appendChild(brand);
                buttons.after(brandWrapper);
            }

            addBrandHeader(desktopButtons);
            addBrandHeader(mobileButtons);
            addStyle(`
                .header__brand_right img{
                    width: 100%;
                    height: auto;
                }

                @media(max-width: 576px){
                    .header__brand_right img{
                        width: 5rem;
                        height: auto;
                    }
                }
            `);
        }
    });
})();