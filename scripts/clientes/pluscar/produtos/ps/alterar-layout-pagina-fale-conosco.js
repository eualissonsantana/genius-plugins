(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: '/empresa/fale-conosco' })){
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

        let pageContainer = document.querySelector(".page__container");
        let showcaseColForm = document.querySelector(".showcase-new__lower .showcase__col-form");
        let showcaseBanner = document.querySelector(".showcase.showcase-new .default-bg__static_page");
    
        if(pageContainer){
            pageContainer.classList.add("page__fale__conosco");

            showcaseColForm.classList.remove("col-lg-4");
            showcaseColForm.classList.add("col-lg-8");

            showcaseBanner.classList.add("d-none");
    
            addStyle(`
                .page__fale__conosco .group-button--horizontal {
                    display: flex;
                    flex-direction: row;
                    margin: 0 auto;
                    justify-content: space-evenly;
                    align-items: normal;
                    gap: 1rem;
                }
                
                @media screen and (max-width: 768px) {
                    .page__fale__conosco .showcase__col-whatsapp-box {
                    order: 0;
                    }
                
                    .page__fale__conosco .group-button--horizontal {
                    flex-direction: column;
                    width: 100%;
                    }
                
                    .page__fale__conosco .group-button--horizontal a {
                    margin-bottom: 10px;
                    }
                }
                
                .page__fale__conosco .showcase-new__conversion-form {
                    margin:  0;
                }
                
                .page__fale__conosco .showcase-new__lower .row {
                    flex-direction: column;
                    align-items: center;
                }
                
                .page__fale__conosco .showcase__arrow-banner {
                    display: none !important;
                }
                
                .fragment-map-units {
                    padding:  0;
                }
                
                .fragment-map-units .container {
                    padding:  0;
                    max-width: 100%;
                    width: 100%;
                }
                
                .fragment-map-units .map-units__form {
                    display: none;
                }
                
                .fragment-map-units .map-units__map {
                    height: 400px;
                }
    
                .page__fale__conosco .showcase__col-whatsapp-box {
                    order:  2 !important;
                }
                
                @media screen and (max-width: 768px) {
                    .showcase__col-whatsapp-box {
                    padding-top: 60px;
                    }
                    
                    .showcase-new__whatsapp-box .cta-box {
                        display: flex !important;
                    }
                }
    
                .page.page--home .main-filter {
                    display: none;
                }
                
                .page.page--home  .page__container {
                    display: flex;
                    flex-direction: column;
                }
            `);
        }
    }
})();