(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const carouselOffersVehiclesItems = document.querySelectorAll(".carousel-offers-vehicles-new .carousel-offers-vehicles-new__carousel-wrapper .carousel-offers-vehicles-new__item");

        const imgUrl = `https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/sd/miniatura-rodotrem-graneleiro.png`;

        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)

            return result
        }

        if(carouselOffersVehiclesItems.length > 0){
            carouselOffersVehiclesItems.forEach(carouselOffersVehiclesItem => {
                const headerItemImg = carouselOffersVehiclesItem.querySelector(".card__header .card__image .card__image-value");
                const contentItemTitle = carouselOffersVehiclesItem.querySelector(".card .card__content .card__title").innerText;

                if(contentItemTitle == "RODOTREM GRANELEIRO"){
                    headerItemImg.style = `
                        background-image: url("${imgUrl}"); margin-top: .5rem;
                    `;
                }
            });
        }

        if(isThisPage({ urlPiece: "ofertas/novo-actros-cde1f6ad-4e08-480a-accd-f92aff55f4dd" })){
            const showcaseOfferModel = document.querySelector(".showcase-offer .showcase-offer__model-image-background");

            const currentShowcaseOfferImageFeatured = document.querySelector(".showcase-offer .showcase-offer__image-featured");

            if(currentShowcaseOfferImageFeatured){
                currentShowcaseOfferImageFeatured.remove();
            }

            const newShowcaseOfferImageFeatured = document.createElement("img");
            newShowcaseOfferImageFeatured.classList.add("img-fluid");
            newShowcaseOfferImageFeatured.classList.add("showcase-offer__image-featured");
            newShowcaseOfferImageFeatured.setAttribute("src", `${imgUrl}`);

            showcaseOfferModel.after(newShowcaseOfferImageFeatured);
        }
    });
})();
