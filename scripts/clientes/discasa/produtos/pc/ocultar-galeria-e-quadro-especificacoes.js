(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "consorcios/carta-de-credito-98" })){
        const containerCarousel = document.querySelector(".container-view .container-carousel");
        const containerDatasheet = document.querySelector("#container-dinamic .datasheet");

        if(containerCarousel && containerDatasheet){
            containerCarousel.remove();
            containerDatasheet.remove();

            const containerFluid = document.querySelector("#container-dinamic .container-fluid");

            containerFluid.style = `
                padding-bottom: 2rem;
            `;
        }
    }
})();