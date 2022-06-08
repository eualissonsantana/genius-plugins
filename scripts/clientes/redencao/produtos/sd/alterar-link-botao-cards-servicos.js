(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "/servicos" })){
        let btnsScheduleService = document.querySelectorAll(".list-services .list-services__item .card .card__footer a.btn");

        if(btnsScheduleService.length > 0){
            btnsScheduleService.forEach(btnScheduleService => {
                btnScheduleService.setAttribute("href", "https://agendamento.renault.com.br/?Type=dealer&BIR=104");
                btnScheduleService.setAttribute("target", "_blank");
            });
        }
    }
})();