(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href;
        const result = fullURL.includes(urlPiece);

        return result;
    }

    if(isThisPage({ urlPiece: 'empresa/kinto' })){
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

        const contentStaticPage = document.querySelector(".content--static-page");
    
        if(contentStaticPage){
            const kintoWrapper = document.createElement("div");
            kintoWrapper.classList.add("container", "kinto", "mb-4");
            kintoWrapper.innerHTML = `
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card">
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/saldanha-moreira/produtos/sd/kinto/kinto-one-personal.jpg" 
                                class="img-fluid"
                                alt="KINTO ONSE PERSONAL"
                            />
                            <div class="card-body">
                                <h4>KINTO ONE PERSONAL</h4>
                                <p class="pt-2">
                                    Projetado para ir além dos aluguéis tradicionais, oferece uma excelente flexibilidade para todas as suas necessidades de mobilidade. Para uma conveniência incomparável, você pode ter o TOYOTA que deseja entregue diretamente na sua porta com apenas um clique.
                                </p>
                                <p>
                                    E como essa modalidade de assinatura inclui toda a manutenção programada, seguro e impostos por uma taxa fixa mensal, tudo o que você precisa fazer é abastecer combustível. Muito fácil, né?
                                </p>
                                <p>
                                    Além disso, os pacotes de diárias permitem a utilização de outros modelos Toyota além do assinado, de forma totalmente inclusa na sua assinatura.
                                </p>
                                <p>
                                    Escolha o seu veículo no aplicativo e venha retirar aqui na Douramotors Toyota, serviço KINTO presente nas unidades de Dourados e Três Lagoas.
                                </p>
                                <div class="header__phones-container">
                                    <button 
                                        class="btn button button--primary w-100"
                                        data-toggle="dropdown"
                                    >
                                        CLIQUE E SAIBA MAIS 
                                    </button>

                                    <div class="card-collapse header__card-phones dropdown-menu">
                                        <div class="header__card-phones-items">
                                            <div 
                                                data-parent="#header-card-phones" 
                                                data-toggle="collapse" 
                                                class="card-collapse__header collapsed"
                                            > 
                                                <a 
                                                    href="https://wa.me/556796734024"
                                                    target="_blank"
                                                >
                                                    <i class="icon icon-whatsapp pr-2"></i>
                                                    <span>Douramotors Dourados </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="header__card-phones-items">
                                            <div 
                                                data-parent="#header-card-phones" 
                                                data-toggle="collapse" 
                                                class="card-collapse__header collapsed"
                                            > 
                                                <a 
                                                    href="https://api.whatsapp.com/send?phone=556792848808&text=SAIBAMAIS"
                                                    target="_blank"
                                                >
                                                    <i class="icon icon-whatsapp pr-2"></i>
                                                    <span>Douramotors Três Lagoas </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card">
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/saldanha-moreira/produtos/sd/kinto/kinto-share.jpg" 
                                class="img-fluid"
                                alt="KINTO SHARE"
                            />
                            <div class="card-body">
                                <h4>KINTO SHARE</h4>
                                <p class="pt-2">
                                    O KINTO Share oferece a liberdade de um automóvel, sem os custos de propriedade. Com um conceito de autoatendimento integrado permite que você escolha o carro certo qualquer ocasião, e vem cá, existe um TOYOTA para cada momento né? Seja uma viagem com os amigos, uma trilha que exige maior potência ou uma reunião de negócios que prevalece a elegância, sob demanda, sem abrir mão de segurança, conforto e conveniência. 
                                </p>
                                <p>
                                    Os carros possuem no mínimo 4 Estrelas no Latin NCap e são revisados periodicamente aqui na Douramotors, utilizando peças genuínas e seguindo todos os padrões estabelecidos pela montadora. Todos os carros contam com Seguro, assistência 24 horas e serviços de monitoramento, além de todo o suporte da equipe Pós Vendas da Toyota Douramotors sempre que necessário.
                                </p>
                                <p>
                                    É rápido, É fácil, é KINTO!
                                </p>
                                <p>
                                    Sem longos contratos ou assinaturas. Basta se cadastrar no aplicativo, fazer a reserva por hora ou por dia, de acordo com a sua necessidade, e vir retirar aqui na Douramotors Toyota, serviço KINTO presente nas unidades de Dourados e Três Lagoas.
                                </p>
                                <div class="header__phones-container">
                                    <button 
                                        class="btn button button--primary w-100"
                                        data-toggle="dropdown"
                                    >
                                        CLIQUE E SAIBA MAIS 
                                    </button>

                                    <div class="card-collapse header__card-phones dropdown-menu">
                                        <div class="header__card-phones-items">
                                            <div 
                                                data-parent="#header-card-phones" 
                                                data-toggle="collapse" 
                                                class="card-collapse__header collapsed"
                                            > 
                                                <a 
                                                    href="https://wa.me/556796734024"
                                                    target="_blank"
                                                >
                                                    <i class="icon icon-whatsapp pr-2"></i>
                                                    <span>Douramotors Dourados </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="header__card-phones-items">
                                            <div 
                                                data-parent="#header-card-phones" 
                                                data-toggle="collapse" 
                                                class="card-collapse__header collapsed"
                                            > 
                                                <a 
                                                    href="https://api.whatsapp.com/send?phone=556792848808&text=SAIBAMAIS"
                                                    target="_blank"
                                                >
                                                    <i class="icon icon-whatsapp pr-2"></i>
                                                    <span>Douramotors Três Lagoas </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card">
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/saldanha-moreira/produtos/sd/kinto/kinto-one-fleet.jpg" 
                                class="img-fluid"
                                alt="KINTO ONE FLEET"
                            />
                            <div class="card-body">
                                <h4>
                                    KINTO ONE FLEET
                                </h4>
                                <p class="pt-2">
                                    O KINTO One Fleet é muito mais do que um simples serviço de terceirização de frotas. Neste modelo de assinatura, você assinante vai poder reduzir sua estrutura administrativa dedicada à gestão de frota. A KINTO faz esse trabalho por você, de maneira eficiente, otimizando o seu tempo!
                                </p>
                                <p>
                                    Além dos serviços tradicionais como gestão de multas, agendamento de serviços e assistência 24 horas, você porá contar com a alta qualidade em serviços aqui na Toyota Douramotors: manutenção preventiva, telemetria, seguro, assistência 24 horas, renovação dos pneus e muito mais.
                                </p>
                                <p>
                                    Mais do que um serviço de gestão de frotas. O seu parceiro favorito de negócios!
                                </p>
                                <p>
                                    Você pode contratar uma unidade até quantos veículos precisar, sem limite mínimo ou máximo. Entre em contato e faça uma simulação do negócio aqui na Douramotors. 
                                </p>
                                <div class="header__phones-container">
                                    <button 
                                        class="btn button button--primary w-100"
                                        data-toggle="dropdown"
                                    >
                                        CLIQUE E SAIBA MAIS 
                                    </button>

                                    <div class="card-collapse header__card-phones dropdown-menu">
                                        <div class="header__card-phones-items">
                                            <div 
                                                data-parent="#header-card-phones" 
                                                data-toggle="collapse" 
                                                class="card-collapse__header collapsed"
                                            > 
                                                <a 
                                                    href="https://wa.me/556796734024"
                                                    target="_blank"
                                                >
                                                    <i class="icon icon-whatsapp pr-2"></i>
                                                    <span>Douramotors Dourados </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="header__card-phones-items">
                                            <div 
                                                data-parent="#header-card-phones" 
                                                data-toggle="collapse" 
                                                class="card-collapse__header collapsed"
                                            > 
                                                <a 
                                                    href="https://api.whatsapp.com/send?phone=556792848808&text=SAIBAMAIS"
                                                    target="_blank"
                                                >
                                                    <i class="icon icon-whatsapp pr-2"></i>
                                                    <span>Douramotors Três Lagoas </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            contentStaticPage.before(kintoWrapper);
            contentStaticPage.remove();

            const kintoCardButtons = document.querySelectorAll(".kinto .card .header__phones-container button.btn");
            kintoCardButtons.forEach(kintoCardButton => {
                kintoCardButton.addEventListener("click", () => {
                    kintoCardButton.parentNode.classList.toggle("show");
                    kintoCardButton.parentNode.querySelector(".dropdown-menu").classList.toggle("show");
                });
            });

            addStyle(`
                .kinto .card .card-body a{
                    text-decoration: none;
                }

                .kinto .card .card-body a i{
                    font-size: 1rem
                }

                .kinto .card .card-body a,
                .kinto .card .card-body h4{
                    color: #000;
                }

                .kinto .card .card-body h4{
                    font-weight: bold;
                }

                .kinto .card .card-body p{
                    text-align: justify;
                }

                .kinto .card .card-body h4::after{
                    content: '';
                    display: block;
                    margin: 0.5rem 0;
                    background: #DE2326;
                    width: 5rem;
                    height: 0.3rem;
                }

                .kinto .card .card-body a.btn{
                    color: #fff;
                }
            `);
        }
    }
})();