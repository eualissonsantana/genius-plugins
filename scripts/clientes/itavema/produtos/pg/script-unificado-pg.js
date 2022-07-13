(() => {
    //Direciona para o conteúdo após carregamento página "BYD Cars"
    //Alisson Santana
    function conteudoByd() {
        console.log("Entrou no primeiro")
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
            html{
                scroll-behavior: smooth;
            }
        `
        const bydcarsPage = window.location.href.includes("/empresa/bydcars-rj")
    
        if(bydcarsPage) {
            addStyle(styles)
            window.location.href = "#content";
        }
    }
    
    // 12/05/2022 | Adiciona ícone de redes sociais no header 
    // Alisson Santana
    function addIconesRedesSociais() {
        console.log("Entrou no Segundo")
    
        let phoneButton = document.querySelector(".nav-wrapper-dinamic .wrapper-right #phones-main");
        let socialMidiaWrapper = document.createElement("div");
        socialMidiaWrapper.setAttribute("id", "social-midia-wrapper-header");
    
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
    
        let socialMidias = [
            {
                title: "Facebook",
                link: "",
                icon: "<i class='fa fa-facebook'></i>"
            },
            {
                title: "Instagram",
                link: "",
                icon: "<i class='fa fa-instagram'></i>"
            },
            {
                title: "Youtube",
                link: "",
                icon: "<i class='fa fa-youtube'></i>"
            }
        ];
    
        const links = document.querySelectorAll("#footer .social-midia a")
        for (let i = 0; i < links.length; i++) {
            socialMidias[i].link = links[i].getAttribute("href")
        }
    
        socialMidias.forEach(socialMidia => {
            let socialMidiaButton = document.createElement("a");
            socialMidiaButton.setAttribute("class", "social-midia-button-header");
            socialMidiaButton.href = socialMidia.link;
            socialMidiaButton.target = "_blank";
            socialMidiaButton.innerHTML = socialMidia.icon;
    
            socialMidiaWrapper.appendChild(socialMidiaButton);
        });
    
        addStyle(`
            #social-midia-wrapper-header{
                display: flex;
                align-items: center;
                justify-content: center;
    
                margin: 0 0 0 1rem;
            }
    
            #social-midia-wrapper-header .social-midia-button-header{
                display: flex;
                align-items: center;
                justify-content: center;
                
                height: 3rem;
                width: 3rem;
                border-radius: 50%;
    
                border: 0.2rem solid #fff;
                color: #fff;
                font-size: 1.2rem;
                text-decoration: none;
    
                margin: 0 0.3rem;
    
                transition: all 0.2s ease-out;
            }
    
            #social-midia-wrapper-header .social-midia-button-header i{
                color: #fff;
            }
    
            #social-midia-wrapper-header .social-midia-button-header:hover{
                background: #fff;
                color: #000;
            }
            
            #social-midia-wrapper-header .social-midia-button-header:hover i{
                background: transparent !important;
                color: currentColor;
            }
    
            .nav-wrapper-dinamic .wrapper-right{
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
    
            @media (max-width: 768px){
                #social-midia-wrapper-header{
                    display: none;
                }
            }
        `);
    
        phoneButton.after(socialMidiaWrapper);
    };
    
    // Ajusta logos de marcas no cabeçalho do site
    // 16/05/2022 - Inserido por: João Carlos
    function ajustaLogosTopo() {
        window.addEventListener("DOMContentLoaded", () => {
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
    
            const reorder = (before, after) => {
                after.parentNode.insertBefore(before, after);
            }
    
            const insertAfter = (newNode, existingNode) => {
                existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
            }
    
            let newCarouselItems = [
                {
                    name: "DAFRA",
                    target: "dafra",
                    alt: "Dafra",
                    data_background_image: "https://legado.autoforce.com.br/assets/images/itavema/dafra.png",
                    href: "/itva-motos",
                    image: "https://legado.autoforce.com.br/assets/images/itavema/dafra.png"
                },
                {
                    name: "KTM",
                    target: "ktm",
                    alt: "KTM",
                    data_background_image: "https://legado.autoforce.com.br/assets/images/itavema/ktm.png",
                    href: "/itva-motos",
                    image: "https://legado.autoforce.com.br/assets/images/itavema/ktm.png"
                },
                {
                    name: "VOLVO",
                    target: "volvo",
                    alt: "Volvo",
                    data_background_image: "https://legado.autoforce.com.br/assets/images/itavema/volvo.png",
                    href: "http://intercarvocal.com.br",
                    image: "https://legado.autoforce.com.br/assets/images/itavema/volvo.png"
                },
                {
                    name: "BYD",
                    target: "byd",
                    alt: "BYD",
                    data_background_image: "https://legado.autoforce.com.br/assets/images/itavema/byd.png",
                    href: "https://itavema.com.br/byd",
                    image: "https://legado.autoforce.com.br/assets/images/itavema/byd.png"
                }
            ];
    
            let showcaseSlideWrapper;
    
            if(document.querySelector(".showcase-slides .brands .owl-carousel")){
                showcaseSlideWrapper = "showcase-slides";
            }
            else{
                showcaseSlideWrapper = "showcase-grid";
            }
    
            let carousel = document.querySelector(`.${showcaseSlideWrapper} .brands .owl-carousel`);
    
            let brandsCarousel = document.querySelectorAll(`.${showcaseSlideWrapper} .brands .owl-carousel .item`);
    
            if(brandsCarousel.length > 0){
                brandsCarousel.forEach((brandCarousel, index) => {
                    // Remove marca genérica
                    if(index == 4){
                        brandCarousel.remove();
                    }         
                });         
    
                newCarouselItems.forEach(newCarouselItem => {
                    let carouselItem = document.createElement("li");
                    carouselItem.classList.add("item");
                    carouselItem.innerHTML = `
                        <a 
                            target="${newCarouselItem.target}" 
                            alt="${newCarouselItem.alt}" 
                            class="lozad" 
                            data-background-image="${newCarouselItem.data_background_image}" 
                            href="${newCarouselItem.href}" 
                            data-loaded="true" 
                            style="background-image: url('${newCarouselItem.image}');"
                        >
                            ${newCarouselItem.name}
                        </a>
                    `;
    
                    carousel.appendChild(carouselItem);
                });
    
                document.querySelectorAll(`.${showcaseSlideWrapper} .brands .owl-carousel .item`).forEach((brandCarousel) => {
                    const link = brandCarousel.querySelector("a");
                    const altLink = brandCarousel.querySelector("a").getAttribute("alt");
    
                    if(altLink.includes("Toyota")){
                        link.classList.add("toyota-brand");
                    }
                    else if(altLink.includes("Volvo")){
                        link.classList.add("volvo-brand");
                    }
                    else if(altLink.includes("Renault")){
                        link.classList.add("renault-brand");
                    }
                    else if(altLink.includes("Hyundai")){
                        link.classList.add("hyundai-brand");
                    }
                    else if(altLink.includes("Fiat")){
                        link.classList.add("fiat-brand");
                    }
                    else if(altLink.includes("Dafra")){
                        link.classList.add("dafra-brand");
                    }
                    else if(altLink.includes("KTM")){
                        link.classList.add("ktm-brand");
                    }
                    else if(altLink.includes("Nissan")){
                        link.classList.add("nissan-brand");
                    }
                    else if(altLink.includes("BYD")){
                        link.classList.add("byd-brand");
                    }
                });
    
                if(showcaseSlideWrapper == "showcase-slides"){
                    brandsCarousel = document.querySelectorAll(`.${showcaseSlideWrapper} .brands .owl-carousel .item`);
                    reorder(brandsCarousel[2], brandsCarousel[0]);
                    reorder(brandsCarousel[7], brandsCarousel[0]);
                    reorder(brandsCarousel[1], brandsCarousel[0]);
        
                    brandsCarousel = document.querySelectorAll(`.${showcaseSlideWrapper} .brands .owl-carousel .item`);
                    insertAfter(brandsCarousel[5], brandsCarousel[7]);
                }
                else if(showcaseSlideWrapper == "showcase-grid"){
                    if(brandsCarousel[0].querySelector("a").getAttribute("alt").includes("Hyundai")){
                        brandsCarousel = document.querySelectorAll(`.${showcaseSlideWrapper} .brands .owl-carousel .item`);
                        reorder(brandsCarousel[2], brandsCarousel[0]);
                        reorder(brandsCarousel[7], brandsCarousel[0]);
                        reorder(brandsCarousel[1], brandsCarousel[0]);
            
                        brandsCarousel = document.querySelectorAll(`.${showcaseSlideWrapper} .brands .owl-carousel .item`);
                        insertAfter(brandsCarousel[5], brandsCarousel[7]);
                    }
                    else{
                        brandsCarousel = document.querySelectorAll(`.${showcaseSlideWrapper} .brands .owl-carousel .item`);
        
                        reorder(brandsCarousel[7], brandsCarousel[1]);
                        reorder(brandsCarousel[3], brandsCarousel[1]);
                        reorder(brandsCarousel[2], brandsCarousel[1]);
                        insertAfter(brandsCarousel[4], brandsCarousel[6]);
                    }
                }
    
                addStyle(`
                    .fiat-brand{
                        background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pg/logo-fiat.png') !important;
                    }

                    .nissan-brand{
                        background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pg/logo-nissan.png') !important;
                    }

                    .hyundai-brand{
                        background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pg/logo-hyundai.png') !important;
                    }

                    @media (max-width: 767px){
                        #showcase header .brands ul li *:not(script){
                            width: 65px;
                            height: 50px;
                            background-size: contain !important;
                        }
    
                        .volvo-brand{
                            height: 38px !important;
                        }  
    
                        .hyundai-brand,
                        .nissan-brand{
                            height: 70px !important;
                        }

                        .hyundai-brand{
                            width: 75px !important;
                        }

                        .nissan-brand{
                            width: 45px !important;
                        }
    
                        .ktm-brand, .byd-brand{
                            height: 55px !important;
                        }
                    }
    
                    @media (min-width: 768px){
                        #showcase header .brands ul li *:not(script){
                            background-size: contain !important;
                        }
        
                        .toyota-brand{
                            height: 62px !important;
                        }   
    
                        .volvo-brand{
                            height: 48px !important;
                        }   
    
                        .renault-brand{
                            height: 57px !important;
                        }   
    
                        .hyundai-brand{
                            width: 90px !important;
                            height: 80px !important;
                        }   
    
                        .fiat-brand{
                            height: 70px !important;
                            width: 65px !important;
                        }  
                        
                        .dafra-brand{
                            height: 60px !important;
                        } 
    
                        .ktm-brand{
                            height: 70px !important;
                        } 
    
                        .nissan-brand{
                            width: 52px !important;
                            height: 80px !important;
                        }   
    
                        .byd-brand{
                            height: 72px !important;
                        }
                    }
                `);
            }
        });
    };
    
    // 19/05/2022 | Substitui a "Marca Genérica" por "Dafra e KTM" no dropdown de telefones
    // Alisson Santana
    function alteraMarcaGenericaTelefone() {
        const phonesMain = document.querySelectorAll("#phones-main .accordion li")
    
        if(phonesMain) {
            phonesMain.forEach(element => {
                if(element.innerHTML.includes("Marca Genérica")) {
                    element.innerHTML = element.innerHTML.replace("Marca Genérica", "Dafra e KTM")
                }
            });
        }
    }
    
    // 19/05/2022 | Alterar nome "Marca Genérica" no carrossel de unidades da home
    // Alisson Santana
    function alteraMarcaGenericaCarrosselUnidades() {
        document.addEventListener('readystatechange', event => { 
    
            // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
            if (event.target.readyState === "complete") {
                // function
            }
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
        
            addStyle`
                .unit-carousel footer hgroup h5 {
                    display: none;
                }
            `
        
            const selectUnits = document.querySelectorAll("#filter_unit_by_brand .options li")
            const itemSelected = document.querySelector("#filter_unit_by_brand .SelectBox span")
           
            changeNames()
        
            if(selectUnits) {
                selectUnits.forEach(element => {
                    if(element.innerHTML.includes("Marca Genérica")) {
                        element.innerHTML = element.innerHTML.replace("Marca Genérica", "Dafra e KTM")
                    }
                });
            }
            
            const observer = new MutationObserver(function(){
                if(itemSelected.innerHTML.includes("Marca Genérica")) {
                    changeNames()
                }
            });
            
            if(itemSelected) {
                // Setando as alterações que o observer deve assistir
                observer.observe(itemSelected, {
                    childList: true,
                    subtree: true
                });
            }
        });
    }
    
    function changeNames() {
        const itemSelected = document.querySelector("#filter_unit_by_brand .SelectBox span")
        
        if(itemSelected) {
            itemSelected.innerHTML = itemSelected.innerHTML.replace("Marca Genérica", "Dafra e KTM")
        }
    }
    
    // 28/05/2022 | Alterar nome "Marca Genérica" no menu
    // Alisson Santana
    function alteraMarcaGenericaMenu() {
        const dropItems = document.querySelectorAll(".dropdown-submenu-title")
    
        if(dropItems) {
            dropItems.forEach(element => {
                if(element.innerHTML.includes("Marca Genérica")) {
                    element.innerHTML = element.innerHTML.replace("Marca Genérica","Dafra e KTM")
                }
            });
        }
    }
    
    // ADICIONA MÁSCARA AO INPUT DE TELEFONE NAS PÁGINAS CUSTOMIZADAS
    // 20/06/2022 | INSERIDO POR:LIZZIE
    function adicionaMascaraTelefone() {
        const customPage = window.location.href.includes("/empresa/")
    
        if (customPage) {
            jQuery("input.input-phone")
                .mask("(99) 9999-9999?9")
                .focusout(function(event) {
                    var target, phone, element;
                    target = (event.currentTarget) ? event.currentTarget : event.srcElement;
                    phone = target.value.replace(/\D/g, '');
                    element = $(target);
                    element.unmask();
                    if (phone.length > 10) {
                        element.mask("(99) 99999-999?9");
                    } else {
                        element.mask("(99) 9999-9999?9");
                    }
                });
        }
    }
    
    // Ajustar imagens que quebram o layout das páginas customizadas
    // 20/06/2022 | Lizziê
    function ajustaImagensPaginaCustomizada() {
        const customPage = window.location.href.includes("/empresa/")
    
        if(customPage) {
            const images = document.querySelectorAll("img")
    
            // Atualizar para contemplar vídeos, necessÃ¡rio pensar na altura padrão.
            const videos = document.querySelectorAll("iframe")
    
            if(images) {
                images.forEach(element => {
                    element.setAttribute("width", "100%")
                    element.setAttribute("height", "auto")
                });
            }
        }
    }
    
    // Altera redirecionamento logo Toyota
    document.querySelector("a[target='toyota']").href = 'https://toyota.itavema.com.br/';
    
    // 21/06/2022 | Adicionar redirecionamento páginas de agradecimento
    // Alisson Santana
    function adicionaRedirectPaginaAgradecimento() {
        const itemsMenuToRemove = document.querySelectorAll(".nav--accordion-mobile .nav-simple__item")
        itemsMenuToRemove.forEach(itemMenu => {
            if(itemMenu.innerHTML.includes("Página agradecimento")) {
                itemMenu.remove()
            }
        });
    }
    
    const redirectThanksPage = async (spreadsheetId) => {
        const keyAPI = "AIzaSyD89VGI6wnaT6LE3A7Y4wCyiDmgGIxjobE"
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:Z?key=${keyAPI}`)
        const data = await response.json()
        const slugs = data.values
        console.log(slugs)
        let dataRedirect = []
        let url = {
            origem: '',
            destino: ''
        }
    
        if(slugs){
            slugs.forEach(element => {
                url = {origem: element[0], destino: element[1]}
                dataRedirect.push(url)
            });
        }
    
        const page = window.location.href
    
        dataRedirect.forEach(element => {
            if(page.includes(element.origem)) {
                window.location.href = 'https://itavema.com.br' + element.destino
            }
        });
    }
    
    window.hookConversion = function() {
        const spreadsheetId = "1JbjqtdwfWBgGvwTRn53D8H_e6spAGpRyL1W4KTOLs38"
        redirectThanksPage(spreadsheetId)
    }
    
    // OCULTANDO MENU DE OFERTAS ÚNICAS
    // 22/06/2022 | Bruno
    function ocultandoPaginaAgradecimento() { 
        const items = document.querySelectorAll(".dropdown-toggle")
     
        if(items){
            items.forEach(element => {
                if(element.innerHTML.includes("Página agradecimento")){
                    element.parentNode.remove(element.parentNode)
                }
            });
        }    
    }
    
    // 30/06/2022 | Alterar ordenação do menu
    // Alisson Santana
    function alteraOrdenacaoMenu() {
        console.log("Entrou no último")
        const menuItems = document.querySelectorAll(".menu-geral > li")
        console.log(menuItems)
        const reorder = (before, after) => after.parentNode.insertBefore(before, after)
         
        const orders = [ { before: menuItems[5], after: menuItems[4] },  { before: menuItems[6], after: menuItems[4] }]
        orders.forEach(({before, after}) => reorder(before, after))
    }

    // 05/07/2022 | Adiciona Cta 'Quero essa oferta' na listagem de seminovos index
    // João Carlos
    function adicionarCtaQueroEssaOfertasSeminovosIndex(){
        const usedModels = document.querySelectorAll("#used_models .item-list .item-list-col");
        const actionIsExists = usedModels[0].querySelector(".item footer .action");

        if(!actionIsExists && (location.pathname == "/" || location.pathname == "/grupo-itavema")){
            usedModels.forEach(usedModel => {
                usedModel.setAttribute("style", "height: auto");
                usedModel.querySelector(".item footer").setAttribute("style", "height: auto");
    
                const usedModelLink = usedModel.querySelector(".item header .img a").getAttribute("href");
                const usedModelContent = usedModel.querySelector(".item footer .content");
                const cta = document.createElement("div");

                cta.classList.add("action");
                cta.style.paddingTop = `1rem`;
                cta.innerHTML = `
                    <a 
                        class="btn btn-default" 
                        href="${usedModelLink}"
                        style="width: 100%"
                    >
                        Quero essa oferta
                    </a>
                `;

                usedModelContent.after(cta);
            });
        }
    }

    //07/07/2022 | Alterar marcas de agendamento de serviços por imagem das marcas
    function alterarMarcasPorImagem() {
        window.addEventListener("DOMContentLoaded", () => {
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
        
            addStyle(`
                .img-menu {
                    width: 100px;
                    height: 100px;
                    display: block;
                    background-repeat: no-repeat;
                    background-size: contain !important;
                }
    
                .menu-geral li:nth-child(6) .dropdown-submenu-title strong {
                    display: none !important;
                }
    
                .fiat-img {
                    background: url('https://production.autoforce.com/uploads/brand/logo_other/14/logo_brand_comprar-fiat_58068feb28.png') no-repeat;
                }
    
                .nissan-img {
                    background: url('https://production.autoforce.com/uploads/brand/logo_regular/26/logo_brand_comprar-nissan_1170d6026c.png') no-repeat;
                }
    
                .hyundai-img {
                    background: url('https://production.autoforce.com/uploads/brand/logo_regular/11/logo_brand_comprar-hyundai_a95f540879.png') no-repeat;
                }
    
                .toyota-img-sp {
                    background: url('https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pg/toyota-sp.png') no-repeat;
                }
    
                .toyota-img-rj {
                    background: url('https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pg/toyota-rj.png') no-repeat;
                }
    
                .renault-img {
                    background: url('https://production.autoforce.com/uploads/brand/logo_regular/20/logo_brand_comprar-renault_24beec20fe.png') no-repeat;
                }
            `);
        
            const itensServico = document.querySelectorAll(".menu-geral li:nth-child(6) .dropdown-submenu-title a")
        
            if (itensServico) {
                itensServico.forEach(element => {
                    if (element.innerHTML.includes("Nissan")) {
                        element.classList.add("nissan-img", "img-menu")
                    } else if (element.innerHTML.includes("Hyundai")) {
                        element.classList.add("hyundai-img", "img-menu")
                    } else if (element.innerHTML.includes("Toyota São Paulo")) {
                        element.classList.add("toyota-img-sp", "img-menu")
                    } else if (element.innerHTML.includes("Toyota Rio de Janeiro")) {
                        element.classList.add("toyota-img-rj", "img-menu")
                    } else if (element.innerHTML.includes("Renault")) {
                        element.classList.add("renault-img", "img-menu")
                    } else if (element.innerHTML.includes("Fiat")) {
                        element.classList.add("fiat-img", "img-menu")
                    } 
                });
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
    conteudoByd()
    addIconesRedesSociais()
    ajustaLogosTopo()
    alteraMarcaGenericaTelefone()
    alteraMarcaGenericaCarrosselUnidades()
    alteraMarcaGenericaMenu()
    adicionaMascaraTelefone()
    ajustaImagensPaginaCustomizada()
    adicionaRedirectPaginaAgradecimento()
    ocultandoPaginaAgradecimento()
    alteraOrdenacaoMenu()
    adicionarCtaQueroEssaOfertasSeminovosIndex()
    alterarMarcasPorImagem()
    alterarLinksPoliticaPrivacidade()
})()