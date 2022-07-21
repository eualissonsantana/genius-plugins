(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const showcaseTitle = document.querySelector(".showcase .showcase__title");

        if(showcaseTitle){
            showcaseTitle.setAttribute("style", "color: #6D6E71 !important");
        }
    });

    const brandRenaultDesktop = document.querySelector(".header-desktop .header__link-logo-right");
    const brandRenaultMobile = document.querySelector(".header-mobile .header-mobile__link-logo-right");

    const headerBrandDesktop = document.querySelector(".header-desktop .header__logo");
    const headerBrandMobile = document.querySelector(".header-mobile .header__logo");

    const footerLineSeparator = document.querySelector(".footer-land .footer-land__separator");

    const changePositionBrand = (wrapper, headerBrand, callback) => {
        const brand = wrapper.querySelector("img");

        brand.src = `https://legado.autoforce.com.br/plugins/images/clientes/afpartners/produtos/lp/logo-renault.svg`;

        if(brand){
            const olxBrandDivider = document.createElement("div");
            olxBrandDivider.classList.add("olx-brand-divider");
            
            const wrapperBrandHeader = document.createElement("div");
            wrapperBrandHeader.classList.add("wrapper-brand-header");
            wrapperBrandHeader.appendChild(olxBrandDivider);
            wrapperBrandHeader.appendChild(brand);
            
            headerBrand.parentNode.after(wrapperBrandHeader);

            callback(wrapperBrandHeader.cloneNode(true));
        }
    };

    const removeCurrentFooterSection = () => {
        document.querySelector(".footer-land .footer-land__logo").remove();
        document.querySelector(".footer-land .footer-land__units--desktop").remove();
        document.querySelector(".footer-land .footer-land__units--mobile").remove();
        document.querySelector(".footer-land .footer-land__social-networks").remove();
        document.querySelector(".footer-land .footer-land__signature").remove();
    };

    const addNewContentFooter = (baseElement, wrapperBrand) => {
        const footerBrand = document.createElement("div");
        footerBrand.classList.add("olx-footer-brand");
        footerBrand.innerHTML = `
            <img 
                class="footer__logo img-fluid" 
                src="https://production.autoforce.com/uploads/landing_page/logo/1988/logo_comprar-olx-renault_77d9150c3e.png" 
                alt="logo"
            />
        `;
        footerBrand.appendChild(wrapperBrand);

        const footerLinks = document.createElement("div");
        footerLinks.classList.add("olx-footer-links");
        footerLinks.innerHTML = `
            <div class="links">
                <a href="https://ajuda.olx.com.br/s" target="_blank" rel="noopener">Ajuda e contato</a>
                <a href="https://www.olx.com.br/seguranca?_ga=2.14119799.1196775724.1658431110-1445316702.1658431110" target="_blank" rel="noopener">Dicas de segurança</a>
                <a href="https://vender.olx.com.br/" target="_blank" rel="noopener">Vender na OLX</a>
                <a href="https://planoprofissional.olx.com.br/?_ga=2.14119799.1196775724.1658431110-1445316702.1658431110" target="_blank" rel="noopener">Plano Profissional</a>
            </div>
            <div class="social-media">
                <a href="https://www.facebook.com/olxbrasil" target="_blank" rel="noopener">
                    <img 
                        src="https://legado.autoforce.com.br/plugins/images/clientes/afpartners/produtos/lp/facebook.svg" 
                        alt="Logo facebook"
                    />
                </a>
                <a href="https://www.youtube.com/user/OLXBrasil" target="_blank" rel="noopener">
                    <img 
                        src="https://legado.autoforce.com.br/plugins/images/clientes/afpartners/produtos/lp/youtube.svg" 
                        alt="Logo youtube"
                    />
                </a>
                <a href="https://www.linkedin.com/company/olx-brasil?original_referer=https%3A%2F%2Fsp.olx.com.br%2F" target="_blank" rel="noopener">
                    <img 
                        src="https://legado.autoforce.com.br/plugins/images/clientes/afpartners/produtos/lp/linkedin.svg" 
                        alt="Logo linkedin"
                    />
                </a>
                <a href="https://www.instagram.com/olxbrasil/" target="_blank" rel="noopener">
                    <img 
                        src="https://legado.autoforce.com.br/plugins/images/clientes/afpartners/produtos/lp/instagram.svg" 
                        alt="Logo instagram"
                    />
                </a>
                <a href="https://twitter.com/olx_Brasil" target="_blank" rel="noopener">
                    <img 
                        src="https://legado.autoforce.com.br/plugins/images/clientes/afpartners/produtos/lp/twitter.svg" 
                        alt="Logo twitter"
                    />
                </a>
            </div>
        `;

        const footerCnpj = document.createElement("div");
        footerCnpj.classList.add("olx-footer-cnpj");
        footerCnpj.innerHTML = `
            <p class="about-olx">
                Sobre a OLX, Termos de uso, Política de privacidade e Proteção à Propriedade Intelectual
            </p>
            <p>
                © Bom Negócio Atividades de Internet Ltda. Rua do Catete, 359, Flamengo - 22220-001 - Rio de Janeiro, RJ
            </p>
        `;

        const footerCopyright = document.createElement("div");
        footerCopyright.classList.add("olx-footer-copyright");
        footerCopyright.innerHTML = `
            <div class="footer-land-copyright">
                <p> 
                    © Copyright 2022 
                    <span class="d-none d-md-inline">-</span>
                    <br class="d-block d-md-none"> AutoForce - Todos os direitos reservados.<br>
                    <span class="d-none d-md-inline">Confira a nossa </span>
                    <a href="/olx-renault/politica-de-privacidade">Política de privacidade</a>. 
                </p>
            </div>
            
            <div class="footer-land-copyright-img">
                <img 
                    src="https://legado.autoforce.com.br/plugins/images/clientes/afpartners/produtos/lp/logo-af.webp" 
                    width="70" 
                    alt="logo AutoForce" 
                />
            </div>
        `;

        baseElement.before(footerBrand);
        footerBrand.after(footerLinks);
        footerLinks.after(footerCnpj);
        baseElement.after(footerCopyright);

        baseElement.classList.remove("d-none");
    };

    removeCurrentFooterSection();

    if(window.matchMedia('(min-width: 768px)').matches){
        changePositionBrand(brandRenaultDesktop, headerBrandDesktop, (wrapperBrand) => {
            addNewContentFooter(footerLineSeparator, wrapperBrand);
        });
    }
    else if(window.matchMedia('(max-width: 768px)').matches){
        changePositionBrand(brandRenaultMobile, headerBrandMobile, (wrapperBrand) => {
            addNewContentFooter(footerLineSeparator, wrapperBrand);
        });
    }
})();