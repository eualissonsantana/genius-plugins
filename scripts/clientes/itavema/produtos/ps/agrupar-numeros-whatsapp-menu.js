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
                    headerCardWhatsappLink.setAttribute("href", `${unit.link}`);
                    headerCardWhatsappLink.setAttribute("class", "header-mobile__whatsapp-link");
                    headerCardWhatsappLink.setAttribute("target", "_blank");
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

                    headerCardWhatsappLink.addEventListener("click", (event) => {
                        event.preventDefault();

                        const target = event.target.closest(".header-mobile__whatsapp-link");

                        const data = {
                            name: target.getAttribute("data-name"),
                            number: target.getAttribute("data-number"),
                            product: target.getAttribute("data-product"),
                            channel: target.getAttribute("data-channel"),
                            category: target.getAttribute("data-category"),
                            brand: target.getAttribute("data-brand"),
                            link: target.getAttribute("data-link"),
                            unit: target.getAttribute("data-unit"),
                            phones: target.getAttribute("data-phones"),
                            units: target.getAttribute("data-units"),
                            show_cpf: target.getAttribute("data-show-cpf"),
                            show_units: target.getAttribute("data-show-units"),
                            versions: target.getAttribute("data-versions"),
                            show_location_fields: target.getAttribute("data-show-location-fields")
                        };

                        const { toBool } = window.helpers;

                        var element = document.querySelector('.header-conversion-form-whatsapp-modal');
                        element.innerHTML = '';

                        render(
                            h(window.WhatsAppFormModal, {
                                modalId: 'header-conversion-form-whatsapp-modal',
                                open: true,
                                unit: data.unit,
                                units: data.units ? JSON.parse(data.units) : [],
                                product: data.product,
                                channel: data.channel,
                                category: data.category,
                                brand: data.brand,
                                link: data.link,
                                whatsAppResponder: data.whatsAppResponder,
                                showUnits: JSON.parse(data.show_units),
                                showCpf: !!JSON.parse(data.show_cpf),
                                phones: JSON.parse(data.phones),
                                versions: JSON.parse(data.versions),
                                showLocationFields: toBool(data.show_location_fields)
                            }),
                            element
                        );
                    });
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