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
        .listing-highlights-consorcio__ctas,
        .header__search-mobile-form-btn,
        .header__menu-wrapper, .header__search-mobile,
        .consent-text {
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
            height: 105%;
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
            border: 2px solid hsl(var(--primary-hue),var(--primary-sat),var(--primary-light));
            border-radius: 8px;
            font-weight: 700;
            margin-bottom: 0;
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

        .swiper-pagination-bullet {
            border-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light)) !important;
        }

        .slide-vantagens__slide-pagination .swiper-pagination-bullet-active {
            background-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light)) !important;
        }

        #banner {
            min-height: 550px;
            width: 100%;
            background: url('https://legado.autoforce.com.br/plugins/scripts/clientes/enzo/produtos/enzo-conecta/images/banner-enzo-conecta.png');
            background-repeat: no-repeat !important;
            background-position-y: bottom !important;
            background-size: cover !important;
            cursor: pointer;
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
            background-size: cover;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }

        #cadastro p {
            line-height: 20px;
            font-weight: bold;
        }

        .btn-vazado {
            color: #fff;
            background-color: transparent;
            border: 2px solid #fff;
            border-radius: 50px;
            text-transform: initial;
            padding: 14px;
        }

        .btn-vazado:hover, .btn-vazado:focus {
            background: #fff;
            color: #0554F2;
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

        .popup-veiculo-eletrico {
            display: flex;
            position: fixed;
            background-color: #0554F2;
            color: #FFF;
            z-index: 999;
            width: 100%;
            height: 100%;
        }

        .popup-veiculo-eletrico .btn-vazado {
            width: 100%;
        }


        .popup-veiculo-eletrico h2 {
            margin-top: 48px;
            margin-bottom: 54px;
            font-size: 2.5rem;
            line-height: 1;
        }

        /* Estilo formulário banner */
        .showcase-new__conversion-form {
            position: relative;
            z-index: 1;
        }

        .conversion-form {
            background-color: #fff;
            position: relative;
            border-radius: 3px;
            font-family: var(--font-family-tertiary);
        }

        .form-message-overlay {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-color: rgba(0,0,0,.85);
            bottom: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            left: 0;
            opacity: 0;
            padding: 0 20px;
            position: absolute;
            right: 0;
            top: 0;
            z-index: -1;
            -webkit-transition: opacity .2s ease-in-out,z-index .2s linear;
            transition: opacity .2s ease-in-out,z-index .2s linear;
        }

        .conversion-form__header-phrase {
            background-color: #fff;
            color: #000;
            padding: 1.25rem;
            padding-bottom: 0;
            text-align: left;
            border-radius: 3px 3px 0 0;
        }

        .conversion-form__header-phrase h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0 !important;
        }

        .conversion-form__header-phrase p {
            font-size: 0.9rem;
            line-height: 1.2;
            margin-bottom: 0;
        }

        .form-conversion__body hr, .form-conversion__body .form-conversion__footer {
            display: none;
        }

        .showcase-new__conversion-form {
            max-width: 400px;
        }

        .conversion-form__photo {
            text-align: center;
            height: 100px;
            background: -webkit-gradient(linear,left top,left bottom,from(#000),color-stop(50%,#000),color-stop(51%,#262626),to(#000));
            background: linear-gradient(top,#000,#000 50%,#262626 51%,#000);
        }

        .form-conversion__body {
            padding: 0.938rem;
        }

        .form-conversion--static .form-conversion__custom-fields [class*=col-] .location-fields, .form-group .location-fields {
            display: grid;
            grid-template-columns: 25fr 75fr;
            -webkit-column-gap: 0.5rem;
            -moz-column-gap: .5rem;
            column-gap: 0.5rem;
        }

        .conversion-form .form-conversion--static .form-conversion__custom-fields [class*=col-], .conversion-form .form-group, .form-conversion--static .form-conversion__custom-fields .conversion-form [class*=col-] {
            margin-bottom: 0.625rem;
        }

        .choices[data-type*=select-one] {
            cursor: pointer;
        }

        .choices:last-child {
            margin-bottom: 0;
        }

        .choices {
            position: relative;
            margin-bottom: 24px;
            font-size: 14px;
            font-size: .875rem;
            height: auto !important;
        }

        .choices[data-type*=select-one] .choices__inner {
            padding-bottom: 0;
        }

        .conversion-form .choices__inner {
            background-color: #fff;
            border-width: 1px;
        }

        .choices__inner {
            padding: 0;
            font-size: 14px;
            font-size: .875rem;
            height: 50px;
            border-radius: 0.25rem;
        }

        .choices__inner {
            display: inline-block;
            vertical-align: top;
            width: 100%;
            background-color: #fff;
            padding: 7.5px 7.5px 3.75px;
            border: 1px solid #ddd;
            min-height: 44px;
            overflow: hidden;
        }

        .choices[data-type*=select-multiple] .choices__input.is-hidden, .choices[data-type*=select-one] .choices__input.is-hidden, .choices__input.is-hidden {
            display: none;
        }

        .choices[data-type*=select-one] .choices__input {
            display: block;
            width: 100%;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            background-color: #fff;
            margin: 0;
        }

        .choices__input {
            display: inline-block;
            vertical-align: baseline;
            background-color: #fff;
            font-size: 14px;
            font-size: .875rem;
            margin-bottom: 5px;
            border: 0;
            border-radius: 0;
            max-width: 100%;
            padding: 4px 0 4px 2px;
        }

        .invalid-feedback {
            display: none;
            width: 100%;
            margin-top: 0.25rem;
            font-size: 12px;
            font-size: .75rem;
            color: #d74334;
        }

        .invalid-feedback {
            color: #ea9696;
        }

        .form-control, .form-conversion--static select, .form-conversion--static textarea {
            display: block;
            width: 100%;
            height: 50px;
            padding: 0.9375rem 0.75rem;
            font-size: 14px;
            font-size: .875rem;
            font-weight: 400;
            line-height: 1.5;
            color: #000;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ddd;
            border-radius: 0.25rem;
            -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
            transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
        }

        #mapa {
            background: #fff;
            padding: 40px 0 48px;
        }

        .map-units .control-label {
            font-weight: bold;
        }

        .map-units__cta .btn {
            background: hsl(var(--primary-hue),var(--primary-sat),var(--primary-light)) !important;
        }

        .choices[data-type*=select-one] .choices__inner {
            border-color: hsl(var(--primary-hue),var(--primary-sat),var(--primary-light)) !important;
        }

        .choices__item {
            font-weight: 300 !important;
            text-transform: capitalize !important;
            font-size: 16px !important;
        }

        .choices__list--single {
            padding: 0 0 0.75rem 0.75rem;
        }

        .form-group .location-fields {
                grid-template-columns: 35fr 65fr;
        }

        .form-message-overlay--active {
            opacity: 1 !important;
            z-index: 100 !important;
        }

        @media (min-width: 992px) {
            .map-units__form {
                -webkit-box-flex: 1.8;
                -ms-flex: 1.8;
                flex: 1.8;
                padding: 24px 16px !important;
                box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
                border-radius: 8px;
                margin-right: 30px;
            }
        }

        @media screen and (min-width: 768px) {
            .slide-vantagens {
                margin-bottom: 0 !important;
            }
        }

        @media (max-width: 768px) {
            #banner {
                min-height: 420px;
                background: url('https://legado.autoforce.com.br/plugins/scripts/clientes/enzo/produtos/enzo-conecta/images/banner-enzo-conecta-mobile.png');
                background-size: cover;
            }

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

            .popup-veiculo-eletrico h2 {
                font-size: 2rem;
            }

            #cadastro {
                background: url("https://legado.autoforce.com.br/plugins/scripts/clientes/enzo/produtos/enzo-conecta/images/background-cadastro-mobile.png");
                background-size: cover;
                min-height: 200px;
            }
            
            #form {
                background: #fff;
                padding-bottom: 60px;
            }

            .slide-vantagens__controls {
                position: initial !important;
            }

            .owl-item {
                max-width: 280px !important;
            }

            .site-section__header-title {
                font-size: 1.5rem !important;
                line-height: 1.1 !important;
            }
        }

        @media screen and (max-width: 991.98px) {
            .map-units__form {
                display: block !important;
                padding: 15px;
            }
        
            .map-units {
                flex-direction: column;
            }
        }

        @media (min-width: 1200px) {
            #banner > .container {
                max-width: 1350px;
            }

            #form > .container {
                max-width: 1250px;
            }
            
            .static-conversion-form {
                margin-top: -540px;
            }

            .form-conversion__body .btn {
                padding: 16px 60px;
                position: absolute;
                width: initial !important;
                margin-left: 30px;
                bottom: -30px;
            }
        }
       
    `

    const vehiclesStaticData = [
        {
            imgLink: "https://production.autoforce.com/uploads/version/profile_image/7295/model_thumb_comprar-serie-s_866021c83d.png",
            vehicleName: "Compass 4XE",
            vehicleBrand: "Jeep",
            economy: "0,42 / km",
            co2: "-21.200 kg / ano",
            link: "https://enzojeep.com.br/novos/novo-compass-4xe-2022",
        },
        {
            imgLink: "https://production.autoforce.com/uploads/version/profile_image/7155/model_thumb_comprar-twin-pure-electric_d900e12e6d.png",
            vehicleName: "C40 Recharge",
            vehicleBrand: "Volvo",
            economy: "0,63 / km",
            co2: "-27.800 kg / ano",
            link: "https://enzovolvo.com.br/novos/c40-recharge-2022",
        },
        {
            imgLink: "https://production.autoforce.com/uploads/version/profile_image/7909/model_thumb_comprar-bhev_8a013c9755.png",
            vehicleName: "XC40 Recharge",
            vehicleBrand: "Volvo",
            economy: "0,60 / km",
            co2: "-28.300 kg / ano",
            link: "https://enzovolvo.com.br/novos/xc40-recharge-pure-electric",
        },
        {
            imgLink: "https://production.autoforce.com/uploads/version/profile_image/6543/model_thumb_comprar-icon_e203aeac0c.png",
            vehicleName: "500e",
            vehicleBrand: "Fiat",
            economy: "0,43 / km",
            co2: "-18.200 kg / ano",
            link: "https://fiatenzo.com.br/novos/500e-2022",
        },
        {
            imgLink: "https://production.autoforce.com/uploads/version/profile_image/6193/model_thumb_comprar-intense_340e8cec27.png",
            vehicleName: "Zoe e-Tech",
            vehicleBrand: "Renault",
            economy: "0,38 / km",
            co2: "-19.700 kg / ano",
            link: "https://guararenault.com.br/novos/zoe-e-tech-2022",
        },
        {
            imgLink: "https://production.autoforce.com/uploads/version/profile_image/7464/model_thumb_comprar-intense_3d604105ae.png",
            vehicleName: "Kwid e-Tech",
            vehicleBrand: "Renault",
            economy: "0,40 / km",
            co2: "-17.700 kg / ano",
            link: "https://guararenault.com.br/novos/novo-kwid-e-tech-2023",
        },
        {
            imgLink: "https://production.autoforce.com/uploads/version/profile_image/7940/model_thumb_comprar-premier_27353dae28.png",
            vehicleName: "BOLT EUV",
            vehicleBrand: "Chevrolet",
            economy: "0,52 / km",
            co2: "-15.000 kg / ano",
            link: "https://nacaochevrolet.com.br/novos/bolt-euv",
        },
        {
            imgLink: "https://production.autoforce.com/uploads/version/profile_image/6553/model_thumb_comprar-ev_5e9434f5a0.png",
            vehicleName: "BOLT EV",
            vehicleBrand: "Chevrolet",
            economy: "0,52 / km",
            co2: "-17.500 kg / ano",
            link: "https://nacaochevrolet.com.br/novos/bolt-euv",
        }
    ]

    const channelId = 1968

    function makeVehiclesArea() {
        let vehiclesData = [];
        let vehiclesDataJson;
    
        const requestNewCars = (channelId, callback) => {
            const headers = {
                'Authorization': `Token token=b80580096caa488b926d93145fed2f44`,
                'Content-Type': 'application/json'
            }
        
            fetch(`https://api.autoforce.com.br/v1/channel/${channelId}/consortium`, {
                headers: headers
            })
            .then(response => response.json())
            .then(data => callback(data));
        };
    
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
            console.log(vehiclesData)
        };

    
        const buildSelectNewVehicles = (vehiclesStaticData) => {
            const defaultElement = ({ imgLink, vehicleName, vehicleBrand, economy, co2, link }) => {
                return `
                <div class="item">
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
                            <div class="card__economy">Economia: <span class="texto-destaque"><strong> R$${economy}</strong></span></div>
                            <div class="card__co2">CO²: <span class="texto-destaque"><strong> ${co2}</strong></span></div>
                            <div>
                                <a href="${link}" target="_blank" class="btn button button--inverse card__cta"> SAIBA MAIS</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
    
            const vehicles = document.createElement("div")
            const vehiclesMobile = document.createElement("div")
            vehicles.classList.add("row")
        
            vehiclesStaticData.forEach(vehicle => {
                const cardItem = document.createElement('div')
                cardItem.classList.add('col-3', 'mb-5')
    
                cardItem.innerHTML = defaultElement(vehicle)
        
                vehicles.appendChild(cardItem)
            })

            vehiclesStaticData.forEach(vehicle => {
                const cardItem = document.createElement('div')    
                cardItem.innerHTML = defaultElement(vehicle)
        
                vehiclesMobile.appendChild(cardItem)
            })

            // NOSSOS VEÍCULOS
            const veiculos = document.createElement("section")
            veiculos.setAttribute("id", "veiculos")
    
            veiculos.innerHTML = `
                <div class="container d-none d-md-block">
                    <h2 class="site-section__header-title">Nossos Veículos</h2>
                    <div class="container">
                        <div class="row">
                            ${vehicles.innerHTML}
                        </div>
                    </div>
                </div>
                <div class="d-md-none container">
                    <h2 class="site-section__header-title">Nossos Veículos</h2>
                    <div class="owl-carousel owl-theme">
                        ${vehiclesMobile.innerHTML}
                    </div>
                </div>
            
            `  

            setTimeout(() => {
                $('.owl-carousel').owlCarousel({
                    center: true,
                    items:2,
                    loop:true,
                    margin:16,
                    responsive:{
                        0:{
                            items:1.3
                        },
                        400:{
                            items: 1.35
                        },
                    }
                })
            }, 200);



            const highlights = document.querySelector(".listing-highlights-consorcio")
            highlights.before(veiculos)
    
        };
        
        buildSelectNewVehicles(vehiclesStaticData);

        /*
        requestNewCars(channelId, (data) => {
            vehiclesData = [];
            
            vehiclesDataJson = data;
            mountVehiclesData(data)

        });
        */
        
    }

    function makeBanner() {
        // BANNER
        const menu = document.querySelector(".menu")
    
        if(menu) {
            const banner = document.createElement("section")
            const form = document.createElement("section")
            const dataprops = {
                bait:"Carregue seu veículo!",
                titleForm:"Carregue seu veículo",
                mainPhrase:"Preencha o formulário abaixo para receber contato de um especialista.",
                units:[],
                showUnits:false,
                showUpload:false,
                fileExtension:".pdf, .doc, .docx",
                product:"Novos",
                brand:"Enzo Conecta",
                linkPrivacyPolicy:"/politica-de-privacidade",
                chooseArea:true,
                showCpf:"1",
                versions:[],
                contactsWithDynamicRequired:true,
                shouldShowDataPermissions:true,
                dataPermissionsCustomText:"Autorizo o uso de minhas informações pessoais para campanhas de marketing.",
                showLocationFields:true
            }

            const dataPropsJSON = JSON.stringify(dataprops)


            banner.setAttribute("id", "banner")
            banner.setAttribute("onclick", "redirectMapArea()")
            form.setAttribute("id", "form")
            
            form.innerHTML = `
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-12 col-md-4 d-flex justify-content-end">
                            <div class="static-conversion-form"
                                data-props='${dataPropsJSON}'
                            ></div>
                        </div>
                    </div>
                </div>
            `
            menu.after(form)
            menu.after(banner)
        }
    }

    function makeMap() {
        // function
        const highlights = document.querySelector(".listing-highlights-consorcio")
    
        if(highlights) {
            const mapa = document.createElement("section")
            mapa.setAttribute("id", "mapa")
    
            mapa.innerHTML = `
            <div class="container">
                <div class="fragment-map-units">
                    <div class="container">
                        <h2 class="site-section__header-title">Encontre agora o Ponto de Carregamento mais perto de você.</h2>
                        <div class="fragment-map-units__render"></div>
                    </div>
                </div>
            </div>
            `
            
            highlights.before(mapa)
        }
           
        const requestUnits = (channelId, callback) => {
            const headers = {
                'Authorization': `Token token=b80580096caa488b926d93145fed2f44`,
                'Content-Type': 'application/json'
            }
        
            fetch(`https://api.autoforce.com.br/v1/channel/${channelId}/units`, {
                headers: headers
            })
            .then(response => response.json())
            .then(data => callback(data));
        };
        
        requestUnits(channelId, (data) => {

            const elMapUnits = document.querySelector('.fragment-map-units__render')
            render(h(MapUnitsSimpleApp, {
                units: data.entries,
                title: "Preencha os filtros abaixo e encontre um ponto de carregamento mais próximo de você.",
                buttonLabel: "Buscar",
            }), elMapUnits)
        });

        setTimeout(() => {
        console.log("Mutation Observer")
            const map = document.querySelector(".map-units__form")
            const campoBairro = document.querySelector(".map-units__form .form-group:nth-child(4)")
            
            changeLabel()

            const observer = new MutationObserver(function(){
                if(campoBairro.innerHTML.includes("loja")) {
                    changeLabel()
                }
            });
            
            if(map) {
                // Setando as alterações que o observer deve assistir
                observer.observe(map, {
                    childList: true,
                    subtree: true
                });
            }
        }, 1500);
    }

    function adjustPelasArvores() {
        const areaMedia = document.querySelector(".institutional-area__media")
        const institutionalArea = document.querySelector(".institutional-area")

        if(areaMedia) {
            areaMedia.remove()
        }

        if(institutionalArea) {
            institutionalArea.setAttribute("id", "pelo-planeta")
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
                                        <p>Escolha o veículo elétrico de sua preferência.</p>
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
                                        <p>Agora, um consultor entrará em contato para finalizar.</p>
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
                <div class="container justify-content-center align-items-center d-flex flex-wrap">
                    <div class="col-12 col-md-4">
                        <p>
                            Contribua com o planeta. Cadastre-se agora e receba as melhores propostas de veículos:
                        </p>
                    </div>
                    <div class="col-8 col-md-3">
                        <a href="#" onclick="modalCadastro()" class=" btn button btn-vazado">Cadastre-se</a>
                        <div class="new-vehicles-dropdown__conversion-form-modal"></div>
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

    function makeForm() {
    // Renderiza o componente reativo para o formulário de conversão
        var formComponentContainer = document.querySelector(
            '.static-conversion-form'
        )

        const customFields = [
            {
                name: "tem_veiculo_eletrico",
                value: getCookie("tem_veiculo_eletrico"),
            }
        ]

        const dataprops = {
            bait:"Carregue seu veículo!",
            titleForm:"Carregue seu veículo",
            mainPhrase:"Preencha o formulário abaixo para receber contato de um especialista.",
            units:[],
            showUnits:false,
            showUpload:false,
            fileExtension:".pdf, .doc, .docx",
            product:"Novos",
            brand:"Enzo Conecta",
            linkPrivacyPolicy:"/politica-de-privacidade",
            chooseArea:true,
            showCpf:"1",
            versions:[],
            contactsWithDynamicRequired:true,
            shouldShowDataPermissions:false,
            dataPermissionsCustomText:"Autorizo o uso de minhas informações pessoais para campanhas de marketing.",
            showLocationFields:true,
            customFields,
        }

        render(h(StaticConversionFormApp, dataprops), formComponentContainer);
    }

    function makePopup() {
        let username = getCookie("tem_veiculo_eletrico");
        if (username == "") {
            const body = document.querySelector("body")
            const popup = document.createElement("section")
            popup.classList.add("popup-veiculo-eletrico", "align-items-center")
    
            popup.innerHTML = `
                <div class="container col-12 col-md-8 ml-auto text-center">
                    <div class="col-12 col-md-6 mx-auto">
                        <img src="https://legado.autoforce.com.br/plugins/scripts/clientes/enzo/produtos/enzo-conecta/images/logo-enzo-conecta.png" alt="Logo Enzo Conecta">
                        <h2>Você possui um veículo elétrico?</h2>
                        <div class="row justify-content-around">
                            <div class="col-6">
                                <a href="#" onclick="hasEletricVehicle(true)" class="btn button btn-vazado">SIM</a>
                            </div>
                            <div class="col-6">
                                <a href="#" onclick="hasEletricVehicle(true)" class="btn button btn-vazado">NÃO</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
    
            body.insertBefore(popup, body.firstChild)
        }
    }

    makePopup();
    removeItens()
    makeBanner();
    makeVehiclesArea();
    makeMap();
    adjustPelasArvores();
    changeOrder();
    makeComoFunciona();
    makeAreaCadastro();
    adjustVantagens();
    makeForm();
})()

function hasEletricVehicle(value) {
    const time = new Date();
    time.setTime(time.getTime() + (365*24*60*60*1000));
    const expires = "expires="+ time.toUTCString();

    if(value === true) {
        document.cookie = "tem_veiculo_eletrico=sim; " + expires;
    } else { 
        document.cookie = "tem_veiculo_eletrico=não; " + expires;
    }

    const popup = document.querySelector(".popup-veiculo-eletrico")

    if(popup) {
        popup.classList.add("d-none")
    }
} 

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function modalCadastro() {
    event.preventDefault()

    const units = [];
    const channel = "Enzo Conecta";
    const category = "Novos";
    const brand = "Enzo Conecta";
    const showUnits = false;
    const showCpf = false;
    const contactsWithDynamicRequired = false;
    const shouldShowDataPermissions = false;
    const dataPermissionsCustomText = "";
    const showLocationFields = true;
    const linkPrivacyPolicy = "";
    const product = "Enzo Conecta"
    const cloneId = ""

    const formModal = document.querySelector(
        '.new-vehicles-dropdown__conversion-form-modal'
    );
    if (!formModal) return;

    render(
        h(window.ConversionFormModal, {
            modalId: 'new-conversion-dropdown-form-modal',
            open: true,
            units,
            product,
            cloneId,
            channel,
            category,
            brand,
            showUnits,
            showCpf,
            contactsWithDynamicRequired,
            shouldShowDataPermissions,
            dataPermissionsCustomText,
            showLocationFields,
            linkPrivacyPolicy,
            titleForm: 'Cadastre-se',
            mainPhrase: 'Contribua com o planeta. Cadastre-se agora e receba as melhores propostas de veículos:',
            privacyPolicyStyle: 'check',
        }),
        formModal
        );
}

function changeLabel() {
    const campoBairro = document.querySelector(".map-units__form .form-group:nth-child(4)")

    if(campoBairro) {
        if(campoBairro.innerHTML.includes("Loja")) {
            const label = campoBairro.querySelector(".control-label")
            label.innerHTML = label.innerHTML.replace("Loja", "Bairro")
            
            const placeholder = campoBairro.querySelector(".choices__list .choices__item")
            placeholder.innerText = "Escolha o bairro"
            
        } 
    }
}

function redirectMapArea() {
    window.location.href = "#mapa"
}