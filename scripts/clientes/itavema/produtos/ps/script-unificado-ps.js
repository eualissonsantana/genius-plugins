(() => {
    // 12/05/2022 | Adiciona ícones de rede social no header
    // Alisson Santana
    function adicionaRedesSociaisHeader () {
        const addStyle = (styles) => {
            const css = styles,
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');
                head.appendChild(style);
                style.setAttribute('type', 'text/css');
            if (style.styleSheet){
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
        }
    
        const styles = `
            
    
            .header-desktop .header__navbar-item:not(:last-child) {
                margin-right: 10px !important;
            }
    
            .header__social-networks {
                margin-left: 6px;
            }
    
            .header__social-networks .icon--base {
                font-size: 28px !important;
                margin-right: 4px;
            }
    
            .header__networks-list {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                background-color: #f8f9f9;
                padding: 5px;
                border-radius: 25px;
            }        
    
        `
        const socialNetworks = document.querySelectorAll(".footer__social-networks--mobile a")
        
        if(socialNetworks){
            addStyle(styles)
            
            const navbar = document.querySelector(".header-desktop .header__navbar")
            const headerSocial = document.createElement("div")
            const headerSocialList = document.createElement("div")
            const prhase = document.createElement("span")
            let anchorInstagram
            let anchorTwitter
            let anchorFacebook
            let anchorYoutube
    
            prhase.classList.add("header__navbar-title", "d-none", "d-lg-block")
            headerSocial.classList.add("header__social-networks", "d-none", "d-md-block")
            headerSocialList.classList.add("header__networks-list")
    
            prhase.innerHTML = "Siga-nos: "
            socialNetworks.forEach(element => {
                if(element.innerHTML.includes("icon-instagram")){
                    anchorInstagram = element.cloneNode(true)
                } else if(element.innerHTML.includes("icon-twitter")) {
                    anchorTwitter = element.cloneNode(true)
                } else if(element.innerHTML.includes("icon-facebook")) {
                    anchorFacebook = element.cloneNode(true)
                } else if(element.innerHTML.includes("icon-youtube")) {
                    anchorYoutube = element.cloneNode(true)
                }
            });
           
            if(anchorInstagram != null) {
                headerSocialList.appendChild(anchorInstagram)
            }
    
            if(anchorTwitter != null) {
                headerSocialList.appendChild(anchorTwitter)
            }
    
            if(anchorYoutube != null){
                headerSocialList.appendChild(anchorYoutube)
            }
    
            if(anchorFacebook != null){
                headerSocialList.appendChild(anchorFacebook)
            }
    
            if(headerSocialList != null){
                headerSocial.appendChild(headerSocialList)
                navbar.appendChild(prhase)
                navbar.appendChild(headerSocial)
            }
        }
    }
    
    // 13/05/2022 | Agrupar telefones por marcas
    // João Carlos
    function agrupaTelefonesPorMarcas() {
        window.addEventListener("DOMContentLoaded", () => {
            let phoneNumbersDesktop = document.querySelectorAll(".header-desktop #header-card-phones .header__card-phones-items");
            let currentHeaderPhonesDesktop = document.querySelector(".header-desktop .header__phones-container");
    
            let phoneNumbersMobile = document.querySelectorAll(".header-mobile #header-card-phones-mobile .header__card-phones-items");
            let currentHeaderPhonesMobile = document.querySelectorAll(".header-mobile .header-mobile__buttons div")[0];
    
            const reGroupPhones = (phones, currentHeaderPhones, isDesktop) => {
                let brands = [
                    {
                        title: "Toyota",
                        units: []
                    },
                    {
                        title: "Renault",
                        units: []
                    },
                    {
                        title: "Hyundai",
                        units: []
                    },
                    {
                        title: "Fiat",
                        units: []
                    },
                    {
                        title: "Nissan",
                        units: []
                    },
                    {
                        title: "ITVA Motors Dafra/KTM",
                        units: []
                    },
                    {
                        title: "Dafra PeÃ§as de Motos e VeÃ­culos",
                        units: []
                    }
                ];
    
                let parentDropdownIsOpen = false;
                let childrenDropdownIsOpen = false;
    
                let buttonServices = document.createElement("button");
                let headerCardPhones = document.createElement("div");
    
                buttonServices.setAttribute("data-toggle", "dropdown");
                buttonServices.setAttribute("aria-expanded", "false");
    
                if(isDesktop){
                    buttonServices.setAttribute("class", "btn button button--primary header__phones-button-toggler");
                    buttonServices.innerHTML = `
                        <i class="icon icon-phone"></i> 
                        Ligue agora 
                    `;
            
                    headerCardPhones.setAttribute("id", "header-card-phones");
                    headerCardPhones.setAttribute("class", "card-collapse header__card-phones dropdown-menu");
                }
                else{
                    buttonServices.setAttribute("class", "button-icon header__phones-button-toggler-mobile");
                    buttonServices.innerHTML = `
                        <i class="icon icon-phone"></i> 
                    `;
            
                    headerCardPhones.setAttribute("id", "header-card-phones-mobile");
                    headerCardPhones.setAttribute("class", "card-collapse header__card-phones dropdown-menu");
                }
    
                phones.forEach((phone) => {
                    let phoneText = String(phone.querySelector(".card-collapse__header").innerText).trim();
            
                    let brand = phoneText.split(" ")[0];
    
                    switch(brand){
                        case "Toyota":
                            brands[0].units.push({
                                name: phoneText,
                                phone: phone.querySelector(".card-collapse__content .header__card-phones-item a .text-mask-phone").innerText,
                                link: phone.querySelector(".card-collapse__content .header__card-phones-item a").getAttribute("href")
                            });
                        break;
    
                        case "Renault":
                            brands[1].units.push({
                                name: phoneText,
                                phone: phone.querySelector(".card-collapse__content .header__card-phones-item a .text-mask-phone").innerText,
                                link: phone.querySelector(".card-collapse__content .header__card-phones-item a").getAttribute("href")
                            });
                        break;
    
                        case "Hyundai":
                            brands[2].units.push({
                                name: phoneText,
                                phone: phone.querySelector(".card-collapse__content .header__card-phones-item a .text-mask-phone").innerText,
                                link: phone.querySelector(".card-collapse__content .header__card-phones-item a").getAttribute("href")
                            });
                        break;
    
                        case "Fiat":
                            brands[3].units.push({
                                name: phoneText,
                                phone: phone.querySelector(".card-collapse__content .header__card-phones-item a .text-mask-phone").innerText,
                                link: phone.querySelector(".card-collapse__content .header__card-phones-item a").getAttribute("href")
                            });
                        break;
    
                        case "Nissan":
                            brands[4].units.push({
                                name: phoneText,
                                phone: phone.querySelector(".card-collapse__content .header__card-phones-item a .text-mask-phone").innerText,
                                link: phone.querySelector(".card-collapse__content .header__card-phones-item a").getAttribute("href")
                            });
                        break;
    
                        case "ITVA":
                            brands[5].units.push({
                                name: phoneText,
                                phone: phone.querySelector(".card-collapse__content .header__card-phones-item a .text-mask-phone").innerText,
                                link: phone.querySelector(".card-collapse__content .header__card-phones-item a").getAttribute("href")
                            });
                        break;
    
                        case "Dafra":
                            brands[6].units.push({
                                name: phoneText,
                                phone: phone.querySelector(".card-collapse__content .header__card-phones-item a .text-mask-phone").innerText,
                                link: phone.querySelector(".card-collapse__content .header__card-phones-item a").getAttribute("href")
                            });
                        break;
                    }    
    
                    phone.remove();
                });
    
                brands.forEach((brand, index) => {
                    let headerCardPhone = document.createElement("div");
                    headerCardPhone.classList.add("header__card-phones-items");
    
                    let dropItemTitle = document.createElement("div");
                    dropItemTitle.setAttribute("data-parent", "#header-card-phones");
                    dropItemTitle.setAttribute("data-toggle", "collapse");
                    dropItemTitle.setAttribute("data-target", `#phone-content-${index}`);
                    dropItemTitle.setAttribute("class", "card-collapse__header collapsed");
                    dropItemTitle.setAttribute("aria-expanded", "false");
    
                    dropItemTitle.innerHTML = `
                        ${brand.title}
                        <i class="icon icon-arrow-d"></i>
                    `;
    
                    let dropItemContent = document.createElement("div");
                    dropItemContent.setAttribute("id", `phone-content-${index}`);
                    dropItemContent.setAttribute("class", "card-collapse__content collapse");
                    dropItemContent.setAttribute("aria-expanded", "false");
    
                    let dropItemContentList = document.createElement("ul");
                    dropItemContentList.setAttribute("class", "list list--header-phones list--border-bottom");
    
                    brand.units.forEach(unit => {
                        dropItemContentList.innerHTML += `
                            <li class="header__card-phone-item">
                                <a 
                                    href="${unit.link}" 
                                    target="_blank"
                                    class="header-mobile__phone-link"
                                >
                                    <strong class="text-mask-phone">
                                        ${unit.phone} |
                                    </strong>
                                    <span style="color: #333">
                                        ${unit.name} 
                                    </span>
                                </a>
                            </li>
                        `;
                    });
    
                    dropItemContent.appendChild(dropItemContentList);
    
                    headerCardPhone.appendChild(dropItemTitle);
                    headerCardPhone.appendChild(dropItemContent);
    
                    headerCardPhone.addEventListener("click", () => {
                        if(childrenDropdownIsOpen){
                            dropItemTitle.classList.add("collapsed");
                            dropItemTitle.setAttribute("aria-expanded", "false");
    
                            dropItemContent.classList.remove("show");
                            dropItemContent.setAttribute("aria-expanded", "false");
    
                            childrenDropdownIsOpen = false;
                        }
                        else{
                            dropItemTitle.classList.remove("collapsed");
                            dropItemTitle.setAttribute("aria-expanded", "true");
    
                            dropItemContent.classList.add("show");
                            dropItemContent.setAttribute("aria-expanded", "true");
    
                            childrenDropdownIsOpen = true;
                        }
                    });
    
                    headerCardPhones.appendChild(headerCardPhone);
                });
    
                currentHeaderPhones.innerHTML = ``;
                currentHeaderPhones.appendChild(buttonServices);
                currentHeaderPhones.appendChild(headerCardPhones);
    
                buttonServices.addEventListener("click", () => {
                    if(parentDropdownIsOpen){
                        currentHeaderPhones.classList.remove("show");
                        buttonServices.setAttribute("aria-expanded", "false");
                        headerCardPhones.classList.remove("show");
    
                        parentDropdownIsOpen = false;
                    }
                    else{
                        currentHeaderPhones.classList.add("show");
                        buttonServices.setAttribute("aria-expanded", "true");
                        headerCardPhones.classList.add("show");
    
                        parentDropdownIsOpen = true;
                    }
                });
            }; 
    
            reGroupPhones(phoneNumbersDesktop, currentHeaderPhonesDesktop, true);
            reGroupPhones(phoneNumbersMobile, currentHeaderPhonesMobile, false);
        });
    }
    
    // 18/05/2022 | Agrupar números de WhatsApp por marcas
    // João Carlos
    function agruparWhatsPorMarca(){
        (() => {
            window.addEventListener("DOMContentLoaded", () => {
                let phoneNumbersDesktop = document.querySelectorAll(".header-desktop #header-card-whatsapp .header__card-phones-items");
                let currentHeaderPhonesDesktop = document.querySelectorAll(".header-desktop .header__phones-container")[1];
        
                let phoneNumbersMobile = document.querySelectorAll(".header-mobile #header-card-whatsapp-mobile .header__card-phones-items");
                let currentHeaderPhonesMobile = document.querySelectorAll(".header-mobile .header-mobile__buttons button.button-icon")[1].parentNode;
        
                const regroupPhones = (phones, currentHeaderPhones, isDesktop) => {
                    let brands = [
                        {
                            title: "Toyota",
                            units: []
                        },
                        {
                            title: "Renault",
                            units: []
                        },
                        {
                            title: "Hyundai",
                            units: []
                        },
                        {
                            title: "Fiat",
                            units: []
                        },
                        {
                            title: "Nissan",
                            units: []
                        }
                    ];
        
                    let parentDropdownIsOpen = false;
                    let childrenDropdownIsOpen = false;
        
                    let buttonWhatsapp = document.createElement("button");
                    let headerCardWhatsapp = document.createElement("div");
        
                    buttonWhatsapp.setAttribute("data-toggle", "dropdown");
                    buttonWhatsapp.setAttribute("aria-expanded", "false");
        
                    if(isDesktop){
                        buttonWhatsapp.setAttribute("class", "btn button button--whatsapp header__phones-button-toggler");
                        buttonWhatsapp.innerHTML = `
                            <i class="icon icon-whatsapp"></i> 
                            WhatsApp
                        `;
                
                        headerCardWhatsapp.setAttribute("id", "header-card-whatsapp");
                        headerCardWhatsapp.setAttribute("class", "card-collapse header__card-whatsapp dropdown-menu dropdown-menu-right");
                    }
                    else{
                        buttonWhatsapp.setAttribute("class", "button-icon button-icon--whatsapp header__phones-button-toggler-mobile");
                        buttonWhatsapp.innerHTML = `
                            <i class="icon icon-whatsapp"></i> 
                        `;
                
                        headerCardWhatsapp.setAttribute("id", "header-card-phones-mobile");
                        headerCardWhatsapp.setAttribute("class", "card-collapse header__card-whatsapp dropdown-menu");
                    }
        
                    phones.forEach((phone) => {
                        let phoneText = String(phone.querySelector(".card-collapse__header").innerText).trim();
                
                        let brand = phoneText.split(" ")[0];
        
                        let headerCardWhatsappItemLinkTextMask = phone.querySelector(".card-collapse__content .header__card-whatsapp-item a .text-mask-phone");
                        let headerCardWhatsappItemLink = phone.querySelector(".card-collapse__content .header__card-whatsapp-item a");
        
                        const getAttributesLink = () => {
                            return {
                                name: phoneText,
                                phone: headerCardWhatsappItemLinkTextMask.innerText,
                                link: headerCardWhatsappItemLink.getAttribute("href"),
                                data_name: headerCardWhatsappItemLink.getAttribute("data-name"),
                                data_number: headerCardWhatsappItemLink.getAttribute("data-number"),
                                data_product: headerCardWhatsappItemLink.getAttribute("data-product"),
                                data_channel: headerCardWhatsappItemLink.getAttribute("data-channel"),
                                data_category: headerCardWhatsappItemLink.getAttribute("data-category"),
                                data_brand: headerCardWhatsappItemLink.getAttribute("data-brand"),
                                data_link: headerCardWhatsappItemLink.getAttribute("data-link"),
                                data_unit: JSON.parse(headerCardWhatsappItemLink.getAttribute("data-phones"))[0].unit,
                                data_phones: headerCardWhatsappItemLink.getAttribute("data-phones"),
                                data_units: headerCardWhatsappItemLink.getAttribute("data-units"),
                                data_show_cpf: headerCardWhatsappItemLink.getAttribute("data-show-cpf"),
                                data_show_units: headerCardWhatsappItemLink.getAttribute("data-show-units"),
                                data_versions: headerCardWhatsappItemLink.getAttribute("data-versions"),
                                data_show_location_fields: headerCardWhatsappItemLink.getAttribute("data-show-location-fields")
                            }
                        }
        
                        switch(brand){
                            case "Toyota":
                                brands[0].units.push(getAttributesLink());
                            break;
        
                            case "Renault":
                                brands[1].units.push(getAttributesLink());
                            break;
        
                            case "Hyundai":
                                brands[2].units.push(getAttributesLink());
                            break;
        
                            case "Fiat":
                                brands[3].units.push(getAttributesLink());
                            break;
        
                            case "Nissan":
                                brands[4].units.push(getAttributesLink());
                            break;
                        }    
        
                        phone.remove();
                    });
        
                    brands.forEach((brand, index) => {
                        let headerCardPhone = document.createElement("div");
                        headerCardPhone.classList.add("header__card-phones-items");
        
                        let dropItemTitle = document.createElement("div");
                        dropItemTitle.setAttribute("data-parent", "#header-card-whatsapp");
                        dropItemTitle.setAttribute("data-toggle", "collapse");
                        dropItemTitle.setAttribute("data-target", `#wpp-content-${index}`);
                        dropItemTitle.setAttribute("class", "card-collapse__header collapsed");
                        dropItemTitle.setAttribute("aria-expanded", "false");
        
                        dropItemTitle.innerHTML = `
                            ${brand.title}
                            <i class="icon icon-arrow-d"></i>
                        `;
        
                        let dropItemContent = document.createElement("div");
                        dropItemContent.setAttribute("id", `wpp-content-${index}`);
                        dropItemContent.setAttribute("class", "card-collapse__content collapse");
                        dropItemContent.setAttribute("aria-expanded", "false");
        
                        let dropItemContentList = document.createElement("ul");
                        dropItemContentList.setAttribute("class", "list list--header-phones list--border-bottom");
        
                        brand.units.forEach(unit => {
                            let headerCardWhatsappItem = document.createElement("li");
                            headerCardWhatsappItem.classList.add("header__card-whatsapp-item");
        
                            let headerCardWhatsappLink = document.createElement("a");
                            headerCardWhatsappLink.setAttribute("target", "_blank");
                            headerCardWhatsappLink.setAttribute("class", "header-mobile__whatsapp-link");
                            headerCardWhatsappLink.setAttribute("href", `${unit.data_link}`);
                            headerCardWhatsappLink.setAttribute("data-name", `${unit.data_name}`);
                            headerCardWhatsappLink.setAttribute("data-number", `${unit.data_number}`);
                            headerCardWhatsappLink.setAttribute("data-product", `${unit.data_product}`);
                            headerCardWhatsappLink.setAttribute("data-channel", `${unit.data_channel}`);
                            headerCardWhatsappLink.setAttribute("data-category", `${unit.data_category}`);
                            headerCardWhatsappLink.setAttribute("data-brand", `${unit.data_brand}`);
                            headerCardWhatsappLink.setAttribute("data-brand", `${unit.data_brand}`);
                            headerCardWhatsappLink.setAttribute("data-link", `${unit.data_link}`);
                            headerCardWhatsappLink.setAttribute("data-unit", `${unit.data_unit}`);
                            headerCardWhatsappLink.setAttribute("data-phones", `${unit.data_phones}`);
                            headerCardWhatsappLink.setAttribute("data-units", `${unit.data_units}`);
                            headerCardWhatsappLink.setAttribute("data-show-cpf", `${unit.data_show_cpf}`);
                            headerCardWhatsappLink.setAttribute("data-show-units", `${unit.data_show_units}`);
                            headerCardWhatsappLink.setAttribute("data-show-units", `${unit.data_show_units}`);
                            headerCardWhatsappLink.setAttribute("data-versions", `${unit.data_versions}`);
                            headerCardWhatsappLink.setAttribute("data-show-location-fields", `${unit.data_show_location_fields}`);
                            headerCardWhatsappLink.innerHTML = `
                                <strong class="text-mask-phone">
                                    ${unit.phone} |
                                </strong>
                                <span style="color: #333">
                                    ${unit.name} 
                            </span>
                            `;
        
                            headerCardWhatsappItem.appendChild(headerCardWhatsappLink);
                            dropItemContentList.appendChild(headerCardWhatsappItem);
                        });
        
                        dropItemContent.appendChild(dropItemContentList);
        
                        headerCardPhone.appendChild(dropItemTitle);
                        headerCardPhone.appendChild(dropItemContent);
        
                        headerCardPhone.addEventListener("click", () => {
                            if(childrenDropdownIsOpen){
                                dropItemTitle.classList.add("collapsed");
                                dropItemTitle.setAttribute("aria-expanded", "false");
        
                                dropItemContent.classList.remove("show");
                                dropItemContent.setAttribute("aria-expanded", "false");
        
                                childrenDropdownIsOpen = false;
                            }
                            else{
                                dropItemTitle.classList.remove("collapsed");
                                dropItemTitle.setAttribute("aria-expanded", "true");
        
                                dropItemContent.classList.add("show");
                                dropItemContent.setAttribute("aria-expanded", "true");
        
                                childrenDropdownIsOpen = true;
                            }
                        });
        
                        headerCardWhatsapp.appendChild(headerCardPhone);
                    });
        
                    currentHeaderPhones.innerHTML = ``;
                    currentHeaderPhones.appendChild(buttonWhatsapp);
                    currentHeaderPhones.appendChild(headerCardWhatsapp);
        
                    buttonWhatsapp.addEventListener("click", () => {
                        if(parentDropdownIsOpen){
                            currentHeaderPhones.classList.remove("show");
                            buttonWhatsapp.setAttribute("aria-expanded", "false");
                            headerCardWhatsapp.classList.remove("show");
        
                            parentDropdownIsOpen = false;
                        }
                        else{
                            currentHeaderPhones.classList.add("show");
                            buttonWhatsapp.setAttribute("aria-expanded", "true");
                            headerCardWhatsapp.classList.add("show");
        
                            parentDropdownIsOpen = true;
                        }
                    });
                }; 
        
                regroupPhones(phoneNumbersDesktop, currentHeaderPhonesDesktop, true);
                regroupPhones(phoneNumbersMobile, currentHeaderPhonesMobile, false);
            });
        })();
    }
    
    // 19/05/2022 | Altera nome "Marca Genérica" para "Dafra e KTM" no select de marcas do formulário do mapa
    // Alisson Santana
    function alteraMarcasFormularioMap(){
        document.addEventListener('readystatechange', event => { 
    
            // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
            if (event.target.readyState === "complete") {
                // function
                const formMap = document.querySelector(".fragment-map-units .map-units__form .form-group:nth-child(2)")
                
                const observer = new MutationObserver(function(){
                    let brandsItens = formMap.querySelectorAll(".form-group:nth-child(2) .choices__list .choices__item")
                    if(brandsItens){
                        brandsItens.forEach(element => {
                            if(element.innerHTML.includes("Marca Genérica")) {
                                changeNames()
                            }
                        });
                    }
                });
            
                // Setando as alteraÃ§Ãµes que o observer deve assistir
                observer.observe(formMap, {
                    attributes: true,
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
        });
    }
    
    function changeNames() {
        const brandsItens = document.querySelectorAll(".map-units__form .form-group:nth-child(2) .choices__list .choices__item")
    
        brandsItens.forEach(element => {
            if(element.innerHTML.includes("Marca GenÃ©rica")) {
                element.innerHTML = element.innerHTML.replace("Marca Genérica", "Dafra e KTM")
            }
        });
    }

    function alterarLinksPoliticaPrivacidade() {
        document.addEventListener('readystatechange', event => { 
    
            // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
            if (event.target.readyState === "complete") {
                // function
                const linkPolicyFormSD = document.querySelector(".form-conversion__footer a")
                const linkPolicyFormPortal = document.querySelector(".form-module .call-modal")
                const linkPolicyFooterSD = document.querySelector(".footer__copyright a")
                const linkPolicyFooterPortal = document.querySelector("#copyright a")
                const page = window.location.href
                const urlBase = "https://www.itavema.com.br/"
                const urlPolicy = "/empresa/politica-de-privacidade"
                const menuItemsSD = document.querySelectorAll(".nav--accordion-mobile .nav-item")
            
                if(linkPolicyFooterPortal ){
                    const newLink = linkPolicyFooterPortal.cloneNode(true)
                    newLink.setAttribute("href", "https://www.itavema.com.br/empresa/politica-de-privacidade")
                    linkPolicyFooterPortal.after(newLink)
                    linkPolicyFooterPortal.remove()
                }
                
                if(linkPolicyFormPortal) {
                    const newLink = linkPolicyFormPortal.cloneNode(true)
                    newLink.setAttribute("href", "https://www.itavema.com.br/empresa/politica-de-privacidade")
                    linkPolicyFormPortal.after(newLink)
                    linkPolicyFormPortal.remove()
                }
            
                if(menuItemsSD) {
                    menuItemsSD.forEach(element => {
                        if(element.innerHTML.includes("Política de Privacidade")) {
                            element.remove()
                        }
                    });
                }
            
                if(linkPolicyFooterSD) {
                    if(page.includes("toyota-inter-japan-rj")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "toyota-inter-japan-rj" + urlPolicy)
                    } else if(page.includes("toyota-inter-japan-sp")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "toyota-inter-japan-sp" + urlPolicy)
                    } else if(page.includes("byd")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "byd" + urlPolicy)
                    } else if(page.includes("nissan-itavema-japan")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "nissan-itavema-japan" + urlPolicy)
                    } else if(page.includes("itva-motos")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "itva-motos" + urlPolicy)
                    } else if(page.includes("renaultfrance")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "renaultfrance" + urlPolicy)
                    } else if(page.includes("fiat")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "fiat" + urlPolicy)
                    } else if(page.includes("hyundai-itavema-motors")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "hyundai-itavema-motors" + urlPolicy)
                    } else if(page.includes("itavema-seminovos")) {
                        linkPolicyFooterSD.setAttribute("href", urlBase + "itavema-seminovos" + urlPolicy)
                    } 
                }
            
                if(linkPolicyFormSD) {
                    if(page.includes("toyota-inter-japan-rj")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "toyota-inter-japan-rj" + urlPolicy)
                    } else if(page.includes("toyota-inter-japan-sp")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "toyota-inter-japan-sp" + urlPolicy)
                    } else if(page.includes("byd")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "byd" + urlPolicy)
                    } else if(page.includes("nissan-itavema-japan")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "nissan-itavema-japan" + urlPolicy)
                    } else if(page.includes("itva-motos")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "itva-motos" + urlPolicy)
                    } else if(page.includes("renaultfrance")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "renaultfrance" + urlPolicy)
                    } else if(page.includes("fiat")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "fiat" + urlPolicy)
                    } else if(page.includes("hyundai-itavema-motors")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "hyundai-itavema-motors" + urlPolicy)
                    } else if(page.includes("itavema-seminovos")) {
                        linkPolicyFormSD.setAttribute("href", urlBase + "itavema-seminovos" + urlPolicy)
                    } 
                }
            }
        });
    }
    
    // Chamada das funções
    adicionaRedesSociaisHeader()
    agrupaTelefonesPorMarcas()
    agruparWhatsPorMarca()
    alteraMarcasFormularioMap()
    alterarLinksPoliticaPrivacidade()
})()