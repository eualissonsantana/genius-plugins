(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const privacyPolicyForm = document.querySelector(".conversion-form .form-conversion__footer a");

        if(privacyPolicyForm){
            privacyPolicyForm.setAttribute("href", "https://lgpd.edna.center/central-de-privacidade/shizen-honda/2862DABC/");
        }

        const privacyPolicyFooter = document.querySelector(".footer .footer__signature .footer__copyright p a");

        if(privacyPolicyFooter){
            privacyPolicyFooter.setAttribute("href", "https://lgpd.edna.center/central-de-privacidade/shizen-honda/2862DABC/");
        }

        const headerCardWhatsapp = document.querySelector("#header-card-whatsapp");
        headerCardWhatsapp.addEventListener("click", function(){
            const privacyPolicyWhatsapp = document.querySelector("#header-conversion-form-whatsapp-modal .form-modal__body .consent-text a");
    
            if(privacyPolicyWhatsapp){
                privacyPolicyWhatsapp.setAttribute("href", "https://lgpd.edna.center/central-de-privacidade/shizen-honda/2862DABC/");
            }
        });

        const ctaNewVehiclesWhatsapp = document.querySelector(".vehicles-new__ctas button.vehicles-new__button-whatsapp");
        ctaNewVehiclesWhatsapp.addEventListener("click", function(){
            const privacyPolicySalesCenter = document.querySelector("#vehicles-new-conversion-form-whatsapp-modal .form-modal__body .consent-text a");
    
            if(privacyPolicySalesCenter){
                privacyPolicySalesCenter.setAttribute("href", "https://lgpd.edna.center/central-de-privacidade/shizen-honda/2862DABC/");
            }
        });
    });
})();