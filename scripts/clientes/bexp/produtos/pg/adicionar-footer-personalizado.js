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

            .footer__logo {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 40px 0 15px;
            }

            .carrossel-footer {
                justify-content: space-around;
            }
        
            .footer__logo:after, .footer__logo:before {
                width: 100%;
                height: 1px;
                background: #fff;
                opacity: 0.15;
                content: '';
            }

            .footer__social-networks--mobile {
                display: none !important;
            }

            .footer__signature {
                font-size: .75rem;
                line-height: 20px;
                padding-top: 20px;
                padding-bottom: 60px;
            }

            .footer .row {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                margin-right: -15px;
                margin-left: -15px;
                max-width: initial !important;
            }

            .footer__copyright {
                order: 3;
            }

            .footer__logo-autoforce {
                order: 4;
            }

            .footer__logo-autoforce {
                text-align: center;
            }

            .footer__separator {
                width: 100%;
                height: 1px;
                background: #fff;
                opacity: 0.15;
                margin: 20px 0;
            }

            .footer__social-networks>*:not(:last-child) {
                margin-right: 12px;
            }

            .footer__signature a {
                color: #999;
                text-decoration: underline;
            }

            .footer__subtitle {
                color: #fff;
                font-weight: 700;
                text-transform: uppercase;
                display: flex;
                align-items: center;
            }

            .footer__social-networks>*:not(:last-child) {
                margin-right: 12px;
            }

            .footer__social-networks {
                display: flex;
                justify-content: end;
            }

            .footer__social-networks>a {
                color: inherit;
                background-color: transparent;
                text-decoration: none;
                display: inline-block;
                border-width: 0;
                border-radius: 50%;
            }

            .footer__social-networks>a {
                color: inherit;
                background-color: transparent;
                text-decoration: none;
                display: inline-block;
                border-width: 0;
                border-radius: 50%;
            }

            .footer__social-networks {
                order: 5;
            }

            .footer__social-networks {
                text-align: right;
            }

            #logo-seminovo {
                display: none;
            }

            .footer {
                background: #333;
                color: #999;
                background: #2a2a2a;
                padding: 20px 80px;
                position: relative;
            }

            .footer .social-link {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 3rem;
                width: 3rem;
                border-radius: 50%;
                color: #333;
                font-size: 1.4rem;
                text-decoration: none;
                margin: 0 0.3rem;
                transition: all 0.2s ease-out;
                background-color: #999;
            }

            .social-link-list {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0 0 1rem;
            }

            @media (max-width: 768px) {
                .footer__social-networks--mobile {
                    display: block;
                } 

                .footer {
                    padding: 20px 16px;
                }
    
                .footer__logo-autoforce {
                    order: 1;
                }
    
                .footer__copyright {
                    order: 2;
                    text-align: center;
                    margin-top: 10px;
                }

                .footer__signature .row {
                    justify-content: center;
                }
            }

            @media (min-width: 768px) {
                .d-md-inline {
                    display: inline!important;
                }

                .none-mobile {
                    display: none;
                }

            }
        `

        const footer = document.querySelector("#footer")
        const newFooter = document.createElement("div")

        newFooter.classList.add("footer")

        newFooter.innerHTML = `
            <div class="container">
                <div class="button-scroll-top button-scroll-top--show" data-scroll-to="body">
                    <i class="icon icon-scroll-top" data-scroll-to="body"></i>
                </div>
                <div class="footer__social-networks footer__social-networks--mobile d-block d-md-none">
                    <strong class="footer__subtitle">Siga-nos:</strong>
                    <a href="https://www.facebook.com/BexpJeep/"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/bexpjeep/"><i class="fa fa-instagram"></i></a>
                </div>
                <div class="footer__logo">
                    <img class="footer__logo-img" src="https://production.autoforce.com/uploads/group/logo_white/1340/logo_comprar-bexp-seminovos-0762708a-590e-46fa-9f03-0ce991d47fff_aa42d79787.png" alt="logo">
                </div>
                <div class="row carrossel-footer">
                    <a target="_blank" href="http://audialphaville.com.br"> <img src="https://production.autoforce.com/uploads/brand/logo_white/8/logo_brand_thumb_comprar-audi_e2c80bbe11.png" width="100px"> </a>
                    <a target="_blank" href="https://bexp.com.br/jeep"> <img src="https://production.autoforce.com/uploads/brand/logo_white/18/logo_brand_thumb_logo_brand_jeep-branco_co_pia_74575a8da7.png" width="100px"> </a>
                    <a target="_blank" id="logo-seminovo" href="https://seminovos.bexp.com.br/"> <img src="http://legado.autoforce.com.br/mods/bexp/img/bexp_branca.png"width="100px"> </a></div>
                    <div class="footer__separator d-none d-md-block"></div>
                    <div class="footer__signature"><div class="row">
                        <div class="footer__copyright col-md-5">
                            <p> © Copyright 2022 <span class="d-none d-md-inline">-</span><br class="none-mobile"> AutoForce - Todos os direitos reservados.
                                <br>
                                <span class="d-none d-md-inline">Confira a nossa </span> <a href="/politica-de-privacidade">Politica de privacidade</a>.
                            </p>
                        </div>
                        <div class="footer__logo-autoforce col-md-2">
                            <a target="_blank" href="https://autoforce.com" title="AutoForce | Marketing Digital para Concessionárias">
                                <img src="https://assets.autoforce.com/assets/home/logo-3e7a9840df57c209a6620c93e913bcc1d937648fc51c54cada7989b1c2db9850.png" width="70" alt="logo AutoForce">
                            </a>
                        </div>
                        <div class="footer__social-networks d-none d-md-block col-sm-5">
                            <strong class="footer__subtitle">Siga-nos:</strong>
                            <div class="social-link-list">
                                <a href="https://www.facebook.com/BexpJeep/" class="social-link"><i class="fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com/bexpjeep/" class="social-link"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `

        footer.parentNode.insertBefore(newFooter, footer)
        footer.remove()

        console.log(footer)
    })()