(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "/servicos" })){
        const cardsServices = document.querySelectorAll(".list-services .container .row .list-services__item .card");

        if(cardsServices.length > 0){
            cardsServices.forEach(cardService => {
                const cardServiceLink = cardService.querySelector(".card__header a").getAttribute("href");

                if(cardServiceLink.includes("/servicos/aversa-amigo")){
                    cardService.parentNode.remove();
                }
            });
        }
    }
})();