(() => {
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

    let channeList = document.querySelector("#channel-list");
    let cardPeugeot = document.querySelector("#channel-list .landing #channel_1170 .image .img-video");
    let cardPeugeotWrapper = document.querySelectorAll("#channel-list .col-xs-12.col-sm-6")[0];
    let cardCitroen = document.querySelector("#channel-list .landing #channel_1171 .image .img-video");
    let cardCitroenWrapper = document.querySelectorAll("#channel-list .col-xs-12.col-sm-6")[1];

    if(cardPeugeot && cardCitroen){
        cardPeugeot.style = `background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/lafontaine/produtos/pg/fachada-peugeot.jpg'); background-size: cover;`;
        cardCitroen.style = `background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/lafontaine/produtos/pg/fachada-citroen.jpg'); background-size: cover;`;

        channeList.insertBefore(cardCitroenWrapper, cardPeugeotWrapper);
    }

    addStyle(`
        @media (min-width: 768px){
            #channel-list #channel_1170 a[target='1170']{
                left: 0 !important;
            }
        }
    `);
})();