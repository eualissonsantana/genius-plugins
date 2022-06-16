(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const hideField = (fieldset) => {
            fieldset.querySelector(".control-label").classList.add("d-none");
            const formChecksInline = fieldset.querySelectorAll(".form-check-inline")

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
            const fieldsetLegends = document.querySelectorAll("#header-conversion-form-whatsapp-modal .form-modal__body fieldset")[0];

            hideField(fieldsetLegends);

            const btnSubmit = document.querySelector("#header-conversion-form-whatsapp-modal footer button.form-modal__submit");

            btnSubmit.addEventListener("click", function(){
                hideField(document.querySelectorAll("#header-conversion-form-whatsapp-modal .form-modal__body fieldset")[0]);
                this.click();
            });
        };

        const whatsappMenuItemDesktop = document.querySelector(".header__phones-container #header-card-whatsapp #wpp-content-0 .header__card-whatsapp-item");
        const whatsappMenuItemMobile = document.querySelector(".header-mobile__buttons #header-card-whatsapp-mobile #wpp-content-mobile-0 .header__card-whatsapp-item");
    
        whatsappMenuItemDesktop.addEventListener("click", changeWhatsappModal);
        whatsappMenuItemMobile.addEventListener("click", changeWhatsappModal);
    });
})();