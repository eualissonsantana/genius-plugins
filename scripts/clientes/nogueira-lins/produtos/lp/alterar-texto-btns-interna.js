(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }
    
        if(isThisPage({ urlPiece: "novos" })){
            let btnInterested = document.querySelector(".text-calls-cta-offer button.button--primary");
            let formConversion = document.querySelector(".showcase-new-simple .conversion-form");
            let btnInterestedForm = '';
            let btnInterestedFormText = '';
    
            if(btnInterested){
                btnInterested.innerText = `SAIBA MAIS`;
            }
    
            const changeButtonTextForm = () => {
                btnInterestedForm = document.querySelector(".form-conversion__body button.button--large");
                btnInterestedFormText = btnInterestedForm.innerText;
    
                if(btnInterestedFormText.includes("ESTOU INTERESSADO")){
                    btnInterestedForm.innerText = `FAÇA UMA SIMULAÇÃO`;
                }
            }
    
            changeButtonTextForm();
    
            const observer = new MutationObserver(changeButtonTextForm);
        
            // Setando as alterações que o observer deve assistir
            observer.observe(formConversion, {
                attributes: true,
                characterData: true,
                childList: true,
                subtree: true
            });
        }
    });
})();