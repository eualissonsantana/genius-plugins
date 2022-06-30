(() => {
    window.addEventListener("DOMContentLoaded", () => {
        let btnSubmit = document.querySelector(".conversion-form button.btn");
        let fieldsetLegends = document.querySelectorAll("fieldset legend");
    
        const hideField = (fieldsetLegends) => {
            fieldsetLegends.forEach(fieldsetLegend => {
                if(fieldsetLegend.innerText == "Quero receber contato por:"){
                    let formChecks = fieldsetLegend.parentNode.querySelectorAll(".form-check.form-check-inline");
                    formChecks.forEach(formCheck => {   
                        if(formCheck.innerText == "Telefone"){
                            formCheck.querySelector("input.checkable").checked = true;
                            fieldsetLegend.parentNode.querySelector("input.form-control").value = 'on';
        
                            fieldsetLegend.parentNode.classList.add("d-none");
                        }
                    });
                }
            });
        };
        
        if(fieldsetLegends && btnSubmit){
            hideField(fieldsetLegends);

            btnSubmit.addEventListener("click", function(){
                hideField(fieldsetLegends);
                this.click();
            });
        }
    });
})();