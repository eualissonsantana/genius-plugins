(() => {
   const isServicePage = window.location.href.includes("/servicos")

   if(isServicePage) {
        const textJuridical = document.querySelector(".offers-services__text-juridical")

        if(textJuridical) {
            textJuridical.innerText = "*Imagens meramente ilustrativas. Alguns itens apresentados poderão não estar disponíveis em todas as versões. Os preços poderão ser modificados sem aviso prévio. Consulte e confirme todas as informações com um de nossos consultores."
        }
   }
})()