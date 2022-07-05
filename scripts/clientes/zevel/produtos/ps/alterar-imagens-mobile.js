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

    const changeShowcaseImageMobile = (showcaseWrapper, url) => {
        if(!showcaseWrapper){
            return;
        }

        if(window.matchMedia("(max-width: 768px)").matches){
            showcaseWrapper.setAttribute(`style`, `background-image: url('${url}')`);
        }

        addStyle(`
            @media screen and (max-width: 768px){
                .showcase__banner {
                    padding: 20px 0 !important;
                }
            }
        `);
    }

    const showcaseWrapper = document.querySelector(".showcase .showcase__banner");

    if(isThisPage({ urlPiece: 'empresa/nossa-historiaa' })){
        changeShowcaseImageMobile(showcaseWrapper, "https://legado.autoforce.com.br/plugins/images/clientes/zevel/produtos/ps/quem-somos.jpg");
    }
    else if(isThisPage({ urlPiece: 'empresa/compramosseucarro' })){
        changeShowcaseImageMobile(showcaseWrapper, "https://legado.autoforce.com.br/plugins/images/clientes/zevel/produtos/ps/compramos-seu-carro.jpg");
    }
    else if(isThisPage({ urlPiece: 'empresa/servicos' })){
        changeShowcaseImageMobile(showcaseWrapper, "https://legado.autoforce.com.br/plugins/images/clientes/zevel/produtos/ps/servicos.jpg");
    }
    else if(isThisPage({ urlPiece: 'empresa/sugestoesereclamacoes' })){
        changeShowcaseImageMobile(showcaseWrapper, "https://legado.autoforce.com.br/plugins/images/clientes/zevel/produtos/ps/sugestoes-reclamacoes.jpg");
    }
    else if(isThisPage({ urlPiece: 'empresa/trabalhe-conosco' })){
        changeShowcaseImageMobile(showcaseWrapper, "https://legado.autoforce.com.br/plugins/images/clientes/zevel/produtos/ps/trabalhe-conosco.jpg");
    }
})();