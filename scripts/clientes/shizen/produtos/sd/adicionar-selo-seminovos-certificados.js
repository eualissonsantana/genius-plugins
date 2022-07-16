(() => {
    const usedModelsItemsIndex = document.querySelectorAll(".used-models .used-models__carousel .used-models__item");

    const usedModelsItemsOffers = document.querySelectorAll(".carousel-used-models-featured .carousel-used-models-featured__carousel .carousel-used-models-featured__item");

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

    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    const addUsedModelsCertificatesBadge = (usedModelsItemsIndex) => {
        if(!usedModelsItemsIndex){
            return;
        }

        if(usedModelsItemsIndex.length > 0){
            usedModelsItemsIndex.forEach(usedModelsItemIndex => {
                const cardBadgeItems = usedModelsItemIndex.querySelectorAll(".card .card__header .card__badges .card__badge-item");
    
                if(cardBadgeItems.length > 0){
                    cardBadgeItems.forEach(cardBadgeItem => {
                        if(cardBadgeItem.innerHTML.includes("nenhuma batida")){
                            const cardHeader = cardBadgeItem.parentNode.parentNode;
    
                            const usedModelsBadge = document.createElement("div");
                            const usedModelsBadgeImg = document.createElement("img");
                            usedModelsBadgeImg.src = `https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/seminovos-certificados.png`;
                            usedModelsBadgeImg.alt = `Seminovos Certificados`;
                            usedModelsBadge.classList.add("used-models-badge");
                            usedModelsBadge.appendChild(usedModelsBadgeImg);
    
                            cardBadgeItem.remove();
                            cardHeader.appendChild(usedModelsBadge);
                        }
                    });
                }
            });
        }
    };

    addUsedModelsCertificatesBadge(usedModelsItemsIndex);
    addUsedModelsCertificatesBadge(usedModelsItemsOffers);

    window.addEventListener("load", () => {
        const usedModelsItemsList = document.querySelectorAll(".list-used-models .list-used-models__vehicles .list-used-models__list");

        addUsedModelsCertificatesBadge(usedModelsItemsList);
    });

    if(isThisPage({ urlPiece: "/seminovos" })){
        const usedVehiclesSeals = document.querySelector(".used-vehicles-showcase__table .used-vehicles__seals");

        if(usedVehiclesSeals){
            usedVehiclesSeals.remove();
        }
    }

    addStyle(`
        .used-models .used-models__carousel .used-models__item .card .card__header,
        .carousel-used-models-featured .carousel-used-models-featured__carousel .carousel-used-models-featured__item .card .card__header,
        .list-used-models .list-used-models__vehicles .list-used-models__list .card .card__header{
            position: relative;
        }

        .used-models .used-models__carousel .used-models__item .card .card__header .used-models-badge,
        .carousel-used-models-featured .carousel-used-models-featured__carousel .carousel-used-models-featured__item .card .card__header .used-models-badge,
        .list-used-models .list-used-models__vehicles .list-used-models__list .card .card__header .used-models-badge{
            position: absolute;
            bottom: 0.2rem;
            left: 0.3rem;
        }

        .used-models .used-models__carousel .used-models__item .card .card__header .used-models-badge img,
        .carousel-used-models-featured .carousel-used-models-featured__carousel .carousel-used-models-featured__item .card .card__header .used-models-badge img,
        .list-used-models .list-used-models__vehicles .list-used-models__list .card .card__header .used-models-badge img{
            width: 6rem;
            height: auto;
        }

        @media screen and (max-width: 576px){
            .used-models .used-models__carousel .used-models__item .card .card__header .used-models-badge img,
            .carousel-used-models-featured .carousel-used-models-featured__carousel .carousel-used-models-featured__item .card .card__header .used-models-badge img,
            .list-used-models .list-used-models__vehicles .list-used-models__list .card .card__header .used-models-badge img{
                width: 9rem;
            }
        }
    `);
})();