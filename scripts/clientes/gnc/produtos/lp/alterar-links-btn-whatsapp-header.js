(() => {
    document.addEventListener('readystatechange', event => { 
        if (event.target.readyState === "complete") {
            const whatsappWrapper = document.querySelector('#wpp-content-0 ul.list.list--header-phones.list--border-bottom');
            const whatsappMobileWrapper = document.querySelector('#wpp-content-mobile-0 ul.list.list--border-bottom');

            const hostName = location.hostname
            const pahtName = location.pathname;
        
            const changeLinkWhatsapp = (wrapper) => {
                const phones = wrapper.querySelectorAll('li');
                console.log(phones);
                phones.forEach(phone => {
                    phone.innerHTML = phone.innerHTML;

                    const phoneLink = phone.querySelector("a");

                    phoneLink.setAttribute("target", "_blank");

                    if(pahtName.includes("grande-minas") || hostName.includes("grandeminas")){
                        phoneLink.setAttribute("href", "https://bit.ly/3QQWoip");
                    }
                    else if(pahtName.includes("grande-bahia") || hostName.includes("grandebahia")){
                        phoneLink.setAttribute("href", "https://bit.ly/3OLfjJB");
                    }
                    else if(pahtName.includes("terra-forte-toyota-para-de-minas") || hostName.includes("para-de-minas")){
                        phoneLink.setAttribute("href", "https://bit.ly/3Nq0vz5");
                    }
                    else if(pahtName.includes("terra-forte-toyota-divinopolis") || hostName.includes("divinopolis")){
                        phoneLink.setAttribute("href", "https://bit.ly/3Nq0vz5");
                    } 
                    else if(pahtName.includes("terra-forte-toyota-montes-claros") || hostName.includes("montes-claros")){
                        phoneLink.setAttribute("href", "https://bit.ly/3OuFN2j");
                    }
                });
            }
        
            changeLinkWhatsapp(whatsappWrapper);
            changeLinkWhatsapp(whatsappMobileWrapper);
        }
    });
})();