(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }

        if(isThisPage({ urlPiece: "empresa/aplicativo-kinto-share-toyota" })){
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

            const contentStaticPage = document.querySelector(".page__container .content--static-page");

            if(contentStaticPage){
                const content = document.createElement("div");
                content.classList.add("container");

                const kintoApp = document.createElement("section");
                kintoApp.classList.add("kinto-app");
                kintoApp.innerHTML = `
                    <h4 class="title">APLICATIVO KINTO</h4>
                    <p>O Aplicativo Kinto foi criado para atender a todas as suas necessidades. Nosso objetivo é  possibilitar a melhor experiência do consumidor com os nossos produtos.
                    Fazemos de tudo para criar uma maneira diferente e personalizada, não só na hora da compra do veículo, mas também em toda a sua jornada com o mesmo. Confira abaixo tudo que o app pode fazer por você e com você.</p>
                `;

                const howWorks = document.createElement("section");
                howWorks.classList.add("how-works");
                howWorks.innerHTML = `
                    <h4 class="title">COMO FUNCIONA?</h4>

                    <div class="card-deck">
                        <div class="card">
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/kinto-app1.jpg" 
                                class="img-fluid"
                                alt="Kinto App1"
                            />
                            <div class="card-body">
                                <h4>1.</h4>
                                <p>
                                    Baixe o app Toyota Mobility Services e  preencha o cadastro com seus dados pessoais, CNH e número de cartão de crédito*
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/kinto-app2.jpg" 
                                class="img-fluid"
                                alt="Kinto App1"
                            />
                            <div class="card-body">
                                <h4>2.</h4>
                                <p>
                                    Informe o período de locação. Você pode reservar por hora ou por dia,  de acordo com a sua necessidade.
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/kinto-app3.jpg" 
                                class="img-fluid"
                                alt="Kinto App1"
                            />
                            <div class="card-body">
                                <h4>3.</h4>
                                <p>
                                    Filtre os veículos por categoria e escolha o que melhor atende a sua necessidade.
                                </p>
                            </div>
                        </div>
                        <div class="card">
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/kinto-app4.jpg" 
                                class="img-fluid"
                                alt="Kinto App1"
                            />
                            <div class="card-body">
                                <h4>4.</h4>
                                <p>
                                    Escolha a concessionária mais próxima de você para retirar o veículo e agora é só aproveitar o seu Toyota!
                                </p>
                            </div>
                        </div>
                    </div>
                `;

                const differentials = document.createElement("section");
                differentials.classList.add("differentials");
                differentials.innerHTML = `
                    <h4 class="title">DIFERENCIAIS</h4>

                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div>
                                <h6>Flexibilidade</h6>
                                <p>
                                    Reserve o seu veículo por hora ou por dia.
                                </p>
                            </div>

                            <div>
                                <h6>Variedade</h6>
                                <p>
                                    Escolha o Toyota que melhor atenda às suas necessidades
                                </p>
                            </div>

                            <div>
                                <h6>Liberdade</h6>
                                <p>
                                    Você tem a opção de retirar o veículo em uma estação Toyota Mobility e devolver em outra*
                                </p>
                                <p>
                                    *Consulte lista de estações Toyota Mobility
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div>
                                <h6>Acessibilidade</h6>
                                <p>
                                    Com o Toyota Mobility Services você pode devolver o veículo em qualquer ponto de distribuição.
                                </p>
                            </div>
                            <div>
                                <h6>Qualidade Toyota</h6>
                                <p>
                                    O Toyota Mobility Services possui toda a qualidade, confiança e transparência que só a Toyota pode oferecer.
                                </p>
                            </div>
                            <div>
                                <h6>Tecnologia</h6>
                                <p>
                                    Uma linha de produtos exclusivas e tecnológicas. Incluindo o novo Corolla, o primeiro híbrido flex do mundo
                                </p>
                            </div>
                        </div>
                    </div>
                `;

                const betterOptionForYou = document.createElement("section");
                betterOptionForYou.classList.add("better-option-for-you");
                betterOptionForYou.innerHTML = `
                    <h4 class="title">ESCOLHA A MELHOR OPÇÃO PARA VOCÊ</h4>

                    <div class="row" style="justify-content: center;">
                        <div class="col-lg-4 col-md-4 col-sm-12 pb-3">
                            <div class="card">
                                <img 
                                    src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/kinto-luxo.jpg" 
                                    class="img-fluid"
                                    alt="Kinto Luxo"
                                />
                                <h5>Luxo</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 pb-3">
                            <div class="card">
                                <img 
                                    src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/kinto-mobilidade.jpg" 
                                    class="img-fluid"
                                    alt="Kinto Mobilidade"
                                />
                                <h5>Mobilidade</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 pb-3">
                            <div class="card">
                                <img 
                                    src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/kinto-aventura.jpg" 
                                    class="img-fluid"
                                    alt="Kinto Aventura"
                                />
                                <h5>Aventura e utilidade</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 pb-3">
                            <div class="card">
                                <img 
                                    src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/kinto-urbano.jpg" 
                                    class="img-fluid"
                                    alt="Kinto Urbano"
                                />
                                <h5>Urbano</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 pb-3">
                            <div class="card">
                                <img 
                                    src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/kinto-tecnologia.jpg" 
                                    class="img-fluid"
                                    alt="Kinto Tecnologia"
                                />
                                <h5>Tecnologia</h5>
                            </div>
                        </div>
                    </div>

                    <a 
                        href="https://kintomobility.com.br/share"
                        target="_blank"
                        class="btn button button--primary button--large"
                    >
                        SAIBA MAIS 
                    </a>
                `;

                content.appendChild(kintoApp);
                content.appendChild(howWorks);
                content.appendChild(differentials);
                content.appendChild(betterOptionForYou);
                contentStaticPage.after(content);

                addStyle(`
                    .kinto-app,
                    .how-works,
                    .differentials,
                    .better-option-for-you{
                        text-align: center;
                        color: #000;
                        padding-bottom: 2.5rem;
                    }

                    .kinto-app h4,
                    .how-works h4,
                    .differentials h4,
                    .better-option-for-you h4{
                        text-align: center;
                        font-weight: bold;
                        margin-bottom: 0.6rem;
                    }

                    .kinto-app .title::after,
                    .how-works .title::after,
                    .differentials .title::after,
                    .better-option-for-you .title::after{
                        content: '';
                        display: block;
                        margin: 0 auto;
                        margin-top: 0.3rem;
                        background: #DE2326;
                        width: 5rem;
                        height: .2rem;
                    }

                    .differentials h6{
                        font-weight: bold;
                        margin-bottom: 0;
                    }

                    .better-option-for-you h5{
                        padding: .8rem 0;
                    }

                    .kinto-app > h4,
                    .how-works > h4,
                    .differentials > h4,
                    .better-option-for-you > h4
                    {
                        margin-bottom: 1.5rem;
                    }

                    .better-option-for-you a{
                        margin-bottom: 1rem;
                    }

                    

                    @media screen and (min-width: 992px) {
                        .better-option-for-you a{
                            width: 11rem;
                        }

                        .content__form-with-banner{
                            margin-top: 0 !important;
                        }

                        .content__text--with-bait{
                            flex: inherit !important;
                        }
    
                        .content__form{
                            flex: inherit !important;
                        }

                        .content__container{
                            justify-content: center !important;
                        }
                    }
                `);
            }
        }
    });
})();