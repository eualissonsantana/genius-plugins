(() => {
    const headerCta = document.querySelector(".header .header__topbar .header__topbar-container .header__cta");

    if(headerCta){
        const screenIsDesktop = window.matchMedia('(min-width: 768px)').matches;

        const dropdownWhatsappWrapper = document.createElement("div");
        dropdownWhatsappWrapper.classList.add("dropdown", "btn-whatsapp");
    
        const buttonWhatsapp = document.createElement("button");
        buttonWhatsapp.setAttribute("class", "btn header__cta");
        buttonWhatsapp.setAttribute("type", "button");
        buttonWhatsapp.setAttribute("id", "dropdownWhatsappButton");
        buttonWhatsapp.setAttribute("data-toggle", "dropdown");
        buttonWhatsapp.setAttribute("aria-haspopup", "true");
        buttonWhatsapp.setAttribute("aria-expanded", "false");
        buttonWhatsapp.innerHTML = `
            <i class="icon icon-whatsapp"></i>
            ${screenIsDesktop ? 'Whatsapp' : ''}
        `;
        buttonWhatsapp.style = `
            display: flex;
            align-items: center;
            gap: .6rem;
            margin-right: .6rem;
        `;
    
        const dropdownWhatsapp = document.createElement("div");
        dropdownWhatsapp.setAttribute("class", "shadow-sm dropdown-menu drop-whatsapp");
        dropdownWhatsapp.setAttribute("id", "whatsapp-itens");
        dropdownWhatsapp.setAttribute("aria-labelledby", "dropdownWhatsappButton");
        dropdownWhatsapp.setAttribute("x-placement", "bottom-start");
        dropdownWhatsapp.setAttribute("style", "position: absolute; top: 0px; left: 0px; transform: translate3d(0px, 42px, 0px);");
        dropdownWhatsapp.innerHTML = `
            <span>
                <a class="dropdown-item" href="https://api.whatsapp.com/send?phone=551733541301" target="_blank">
                    <i class="icon icon-whatsapp"></i>
                    <span class="titulo">Atendimento</span>
                    <strong class="text-nowrap text-mask-phone">(17) 3354-1301</strong>
                </a>
            </span>
        `;

        buttonWhatsapp.addEventListener("click", () => {
            dropdownWhatsappWrapper.classList.toggle("show");
            dropdownWhatsapp.classList.toggle("show");
        });
    
        dropdownWhatsappWrapper.appendChild(buttonWhatsapp);
        dropdownWhatsappWrapper.appendChild(dropdownWhatsapp);

        headerCta.before(dropdownWhatsappWrapper);
    }
})();