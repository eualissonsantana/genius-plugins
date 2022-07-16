(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href;
        const result = fullURL.includes(urlPiece);

        return result;
    }

    if(isThisPage({ urlPiece: 'empresa/fuse' })){
        const contentStaticPage = document.querySelector(".content--static-page .container");
    
        if(contentStaticPage){
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
    
            const hostName = location.hostname;
            const pathName = hostName.includes('autodromo.app') ? 'stefani-massey-ferguson'  : '';
    
            const fuseWrapper = document.createElement("div");
            fuseWrapper.classList.add("container");
            fuseWrapper.innerHTML = `
                <div class="fuse-tecnologies pt-4">
                    <h1 class="mb-2">FUSE Technologies</h1>
    
                    <h4 class="text-justify">
                        A Fuse é a plataforma aberta líder mundial para produtos da agricultura digital, operada pela AGCO Corp.
                    </h4>
    
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 align-self-center mt-3 mb-3">
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/fuse/fuse-imagem.png" 
                                class="img-fluid"
                                alt="Fuse Imagem"
                            />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 align-self-center mt-3 mb-3">
                            <p class="text-justify">
                                Com as soluções pioneiras da Fuse de gestão de fazenda você tem produtos e serviços totalmente conectados e integrados, trabalhando no lugar certo e no tempo certo, em todas as etapas de produção: plantio, manejo, colheita e armazenamento de grãos que conecta gerenciamento, controle e tecnologia para aumentar a sua rentabilidade.
                            </p>
                            <p class="text-justify">
                                A tecnologia Fuse garante não somente que seus produtos sejam compatíveis com frotas mistas como também com todas as operações da fazenda. Isso significa que a Fuse dá aos produtores rurais liberdade e flexibilidade na escolha do maquinário, da gestão da fazenda e do software agronômico.
                            </p>
                            <h6 class="text-justify">
                                <a href="#fuse-cards">
                                    Conheça abaixo as tecnologias e sistemas que integram a Fuse, e possibilitam uma agricultura inteligente.
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
    
                <div class="card-deck mt-4" id="fuse-cards">
                    <div class="card">
                        <a  
                            class="text-decoration-none"
                            href="/${pathName}/empresa/fieldstar-ii"
                        >
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/fuse/fieldstar.png" 
                                class="img-fluid"
                                alt="Fieldstar II"
                            />
                            <div class="card-body">
                                <h4>Fieldstar® II</h4>
                                <p class="text-justify pt-2">
                                    Primeiro sistema para mapeamento mecanizado da produtividade. 
                                    Consiste de sensores, receptor GPS e um terminal de interface com o 
                                    usuário, onde os dados de colheita são armazenados em um dispositivo 
                                    móvel.
                                </p>
                                <a 
                                    class="btn button button--primary w-100 mt-1" 
                                    href="/${pathName}/empresa/fieldstar-ii"
                                >
                                    Saiba Mais 
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="card">
                        <a  
                            class="text-decoration-none"
                            href="/${pathName}/empresa/auto-guide-3000"
                        >
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/fuse/auto-guide-3000.png" 
                                class="img-fluid"
                                alt="Auto Guide 3000"
                            />
                            <div class="card-body">
                                <h4>Auto Guide™ 3000</h4>
                                <p class="text-justify pt-2">
                                    Sistema de piloto automático, guiado por satélite. Desenvolvido para reduzir custos e aumentar a produtividade da lavoura, pois mantém a máquina no traçado exato, evitando falhas, e reduzindo a fadiga do operador.
                                </p>
                                <a 
                                    class="btn button button--primary w-100 mt-1" 
                                    href="/${pathName}/empresa/auto-guide-3000"
                                >
                                    Saiba Mais 
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="card">
                        <a  
                            class="text-decoration-none"
                            href="/${pathName}/empresa/controle-de-secao-mf"
                        >
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/fuse/controle-secao-mf.png" 
                                class="img-fluid"
                                alt="Controle de Seção MF"
                            />
                            <div class="card-body">
                                <h4>Controle de Seção MF</h4>
                                <p class="text-justify pt-2">
                                    Com o controle de seção automático,os operadores aplicam sementes, adubo ou pesticidas sem sobreposição. Isso evita tratamento dobrado e áreas trabalhadas fora do campo, o que resulta em aplicações mais econômicas.
                                </p>
                                <a 
                                    class="btn button button--primary w-100 mt-1" 
                                    href="/${pathName}/empresa/controle-de-secao-mf"
                                >
                                    Saiba Mais 
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="card">
                        <a  
                            class="text-decoration-none"
                            href="/${pathName}/empresa/next-farming"
                        >
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/fuse/conversao-rotas-next.png" 
                                class="img-fluid"
                                alt="Conversão de Rotas NEXT"
                            />
                            <div class="card-body">
                                <h4>Conversão de Rotas NEXT</h4>
                                <p class="text-justify pt-2">
                                    Essa ferramenta baseada na web converte linhas A-B para formatos dos diferentes fabricantes, permitindo que você converta facilmente rotas e delimitações do terreno.
                                </p>
                                <a 
                                    class="btn button button--primary w-100 mt-1" 
                                    href="/${pathName}/empresa/next-farming"
                                >
                                    Saiba Mais 
                                </a>
                            </div>
                        </a>
                    </div>
                </div>
    
                <div class="card-deck mt-4">
                    <div class="card">
                        <a  
                            class="text-decoration-none"
                            href="/${pathName}/empresa/rede-rtk"
                        >
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/fuse/rede-rtk.png" 
                                class="img-fluid"
                                alt="Rede RTK"
                            />
                            <div class="card-body">
                                <h4>Rede RTK</h4>
                                <p class="text-justify pt-2">
                                    A tecnologia mais moderna de sinal GNSS, que garante precisão nas operações, do plantio à colheita. Cobertura da rede RTK é sinal de produtividade na sua lavoura.
                                </p>
                                <a 
                                    class="btn button button--primary w-100 mt-1" 
                                    href="/${pathName}/empresa/rede-rtk"
                                >
                                    Saiba Mais 
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="card">
                        <a  
                            class="text-decoration-none"
                            href="/${pathName}/empresa/farm-solutions"
                        >
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/fuse/farm-solutions.png" 
                                class="img-fluid"
                                alt="Farm Solutions"
                            />
                            <div class="card-body">
                                <h4>Farm Solutions</h4>
                                <p class="text-justify pt-2">
                                    Uma tecnologia que oferece a possibilidade de conhecer a fundo cada detalhe da sua propriedade.  Destinada a transformar dados relacionados às máquinas agrícolas em informações para manejar lavouras e tornar o processo mais rentável e produtivo.
                                </p>
                                <a 
                                    class="btn button button--primary w-100 mt-1" 
                                    href="/${pathName}/empresa/farm-solutions"
                                >
                                    Saiba Mais 
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="card">
                        <a  
                            class="text-decoration-none"
                            href="/${pathName}/empresa/datatronic-5"
                        >
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/fuse/datatronic.png" 
                                class="img-fluid"
                                alt="Datatronic 5"
                            />
                            <div class="card-body">
                                <h4>Datatronic 5</h4>
                                <p class="text-justify pt-2">
                                    Com a tecnologia dos smartphones, permite que o operador acesse e mude as configurações intuitivamente e com rapidez. Permite a criação páginas para configurar o sistema hidráulico, a transmissão, o motor e muito mais.
                                </p>
                                <a 
                                    class="btn button button--primary w-100 mt-1" 
                                    href="/${pathName}/empresa/datatronic-5"
                                >
                                    Saiba Mais 
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="card">
                        <a  
                            class="text-decoration-none"
                            href="/${pathName}/empresa/massey-ferguson-guide-by-trimble"
                        >
                            <img 
                                src="https://legado.autoforce.com.br/plugins/images/clientes/stefani/produtos/sd/fuse/massey-ferguson-guide.png" 
                                class="img-fluid"
                                alt="Massey Ferguson Guide, by Trimble"
                            />
                            <div class="card-body">
                                <h4>Massey Ferguson Guide, by Trimble</h4>
                                <p class="text-justify pt-2">
                                    O Massey Ferguson Guide, by Trimble, Piloto Automático da Massey, é  uma tecnologia que simplifica suas operações agrícolas a partir de um ambiente intuitivo e inovador.
                                </p>
                                <a 
                                    class="btn button button--primary w-100 mt-1" 
                                    href="/${pathName}/empresa/massey-ferguson-guide-by-trimble"
                                >
                                    Saiba Mais 
                                </a>
                            </div>
                        </a>
                    </div>
                </div>
            `;
    
            contentStaticPage.before(fuseWrapper);
    
            addStyle(`
                .fuse-tecnologies h1,
                .card-deck .card h4{
                    font-weight: bold;
                }
    
                .fuse-tecnologies h1,
                .fuse-tecnologies h6,
                .card-deck .card h4{
                    color: #000;
                }
    
                .fuse-tecnologies h4,
                .fuse-tecnologies p{
                    color: #707070;
                }
    
                .fuse-tecnologies h6{
                    text-decoration: underline;
                }
    
                .fuse-tecnologies p{
                    font-size: .9rem;
                }
    
                .card-deck .card p{
                    font-size: .8rem;
                }
    
                .fuse-tecnologies img,
                .card-deck .card{
                    border-radius: 0.625rem !important;
                }
    
                .card-deck .card img{
                    border-radius: 0.625rem 0.625rem 0  0;
                }
    
                .card-deck .card h4{
                    font-size: 1.4rem;
                }
    
                .card-deck .card a,
                .fuse-tecnologies .row a{
                    color: unset;
                }
    
                .card-deck .card a.btn{
                    color: #fff;
                }
    
                .content--static-page .container .content__form--without-text{
                    flex-basis: 75.66% !important;
                }
    
                @media screen and (max-width:576px){
                    .fuse-tecnologies h1{
                        font-size: 2.1rem;
                    }
                    
                    .fuse-tecnologies h4,
                    .fuse-tecnologies h6,
                    .fuse-tecnologies p,
                    .card-deck .card p{
                        font-size: 1.2rem;
                    }
    
                    .card-deck .card img{
                        width: 100%;
                    }
                }
            `);
        }
    }
})();