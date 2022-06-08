(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "consorcios" })){
        const showcaseConsortiumTitle = document.querySelector(".showcase-consortium__info-boxes .showcase-consortium__info-box .showcase-consortium__info-box-title");

        if(showcaseConsortiumTitle){
            showcaseConsortiumTitle.innerHTML = `* VALOR DA PARCELA`;
        }
    }
})();