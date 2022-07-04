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
                newBtnSchedule.href = "https://www2.mercedes-benz.com.br/passengercars/being-an-owner/service-booking/stage.module.html";
                newBtnSchedule.target = "_blank";

                currentBtnSchedule.after(newBtnSchedule);
                currentBtnSchedule.remove();
            }
        }
    });
})();