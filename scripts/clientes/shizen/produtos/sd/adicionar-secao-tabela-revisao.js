(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "/servicos" })){
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

        const vehicles = [
            {
                name: "Fit",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/fit.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/fit.pdf",
                alt: "Fit"
            },
            {
                name: "WR-V",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/wr-v.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/wr-v.pdf",
                alt: "WR-V"
            },
            {
                name: "HR-V",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/hr-v.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/hr-v.pdf",
                alt: "HR-V"
            },
            {
                name: "HR-V Touring",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/hr-v-touring.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/hr-v-touring.pdf",
                alt: "HR-V Touring"
            },
            {
                name: "CR-V",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/cr-v.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/cr-v.pdf",
                alt: "CR-V"
            },
            {
                name: "City",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/city.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/city.pdf",
                alt: "City"
            },
            {
                name: "Civic",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/civic.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/civic.pdf",
                alt: "Civic"
            },
            {
                name: "Civic Touring",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/civic-touring.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/civic-touring.pdf",
                alt: "Civic Touring"
            },
            {
                name: "Civic SI",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/civic-si.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/civic-si.pdf",
                alt: "Civic SI"
            },
            {
                name: "Accord",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/shizen/produtos/sd/revisao/accord.jpg",
                pdf: "https://legado.autoforce.com.br/plugins/files/clientes/shizen/produtos/sd/pdf/revisao/accord.pdf",
                alt: "Accord"
            }
        ];

        const reviewTableWrapper = document.createElement("section");
        reviewTableWrapper.classList.add("review-table", "mt-4", "mb-4");

        const reviewTableContainer = document.createElement("div");
        reviewTableContainer.classList.add("container");

        reviewTableContainer.innerHTML += `
            <h2 class="offers-services__title section-component__title">
                <i class="icon icon-services"></i>
                Tabelas de <span>revisão</span>
            </h2>
        `;

        const reviewTableRow = document.createElement("div");
        reviewTableRow.classList.add("row");

        vehicles.forEach(vehicle => {
            reviewTableRow.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card">
                        <div class="card__header">
                            <div class="card__image card__image--service">
                                <div class="card__image-value card__image-value--dark-background">
                                    <img
                                        src="${vehicle.image}"
                                        alt="${vehicle.alt}"
                                    >
                                </div>
                            </div>
                        </div>
                    
                        <div class="card__footer">
                            <h5>
                                ${vehicle.name}
                            </h5>
                            <a 
                                class="btn button button--block button--large button--primary card__cta"
                                href="${vehicle.pdf}"
                                target="_blank"
                            >  
                                VISUALIZAR
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });

        reviewTableContainer.appendChild(reviewTableRow);
        reviewTableWrapper.appendChild(reviewTableContainer);

        const offersServices = document.querySelector(".offers-services");
        offersServices.before(reviewTableWrapper);

        addStyle(`
            .review-table .card__image-value--dark-background>img{
                opacity: 1;
            }

            .review-table .card .card__header{
                margin-bottom: 0;
            }

            .review-table h2{
                margin-bottom: 30px;
            }

            .review-table h2 .icon{
                color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
            }

            .review-table .card .card__footer{
                padding: 1rem;
            }

            .review-table .card .card__footer a{
                color: #fff;
            }

            .review-table .card .card__header .card__image--service, 
            .review-table .card .card__header .card__image--small{
                padding-top: 100%;
            }
        `);
    }
})();