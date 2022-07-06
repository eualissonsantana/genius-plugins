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

    const styles = `
        .carousel-vehicles-new {
            display: none;
        }

        .showcase-banner-bottom {
            background-image: url("https://legado.autoforce.com.br/assets/images/ene-seguros/banner-bottom.jpg");
            background-size: cover;
            color: #fff;
            margin-top: 90px;
        }

        .showcase-banner-bottom .content {
            padding: 120px 165px 80px 165px;
        }

        .showcase-insurance .insurance__header {
            margin-bottom: 40px;
        }

        .insurance__header h2 {
            font-size: 32px;
            font-weight: 700;
            margin: 40px 0;
        }

        .brands-area h2 {
            font-size: 32px;
            font-weight: 700;
            color: #333;
            margin-bottom: 60px;
            background-color: #fff;
        }

        .card-section {
            display: flex;
        }

        .card-area {
            max-width: 33%;
        }

        .btn-cta {
            width: 100%;
            background-color: #fff;
            color: #000 !important;
            border-radius: 50px;
            height: 48px;
            font-size: 14px;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .card-link{
            color: #fff !important;
            text-decoration: none !important;
        }

        .card-body {
            object-fit: cover;
            background-size: cover;
            padding-right: 24px !imporant;
        }

        .card h5 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 120px;
            line-height: 32px;
        }

        .card p  {
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 24px !important; 
        }

        .card .automoveis {
            background-image: url("https://legado.autoforce.com.br/assets/images/ene-seguros/automoveis.jpg");
        }

        .card .trator .card-title {
            margin-bottom: 100px;
        }

        .card .empresarial .card-title {
            margin-bottom: 99px;
        }

        .card .diversos .card-title {
            margin-bottom: 162px;
        }

        .card .condominio {
            background-image: url("https://legado.autoforce.com.br/assets/images/ene-seguros/condominio.jpg");
        }

        .card .carta-verde {
            background-image: url("https://legado.autoforce.com.br/assets/images/ene-seguros/carta-verde.jpg");
        }

        
        .card .residencial {
            background-image: url("https://legado.autoforce.com.br/assets/images/ene-seguros/residencial.jpg");
        }

        .card .trator {
            background-image: url("https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/trator.jpg");
        }

        .card .moto {
            background-image: url("https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/motocicleta.jpg");
        }

        .card .caminhao {
            background-image: url("https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/caminhao.jpg");
        }

        .card .diversos {
            background-image: url("https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/diversos.jpg");
        }

        .card .vida {
            background-image: url("https://legado.autoforce.com.br/assets/images/ene-seguros/vida.jpg");
        }

        
        .card .solares {
            background-image: url("https://legado.autoforce.com.br/assets/images/ene-seguros/solar.jpg");
        }
        
        .card .empresarial {
            background-image: url("https://legado.autoforce.com.br/assets/images/ene-seguros/empresarial.jpg");
        }

        .showcase-banner-bottom .content h3{
            font-size: 40px;
            font-weight: 700;
            line-height: 55px;
        }

        .showcase-banner-bottom .content h6{
            font-size: 16px;
            font-weight: 800;
            margin-bottom: 24px;
        }

        .showcase-banner-bottom .content p{
            font-size: 16px;
        }

        .showcase-banner-bottom .btn-cta {
            width: 65% !important;
            margin-top: 48px !important;
        }

        .showcase-banner-bottom hr {
            margin: 60px 0 50px 0 !important;
        }

        .info__items-mobile {
            display: none;
        }

        .brands-area {
            background-color: #FFF;
            padding: 40px 150px;
        }

        .brands {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .brands img {
            width: 140px;
            margin: 0 13px 40px;
        }

        .brand-footer__area img {
            width: 100px;
            margin-bottom: 25px;
        }

        .footer__units {
            padding-top: 30px !important;
        }

        .brand-footer__area {
            display: flex;
            justify-content: center;
        }

        @media (max-width: 768px)
        {
            .card h5 {
                margin-bottom: 30px;
            }

            .automeveis h5 {
                margin-bottom: 50px;
            }

            .showcase-insurance .btn-cta {
                display: none;
            }

            .card {
                margin-bottom: 40px !important;
            }

            .card p {
                margin-bottom: 0px;
            }

            .showcase-banner-bottom .content {
                padding: 50px 24px 0px 24px;
            }

            .showcase-banner-bottom .content h3{
                font-size: 24px;
                line-height: 32px;
                margin-bottom: 36px;
            }

            .showcase-banner-bottom .btn-cta {
                width: 100% !important;
                margin-bottom: 66px;
            }

            .row-banner {
                display: none;
            }

            .showcase-banner-bottom {
                margin-top: 32px;
            }

            .info__items-mobile {
                display: inline-block;
            }

            .brands-area {
                padding: 32px 12px;
            }

            .card {
                margin-bottom: 16px !important;
            }

            .showcase-banner-bottom .content h6{
                margin-bottom: 8px;
            }

            .info__items p {
                margin-bottom: 36px !important;
            }

            .showcase-banner-bottom {
                background-image: url("https://legado.autoforce.com.br/assets/images/ene-seguros/banner-bottom-mobile.jpg");
            }
        }

        @media (max-width: 320px) {
            .brands img {
                width: 120px;
            }
        }

    `

    const isIndex = document.location.pathname

    if(isIndex === "/" || isIndex === "/stefani-seguros" || isIndex === "/stefani-seguros/"){
        addStyle(styles)
    }

})()