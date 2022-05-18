(() => {
    window.addEventListener("DOMContentLoaded", () => {
        let currentBtnServices = document.querySelector(".header__phones-container.new-whats");

        if(currentBtnServices){
            let servicesPhones = [
                {
                    title: "Hyundai Caminho Limeira",
                    description: "Unidade Limeira:",
                    phone: "+55 (19) 3404-3258",
                    data_name: "Central Serviços Limeira",
                    data_number: "+55 (19) 3404-3258",
                    data_link: "https://api.whatsapp.com/send?phone=551934043258",
                    data_phones: "[{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=551934043258&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;Clone&quot;}]"
                },
                {
                    title: "Hyundai Caminho Piracicaba",
                    description: "Unidade Piracicaba:",
                    phone: "+55 (19) 3429-3522",
                    data_name: "Central Serviços Piracicaba",
                    data_number: "+55 (19) 3429-3522",
                    data_link: "https://api.whatsapp.com/send?phone=551934293522",
                    data_phones: "[{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=551934293522&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;Clone&quot;}]"
                },
                {
                    title: "Hyundai Caminho Catanduva",
                    description: "Unidade Catanduva:",
                    phone: "+55 (17) 3629-1522",
                    data_name: "Central Serviços Catanduva",
                    data_number: "+55 (17) 3629-1522",
                    data_link: "https://api.whatsapp.com/send?phone=551736291522",
                    data_phones: "[{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=551736291522&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;Clone&quot;}]"
                }
            ];

            let parentDropdownIsOpen = false;
            let childrenDropdownIsOpen = false;

            let whatsappBtnMobile = document.querySelectorAll(".header-mobile .header-mobile__buttons button.button-icon")[1].parentNode;

            const createNewBtnServices = (isDesktop) => {
                let headerServicesWrapper = document.createElement("div");

                let buttonServices = document.createElement("button");
                buttonServices.setAttribute("data-toggle", "dropdown");
                buttonServices.setAttribute("aria-expanded", "false");

                let headerCardServices = document.createElement("div");
                
                if(isDesktop){
                    headerServicesWrapper.classList.add("header__phones-container", "new-whats");

                    buttonServices.setAttribute("class", "btn button button--whatsapp header__phones-button-toggler");

                    buttonServices.innerHTML = `
                        <i class="icon icon-whatsapp"></i> 
                        Serviços 
                    `;

                    headerCardServices.setAttribute("class", "card-collapse header__card-whatsapp dropdown-menu dropdown-menu-right");
                }
                else{
                    buttonServices.setAttribute("class", "button-icon button-icon--whatsapp header__phones-button-toggler-mobile");

                    buttonServices.innerHTML = `
                        <i class="icon icon-whatsapp"></i> 
                    `;

                    headerCardServices.setAttribute("class", "card-collapse header__card-whatsapp dropdown-menu");
                }

                servicesPhones.forEach((servicesPhone, index) => {
                    let headerCardService = document.createElement("div");
                    headerCardService.classList.add("header__card-phones-items");

                    let dropItemTitle = document.createElement("div");
                    dropItemTitle.setAttribute("data-parent", "#header-card-services");
                    dropItemTitle.setAttribute("data-toggle", "collapse");
                    dropItemTitle.setAttribute("data-target", `#wpp-content-${index}`);
                    dropItemTitle.setAttribute("class", "card-collapse__header collapsed");
                    dropItemTitle.setAttribute("aria-expanded", "false");

                    dropItemTitle.innerHTML = `
                        ${servicesPhone.title}
                        <i class="icon icon-arrow-d"></i>
                    `;

                    let dropItemContent = document.createElement("div");
                    dropItemContent.setAttribute("id", `wpp-content-${index}`);
                    dropItemContent.setAttribute("class", "card-collapse__content collapse");
                    dropItemContent.setAttribute("aria-expanded", "false");

                    dropItemContent.innerHTML = `
                        <ul class="list list--header-phones list--border-bottom">
                            <li class="header__card-whatsapp-item">
                                <a 
                                    href="${servicesPhone.data_link}" 
                                    target="_blank"
                                    class="header-mobile__whatsapp-link"
                                    data-name="${servicesPhone.data_name}" 
                                    data-number="${servicesPhone.data_number}"
                                    data-product="Menu de Whatsapp" 
                                    data-channel="Site" 
                                    data-category="Clone"
                                    data-brand="Hyundai" 
                                    data-link="${servicesPhone.data_link}"
                                    data-phones="${servicesPhone.data_phones}"
                                    data-units="" 
                                    data-show-cpf="0" 
                                    data-show-units="false" 
                                    data-versions="[]"
                                    data-show-location-fields="false"
                                >
                                    <strong style="color: #333">${servicesPhone.description} </strong>
                                    <span class="header-mobile__whatsapp-number text-mask-phone">
                                        ${servicesPhone.phone}
                                    </span>
                                </a>
                                <i class="icon icon-whatsapp"></i>
                            </li>
                        </ul>
                    `;

                    headerCardService.appendChild(dropItemTitle);
                    headerCardService.appendChild(dropItemContent);

                    headerCardService.addEventListener("click", function(event){
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

                    headerCardServices.appendChild(headerCardService);
                });

                buttonServices.addEventListener("click", function(event){
                    if(parentDropdownIsOpen){
                        this.setAttribute("aria-hidden", "false");
                        headerServicesWrapper.classList.remove("show");
                        headerCardServices.classList.remove("show");

                        parentDropdownIsOpen = false;
                    }
                    else{
                        this.setAttribute("aria-hidden", "true");
                        headerServicesWrapper.classList.add("show");
                        headerCardServices.classList.add("show");

                        parentDropdownIsOpen = true;
                    }
                });

                headerServicesWrapper.appendChild(buttonServices);
                headerServicesWrapper.appendChild(headerCardServices);

                return headerServicesWrapper;
            };

            currentBtnServices.after(createNewBtnServices(true));
            whatsappBtnMobile.after(createNewBtnServices(false));
            currentBtnServices.remove();
        }
    });
})();