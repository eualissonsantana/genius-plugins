(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: '/acessorios' })){
        const btnWhatsappWrapper = document.createElement("div");
        btnWhatsappWrapper.classList.add("mt-2");

        const btnWhatsapp = document.createElement("a");
        btnWhatsapp.href = `https://api.whatsapp.com/send?phone=556533887000`;
        btnWhatsapp.target = `_blank`;
        btnWhatsapp.classList.add("btn");
        btnWhatsapp.style = `
            background-color: #33a53e;
            color: #fff;
            width: 250px;
        `;
        btnWhatsapp.innerHTML = `
            <i class="icon icon-whatsapp"></i>
            Whatsapp 
        `;

        btnWhatsappWrapper.appendChild(btnWhatsapp);

        const selectAcessoriesWrapper = document.querySelector(".section-component .select-acessories");

        if(selectAcessoriesWrapper){
            selectAcessoriesWrapper.classList.remove("col-6");
            selectAcessoriesWrapper.classList.add("col-lg-6", "col-md-6", "col-md-12", "mb-3");
        }

        const btnSelectAcessories = document.querySelector(".section-component .select-acessories > div form .btn");

        if(btnSelectAcessories){
            btnSelectAcessories.style = `
                color: #fff !important;
            `;
            btnSelectAcessories.after(btnWhatsappWrapper);
        }
    }
})();