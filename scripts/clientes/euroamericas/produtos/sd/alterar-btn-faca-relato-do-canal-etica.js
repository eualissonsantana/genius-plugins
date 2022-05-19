(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }

        if(isThisPage({ urlPiece: '/empresa/canal-de-etica' })){
            let btnMakeYourReport = document.querySelector(".etica-area .btn.btn-etica");

            if(btnMakeYourReport){
                btnMakeYourReport.setAttribute("href", "https://www.contatoseguro.com.br/eticagrupobarra");
            }
        }
    });
})();