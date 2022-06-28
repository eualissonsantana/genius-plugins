(() => {
    document.addEventListener('readystatechange', event => { 
        if (event.target.readyState === "complete") {
            const whatsappWrapper = document.querySelector('#wpp-content-0 ul.list.list--header-phones.list--border-bottom');
            const whatsappMobileWrapper = document.querySelector('#wpp-content-mobile-0 ul.list.list--border-bottom');
        
            const changeLinkWhatsapp = (wrapper) => {
                const phones = wrapper.querySelectorAll('li');
            
                phones.forEach(phone => {
                    phone.innerHTML = phone.innerHTML;

                    const phoneLink = phone.querySelector("a");
                    const dataLink = phoneLink.getAttribute("data-link");

                    phoneLink.setAttribute("target", "_blank");
                    phoneLink.setAttribute("href", dataLink);
                });
            }
        
            changeLinkWhatsapp(whatsappWrapper);
            changeLinkWhatsapp(whatsappMobileWrapper);
        }
    });
})();