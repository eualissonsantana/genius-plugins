(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }

        if(isThisPage({ urlPiece: "/servicos" })){
            let currentBtnSchedule = document.querySelector(".showcase-services__panel .showcase-services__panel-btn-schedule");
            
            if(currentBtnSchedule){
                let newBtnSchedule = document.createElement("a");
                newBtnSchedule.setAttribute("class", "btn button button--large button--primary showcase-services__panel-btn-schedule");
                newBtnSchedule.innerText = "Agendar Revisão";
                newBtnSchedule.href = "http://simoes.syonet.com:8080/moduloAgenda";
                newBtnSchedule.target = "_blank";

                currentBtnSchedule.after(newBtnSchedule);
                currentBtnSchedule.remove();
            }
        }
    });
})();