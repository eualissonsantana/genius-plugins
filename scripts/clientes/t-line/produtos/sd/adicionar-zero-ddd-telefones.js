(() => {
    window.addEventListener("load", () => {
        const buttonPhonesDesktop = document.querySelectorAll(".header-desktop .header__phones-container #header-card-phones #phone-content-0 .list .header__card-phones-item");
        const buttonPhonesMobile = document.querySelectorAll(".header-mobile .header-mobile__buttons > div #header-card-phones-mobile #phone-content-mobile-0 .list .header__card-phones-item");

        const addZeroAtDDDPhones = (phones) => {
            if(!phones){
                return;
            }

            if(phones.length > 0){
                phones.forEach((phone) => {
                    const phoneLink = phone.querySelector("a");

                    if(phoneLink){
                        const phoneLinkHref = phoneLink.getAttribute("href");
                        const phoneLinkHrefParts = phoneLinkHref.split(":");
                        phoneLink.setAttribute("href", `${phoneLinkHrefParts[0]}:0${phoneLinkHrefParts[1]}`);

                        const phoneLinkText = phoneLink.querySelector(".text-mask-phone");
                        const phoneLinkTextContent = phoneLinkText.innerHTML;
                        const phoneLinkTextParts = phoneLinkTextContent.split("(");
                        phoneLinkText.innerHTML = `(0${phoneLinkTextParts[1]}`;
                    }
                });
            }
        };

        addZeroAtDDDPhones(buttonPhonesDesktop);
        addZeroAtDDDPhones(buttonPhonesMobile);
    });
})();