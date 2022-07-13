(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: '/servicos' })){
        const btnWhatsapp = document.createElement("a");
        btnWhatsapp.href = `https://api.whatsapp.com/send?phone=556533887000`;
        btnWhatsapp.target = `_blank`;
        btnWhatsapp.setAttribute("class", "btn button button--large button--whatsapp mt-3");
        btnWhatsapp.innerHTML = `
            <i class="icon icon-whatsapp"></i>
            Whatsapp 
        `;

        const showcaseServicesBtn = document.querySelector(".showcase-services__content .showcase-services__panel .btn");

        if(showcaseServicesBtn){
            showcaseServicesBtn.after(btnWhatsapp);
        }
    }
})();