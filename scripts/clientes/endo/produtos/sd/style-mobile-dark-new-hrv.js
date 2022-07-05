(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

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

    if(isThisPage({ urlPiece: 'empresa/new-hr-v' })){
        addStyle(`
            @media(max-width: 480px){
                .page__container{
                    background: #000 !important;
                }
                
                .gallery-with-thumbs{
                    margin-top: 0 !important;
                }
                
                .gallery-with-thumbs .section-component__title{
                    color: #fff;
                    padding: 0 1rem;
                }
            }
        `);
    }
})();