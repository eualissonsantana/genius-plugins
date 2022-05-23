(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }
    
        if(isThisPage({ urlPiece: "/empresa/fale-conosco" })){
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
    
            addStyle(`
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="5"][data-value="page"]{
                    display: none !important;
                }
            `);
        }
    });
})();