(() => {
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
        .institutional-area__content-btn, 
        .institutional-area__media-image,
        .listing-highlights-consorcio,
        .listing-highlights-consorcio__ctas {
            display: none !important;
        }

        .card-vehicle {
            background: #FFFFFF;
            box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.08);
            border-radius: 8px;
        }

        body, .page__container {
            background: #F2F2F2 !important;
        }

        #veiculos, #como-funciona {
            margin-top: 48px;
        }

        .site-section__header-title {
            margin-bottom: 20px;
        }

        .card-vehicle {
            font-size: 16px;
            padding: 24px;
            height: 100%;
        }

        .card-vehicle .card-title, .texto-destaque {
            font-weight: bold;
        }

        .texto-destaque, .slide-vantagens__slide-item-title {
            color: hsl(var(--primary-hue),var(--primary-sat),var(--primary-light)) !important;
        }

        .card-vehicle .card__footer {
            text-align: left;
            padding: 0;
        }

        .card-vehicle .button--inverse {
            background-color: transparent;
            color: hsl(var(--primary-hue),var(--primary-sat),var(--primary-light));
            border: 1px solid hsl(var(--primary-hue),var(--primary-sat),var(--primary-light));
            border-radius: 8px;
            font-weight: 700;
        }

        .institutional-area__content-title {
            margin-bottom: 24px !important;
        }

        .institutional-area__content-text {
            font-size: 24px !important;
            max-width: 48%;
        }

        .institutional-area__wrapper {
            display: initial !important;
            grid-template-columns: none !important; 
            column-gap: initial !important;
        }

        .institutional-area {
            min-height: 510px;
            background: url(https://production.autoforce.com/uploads/channel_institutional_area/image/630/Group__2_.png) !important;
            background-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light)) !important;
            background-repeat: no-repeat !important;
            background-position: right !important;
            background-position-y: bottom !important;
        }

        .card-passo {
            background: #FFFFFF;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
            border-radius: 16px;
            padding: 24px;
        }

        .passos-texto {
            line-height: 20px;
            padding-left: 12px;
        }

        .passos-texto p {
            margin-bottom: 0;
        }

        #cadastro {
            margin-top: 36px;
            min-height: 120px;
            background: url("https://legado.autoforce.com.br/plugins/scripts/clientes/enzo/produtos/enzo-conecta/images/background-cadastro.png");
            background-repeat: no-repeat;
            background-size: contain;
            color: #FFFFFF;
            display: flex;
            align-items: center;
        }

        #cadastro p {
            line-height: 20px;
        }

        .btn-vazado {
            color: #fff;
            background-color: transparent;
            border: 1px solid #fff;
            border-radius: 50px;
            text-transform: initial;
            padding: 14px;
        }

        .whatsapp-box--space-bottom {
            padding-bottom: initial !important;
        }

        .slide-vantagens {
            padding-top: 40px;
        }

        #vantagens {
            background: #FFFFFF;
        }

        #vantagens .swiper-container {
            box-shadow: none !important;
        }

        @media (max-width: 768px) {
            .institutional-area {
                background-size: contain !important;
            }

            .institutional-area__content-text {
                font-size: 16px !important;
                max-width: initial;
            }

            .card-passo {
                margin-bottom: 12px;
            }
        }
       
    `
    function makeQuestion() {
        
    }

    function makeVehiclesArea() {

        let vehiclesData = [];
        let vehiclesDataJson;
    
        const requestNewCars = (channelId, callback) => {
            const headers = {
                'Authorization': `Token token=b80580096caa488b926d93145fed2f44`,
                'Content-Type': 'application/json'
            }
        
            fetch(`https://api.autoforce.com.br/v1/channel/${channelId}/clones`, {
                headers: headers
            })
            .then(response => response.json())
            .then(data => callback(data));
        };
        
        const channelId = "1782"
    
        const mountVehiclesData = (data) => {
            let vehicles = data.entries;
    
            vehicles.forEach(vehicle => {
                if(vehicle.active){
                    if(vehicle.item_image && vehicle.name){
                        let vehicleObject;
    
                        vehicleObject = {
                            imgLink: vehicle.item_image.thumb_image,
                            vehicleName: vehicle.name,
                            vehicleBrand: vehicle.brand.name
                        };
            
                        vehiclesData.push(vehicleObject);
                    }
                }
            });
        };
    
        const buildSelectNewVehicles = (vehiclesData) => {
            const defaultElement = ({ imgLink, vehicleName, vehicleBrand }) => {
                return `
                    <div class="card-vehicle text-center">
                        <div class="card__header">
                            <img class="swiper-lazy" src="${imgLink}" alt="Miniatura do ${vehicleName}">
                        </div>
                        <div class="card__content">
                            <div class="card__title"><strong>${vehicleName}</strong></div>
                            <div class="card__brand">${vehicleBrand}</div>
                        </div>
                        <hr>
                        <div class="card__footer">
                            <div class="card__economy">Economia: <span class="texto-destaque"><strong> R$0,42 / km</strong></span></div>
                            <div class="card__co2">CO²: <span class="texto-destaque"><strong> -21.200 kg / ano</strong></span></div>
                            <div>
                                <a href="#" class="btn button button--inverse card__cta"> SAIBA MAIS</a>
                            </div>
                        </div>
                    </div>
                `
            }
    
            const vehicles = document.createElement("div")
            vehicles.classList.add("row")
        
            vehiclesData.forEach(vehicle => {
                const cardItem = document.createElement('div')
                cardItem.classList.add('col-3', 'mb-5')
    
                cardItem.innerHTML = defaultElement(vehicle)
        
                vehicles.appendChild(cardItem)
            })
    
            // NOSSOS VEÍCULOS
            const veiculos = document.createElement("section")
            veiculos.setAttribute("id", "veiculos")
            veiculos.setAttribute("class", "container d-none d-md-block")
    
            veiculos.innerHTML = `
                <h2 class="site-section__header-title">Nossos Veículos</h2>
                <div class="container">
                    <div class="row">
                        ${vehicles.innerHTML}
                    </div>
                </div>
            
            `
            const banner = document.querySelector("#banner")
            banner.after(veiculos)
    
        };
        
        requestNewCars(channelId, (data) => {
            vehiclesData = [];
            
            vehiclesDataJson = data;
    
            console.log(vehiclesDataJson)
            mountVehiclesData(vehiclesDataJson);
            buildSelectNewVehicles(vehiclesData);
        });
    }

    function makeBanner() {
        // BANNER
        const menu = document.querySelector(".menu")
    
        if(menu) {
            const banner = document.createElement("section")
            banner.setAttribute("id", "banner")
            
            banner.innerHTML = `
                <a href="#mapa">
                    <img src="https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/enzo-conecta/banner-enzo-conecta.png" width="100%" alt="Banner da Enzo Conecta com fundo azuls e letras informativas brancas"> 
                </a>
            `
            menu.after(banner)
        }
    }

    function makeMap() {
         // MAPA
         const veiculos = document.querySelector("#veiculos")
    
         if(veiculos) {
            const mapa = document.createElement("section")
            mapa.setAttribute("id", "mapa")
            mapa.setAttribute("class", "container")
    
            mapa.innerHTML = `
                <h2 class="site-section__header-title">Encontre agora o Ponto de Carregamento mais perto de você.</h2>
            
            `
            veiculos.after(mapa)
         }
    }

    function adjustPelasArvores() {
        const areaMedia = document.querySelector(".institutional-area__media")
        
        if(areaMedia) {
            areaMedia.remove()
        }
    }

    function removeItens() {
        const consorcioList = document.querySelector("#consorcios-listing")
        const consorcioTitle = document.querySelector(".slide-vantagens .site-section__header")
        
        if(consorcioList) {
            consorcioList.remove()
            consorcioTitle.remove()
        }
    }

    function makeComoFunciona() {
        const pelasArvores = document.querySelector(".institutional-area")

        if(pelasArvores) {
            const comoFunciona = document.createElement("div")
            comoFunciona.setAttribute("id", "como-funciona")
            comoFunciona.classList.add("container")

            comoFunciona.innerHTML = `
                <h2 class="site-section__header-title">Como funciona</h2>
                <div>
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <div class="card-passo d-flex align-items-center">
                                <div class="passos-img">
                                    <img src="https://legado.autoforce.com.br/plugins/scripts/clientes/enzo/produtos/enzo-conecta/images/icons/veiculo.png" alt="Ícone de veículo lateral" />
                                </div>
                                <div class="passos-texto">
                                        <p class="texto-destaque mb-2">1. Escolha o veículo</p>
                                        <p>Escolha o veículo elétrico de sua preferência</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card-passo d-flex align-items-center">
                                <div class="passos-img">
                                    <img src="https://legado.autoforce.com.br/plugins/scripts/clientes/enzo/produtos/enzo-conecta/images/icons/form.png" alt="Ícone de um formulário online com uma seta simulando clique" />
                                </div>
                                <div class="passos-texto">
                                        <p class="texto-destaque mb-2">2. Preencha o formulário</p>
                                        <p>Preencha o formulário com seus dados para contato.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="card-passo d-flex align-items-center">
                                <div class="passos-img">
                                    <img src="https://legado.autoforce.com.br/plugins/scripts/clientes/enzo/produtos/enzo-conecta/images/icons/contato.png" alt="Ícone de atendente" />
                                </div>
                                <div class="passos-texto">
                                        <p class="texto-destaque mb-2">3. Aguarde nosso contato </p>
                                        <p>Agora, um consulto entrará em contato para finalizar.</p>
                                </div>
                            </div>
                        </div>
                      
                        
                         
                    </div>
                </div>
        
            `

            pelasArvores.after(comoFunciona)
        }
    }

    function makeAreaCadastro() {
        const comoFunciona = document.querySelector("#como-funciona")

        if(comoFunciona) {
            const cadastro = document.createElement("section")
            cadastro.setAttribute("id", "cadastro")
            
            cadastro.innerHTML = `
                <div class="container justify-content-center align-items-center d-flex">
                    <div class="col-12 col-md-3">
                        <p>
                            Contribua com o planeta. Cadastre-se agora e receba as melhores propostas de veículos:
                        </p>
                    </div>
                    <div class="col-6 col-md-3">
                        <a href="#" class="btn button btn-vazado">Cadastre-se</a>
                    </div>
                </div>
            `
            comoFunciona.after(cadastro)
        }
    }

    function changeOrder() {
        const footer = document.querySelector("footer.footer")
        const vantagens = document.querySelector("#vantagens")

        if(footer) {
            footer.before(vantagens)
        }
    }

    function adjustVantagens() {
        const vantagens = document.querySelector("#vantagens")
        const slideVantagens = document.querySelector("#vantagens .slide-vantagens")

        if(vantagens) {
            vantagens.classList.remove("container")
            slideVantagens.classList.add("container")
        }
    }

    function makeDuvidas() {
        const footer = document.querySelector("footer.footer")

        if(footer) {
            const duvidas = document.createElement("section")
            duvidas.setAttribute("id", "#duvidas")

            duvidas.innerHTML = `
                
            `
        }
    }


    removeItens()
    makeBanner();
    makeVehiclesArea();
    makeMap();
    adjustPelasArvores();
    changeOrder();
    makeComoFunciona();
    makeAreaCadastro();
    adjustVantagens();


})()