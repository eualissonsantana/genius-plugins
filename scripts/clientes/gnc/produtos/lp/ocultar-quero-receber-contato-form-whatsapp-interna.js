(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }
        
        if(isThisPage({ urlPiece: "/novos" })){
            const hideField = (fieldset) => {
                if(!fieldset){
                    return;
                }

                const controlLabels = fieldset.querySelectorAll(".control-label");
                
                if(controlLabels && controlLabels.length == 1) {
                    if(controlLabels[0].innerText == "Quero receber contato por:"){
                        controlLabels[0].classList.add("d-none");
                    }
                }
                else if(controlLabels && controlLabels.length > 1){
                    if(controlLabels[1].innerText == "Quero receber contato por:"){
                        controlLabels[1].classList.add("d-none");
                    }
                }
    
                const formChecksInline = fieldset.querySelectorAll(".form-check-inline");
    
                formChecksInline.forEach(formCheckInline => {
                    formCheckInline.classList.add("d-none");
    
                    if(formCheckInline.innerText == "Whatsapp"){
                        formCheckInline.querySelector("input.checkable").checked = true;
                    }
                });
    
                fieldset.querySelector(".contact-options input.form-control").value = 'on';
                fieldset.querySelector(".contact-options").classList.add("d-none");
            };
    
            const changeWhatsappModal = () => {
                const fieldsetLegends = document.querySelectorAll("#new-vehicles-showcase_modal-whatsapp-box .form-modal__body fieldset")[0];
    
                hideField(fieldsetLegends);
    
                const btnSubmit = document.querySelector("#new-vehicles-showcase_modal-whatsapp-box footer button.form-modal__submit");
                
                if(btnSubmit){
                    btnSubmit.addEventListener("click", function(){
                        hideField(document.querySelectorAll("#new-vehicles-showcase_modal-whatsapp-box .form-modal__body fieldset")[0]);
                        this.click();
                    });
                }
            };
    
            changeWhatsappModal();
        }
    });
})();