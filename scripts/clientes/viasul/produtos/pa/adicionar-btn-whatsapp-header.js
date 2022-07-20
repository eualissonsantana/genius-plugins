(() => {
    const headerCta = document.querySelector(".header .header__topbar .header__topbar-container .header__cta");

    if(headerCta){
        const addStyle = (styles) => {
            const css = styles,
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');
            head.appendChild(style);
            style.setAttribute('type', 'text/css');
            if (style.styleSheet) {
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
        }

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
                <a class="dropdown-item" href="https://api.whatsapp.com/send?phone=5571984302642&text=Quero%20saber%20mais%20sobre%20a%20Flua!" target="_blank">
                    <i class="icon icon-whatsapp"></i>
                    <span class="titulo">Jeep Rio Vermelho</span>
                    <strong class="text-nowrap text-mask-phone">(71) 98430-2642</strong>
                </a>
                <a class="dropdown-item" href="https://api.whatsapp.com/send?phone=5571981553212&text=Quero%20saber%20mais%20sobre%20a%20Flua!" target="_blank">
                    <i class="icon icon-whatsapp"></i>
                    <span class="titulo">Jeep ACM</span>
                    <strong class="text-nowrap text-mask-phone">(71) 98155-3212</strong>
                </a>
                <a class="dropdown-item" href="https://api.whatsapp.com/send?phone=5581991461062&text=Quero%20saber%20mais%20sobre%20a%20Flua!" target="_blank">
                    <i class="icon icon-whatsapp"></i>
                    <span class="titulo">Jeep Piedade</span>
                    <strong class="text-nowrap text-mask-phone">(81) 99146-1062</strong>
                </a>
                <a class="dropdown-item" href="https://api.whatsapp.com/send?phone=5581991148728&text=Quero%20saber%20mais%20sobre%20a%20Flua!" target="_blank">
                    <i class="icon icon-whatsapp"></i>
                    <span class="titulo">Jeep Imbiribeira</span>
                    <strong class="text-nowrap text-mask-phone">(81) 99114-8728</strong>
                </a>
                <a class="dropdown-item" href="https://api.whatsapp.com/send?phone=5585992125194&text=Quero%20saber%20mais%20sobre%20a%20Flua!" target="_blank">
                    <i class="icon icon-whatsapp"></i>
                    <span class="titulo">Jeep Dunas</span>
                    <strong class="text-nowrap text-mask-phone">(85) 99212-5194</strong>
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

        addStyle(`

        `);
    }

})();