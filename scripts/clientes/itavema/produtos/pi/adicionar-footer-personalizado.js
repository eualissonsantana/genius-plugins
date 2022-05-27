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
        #footer {
            background: #000;
            color: #fff;
            padding: 50px 190px;
        }

        #footer .row-footer {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        #footer #social-midia-wrapper-header .social-midia-button-header {
            height: 2rem;
            width: 2rem;
            color: #000;
            background-color: #fff;
        }

        #footer #social-midia-wrapper-header .social-midia-button-header i {
            color: #000;
        }

        #footer .siga {
            margin-right: 6px;
        }

        #footer .titulo {
            font-weight: bold;
            margin-bottom: 24px;
        }

        #footer .endereco p,  #footer .copyright p {
            margin: 0;
        }

        #footer .logo-af img{
            width: 100px;
        }

        #footer .copy {
            text-align: right;
        }

        #footer a {
            text-decoration: none;
            color: #fff;
        }

        #footer .copy a {
            text-decoration: underline;
        }

        #footer .info .fa {
            color: hsla(var(--primaryHue),calc(var(--primarySat) - 0%),calc(var(--primaryLight) + 0%),1);
        }

        @media (max-width: 768px) {
            #footer {
                padding: 50px 16px;
            }

            #footer .copyright {
                justify-content: center;
            }

            #footer .copy {
                text-align: center;
                margin-top: 12px;
            }

            #footer .titulo {
                margin-bottom: 16px;
                margin-top: 24px;
            }
        }
    `

    const footer = document.querySelector("#footer")

    if(footer) {
        const newFooter = document.createElement("div")
        newFooter.setAttribute("id", "footer")
        newFooter.innerHTML = `
            <div class="logo-area row-footer">
                <div>
                    <img src="https://production.autoforce.com/uploads/group/logo_white/1821/logo_comprar-instituto-andre-franco-vive_4645a7c2e3.png" alt="">
                </div>
                <div>
                    <div id="social-midia-wrapper-header">
                        <span class="siga">SIGA-NOS:</span>
                        <a class="social-midia-button-header" href="https://www.facebook.com/andrefrancovive/" target="_blank"><i class="fa fa-facebook"></i></a>
                        <a class="social-midia-button-header" href="https://www.instagram.com/andre_franco_vive/" target="_blank"><i class="fa fa-instagram"></i></a>
                        <a class="social-midia-button-header" href="https://www.youtube.com/channel/UC-tQ5tAmKZMFpZhMh4CNJ4w" target="_blank"><i class="fa fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <hr class="separator">
            <div class="info row-footer">
                <div>
                    <p class="titulo"><span class="fa fa-location-dot icon"></span>ENDEREÇO:</p>
                    <div class="endereco">
                        <p>R. Jorge Raimundo Mendes de Almeida, 125,</p>
                        <p>Jardim do Lago - São Paulo/SP</p>
                        <p>05397-010</p>
                        <div class="map">
                            <a href="#" class="btn-map">Abrir mapa</a>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="titulo">TELEFONES:</p>
                    <div>
                        <p><strong>Fixo: </strong>(11) 3045-5339</p>
                        <p><strong>Celular: </strong>(11) 99901-0037</p>
                    </div>
                </div>
                <div>
                    <p class="titulo"><span class="fa fa-clock icon"></span>HORÁRIOS DE FUNCIONAMENTO:</p>
                    <div>
                        <p> - Segunda à Sexta: 08h - 17h</p>
                        <p> - Sábado: 08h - 12h</p>
                    </div>
                </div>
            </div>
            <hr class="separator">
            <div class="cnpj-info">  
            </div>
            <div class="copyright row-footer">
                <div class="logo-af">
                    <img src="https://assets.autoforce.com/assets/admin/logo-35b954a64f70be2eb19994a6b21237675a026214acaa8407583ca78bf47865d7.png" alt="">
                </div>
                <div class="copy">
                    <p>
                        <small>
                            © Copyright 2022 - Instituto André Franco Vive - Todos os direitos reservados. 
                        </small>
                    </p>
                    <p>
                        <small>
                            Confira a nossa <a href="#">Politica de privacidade.</a>
                        </small>
                    </p>
                </div>
            </div>
        `

        footer.parentNode.insertBefore(newFooter, footer)
        footer.remove()
    }
})()