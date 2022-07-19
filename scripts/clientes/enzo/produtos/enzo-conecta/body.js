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
            border: 2px solid hsl(var(--primary-hue),var(--primary-sat),var(--primary-light));
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

        #banner {
            min-height: 550px;
            width: 100%;
            background: url('https://legado.autoforce.com.br/plugins/scripts/clientes/enzo/produtos/enzo-conecta/images/banner-enzo-conecta.png');
            background-repeat: no-repeat !important;
            background-position-y: bottom !important;
            background-size: cover !important;
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
            z-index: 1;
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
            font-size: 1.5rem;
            margin-bottom: 0;
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

        @media (max-width: 768px) {
            #banner {
                min-height: 200px;
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
                
        }

        @media (min-width: 1200px) {
            #banner > .container {
                max-width: 1350px;
            }
            
            .form-conversion--static {
                margin-top: -500px;
            }

            .form-conversion__body .btn {
                padding: 16px 60px;
                position: absolute;
                width: initial !important;
                margin-left: 18px;
                bottom: -30px;
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
    
            mountVehiclesData(vehiclesDataJson);
            buildSelectNewVehicles(vehiclesData);
        });
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
            form.setAttribute("id", "form")
            
            form.innerHTML = `
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-12 col-md-5 d-flex justify-content-end">
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

    function makeForm() {
    // Renderiza o componente reativo para o formulário de conversão
        var formComponentContainer = document.querySelector(
            '.static-conversion-form'
        )

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
            showLocationFields:true
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
    //makeVehiclesArea();
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