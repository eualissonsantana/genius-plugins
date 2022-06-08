(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "consorcios" })){
        const showcaseConsortiumTitleWrapper = document.querySelectorAll("#filter_search #info-values tbody tr")[1];

        if(showcaseConsortiumTitleWrapper){
            const showcaseConsortiumTitle = showcaseConsortiumTitleWrapper.querySelector("td label");
            showcaseConsortiumTitle.innerHTML = `* Valor da parcela`;
        }
    }
})();