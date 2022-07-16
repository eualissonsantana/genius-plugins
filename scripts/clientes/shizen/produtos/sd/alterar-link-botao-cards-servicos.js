(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }
    
        if(isThisPage({ urlPiece: "/servicos" })){
            let btnsScheduleService = document.querySelectorAll(".list-services .list-services__item .card .card__footer a.btn");
    
            if(btnsScheduleService.length > 0){
                btnsScheduleService.forEach(btnScheduleService => {
                    btnScheduleService.setAttribute("href", "http://simoes.syonet.com:8080/moduloAgenda/");
                    btnScheduleService.setAttribute("target", "_blank");
                });
            }
        }
    });
})();