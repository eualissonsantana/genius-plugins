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

                const topImg = document.createElement("img");
                topImg.classList.add("img-fluid");
                topImg.src = `https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/topo-kinto.jpg`;
                topImg.alt = `Topo Kinto`;

                const kintoApp = document.createElement("section");
                kintoApp.classList.add("kinto-app");
                kintoApp.innerHTML = `
                    <h4>APLICATIVO KINTO</h4>
                    <p>O Aplicativo Kinto foi criado para atender a todas as suas necessidades. Nosso objetivo é  possibilitar a melhor experiência do consumidor com os nossos produtos.
                    Fazemos de tudo para criar uma maneira diferente e personalizada, não só na hora da compra do veículo, mas também em toda a sua jornada com o mesmo. Confira abaixo tudo que o app pode fazer por você e com você.</p>
                `;

                const howWorks = document.createElement("section");
                howWorks.classList.add("how-works");
                howWorks.innerHTML = `
                    <h4>COMO FUNCIONA?</h4>

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
                    <h4>DIFERENCIAIS</h4>

                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div>
                                <h6>FLEXIBILIDADE</h6>
                                <p>
                                    Reserve o seu veículo por hora ou por dia.
                                </p>
                            </div>

                            <div>
                                <h6>VARIEDADE</h6>
                                <p>
                                    Escolha o Toyota que melhor atenda às suas necessidades
                                </p>
                            </div>

                            <div>
                                <h6>LIBERDADE</h6>
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
                                <h6>ACESSIBILIDADE</h6>
                                <p>
                                    Com o Toyota Mobility Services você pode devolver o veículo em qualquer ponto de distribuição.
                                </p>
                            </div>
                            <div>
                                <h6>QUALIDADE TOYOTA</h6>
                                <p>
                                    O Toyota Mobility Services possui toda a qualidade, confiança e transparência que só a Toyota pode oferecer.
                                </p>
                            </div>
                            <div>
                                <h6>TECNOLOGIA</h6>
                                <p>
                                    Uma linha de produtos exclusivas e tecnológicas. Incluindo o novo Corolla, o primeiro híbrido flex do mundo
                                </p>
                            </div>
                        </div>
                    </div>
                `;

                const betterOptionForYou = document.createElement("section");
                betterOptionForYou.classList.add("better-option-for-you");
                betterOptionForYou.innerHTML = ``;

                content.appendChild(topImg);
                content.appendChild(kintoApp);
                content.appendChild(howWorks);
                content.appendChild(differentials);
                content.appendChild(betterOptionForYou);
                contentStaticPage.after(content);

                addStyle(`
                    .kinto-app{
                        padding: 2.5rem 0;
                    }

                    .kinto-app,
                    .how-works{
                        text-align: center;
                        color: #000;
                    }

                    .differentials{
                        color: #000;
                    }

                    .kinto-app h4,
                    .how-works h4,
                    .differentials h4{
                        text-align: center;
                        font-weight: bold;
                        margin-bottom: 0.6rem;
                    }

                    .how-works{
                        padding-bottom: 2.5rem;
                    }

                    .differentials h6{
                        font-weight: bold;
                        margin-bottom: 0;
                    }

                    .how-works > h4,
                    .differentials > h4
                    {
                        margin-bottom: 1.5rem;
                    }
                `);
            }
        }
    });
})();