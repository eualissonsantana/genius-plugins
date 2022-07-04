(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }
    
    if(isThisPage({ urlPiece: "/servicos" })){
        const showcaseServicesTitle = document.querySelector(".showcase-services .showcase-services__panel .showcase-services__panel-title");
        
        if(showcaseServicesTitle){
            const showcaseServicesSubtitle = document.createElement("h5");
            showcaseServicesSubtitle.classList.add("showcase-services__panel-subtitle", "d-none", "d-md-block", "pt-2");

            showcaseServicesSubtitle.innerHTML = `Horário de atendimento: segunda-feira a sexta-feira das 8h às 18h`;

            showcaseServicesTitle.innerHTML = `
                Agende a manutenção da sua moto
            `;
            showcaseServicesTitle.after(showcaseServicesSubtitle);
        }
    }
})();