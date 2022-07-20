(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "/novos" })){
        const infoExtra = document.querySelector(".fragment-info-extra");
    
        if (infoExtra) {
            const details = document.querySelector(".vehicle-details");
            const titleInfoExtra = infoExtra.querySelector(".section-component__title");
    
            titleInfoExtra.remove();
            details.after(infoExtra);
        }
    }
})();