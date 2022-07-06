(() => {
    const container = document.querySelector('.page__container')
    const section = document.createElement("section")
    const sectionBanner = document.createElement("section")
    const sectionBrands = document.createElement("section")
    const footer = document.querySelector("footer")
    const index = document.location.pathname

    if (index === "/" || index === "/stefani-seguros" || index === "/stefani-seguros/") {
        document.title = "Stéfani Seguros"

        if (container) {
            section.classList.add("showcase-insurance")
            sectionBanner.classList.add("showcase-banner-bottom")
            sectionBrands.classList.add("showcase-brands")

            section.innerHTML =
                `<article class="container">
                    <header class="insurance__header">
                        <h2 class="section-component__title">Escolha o Seguro ideal para você</h2>
                    </header>
                    <section class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-4">
                                <div class="card">
                                    <a href="/stefani-seguros/empresa/seguro-automovel" class="card-link">
                                        <div class="card-body automoveis">
                                            <h5 class="card-title">SEGURO <br>DE AUTOMÓVEIS</h5>
                                            <p class="card-text">Temos acordos comerciais com as melhores seguradoras do mercado e sempre que solicitar um orçamento lhe ofereceremos o melhor custo benefício do mercado ou a seguradora de sua preferência.</p>
                                            <a href="/stefani-seguros/empresa/seguro-automovel" class="btn btn-cta">SAIBA MAIS &rarr;</a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="card">
                                    <a href="/stefani-seguros/empresa/seguro-caminhao" class="card-link">
                                        <div class="card-body caminhao">
                                            <h5 class="card-title">SEGURO <br> DE CAMINHÃO</h5>
                                            <p class="card-text">As melhores seguradoras para veículos de carga, além da experiência necessária para realizar seguros que melhor se adéquam a suas necessidades sempre com o melhor custo benefício.</p>
                                            <a href="/stefani-seguros/empresa/seguro-caminhao" class="btn btn-cta">SAIBA MAIS &rarr;</a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="card">
                                    <a href="/stefani-seguros/empresa/seguro-moto" class="card-link">
                                        <div class="card-body moto">
                                            <h5 class="card-title">SEGURO <br> DE MOTOS</h5>
                                            <p class="card-text">Trabalhamos com as melhores seguradoras do mercado e sempre que solicitar um orçamento lhe ofereceremos o melhor produto de acordo com sua preferência com o melhor custo do mercado.</p>
                                            <a href="/stefani-seguros/empresa/seguro-moto" class="btn btn-cta">SAIBA MAIS &rarr;</a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="card">
                                    <a href="/stefani-seguros/empresa/seguro-trator" class="card-link">
                                        <div class="card-body trator">
                                            <h5 class="card-title">SEGURO <br> DE TRATOR</h5>
                                            <p class="card-text">Fatores como utilização da máquina, local de uso, se o bem é financiado ou não, além de outras variáveis, podem interferir na precificação e cobertura do seguro, por isso é importante conhecer sobre o assunto.</p>
                                            <a href="/stefani-seguros/empresa/seguro-trator" class="btn btn-cta">SAIBA MAIS &rarr;</a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="card">
                                    <a href="/stefani-seguros/empresa/seguro-residencial" class="card-link">
                                        <div class="card-body residencial">
                                            <h5 class="card-title">SEGURO <br> RESIDENCIAL</h5>
                                            <p class="card-text">Proteger a sua moradia de incêndio, roubos / furtos, panes elétricas e outros incidentes nunca foi tão fácil. Proteja o seu lar com o seguro residencial</p>
                                            <a href="/stefani-seguros/empresa/seguro-residencial" class="btn btn-cta">SAIBA MAIS &rarr;</a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="card">
                                    <a href="/stefani-seguros/empresa/seguro-de-vida" class="card-link">
                                        <div class="card-body vida">
                                            <h5 class="card-title">SEGURO <br> DE VIDA</h5>
                                            <p class="card-text">O seguro de vida certifica a proteção e só seu, mas também de quem você mais ama e cuida. Proteja seu bem maior. Faça hoje mesmo o seu seguro de vida!</p>
                                            <a href="/stefani-seguros/empresa/seguro-de-vida" class="btn btn-cta">SAIBA MAIS &rarr;</a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="card">
                                    <a href="/stefani-seguros/empresa/seguro-empresarial" class="card-link">
                                        <div class="card-body empresarial">
                                            <h5 class="card-title">SEGURO <br> EMPRESARIAL</h5>
                                            <p class="card-text">As melhores coberturas e serviços de acordo com o tamanho e as necessidades da sua empresa, garantindo seu patrimônio e dando a tranquilidade que você precisa para continuar a administrar seu negócio.</p>
                                            <a href="/stefani-seguros/empresa/seguro-empresarial" class="btn btn-cta ">SAIBA MAIS &rarr;</a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="card">
                                    <a href="/stefani-seguros/empresa/seguro-diversos" class="card-link">
                                        <div class="card-body diversos">
                                            <h5 class="card-title">SEGUROS <br> DIVERSOS</h5>
                                            <p class="card-text">Além dos seguros tradicionais, operamos com uma variedade de produtos. </p>
                                            <a href="/stefani-seguros/empresa/seguro-diversos" class="btn btn-cta">SAIBA MAIS &rarr;</a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>`


            sectionBanner.innerHTML = `
                <article class="container-fluid content">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h3>Sobre </br> a Stéfani</h3>
                        </div>
                        <div class="col-12 col-md-6">
                            <p>
                                Com mais de 20 anos de história, a Stéfani Corretora de Seguros é uma empresa que diferencia-se por prestar um trabalho personalizado para cada cliente. Segurança e compromisso fazem parte da missão do Grupo Stéfani que disponibiliza todos os recursos para garantir 100% de satisfação em cada um de seus ramos de atividade.
                            </p>

                            <p>
                            A atuação da Stéfani Seguros estende-se para automóveis nacionais e importados, caminhões, tratores e equipamentos, motos, residências, empresas, transportes e cargas e Vida.
                            </p>
    
                            <a href="#" class="btn btn-cta ">SAIBA MAIS</a>
                        </div>
                    </div>
                    <hr class="row-banner">
                    <div class="row info__items">
                        <div class="col-12 col-md-3">
                            <h6>EXPERIÊNCIA</h6>
                            <p class="d-none">
                                Buscamos sempre o melhor custo benefício entre as companhias 
                                e apresentamos as melhores opções, para que facilite na hora 
                                de você escolher o seguro que melhor se aplica à sua necessidade.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h6>PREÇO JUSTO</h6>
                            <p class="d-none">
                                Nossa equipe se mantém em constante atualização e treinamento, preparada
                                para atender com total conhecimento em nossas áreas de atuação, seja
                                na comercialização do seguro ou no momento do sinistro.
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h6>TRANSPARÊNCIA </h6>
                            <p class="d-none">
                                Com mais de 30 anos de experiência no mercado de seguros, nossa equipe
                                está pronta para orientar você na melhor solução que irá garantir sua
                                proteção e segurança. 
                            </p>
                        </div>
                        <div class="col-12 col-md-3">
                            <h6>QUALIDADE</h6>
                            <p class="d-none">
                                Entendemos a importância e o valor de cada bem, e trabalhamos com total
                                agilidade desde a cotação até o atendimento de sinistro.
                            </p>
                        </div>
                    </div>
                </article>
                `

            sectionBrands.innerHTML = `
                    <article class="container-fluid content brands-area">
                    <h2>Empresas do Grupo Stéfani - Ribeirão Diesel </h2>
                        <div class="brands">
                            <div class="col-6 col-md-2">
                                <a class="purificadores"><img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/stefani-purificadores.jpg"> </a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Ribeirão Diesel"><img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/ribeirao-diesel.jpg"> </a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Mercedes Benz"> <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/stefani-mercedes-benz.jpg"></a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Massey Ferguson"> <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/stefani-massey-ferguson.jpg"> </a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Motors Toyota"> <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/stefani-motors-toyota.jpg"</a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Steca" > <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/stecar.jpg"</a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Steca America" > <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/stecar-america.jpg"</a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Stefani Seguros"> <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/stefani-seguros.jpg"</a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Itacua"> <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/itacua.jpg"</a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Michelin"> <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/michelin.jpg"</a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Itacua Motos"> <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/itacua-motos.jpg"</a>
                            </div>
                            <div class="col-6 col-md-2">
                                <a class="Reamic"> <img src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/ps/reamic.jpg"</a>
                            </div>
                        </div>
                    </article>
                `


            container.insertBefore(section, footer)
            container.insertBefore(sectionBanner, footer)
            container.insertBefore(sectionBrands, footer)
        }
    }
})()