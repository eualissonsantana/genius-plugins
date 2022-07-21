(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "/empresa/mercedes-benz-certified" })){
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

        const showcaseBanner = document.querySelector(".showcase .showcase__banner");
        const showcaseColBox = document.querySelector(".showcase .showcase-new__lower .row .showcase__col-whatsapp-box");
        const showcaseColForm = document.querySelector(".showcase .showcase-new__lower .row .showcase__col-form");
        const showcaseArrowBanner = document.querySelector(".showcase .showcase__arrow-banner");

        if(showcaseBanner && showcaseColForm && showcaseColBox && showcaseArrowBanner){
            showcaseBanner.remove();
            showcaseColForm.remove();
            showcaseArrowBanner.remove();

            showcaseColBox.classList.remove("col-lg-8", "col-md-6");
            showcaseColBox.classList.add("col-lg-12", "col-md-12", "col-sm-12");
            
            const sectionInternalDesc = showcaseColBox.querySelector(".section-internal-description");

            if(sectionInternalDesc){
                sectionInternalDesc.classList.remove("py-5");
            }

            addStyle(`
                .section-internal-description #title-description-mercedes-benz-certified-text-block-1,
                .showcase h2{
                    color: #000 !important;
                }

                .section-internal-description #title-description-mercedes-benz-certified-text-block-1::after{
                    content: '';
                    display: block;
                    background-color: #000;
                    width: 10rem;
                    height: .2rem;
                    margin-top: .5rem;
                }

                .showcase .showcase-new__lower .section-internal-description{
                    background-color: #fff !important;
                }

                

                @media screen and (max-width: 576px){
                    .section-internal-description #title-description-mercedes-benz-certified-text-block-1::after{
                        width: 6rem;
                    }

                    .section-mercedes-certified h2{
                        padding-top: 1.6rem;
                    }
                }
            `);
        }
    }
})();