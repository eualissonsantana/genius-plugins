(() => {
    function whatsApp(img) {
        //adiciona 2 divs, uma com bg e outra sem, formando uma caixa com botao close - class='hidden-sm hidden-xs'
        $("body").append("<div  id='popup-whats' style='width:50px; position:fixed; height:50px; cursor:pointer; background-image:url(" + img + ");  bottom: 20px; right:20px; z-index:1000;'></div>");
        //adiciona link Ã  div.parent que abre noutra janela
        $("#popup-whats").attr("onclick", "javascript:window.open('https://wa.me/message/7VWCQ57ECREOF1?utm_source=Site&utm_medium=Bot%C3%A3o+Whatsapp&utm_campaign=Fale+conosco&utm_term=Fale+conosco&utm_content=link+whatsapp');");
    
    };
    
    $(document).ready(function () {
        //imagem, celular com DDI e DDD, mensagem
        whatsApp('//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png');
    });
})()