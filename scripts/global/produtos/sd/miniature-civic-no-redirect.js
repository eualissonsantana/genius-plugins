(() => {
    window.addEventListener("DOMContentLoaded", () => {
        let newCivic = document.querySelector("div[data-slug='novo-civic']");
        let pagePathName = window.location.pathname;
        let hostName = window.location.hostname;
        let rootSlug = pagePathName.split("/")[1];  
    
        const changeCivic = (newCivic) => {
            let linksnewCivic;

            if(newCivic.querySelectorAll("a[href='/novos/novo-civic']").length > 0) {
                linksnewCivic = newCivic.querySelectorAll("a[href='/novos/novo-civic']");
            }
            else if(newCivic.querySelectorAll(`a[href='/${rootSlug}/novos/novo-civic']`).length > 0){
                linksnewCivic = newCivic.querySelectorAll(`a[href='/${rootSlug}/novos/novo-civic']`);
            }

            let imgnewCivic = newCivic.querySelector("img");
            
            if(linksnewCivic){
                linksnewCivic.forEach(link => {
                    link.setAttribute("href", "javascript:void(0)");
                });
            }
    
            imgnewCivic.setAttribute("src", "https://production.autoforce.com/uploads/version/profile_image/7642/model_middle_comprar-civic_67c77e3070.png");
            imgnewCivic.setAttribute("id", "img-new-civic");
        };
    
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

        const addTooltip = (newCivic, text, cardIsParent, topPosition) => {
            const span = document.createElement("span");
            span.classList.add("model-tooltip-civic");
            span.innerText = `${text}`;

            let wrapper;
            if(cardIsParent){
                wrapper = newCivic;
            }
            else{
                wrapper = newCivic.querySelector(".card");
            }

            wrapper.style = "position: relative";
            
            wrapper.appendChild(span);

            addStyle(`
                .model-tooltip-civic{
                    display: block;
                    background-color: #FFF;
                    border: solid 1px #707070;
                    border-radius: 4px;
                    padding: 3px 14px 4px;
                    font-family: 'Roboto', sans-serif;
                    font-size: 14px;
                    line-height: 19px;
                    font-style: italic;
                    position: absolute;
                    top: ${topPosition}px;
                    left: 50%;
                    transform: translate(-50%, 0);
                    white-space: nowrap;
                }

                .model-tooltip-civic::before{
                    content: " ";
                    width: 11px;
                    height: 11px;
                    border-style: solid;
                    border-color: #707070;
                    border-width: 0 1px 1px 0;
                    border-radius: 0 0 2px 0;
                    transform: rotate(45deg) translate(-50%, 5px);
                    display: block;
                    position: absolute;
                    background: #FFF;
                    left: 50%;
                    bottom: -7px;
                }

                .model-tooltip-civic::after{
                    content: '';
                    width: 100%;
                    height: 0;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    opacity: 0;
                    background: #cc0000;
                    transition: height .3s ease-in-out, opacity .3s ease-in-out;
                }
            `);
        };

        if(newCivic){
            if(
                pagePathName == '/' || 
                (hostName.includes("autoforce") && pagePathName == `/${rootSlug}/`) || 
                (hostName.includes("autodromo") && pagePathName == `/${rootSlug}/`) || 
                (hostName.includes("autoforce") && pagePathName == `/${rootSlug}`) ||
                (hostName.includes("autodromo") && pagePathName == `/${rootSlug}`)
            ){
                changeCivic(newCivic);

                addTooltip(newCivic, "Aguarde novidades", false, -30);

                // Substituindo título do veiculo por imagem
                newCivic.querySelector(".card__content").innerHTML = `<img style="max-height: 20px;" src="https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic.png" alt="HR-V"></img>`;

                addStyle(`
                    #img-new-civic{
                        width: 222px;
                        height: auto;
                        opacity: .5;
                    }

                    .carousel-vehicles-new .swiper-wrapper{
                        margin-top: 2rem !important;
                    }
                
                    .card__content{
                        margin: 0 auto !important;
                    }

                    @media (max-width: 768px){
                        #img-new-civic{
                            width: 188px;
                        }  
                    }
                `);
            }
            else if(
                pagePathName == '/novos' || 
                pagePathName == '/novos/' || 
                (hostName.includes("autoforce") && pagePathName == `/${rootSlug}/novos/`) || 
                (hostName.includes("autodromo") && pagePathName == `/${rootSlug}/novos/`) || 
                (hostName.includes("autoforce") && pagePathName == `/${rootSlug}/novos`) ||
                (hostName.includes("autodromo") && pagePathName == `/${rootSlug}/novos`)
            ){
                changeCivic(newCivic.parentNode);

                addTooltip(newCivic.parentNode, "Aguarde novidades", true, -10);

                // Substituindo título do veiculo por imagem
                document.querySelector("div[data-slug='novo-civic']").parentNode.querySelector(".card__content").innerHTML = `<img style="max-height: 20px; margin-bottom: 0.4rem;" src="https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic.png"></img>`;

                // listagem de carros
                const listNewVehicles = document.querySelector('.list-vehicles-new__list .list-vehicles-new__list');

                // Criando observer para a listagem de carros
                // Em caso de aplicação de filtros e pesquisa, o hrv deve permanecer atualizado
                const observer = new MutationObserver(function(){
                    // Se o tooltip ainda não estiver adicionado
                    if(document.querySelector("div[data-slug='novo-civic']")){
                        if(document.querySelector("div[data-slug='novo-civic']").parentNode.querySelector(".model-tooltip-civic") == null){
                            changeCivic(document.querySelector("div[data-slug='novo-civic']").parentNode);
    
                            addTooltip(document.querySelector("div[data-slug='novo-civic']").parentNode, "Aguarde novidades", true, -10);
                            
                            // Substituindo título do veiculo por imagem
                            document.querySelector("div[data-slug='novo-civic']").parentNode.querySelector(".card__content").innerHTML = `<img style="max-height: 20px; margin-bottom: 0.4rem;" src="https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic.png"></img>`;
                        }
                    }
                });

                // Setando as alterações que o observer deve assistir
                observer.observe(listNewVehicles, {
                    attributes: true,
                    characterData: true,
                    childList: true,
                    subtree: true
                });

                addStyle(`
                    #img-new-civic{
                        width: 185px;
                        height: auto;
                        opacity: .5;
                    }

                    .card__content{
                        margin: 0 auto !important;
                    }
        
                    @media (max-width: 768px){
                        #img-new-civic{
                            width: 150px;
                        }  
                    }
                `);
            }
            else{
                let newVehiclesCarousel = document.querySelector(".section-component.vehicles-new.carousel-vehicles-new");

                if(newVehiclesCarousel){
                    changeCivic(newCivic);

                    addTooltip(newCivic, "Aguarde novidades", false, -30);

                    // Substituindo título do veiculo por imagem
                    newCivic.querySelector(".card__content").innerHTML = `<img style="max-height: 20px;" src="https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic.png"></img>`;

                    addStyle(`
                        #img-new-civic{
                            width: 222px;
                            height: auto;
                            opacity: .5;
                        }

                        .carousel-vehicles-new .swiper-wrapper{
                            margin-top: 2rem !important;
                        }

                        .card__content{
                            margin: 0 auto !important;
                        }
            
                        @media (max-width: 768px){
                            #img-new-civic{
                                width: 188px;
                            }  
                        }
                    `);
                }
            }
        }
    });
})();