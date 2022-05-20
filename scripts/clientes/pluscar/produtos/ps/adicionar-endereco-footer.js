(() => {
    const footerSeparator = document.querySelector("footer.footer .footer__separator");
    const footerSocialNetworksMobile = document.querySelector("footer.footer .footer__social-networks");

    if(footerSeparator && footerSocialNetworksMobile){
        let units = [
            {
                nome: "Pluscar Vilarinho",
                endereco: "Av. Vilarinho",
                numero_endereco: "1399",
                bairro: "São Pedro (Venda Nova)",
                cidade: "Belo Horizonte",
                link_mapa: "https://goo.gl/maps/RenTGgzRWrYvFpwf7",
                telefones: [
                    {
                        nome: "Contato",
                        telefone: "(31) 3451-6300"
                    },
                    {
                        nome: "WhatsApp do consultor de vendas",
                        telefone: "(31) 99533-6300"
                    }
                ],
                horarios_funcionamento: [
                    {
                        dia: "Segunda a Sexta ",
                        horario: "8:00 às 18:00"
                    },
                    {
                        dia: "Sábado",
                        horario: "08:00 às 14:00"
                    }
                ]
            }
        ];

        if(window.matchMedia("(min-width: 768px)").matches){
            let container = document.createElement("div");
            container.classList.add("container");

            let footerUnits = document.createElement("div");
            footerUnits.classList.add("footer-units");

            // Sidebar
            let footerUnitsSidebar = document.createElement("aside");
            footerUnitsSidebar.classList.add("footer-units__sidebar");
            footerUnitsSidebar.innerHTML += `
                <header class="footer-units__header"> 
                    Confira endereços, telefones e horários, selecionando a unidade abaixo:
                </header>
            `;

            let footerUnitsNav = document.createElement("ul");
            footerUnitsNav.classList.add("footer-units__nav", "nav-vertical");

            units.forEach((unit, index) => {
                let navVerticalItem = document.createElement("li");
                let isActive = "";

                if(index == 0){
                    isActive = "active";
                }
                else{
                    isActive = "";
                }

                navVerticalItem.innerHTML = `
                    <a class="nav-vertical__link ${isActive}" href="${index}">
                        <i class="icon nav-vertical__icon icon-arrow-r"></i> 
                        ${unit.nome}
                    </a>
                `;

                navVerticalItem.addEventListener("click", (event) => {
                    event.preventDefault();

                    let footerUnitsNavItems = footerUnitsNav.querySelectorAll("li a");

                    if(footerUnitsNavItems.length > 0){
                        footerUnitsNavItems.forEach(footerUnitsNavItem => {
                            footerUnitsNavItem.classList.remove("active")
                        });

                        event.target.closest("a").classList.toggle("active");
                    }

                    let idItemActive = event.target.closest("a").getAttribute("href");

                    let footerUnitsContentRow = document.querySelectorAll(".footer-units__contents .footer-units__content-row");
                    
                    if(footerUnitsContentRow.length > 0){
                        footerUnitsContentRow.forEach(footerUnitsContentRowItem => {
                            footerUnitsContentRowItem.classList.remove("active");
                        });

                        document.querySelector(`.footer-units__contents .footer-units__content-row[data-index='${idItemActive}']`).classList.add("active");
                    }
                });

                footerUnitsNav.appendChild(navVerticalItem);
            });

            footerUnitsSidebar.appendChild(footerUnitsNav);

            // Conteúdo
            let footerUnitsContents = document.createElement("aside");
            footerUnitsContents.classList.add("footer-units__contents");

            units.forEach((unit, index) => {
                let isActive = "";

                if(index == 0){
                    isActive = "active";
                }
                else{
                    isActive = "";
                }

                let footerUnitsContentRow = document.createElement("div");
                footerUnitsContentRow.classList.add("row", "footer-units__content-row");

                if(isActive != ""){
                    footerUnitsContentRow.classList.add(`${isActive}`);
                }

                footerUnitsContentRow.setAttribute("data-index", `${index}`);

                let firstFooterUnitsContentsBlock = document.createElement("div");
                firstFooterUnitsContentsBlock.classList.add("col-sm-6", "footer-units__contents-block");
                firstFooterUnitsContentsBlock.innerHTML = `
                    <h2 class="footer-units__title">
                        <i class="icon icon-map"></i> 
                        Endereço: 
                    </h2>
                    <address>
                        <p>${unit.endereco}, ${unit.numero_endereco} - ${unit.bairro} - ${unit.cidade}</p>
                    </address>
                    <a 
                        rel="nofollow"
                        href="${unit.link_mapa}"
                        target="map"
                        class="btn button button--line button--font-small button--no-upper button--icon-right button--map"
                    >
                        Abrir mapa 
                        <i class="pl-1 fa fa-external-link"></i>
                    </a>

                    <div class="footer-units__separator"></div>

                    <h2 class="footer-units__title">
                        <i class="icon icon-phone"></i> Telefones: 
                    </h2>
                `;

                let listPhones = document.createElement("ul");
                listPhones.classList.add("list", "list--no-style");

                unit.telefones.forEach(telefone => {
                    listPhones.innerHTML += `
                        <li><strong>${telefone.nome}: </strong><span class="text-mask-phone">${telefone.telefone}</span></li>
                    `;
                });

                firstFooterUnitsContentsBlock.appendChild(listPhones);

                footerUnitsContentRow.appendChild(firstFooterUnitsContentsBlock);

                let secondFooterUnitsContentsBlock = document.createElement("div");
                secondFooterUnitsContentsBlock.classList.add("col-sm-6", "footer-units__contents-block");
                secondFooterUnitsContentsBlock.innerHTML = `
                    <h2 class="footer-units__title"><i class="icon icon-clock"></i> Horários de Funcionamento: </h2>
                `;

                let listOpeningHours = document.createElement("ul");
                listOpeningHours.classList.add("list", "list--no-style");

                unit.horarios_funcionamento.forEach(horario_funcionamento => {
                    listOpeningHours.innerHTML += `
                        <li><strong>${horario_funcionamento.dia}: </strong> ${horario_funcionamento.horario}</li>
                    `;
                });

                secondFooterUnitsContentsBlock.appendChild(listOpeningHours);
                footerUnitsContentRow.appendChild(secondFooterUnitsContentsBlock);

                footerUnitsContents.appendChild(footerUnitsContentRow);
            });

            footerUnits.appendChild(footerUnitsSidebar);
            footerUnits.appendChild(footerUnitsContents);

            container.appendChild(footerUnits);
            footerSeparator.before(container);
        }
        else{
            let footerUnits = document.createElement("div");
            footerUnits.classList.add("footer-units");

            let footerUnitsList = document.createElement("div");
            footerUnitsList.classList.add("footer-units__unit-list", "footer-units__unit-list--dark");
            footerUnitsList.innerHTML = `
                <header class="footer-units__header"> 
                    Confira endereços, telefones e horários, selecionando a unidade abaixo:
                </header>
            `;

            let footerUnitsMobile = document.createElement("div");
            footerUnitsMobile.setAttribute("id", "footer-units-mobile");
            footerUnitsMobile.classList.add("footer-units__nav", "nav-vertical");

            units.forEach((unit, index) => {
                let navVerticalItem = document.createElement("div");
                navVerticalItem.classList.add("nav-vertical__item");

                let navVerticalLink = document.createElement("a");
                navVerticalLink.setAttribute("href", `#unit-info-content-${index}`);
                navVerticalLink.setAttribute("data-toggle", "collapse");
                navVerticalLink.setAttribute("data-parent", "#footer-units-mobile");
                navVerticalLink.setAttribute("class", "nav-vertical__link collapsed");
                navVerticalLink.setAttribute("aria-expanded", "false");
                navVerticalLink.setAttribute("style", "color: #fff !important;");
                navVerticalLink.innerHTML = `
                    <i class="icon nav-vertical__icon icon-arrow-d"></i> 
                    ${unit.nome}
                `;

                navVerticalItem.appendChild(navVerticalLink);

                let unitInfoContent = document.createElement("div"); 
                unitInfoContent.setAttribute("id", `unit-info-content-${index}`);
                unitInfoContent.classList.add("nav-vertical__item-content", "container", "collapse");
                unitInfoContent.setAttribute("aria-expanded", "false");
                unitInfoContent.setAttribute("style", "");

                let footerUnitsContentRow = document.createElement("div");
                footerUnitsContentRow.classList.add("row", "footer-units__content-row", "d-block");

                let firstFooterUnitsContentsBlock = document.createElement("div");
                firstFooterUnitsContentsBlock.classList.add("footer-units__contents-block");
                firstFooterUnitsContentsBlock.innerHTML = `
                    <h2 class="footer-units__title">
                        <i class="icon icon-map"></i> 
                        Endereço: 
                    </h2>
                    <address>
                        <p>${unit.endereco}, ${unit.numero_endereco} - ${unit.bairro} - ${unit.cidade}</p>
                    </address>
                    <a 
                        rel="nofollow"
                        href="${unit.link_mapa}"
                        target="map"
                        class="btn button button--line button--font-small button--no-upper button--icon-right button--map"
                    >
                        Abrir mapa 
                        <i class="icon icon-link"></i>
                    </a>

                    <div class="footer-units__separator"></div>

                    <h2 class="footer-units__title">
                        <i class="icon icon-phone"></i> Telefones: 
                    </h2>
                `;

                let listPhones = document.createElement("ul");
                listPhones.classList.add("list", "list--no-style");

                unit.telefones.forEach(telefone => {
                    listPhones.innerHTML += `
                        <li><strong>${telefone.nome}: </strong><span class="text-mask-phone">${telefone.telefone}</span></li>
                    `;
                });

                firstFooterUnitsContentsBlock.appendChild(listPhones);
                footerUnitsContentRow.appendChild(firstFooterUnitsContentsBlock);

                let secondFooterUnitsContentsBlock = document.createElement("div");
                secondFooterUnitsContentsBlock.classList.add("footer-units__contents-block");
                secondFooterUnitsContentsBlock.innerHTML = `
                    <h2 class="footer-units__title"><i class="icon icon-clock"></i> Horários de Funcionamento: </h2>
                `;

                let listOpeningHours = document.createElement("ul");
                listOpeningHours.classList.add("list", "list--no-style");

                unit.horarios_funcionamento.forEach(horario_funcionamento => {
                    listOpeningHours.innerHTML += `
                        <li><strong>${horario_funcionamento.dia}: </strong> ${horario_funcionamento.horario}</li>
                    `;
                });

                secondFooterUnitsContentsBlock.appendChild(listOpeningHours);
                footerUnitsContentRow.appendChild(secondFooterUnitsContentsBlock);

                unitInfoContent.appendChild(footerUnitsContentRow);
                navVerticalItem.appendChild(unitInfoContent);

                footerUnitsMobile.appendChild(navVerticalItem);
                
                let dropdownIsOpen = false;

                navVerticalLink.addEventListener("click", (event) => {
                    event.preventDefault();

                    if(dropdownIsOpen){
                        event.target.closest(".nav-vertical__link").classList.add("collapsed");
                        event.target.closest(".nav-vertical__link").parentNode.querySelector(".nav-vertical__item-content").classList.add("collapse");

                        dropdownIsOpen = false;
                    }
                    else{
                        event.target.closest(".nav-vertical__link").classList.remove("collapsed");
                        event.target.closest(".nav-vertical__link").parentNode.querySelector(".nav-vertical__item-content").classList.remove("collapse");

                        dropdownIsOpen = true;
                    }
                })
            });

            footerUnitsList.appendChild(footerUnitsMobile);
            footerUnits.appendChild(footerUnitsList);
            footerSocialNetworksMobile.before(footerUnits);
        }
    }
})();