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
                    const phoneName = phoneLink.getAttribute("data-name");

                    phoneLink.setAttribute("target", "_blank");

                    if(phoneName == "Bahia"){
                        phoneLink.setAttribute("href", "https://bit.ly/3O0NT20");
                    }
                    else if(phoneName == "Divinópolis"){
                        phoneLink.setAttribute("href", "https://bit.ly/3Q8xY3N");
                    }
                    else if(phoneName == "Montes Claros"){
                        phoneLink.setAttribute("href", "https://bit.ly/3zDNu1R");
                    }
                    else if(phoneName == "Pará de Minas"){
                        phoneLink.setAttribute("href", "https://bit.ly/395xBWO");
                    }
                    else{
                        const phoneDataLink = phoneLink.getAttribute("data-link");
                        phoneLink.setAttribute("href", phoneDataLink);
                    }
                });
            }
        
            changeLinkWhatsapp(whatsappWrapper);
            changeLinkWhatsapp(whatsappMobileWrapper);
        }
    });
})();