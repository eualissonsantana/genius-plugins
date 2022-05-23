(() => {
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
})();