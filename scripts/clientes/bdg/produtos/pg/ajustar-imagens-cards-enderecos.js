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
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    if(location.pathname == "/" || 
       location.pathname == "/grupo-bdg" || 
       location.pathname == "/grupo-bdg/" || 
       isThisPage({ urlPiece: "endereco" })
    ){
        addStyle(`
            #units .content-units .item-list .item footer, 
            #content .content-units .item-list .item footer{
                margin-top: 0rem !important;
            }

            .col-xs-12.col-lg-4.item-list-col .item:hover #units .content-units .item-list .item footer,
            .col-xs-12.col-lg-4.item-list-col .item:hover #content .content-units .item-list .item footer
            {
                margin-top: 0rem !important;
            }

            .col-xs-12.col-lg-4.item-list-col{
                margin-bottom: 4rem !important;
            }

            @media screen and (max-width: 576px){
                #units .content-units .item-list .item{
                    height: 520px;
                }
                
                #content .content-units .item-list .item{
                    height: 470px;
                }

                #content .content-units .item-list .item .container footer, 
                #units .content-units .item-list .item .container footer{
                    height: 210px !important;
                }

                #units .content-units .item-list .item footer, 
                #content .content-units .item-list .item footer{
                    margin-top: 0.5rem !important;
                }

                .col-xs-12.col-lg-4.item-list-col .item:hover #units .content-units .item-list .item footer,
                .col-xs-12.col-lg-4.item-list-col .item:hover #content .content-units .item-list .item footer
                {
                    margin-top: 0.5rem !important;
                }
            }
        `);
    }   
})();