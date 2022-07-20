(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "/ofertas" })){
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
            @media screen and (min-width: 992px){
                .showcase-new-cars__price{
                    top: -2rem !important;
                }
    
                .showcase-new-cars__seal-list{
                    top: 5rem !important;
                    left: 27rem !important;
                }
    
                .showcase-new-cars__thumb-wrapper{
                    margin-top: 12rem !important;
                }
            }
        `);
    }
})();