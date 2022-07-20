(() => {
    const pahtName = location.pathname;
    const hostName = location.hostname;

    if((pahtName == "/seminovos") || (pahtName == "/seminovos/") 
        || (hostName.includes("autodromo.app") && pahtName == "/grupo-mult/seminovos") 
        || (hostName.includes("autodromo.app") && pahtName == "/grupo-mult/seminovos/")
    ){
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

        const catchyPhraseWrapper = document.querySelector("#catchy_phrase");

        const hightlightOffers = document.querySelector("#catchy_phrase .catchy-phrase-noise .title-group-text h4");
    
        if(hightlightOffers){
            hightlightOffers.innerHTML = `Conheça nossas ofertas de Seminovos!`;
        }
    
        const usedModelsOffer = document.querySelector("#offer_used_models .content-used-models .title-group-text h4");
    
        if(usedModelsOffer){
            usedModelsOffer.innerHTML = `Confira as ofertas especiais que preparamos para você!`;
        }

        const currentFilterEfect = document.querySelector("#showcase .showcase .filter-background");

        if(currentFilterEfect){
            currentFilterEfect.remove();
        }

        const phoneButton = document.querySelector("#showcase header #phones-main");
        phoneButton.classList.add("fixed");

        const currentSectonFilter = document.querySelector("#showcase .filter-wrapper .filter-container");

        if(currentSectonFilter){
            const newSectionFilter = document.createElement("section");
            newSectionFilter.setAttribute("id", "showcase");
            newSectionFilter.setAttribute("class", "new-section-filter container-fluid");
    
            const headerSectionFilter = document.createElement("header");
            const filterWrapper = document.createElement("div");
            filterWrapper.classList.add("filter-wrapper");
    
            const filterWrapperChild = document.createElement("div");
            filterWrapper.appendChild(filterWrapperChild);
            filterWrapper.insertBefore(currentSectonFilter, filterWrapperChild);
            filterWrapperChild.remove();
    
            headerSectionFilter.appendChild(filterWrapper);
            newSectionFilter.appendChild(headerSectionFilter);
    
            catchyPhraseWrapper.before(newSectionFilter);
        }

        addStyle(`
            .new-section-filter .filter-wrapper{
                background-color: #fff;
                padding-bottom: 3rem;
            }

            .new-section-filter .filter-wrapper .filter-container h3{
                color: #000 !important;
            }

            .showcase-grid{
                background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/mult/produtos/pg/seminovos-desktop.png') !important;
                background-size: cover !important;
                background-position-y: 6rem !important;
            }

            @media screen and (max-width: 576px){
                .showcase-grid{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/mult/produtos/pg/seminovos-mobile.png') !important;
                    background-size: contain !important;
                    background-repeat: no-repeat  !important;
                }

                .showcase:not(.pageview-products):not(.pageview){
                    min-height: auto !important;
                }

                .showcase-grid .nav-wrapper-dinamic .brand-client a:first-child{
                    background-position-x: -3rem;
                }
            }

            @media screen and (max-width: 767px){
                .new-section-filter header{
                    z-index: 1 !important; 
                }

                #showcase header #phones-main{
                    top: -1rem !important;
                    right: 1rem !important;
                    padding-right: 0 !important;
                }

                #showcase header #phones-main.fixed{
                    top: 0.4rem !important;
                }
            }
        `);
    }
})();