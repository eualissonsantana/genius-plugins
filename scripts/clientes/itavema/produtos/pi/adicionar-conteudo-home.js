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
        body {
            background: #fff !important;
        }

        #adaptacao {
            background: #fff;
            z-index: 30;
            width: 100%;
            padding-bottom: 60px;
        }

        #adaptacao .btn-topo {
            position: relative;
            margin-top: -30px;
        }
        
        #adaptacao .btn-home {
            background: hsla(var(--primaryHue),calc(var(--primarySat) - 0%),calc(var(--primaryLight) + 0%),1);
            padding: 20px;
            width: 100%;
            position: sticky;
            z-index: 40;
            margin-bottom: 20px;
        }

        #adaptacao .card {
            text-align: center;
            box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            padding: 20px 24px;
        }

        #adaptacao .card img{
            width: auto;
            margin: 0 auto;
        }

        #adaptacao .owl-item {
            padding-bottom: 10px;
        }

        #adaptacao .card-body {
            text-align: center;
        }

        #adaptacao .card-title {
            color: hsla(var(--primaryHue),calc(var(--primarySat) - 0%),calc(var(--primaryLight) + 0%),1);
            line-height: 1.2rem;
            font-size: 14px;
        }

        #adaptacao .background-title {
            color: transparent;
            -webkit-text-stroke: 1px #EAEAEA;
            text-transform: uppercase;
            font-size: 44px;
        }

        #adaptacao .title {
            color: hsla(var(--primaryHue),calc(var(--primarySat) - 0%),calc(var(--primaryLight) + 0%),1);
            text-transform: uppercase;
            top: 28px;
            position: absolute;
        }

        #adaptacao .title-area {
            margin-bottom: 46px;
        }

        #adaptacao .bg-kids {
            background: url("https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/background-kids.png") no-repeat;
            min-height: 340px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between; 
            padding: 32px 32px 16px 32px;
            text-decoration: none;
            color: #fff;
            background-size: cover;
        }

        #adaptacao .bg-kids .titulo-projeto p{
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 16px;
        }

        #adaptacao .bg-kids .titulo-projeto .fa-arrow-right{
            margin-left: 4px;
        }

        #adaptacao .objetivos {
            background-color: #000;
            padding-top: 40px;
            padding-bottom: 80px;
            color: #fff;
            margin-top: 60px;
        }

        #adaptacao .objetivos h2{
            margin-bottom: 0;
            line-height: 2.5rem
        }

        #adaptacao .objetivos p {
            margin-top: 0;
            font-weight: bold;
        }

        #adaptacao .objetivos p {
            margin-top: 0;
        }

        #adaptacao .bg-vermelho {
            background-color: #E3233C;
        }

        #adaptacao .bg-verde {
            background-color: #4C9F45;
        }

        #adaptacao .bg-rosa {
            background-color: #DC1769;
        }

        #adaptacao .texto-azul {
            color: #2299DD;
        }

        #adaptacao .numero {
            text-align: right;
        }

        #adaptacao .ods-card {
            text-align: center;
            padding: 16px;
        }

        #adaptacao .ods-card .conteudo {
            margin-top: 30px;
        }

        #adaptacao .ods-card img {
            margin-bottom: 14px;
        }

        #adaptacao .ods-card .conteudo p {
            font-weight: bold;
        }

        #adaptacao .ods-card img {
            width: auto;
            height: 70px;
        }

        #adaptacao .objetivos .cards {
            margin-top: 32px;
        }

        #parceiros-area .parceiros {
            background-color: #fff;
        }

        #parceiros-area .parceiros .logos{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-bottom: 120px;
        }

        carousel~.social-sharer {
            margin-top: 40px;
        }

        #adaptacao .texto-mobile {
            display: none;
        }

        @media (max-width: 768px) {
            #adaptacao .background-title {
                font-size: 36px;
            }

            #adaptacao .title {
                top: 16px;
                font-size: 28px;
            }

            #adaptacao .bg-kids {
                min-height: 180px;
                margin-bottom: 16px;
            }

            .col-12 {
                padding: 0 !important;
            }

            #adaptacao .objetivos {
                padding: 24px 16px;
            }

            #adaptacao .objetivos .cards {
                padding: 0 60px;
            }

            #adaptacao .objetivos .ods-card {
                margin-bottom: 16px;
            }

            #parceiros-area .parceiros .col{
                width: 50%;
                margin: 10px 0;
                text-align: center;
            }

            #adaptacao .card {
                padding: 20px 8px 8px 8px;
                border-bottom: 4px solid hsla(var(--primaryHue),calc(var(--primarySat) - 0%),calc(var(--primaryLight) + 0%),1);
            }

            #adaptacao .texto-mobile {
                display: block;
                color: hsla(var(--primaryHue),calc(var(--primarySat) - 0%),calc(var(--primaryLight) + 0%),1);
                font-weight: bold;
                font-size: 10px;
            }
        }

        @media (min-width: 768px) {
            #parceiros-area .parceiros .logos img{
                height: 40px;
                width: auto;
            }
        }
    `

    const url = window.location.pathname

    if(url === "/instituto-andre-franco-vive" || url === "") {
        const sectionHome = document.createElement("section")
        const sectionParceiros = document.createElement("section")
        const sectionAbout = document.querySelector("#about")
        const sectionFooter = document.querySelector("#footer")
        sectionHome.setAttribute("id", "adaptacao")
        sectionParceiros.setAttribute("id", "parceiros-area")

        sectionHome.innerHTML = `
            <div class="btn-topo container">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <a class="btn btn-home" href="#">SEJA VOLUNTÁRIO</a>
                    </div>
                    <div class="col-12 col-md-4">
                        <a class="btn btn-home" href="#">FINANCIE UM PROJETO</a>
                    </div>
                    <div class="col-12 col-md-4">
                        <a class="btn btn-home" href="#">DOE HOJE E AJUDE ALGUÉM</a>
                    </div>
                </div>
            </div>
            <div class="container row carrossel-projetos">
                <div class="title-area">
                    <h1 class="background-title">Nossos Projetos</h1>
                    <h3 class="title">Nossos Projetos</h3>
                </div>
                <div class="owl-carousel carousel-nossos-projetos owl-theme">
                    <div class="item">
                        <div class="card">
                            <img class="card-img-top" src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/coracao.png" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">SÓCIO </br> EDUCATIVO<h5/>
                            </div>
                            <div class="texto-mobile"><span>SAIBA MAIS <span class="fa fa-arrow-right icon"></span></span></div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card">
                            <img class="card-img-top" src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/maos.png" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">LEIS DE </br>INCENTIVO<h5/>
                            </div>
                            <div class="texto-mobile"><span>SAIBA MAIS <span class="fa fa-arrow-right icon"></span></span></div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card">
                            <img class="card-img-top" src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/jovem.png" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">JOVEM </br>APRENDIZ<h5/>
                            </div>
                            <div class="texto-mobile"><span>SAIBA MAIS <span class="fa fa-arrow-right icon"></span></span></div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card">
                            <img class="card-img-top" src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/chapeu.png" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">FORMAÇÃO </br> BÁSICA<h5/>
                            </div>
                            <div class="texto-mobile"><span>SAIBA MAIS <span class="fa fa-arrow-right icon"></span></span></div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card">
                            <img class="card-img-top" src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/mala.png" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">CAPACITAÇÃO DOS </br>TRABALHADORES<h5/>
                            </div>
                            <div class="texto-mobile"><span>SAIBA MAIS <span class="fa fa-arrow-right icon"></span></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container row">
                <div class="title-area">
                    <h1 class="background-title">Nossos Projetos</h1>
                    <h3 class="title">Nossos Projetos</h3>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <a href="#" class="bg-kids">
                            <div>
                                <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/voluntariado.png" alt="">
                            </div>
                            <div class="titulo-projeto">
                                <p>VOLUNTARIADO</p>
                                <span>SAIBA MAIS <span class="fa fa-arrow-right icon"></span></span>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-md-6">
                        <a href="#" class="bg-kids">
                            <div>
                                <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/coracao-branco.png" alt="">
                            </div>
                            <div class="titulo-projeto">
                                <p>DOAÇÕES</p>
                                <span>SAIBA MAIS <span class="fa fa-arrow-right icon"></span></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="objetivos">
                <div class="row">
                    <h2>ODS - Objetivo de desenvolvimento sustentável</h2>
                    <p>O INSTITUTO <span class="texto-azul">ANDRÉ FRANCO VIVE</span> ESTÁ ALINHADO AOS ODS</p>

                    <div class="row cards">
                        <div class="col-12 col-md-3">
                            <div class="ods-card bg-vermelho">
                                <div class="numero">
                                    <span>#01</span>
                                </div>
                                <div class="conteudo">
                                    <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/pessoas.png" alt="Card image cap">
                                    <p>ERRADICAÇÃO </br> DA POBREZA</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3">
                            <div class="ods-card bg-verde">
                                <div class="numero">
                                    <span>#03</span>
                                </div>
                                <div class="conteudo">
                                    <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/bem-estar.png" alt="Card image cap">
                                    <p>SAÚDE E </br> BEM-ESTAR</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3">
                            <div class="ods-card bg-vermelho ">
                                <div class="numero">
                                    <span>#04</span>
                                </div>
                                <div class="conteudo">
                                    <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/educacao.png" alt="Card image cap">
                                    <p>EDUCAÇÃO DE </br> QUALIDADE</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3">
                            <div class="ods-card bg-rosa">
                                <div class="numero">
                                    <span>#10</span>
                                </div>
                                <div class="conteudo">
                                    <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/reducao-desigualdade.png" alt="Card image cap">
                                    <p>REDUÇÃO DAS </br> DESIGUALDADES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        `

        sectionParceiros.innerHTML = `
            <div class="parceiros container row">
                <h3 class="title">PATROCÍNIOS E APOIOS</h3>
                <div class="logos">
                    <div class="col">
                        <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/dacarto.png" alt="">
                    </div>
                    <div class="col">
                        <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/consigaz.png" alt="">
                    </div>
                    <div class="col">
                        <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/tegma.png" alt="">
                    </div>
                    <div class="col">
                        <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/dr-oetker.png" alt="">
                    </div>
                    <div class="col">
                        <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/oi.png" alt="">
                    </div>
                    <div class="col">
                        <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/ecourbis.png" alt="">
                    </div>
                    <div class="col">
                        <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/tropeiro.png" alt="">
                    </div>
                    <div class="col">
                        <img src="https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pi/instituto-capim-santo.png" alt="">
                    </div>
                </div>
            </div>
        `

        sectionAbout.parentNode.insertBefore(sectionHome, sectionAbout)
        sectionFooter.parentNode.insertBefore(sectionParceiros, sectionFooter)

        $('.carousel-nossos-projetos').owlCarousel({
            loop: false,
            margin: 20,
            nav: false,
            responsive:{
                0:{
                    items:2,
                    loop:true,
                    center: true,
                },
                600:{
                    items:6
                },
                1000:{
                    items:5
                }
            }
        })
    }
})()

