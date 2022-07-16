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
                newBtnSchedule.href = "https://www2.mercedes-benz.com.br/passengercars/being-an-owner/service-booking/oab.module.html?oabDecline=&oabbrand=&oabDealerId=GS0003325&oabDealerGroup=&oabVehicleId=&oabServiceNotes=&oabServiceProduct=&oabOfferId=&oabSection=&oabCancellationId=&oabContext=&oabLicensePlate=&utm_source=&utm_campaign=&utm_medium=&utm_content=&utm_term=&csref=&pid=";
                newBtnSchedule.target = "_blank";

                currentBtnSchedule.after(newBtnSchedule);
                currentBtnSchedule.remove();
            }
        }
    });
})();