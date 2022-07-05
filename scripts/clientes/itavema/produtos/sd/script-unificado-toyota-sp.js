(() => {
    // Adaptações Toyota
    // Header
    function adaptacaoHeader() {
    
        const addStyle = ({ styles }) => {
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
        
          addStyle({styles: `
            header.header {
              background-color: #F2F2F2;
            }
        
            .header .button.button--primary.header__phones-button-toggler {
              border-radius: 30px 0 0 30px;
              background-color: #DE2326;
            }
        
            .header .button.button--whatsapp {
              border-radius: 0 30px 30px 0;
              background-color: #74DE23;
            }
        
            .header .header__navbar-item:not(.header__networks)>*:not(:last-child) {
              margin-right: 4px;
            }
        
            .header__navbar .header__navbar-title {
              color: #000;
            }
        
            .header__navbar .header__networks-list {
              background-color: transparent;
            }
        
            .header__navbar .header__networks-list .icon {
              color: #000;
            }
        
            .header__navbar .header__networks-list .icon:hover {
              color: #DE2326;
            }
        
            .header .header__navbar {
              padding: 0;
            }
        
            .header__navbar-item .navbar__logo-toyota {
              height: 42px;
            }
        
            .nav-simple .nav-item.nav-simple__item {
              padding: 25px 15px;
            }
            `})
        
          const headerNavbar = document.querySelector('.header .header__navbar')
          const logoToyota = document.createElement('div')
        
          logoToyota.classList.add('header__navbar-item')
          logoToyota.innerHTML = '<img class="navbar__logo-toyota" src="https://legado.autoforce.com.br/static/toyota/images/Toyota_logo_2019.png" />'
        
          headerNavbar.appendChild(logoToyota)
        
          const headerNavbarMobile = document.querySelector('.header-mobile__buttons')
          const logoToyotaMob = document.createElement('div')
          logoToyotaMob.classList.add('header__navbar-item')
          logoToyotaMob.innerHTML = '<img class="navbar__logo-toyota" src="https://legado.autoforce.com.br/static/toyota/images/Toyota_logo_2019_mob.png" />'
        
          headerNavbarMobile.parentElement.appendChild(logoToyotaMob)
    }
    
    function adaptacaoFooter() {
        const addStyle = ({ styles }) => {
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
    
        addStyle({ styles: `
        footer.footer {
          background-color: #F2F2F2;
        }
    
        footer.footer .footer__units {
          border-radius: 8px;
          border-top: none;
          padding-top: 28px;
        }
    
        footer.footer .footer-units {
          border-radius: 8px;
          background: transparent;
        }
    
        .footer aside.footer-units__sidebar {
          background-color: #D1D1D1;
          border-radius: 8px 0 0 8px;
        }
    
        .footer .footer-units__contents {
          border-radius: 0 8px 8px 0;
        }
    
        .footer aside.footer-units__sidebar .nav-vertical__link  {
          color: #FFF;
        }
    
        .footer aside.footer-units__sidebar .icon.icon-arrow-r {
          color: #DE2326;
        }
    
        .footer aside.footer-units__sidebar .nav-vertical__link:hover .icon.icon-arrow-r, .footer aside.footer-units__sidebar .nav-vertical__link.active .icon.icon-arrow-r {
          color: #FFF;
        }
    
        .footer aside.footer-units__sidebar header.footer-units__header, .footer__units--mobile .footer-units__header {
          display: none;
        }
    
        .footer aside.footer-units__sidebar .nav-vertical__item {
          color: #FFF;
        }
    
        .footer-units__contents, .footer-units__contents .footer-units__contents-block .button {
          background-color: #FFF;
          color: #000;
        }
    
        .footer-units__contents .footer-units__title .icon {
          color: #DE2326;
        }
    
        .footer .footer__signature {
          background-color: #FFF;
          padding-bottom: 20px;
        }
    
        .footer__copyright, .footer_copyright a {
          color: #000;
        }
    
        .footer__social-networks .footer__subtitle {
          color: #000;
        }
    
        .footer__signature .icon:hover {
          color: #DE2326;
        }
    
        .footer__header {
          display: flex;
          justify-content: space-between;
          padding-top: 40px;
        }
    
        .footer__dealer-logo img {
          width: 120px;
        }
    
        .footer__dealer-logo {
          display: flex;
          align-items: center;
        }
    
        .footer__dealer-logo h3 {
          color: #272727;
          font-size: 1.5rem;
          margin-left: 10px;
        }
    
        .footer__selo-ibama {
          display: flex;
          align-items: center;
          width: 315px;
        }
    
        .selo-ibama-desktop {
          display: flex;
        }
    
        .selo-ibama-mobile {
          display: none;
        }
    
        .footer__selo-ibama img {
          max-width: 45px;
        }
    
        .footer__selo-ibama p {
          font-size: .75rem;
          color: #000;
          margin: 0;
          margin-left: 10px;
          font-weight: bold;
        }
    
        .footer__separator {
          display: none !important;
        }
    
        .footer__sitemap--logo-toyota {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 30px;
        }
    
        .footer__sitemap--logo-toyota:after, .footer__sitemap--logo-toyota:before {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background-color: #5A5A5A;
          opacity: 0.15;
        }
    
        .footer__social-networks .icon {
          color: #DE2326;
        }
    
        @media screen and (max-width: 768px) {
          footer.footer {
            background-color: #FFF;
          }
        
          .footer .footer-units__nav, .footer-units__header {
            margin: 0;
          }
    
          .footer .footer-units {
            background: #F2F2F2;
            width: 100vw;
            box-sizing: border-box;
            margin-left: -15px;
            border-radius: 0px;
          }
    
          .footer .footer-units .nav-vertical__item {
            border-bottom: 1px solid #D1D1D1;
            padding: 0;
            width: 100%;
          }
    
          .footer .footer-units .nav-vertical__item .icon {
            color: #DE2326;
          }
    
          .footer .footer-units .nav-vertical__item .nav-vertical__link {
            color: #000;
            text-decoration: underline;
            font-weight: 300;
            padding: 25px 20px;
          }
    
          .footer .footer-units .nav-vertical__item .nav-vertical__link:not(.collapsed) {
            background: #F2F2F2;
          }
    
          .footer .nav-vertical__item-content .footer-units__content-row {
            background-color: #959595;
          }
    
          .footer .button--map { 
            border-color: #FFF;
          }
    
          .footer__sitemap--logo-toyota::after, .footer__sitemap--logo-toyota::before {
            opacity: 0;
          }
    
          .footer .footer__social-networks {
            border-bottom: 1px solid rgba(0, 0, 0, .15);
            margin: 0;
            margin-bottom: 40px;
          }
    
          .footer__social-networks, .footer__sitemap--logo-toyota {
            border-bottom: 1px solid rgba(0, 0, 0, .15);
          }
    
          .footer__signature {
            padding-top: 20px 0 35px 0
          }
    
          .selo-ibama-desktop {
            display: none;
          }
    
          .selo-ibama-mobile {
            display: flex;
            border-top: 1px solid rgba(0, 0, 0, .15);
          }
    
          .footer__selo-ibama {
            width: 100%;
            padding: 25px 0 35px 0;
            justify-content: center;
          }
        }
      ` })
    
        // rodapÃ©
        const footerSignature = document.querySelector('.footer__signature')
        const footer = document.querySelector('footer.footer')
    
        footerSignature.innerHTML = `<div class="container">${footerSignature.innerHTML.replace('https://assets.autoforce.com/assets/home/logo-3e7a9840df57c209a6620c93e913bcc1d937648fc51c54cada7989b1c2db9850.png', 'https://legado.autoforce.com.br/static/toyota/images/logoaf_preta-07.svg')}</div>`
    
        footer.appendChild(footerSignature)
    
        // logo do dealer e selo ibama
        const footerHeader = document.createElement('div')
        footerHeader.classList.add('container')
    
        const makeFooterHeader = (dealerName) => {
            return `
            <div class="footer__header">
              <div class="footer__selo-ibama selo-ibama-desktop">
                <img src="https://legado.autoforce.com.br/static/toyota/images/IBAMA_Convertido.svg" />
                <p>Juntos salvamos vidas.</p>
              </div>
              <div class="footer__dealer-logo">
                <img src="https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/logo/toyota-logo.png" />
              </div>
            </div>
        `
        }
    
        const dealerName = document.querySelector('meta[name="auto_layer_dealer_name"]')
        if (dealerName)
            footerHeader.innerHTML = makeFooterHeader(dealerName.getAttribute('content'))
        else
            footerHeader.innerHTML = makeFooterHeader('Toyota')
    
        const footerIbamaMobile = document.createElement('div')
        footerIbamaMobile.classList.add('container')
    
        footerIbamaMobile.innerHTML = `
          <div class="footer__selo-ibama selo-ibama-mobile">
            <img src="https://legado.autoforce.com.br/static/toyota/images/IBAMA_Convertido.svg" />
            <p>Juntos salvamos vidas.
          </div>
        `
    
        footer.insertBefore(footerHeader, footer.firstChild)
        footer.appendChild(footerIbamaMobile)
    
        // mapa do site
        const siteMap = document.createElement('div')
        siteMap.classList.add('container')
    
        /*
        siteMap.innerHTML = `
          <div class="footer__sitemap">
            <div class="footer__sitemap--logo-toyota">
              <img src="https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/logo/toyota-logo.png" />
            </div>
          </div>
      `
      */
    
        footer.insertBefore(siteMap, footerSignature)
    }
    
    function adaptacaoCarousel() {
        const addStyle = ({ styles }) => {
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
        
          addStyle({
            styles: `
              .carousel-vehicles-new .vehicles-new__header {
                display: flex;
                flex-direction: column;
              }
        
              .carousel-vehicles-new .vehicles-new__header .vehicles-new__title {
                padding-bottom: 20px;
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
        
              .carousel-vehicles-new .vehicles-new__header .vehicles-new__title::after {
                content: '';
                display: block;
                width: 59px;
                height: 2px;
                background-color: #DE2326;
              }
        
              .filter-pills .filter-pills__title {
                display: none;
              }
        
              .vehicles-new__header .vehicles-new__category-filter {
                padding: 0;
              }
              
              .filter-pills__options-text.active, .filter-pills__options-text {
                color: #000000;
              }
              
              @media screen and (min-width: 767.98px) {
                .vehicles-new__header .vehicles-new__category-filter {
                  margin: 0;
                }
              }
              
              .filter-pills .filter-pills__options::after {
                display: none;
              }
        
              ul.filter-pills__options {
                margin: 0;
                column-gap: 40px;
              }
        
              .filter-pills__options-text {
                padding: 4px 0;
                border-bottom: 2px solid transparent;
                transition: all .2s ease;
              }
        
              .filter-pills__options-text.active, .filter-pills__options-text:hover {
                color: #000 !important;
                font-weight: 300 !important;
                border-bottom: 2px solid #B11316;
              }
        
              .filter-pills__options-text.active:before, .filter-pills__options-text:hover:before {
                display: none !important;
              }
        
              .vehicles-new__carousel .card.card--simple {
                border: 1px solid transparent;
                padding: 18px 10px;
                transition: all .2s ease;
              }
        
              .vehicles-new__carousel .card.card--simple:hover {
                border: 1px solid #DE2326;
              }
        
              .vehicles-new__carousel .card__footer {
                height: 100%;
                display: flex;
                align-items: flex-end;
                padding: 0;
              }
        
              .vehicles-new__carousel .card.card--simple .btn {
                background-color: #DE2326;
                border-radius: 30px;
                color: #FFF;
                opacity: 0;
                transition: all .2s ease;
                margin-top: 10px;
                padding: 6px 20px;
                width: 100%;
              }
        
              .vehicles-new__carousel .card.card--simple:hover .btn {
                opacity: 1;
              }
        
              .vehicles-new__carousel .card.card--simple .card__title::before {
                content: "Toyota";
                text-transform: uppercase;
                font-weight: 300;
                padding-right: 4px;
              }
        
              .vehicles-new__carousel .card.card--simple .card__trigger-description {
                display: none
              }
        
              .vehicles-new__carousel .card.card--simple .btn .icon {
                display: none;
              }
        
              .vehicles-new__carousel .card__content {
                padding: 0;
              }
        
              .vehicles-new__carousel .card .card__title {
                min-height: 36px;
              }
        
              .vehicles-new__carousel .carousel__item {
                min-height: 246px;
              }
        
        
        
        
              .section-component.used-models .used-models__header {
                  margin-bottom: 55px;
              }
        
              .section-component.used-models .section-component__header--fill {
                background: url(https://cdn.discordapp.com/attachments/750695916994035742/794188207670820864/toyota-tarja-seminovos.png) no-repeat 100% 0;
                height: 400px;
              }
        
              .used-models__carousel.carousel, .offers-used-models__carousel.carousel, .list-used-models__list .row .col-md-6 {
                height: 480px !important;
              }
        
              .list-used-models__list .card:hover {
                height: 460px !important;
              }
        
              .card.card--used-model {
                border-radius: 10px;
                box-shadow: 0px 3px 20px #00000029;
                transition: all .2s ease;
                border: 1px solid transparent;
              }
        
              .card.card--used-model:hover {
                transition: all .2s ease;
                border: 1px solid #DE2326;
              }
              
              .card--used-model .card__image-value, .card--used-model .card__header {
                height: 130px
              }
              
              .card--used-model .card__image-value {
                background-size: cover;
                background-position: center;
                border-radius: 10px 10px 0 0;
              }
        
              .card__subtitle.card__subtitle--text-left {
                padding-bottom: 24px;
                height: auto !important;
              }
        
              .card__cta-used-model {
                margin: 16px 0;
                background-color: #DE2326;
                opacity: 0;
                display: none;
                transition: all .2s ease;
              }
        
              .card__cta-used-model:hover {
                background-color: #B11316;
              }
        
              .card:hover .btn.button.card__cta {
                display: inline-flex;
                opacity: 1;
                transition: all .2s ease;
              }
        
              .card--used-model .card__triggers .card__title {
                display: none;
              }
        
              .card--used-model .card__separator {
                display: none;
              }
        
              .card--used-model .card__triggers {
                align-items: start;
                height: auto !important;
              }
        
              .card--used-model .card__trigger-value {
                color: #000;
                padding-bottom: 20px;
              }
        
              .card--used-model .card__list li, .card--used-model .card__list li b {
                font-weight: bold !important;
                color: #000;
                padding: 4px 27px 4px 23px;
              }
        
              .card--used-model .card__list li b {
                display: none;
              }
              
              .card--used-model .card__title.card__title--text-left::before {
                content: "Toyota";
                padding-right: 4px;
                text-transform: uppercase;
                font-weight: 300;
              }
        
              .card--used-model .card__list.list li::before, .list-used-models__list .card__list .card__list-item::before {
                content: "\\ea0a";
                font-family: auto-icons!important;
                color: #DE2326;
                width: 15px;
                height: 15px;
                font-size: 7px;
                border-radius: 10px;
                border: 1px solid #DE2326;
                background: transparent;
                display: inline-flex;
                justify-content: center;
                align-items: center;
              }
        
              .list-used-models__list .card__list .card__list-item::before {
                margin-right: 10px;
                top: -2px;
                position: relative;
              }
          
        
              .list-used-models__list .card__list .card__list-item {
                padding: 5px 0;
              }
        
              .list-used-models__list .card__list {
                padding: 0;
              }
        
              .card--used-model .card__list {
                list-style-type: none;
              }
        
              .card--used-model .card__content div[data-match-height="carousel-used-model-list"] {
                height: auto !important;
              }
        
              @media screen and (max-width: 768px) {
                .section-component.used-models .section-component__header--fill {
                  background: #494E53;
                  height: auto;
                }
        
                .vehicles-new__carousel .card.card--simple .btn {
                  opacity: 1;
                }
        
                .card--used-model .card__cta-used-model {
                  opacity: 1;
                  display: block;
                  transition: all .2s ease;
                }
              }
            `
          })
        
          const cardList = document.querySelectorAll('.card--used-model .card__list li')
          Array.prototype.forEach.call(cardList, (item) => item.innerHTML = item.innerHTML.replace(':', ''))
    }
    
    function adaptacaoCarouselDirectSales() {
        const addStyle = ({ styles }) => {
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
        
          addStyle({
            styles: `
              .carousel-direct-sales .carousel-direct-sales__header {
                display: flex;
                flex-direction: column;
              }
        
              .carousel-direct-sales .carousel-direct-sales__header .section-component__subtitle,
              .carousel-direct-sales .carousel-direct-sales__header .icon,
              .carousel-direct-sales .carousel-direct-sales__header .section-component__dash,
              .carousel-direct-sales .card__separator,
              .list-direct-sales-vehicles__list .card__separator {
                display: none;
              }
        
              .carousel-direct-sales .carousel-direct-sales__header .section-component__title {
                padding-bottom: 20px;
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
              }
        
              .carousel-direct-sales .carousel-direct-sales__header .section-component__title::after {
                content: '';
                display: block;
                width: 59px;
                height: 2px;
                background-color: #DE2326;
                margin: 0 auto;
              }
        
              .carousel-direct-sales .carousel-direct-sales__header .carousel-direct-sales__filter {
                padding: 0;
              }
        
              .carousel-direct-sales .card__content .card__title,
              .carousel-direct-sales .card__content .card__subtitle,
              .carousel-direct-sales .card__footer .card__trigger,
              .carousel-direct-sales .card__footer .card__title,
              .carousel-direct-sales .card__footer .card__trigger-value,
              .list-direct-sales-vehicles__list .card__content .card__title,
              .list-direct-sales-vehicles__list .card__content .card__subtitle,
              .list-direct-sales-vehicles__list .card__footer .card__trigger,
              .list-direct-sales-vehicles__list .card__footer .card__title,
              .list-direct-sales-vehicles__list .card__footer .card__trigger-value {
                text-align: left;
                align-self: start;
              }
        
              .carousel-direct-sales .card__footer .card__trigger-value,
              .list-direct-sales-vehicles__list  .card__footer .card__trigger-value {
                color: #000;
              }
        
              .carousel-direct-sales div[data-match-height="direct-sales-titles"] {
                height: 84px !important;
              }
              
              .list-direct-sales-vehicles__list [data-match-height="vehicle-card-content"] {
                height: 60px !important;
              }
        
              .carousel-direct-sales .carousel-direct-sales__card {
                height: 355px;
              }
        
              .carousel-direct-sales .carousel-direct-sales__card:hover {
                height: 460px;
              }
        
              .carousel-direct-sales .carousel__item {
                height: 470px;
              }
        
              .list-direct-sales-vehicles__list .card {
                height: 400px;
              }
        
              .list-direct-sales-vehicles__list .card:hover {
                height: 480px;
              }
        
              .list-direct-sales-vehicles__list .col-md-6 {
                height: 500px;
              }
        
              .carousel-direct-sales .carousel-direct-sales__card .btn.button.button--primary,
              .list-direct-sales-vehicles__list .card .btn.button.button--primary {
                display: none;
              }
        
              .carousel-direct-sales .carousel-direct-sales__card:hover .btn.button.button--primary,
              .list-direct-sales-vehicles__list .card:hover .btn.button.button--primary {
                display: block;
              }
        
              .carousel-direct-sales .btn.button.button--primary,
              .list-direct-sales-vehicles__list .card .btn.button.button--primary {
                margin-bottom: 20px;
                margin-top: 60px;
              }
            `
          })
    }
    
    function adaptacaoCarouselConsorcio() {
        const addStyle = ({ styles }) => {
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
        
          addStyle({
            styles: `
              .section-component.carousel-consortia .section-component__header {
                padding: 0;
              }
        
              .section-component.carousel-consortia .section-component__subtitle, .section-component.carousel-consortia .section-component__dash {
                display: none;
              }
        
              .section-component.carousel-consortia .section-component__title {
                text-align: center;
              }
        
              .section-component.carousel-consortia .section-component__title::after {
                content: "";
                display: block;
                width: 59px;
                height: 2px;
                background-color: #DE2326;
                margin: 10px auto;
              }
        
              .section-component.carousel-consortia .section-component__title span {
                color: #000;
              }
              
              .carousel__item.swiper-slide.carousel-consortia__item, .list-consortia__list .list-consortia__item-wrap {
                height: 500px;
              }
        
              .card--dark {
                background-color: #5A5A5A;
                border-radius: 10px;
                height: 420px;
              }
        
              .card--dark .card__header {
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
              }
        
              .card--dark .card-consortia__button {
                display: none;
              }
        
              .card--dark:hover .btn.button.card__cta.card-consortia__button {
                display: block;
              }
        
              .card--dark:hover {
                height: 500px;
              }
        
              .card--dark .card__img:before {
                background-color: #5A5A5A;
              }
        
              .card--dark .card__separator {
                display: none;
              }
        
              .card--dark .card__title {
                margin-bottom: 35px;
              }
        
              .card--dark div[data-match-height="card-consortia-card-title"] {
                height: 70px !important;
              }
        
              .card--dark .card__title, .card--dark .card__trigger-description, .card--dark .card__trigger-value, .card--dark  {
                text-align: left;
              }
        
              .card--dark .card__trigger-description {
                font-size: 10px;
              }
        
              .card--dark .card--dark .card__trigger-value {
                font-size: 20px;
              }
        
              .card--dark .card__title::before {
                content: "Toyota";
                padding-right: 4px;
                text-transform: uppercase;
                font-weight: 300;
              }
        
              .btn.button.card-consortia__button {
                margin-bottom: 20px;
              }
            `
          })
    }
    
    function adaptacaoCarouselServices() {
        const addStyle = ({ styles }) => {
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
        
          addStyle({
            styles: `
        
              .list-accessories__col-card {
                height: 500px;
              }
              
              .list-accessories__col-card .card {
                height: 400px;
              }
        
              .list-accessories__col-card .card:hover {
                height: 490px;
              }
        
              .carousel-products .carousel__item {
                height: 480px;
              }
        
              .carousel-products .card.card-product {
                height: 400px;
              }
        
              .carousel-products .card.card-product:hover {
                height: 470px;
              }
        
              .carousel-products .card.card-product .btn.button--primary,
              .list-accessories__col-card .card .btn.button--primary {
                display: none;
              }
        
              .carousel-products .card.card-product:hover .btn.button--primary,
              .list-accessories__col-card .card:hover .btn.button--primary {
                display: block;
              }
        
              .card.card-product,
              .list-accessories__col-card .card {
                border-radius: 10px;
              }
        
              .card.card-product .card__header, .list-accessories__col-card .card .card__header {
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
              }
        
              .card.card-product .card__list li,
              .list-accessories__col-card .card .list-accessories-card-list li {
                text-transform: uppercase;
              }
        
              .card.card-product .card__footer .card__title,
              .card.card-product .card__separator,
              .card.card-product .card__footer .card__trigger-description,
              .list-accessories__col-card .card .card__footer .card__title,
              .list-accessories__col-card .card .card__separator,
              .list-accessories__col-card .card .card__footer .card__trigger-description {
                display: none;
              }
        
              .card.card-product .card__trigger-value,
              .card.card-product .card__title,
              .list-accessories__col-card .card .card__title,
              .list-accessories__col-card .card .card__trigger-value {
                text-align: left;
                color: #000;
              }
        
              .card-product div[data-match-height="product-card-content"] {
                height: 70px !important;
              }
        
              .card-product div[data-match-height="carousel-product-footer"] {
                height: auto !important;
              }
              
              .card-product .card__footer, .list-accessories__col-card .card .card__footer {
                margin: 0
              }
        
              .card-product .btn.button.button--primary, .list-accessories__col-card .card .btn.button.button--primary {
                margin-bottom: 20px;
                margin-top: 40px;
              }
          `})
    }
    
    function adaptacaoBlocoDeConteudo() {
        const addContentBlock = (links) => {
      
            const addStyle = ({ styles }) => {
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
          
            const elRef = document.querySelector('.services__carousel.carousel')
          
            const contentBlock = document.createElement('div')
            contentBlock.classList.add('section-componet', 'container')
          
            contentBlock.innerHTML = `
              <ul class="services__items">
                <li class="services__item">
                  <a class="services--services" href="${links[0]}">
                    Serviços
                  </a>
                </li>
                <li class="services__item">
                  <a class="services--parts" href="${links[1]}">
                    Peças
                  </a>
                </li>
                <li class="services__item">
                  <a class="services--cycle" href="${links[2]}">
                    Ciclo Toyota
                  </a>
                </li>
              </ul>
            `
          
            elRef.parentNode.insertBefore(contentBlock, elRef)
          
            addStyle({
              styles: `
                .services__carousel.carousel, .container.services__ctas.text-center, .services .section-component__title .icon {
                  display: none;
                }
        
                .carousel-services > .container {
                  display: flex;
                }
        
                .services .section-component__title {
                  padding-bottom: 12px;
                  margin-bottom: 28px;
                  width: 100%;
                  display: flex;
                  flex-align: collumn;
                  flex-direction: column;
                  align-items: center;
                }
        
                .services .section-component__title::after {
                  content: '';
                  display: block;
                  width: 59px;
                  height: 2px;
                  background-color: #DE2326;
                }
        
                .section-component.services {
                  background-color: #F2F2F2;
                  border-bottom: 1px solid #FFF;
                }
        
                .services__items {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  list-style: none;
                  width: 100%;
                }
        
                .services__item {
                  width: 100%;
                  max-width: 350px;
                  height: 350px;
                  transition: all .2s ease;
                }
        
                .services__items:hover .services__item {
                  filter: brightness(50%);
                  transition: all .2s ease;
                }
        
                .services__items:hover .services__item:hover {
                  filter: brightness(100%);
                  transform: scale(1.025);
                  transition: all .2s ease;
                  z-index: 40;
                }
        
                .services--services {
                  background: url("https://legado.autoforce.com.br/static/toyota/images/servicosfiltro.png")
                }
        
                .services--parts {
                  background: url("https://legado.autoforce.com.br/static/toyota/images/pecasfiltro.png")
                }
        
                .services--cycle {
                  background: url("https://legado.autoforce.com.br/static/toyota/images/ciclofiltro.png")
                }
        
                .services__items a {
                  width: 100%;
                  height: 100%;
                  color: #FFF;
                  font-size: 24px;
                  border-radius: 6px;
        
                  display: flex;
                  justify-content: center;
                  align-items: center;
        
                  background-size: cover;
                  background-position: center;
                }
        
                .services__items a:hover {
                  color: #FFF;
                  text-decoration: none;
                  background-repeat: no-repeat;
                }
          
                @media screen and (max-width: 1200px) {
                }
          
                @media screen and (max-width: 992px) {
                  .services__item {
                    height: 300px;
                  }
                }
          
                @media screen and (max-width: 768px) {
                  .services__item {
                    height: 250px;
                  }
                }
              `
            })
        }
        
        if(window.servicesBlockContent) {
            addContentBlock(window.servicesBlockContent)
        }
    }
    
    function adaptacaoButtons() {
        const addStyle = ({ styles }) => {
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
        
          addStyle({ styles: `
            .btn.button {
              font-size: 14px;
              font-weight: 500;
              line-height: 1.25;
              min-width: 6.25rem;
              padding: .5rem 1rem;
              height: 2.25rem;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              border-radius: 1.875rem;
            }
        
            .btn.button button--whatsapp {
              font-weight: 300;
            }
            
            .btn.button.button--primary, .btn.button.button--block, .btn.button.button--dark, .btn.button.card__cta {
              background-color: #DE2326;
              color: #FFF;
              font-weight: 300;
              border: none;
            }
        
            .btn.button.card__cta {
              display: none;
            }
        
            .btn.button.button--secondary, .btn.button.button--carousel-used-models-section, .btn.button.button--carousel-vehicles-new-main, btn.button.button--map, .btn.button.button--primary-line, .button--carousel-offers-vehicles-new-section, .button--carousel-direct-sales-section, .carousel-consortia__button {
              font-weight: bold;
              background-color: transparent;
              border: .125rem solid #000;
              color: #000;
            }
            
            .btn.button.button--secondary:hover, .btn.button.button--carousel-used-models-section:hover, .btn.button.button--carousel-vehicles-new-main:hover, btn.button.button--map:hover, .button--carousel-offers-vehicles-new-section:hover, .button--carousel-direct-sales-section:hover, .carousel-consortia__button:hover {
              border: .125rem solid #DE2326;
              color: #DE2326;
            }
        
            .btn[disabled] {
              background-color: #D1D1D1;
            }
          `})
    } 
    
    function adaptacaoSelos() {
        document.addEventListener("DOMContentLoaded", function(event) {
            // funÃ§Ã£o
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
                .showcase-offer__model-image-background{
                    position: relative;
                }
        
                .selo-recompra, .selo-ciclo-toyota, .selo-5-anos, .selo-8-anos, .selo-safety-sense {
                    position: absolute;
                    width: 70px;
                    z-index: 1;
                }
        
                .selo-recompra, .selo-ciclo-toyota {
                    top: 1rem;
                }
        
                .selo-5-anos, .selo-8-anos, .selo-safety-sense {
                    top: 5.4rem;
                }
        
                .selo-ciclo-toyota, .selo-5-anos, .selo-8-anos {
                    left: 160px;
                }
        
                .selo-recompra, .selo-safety-sense {
                    left: 240px;
                }
        
                @media (max-width: 768px) {
                    .selo-ciclo-toyota{
                        left: 10px;
                    }
        
                    .selo-recompra {
                        left: 75px;
                    }
        
                    .selo-5-anos, .selo-8-anos {
                        left: 140px;
                    }
        
                    .selo-safety-sense {
                        left: 200px;
                    }
        
                    .selo-recompra, .selo-ciclo-toyota, .selo-5-anos, .selo-8-anos, .selo-safety-sense {
                        width: 60px;
                        top: 0;
                    }
        
                    .selo-5-anos, .selo-8-anos, .selo-safety-sense {
                        top: 0;
                    }
        
                    .showcase-offer__image-featured {
                        margin-top: 30px !important;
                    }
                }
        
            `
            const garantia5Anos = ["corolla", "yaris", "sw4", "hillux"]
            const page = window.location.href
            const isOfferPage = window.location.href.includes("/ofertas/")
            let seloGarantia = false
        
            if(isOfferPage) {
                const itens = document.querySelectorAll(".list--specs-items li")
                let isFlex = false
        
                itens.forEach(element => {
                    if(element.innerHTML.includes("Flex")) {
                        isFlex = true
                    }
                });
        
                addStyle(styles)
        
                const imgModel = document.querySelector(".showcase-offer__model-image-background")
        
                if(imgModel) {
                    const seloRecompra = document.createElement("img")
                    const seloCicloToyota = document.createElement("img")
                    const selo5Anos = document.createElement("img")
                    const selo8Anos = document.createElement("img")
                    const seloSafetySense = document.createElement("img")
        
                    seloRecompra.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/recompra-garantida-vermelho.png")
                    seloCicloToyota.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/ciclo-toyota.png")
                    selo5Anos.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/garantia-5-anos.png")
                    selo8Anos.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/garantia-8-anos.png")
                    seloSafetySense.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/toyota-safety-sense.png")
        
                    seloRecompra.classList.add("selo-recompra")
                    seloCicloToyota.classList.add("selo-ciclo-toyota")
                    selo5Anos.classList.add("selo-5-anos")
                    selo8Anos.classList.add("selo-8-anos")
                    seloSafetySense.classList.add("selo-safety-sense")
        
                    imgModel.appendChild(seloCicloToyota)
                    imgModel.appendChild(seloRecompra)
        
                    garantia5Anos.forEach(element => {
                        if(page.includes(element) && isFlex) {
                            console.log(isFlex)
                            imgModel.appendChild(selo5Anos)
                            seloGarantia = true
                        } 
                    });
        
                    if(!seloGarantia) {
                        imgModel.appendChild(selo8Anos)
                        seloGarantia = true
                    }
        
                    imgModel.appendChild(seloSafetySense)
                }
            }
        });
    }
    
    // 17/06/2022 | Adicionar redirecionamento das páginas de ofertas para páginas de agradecimento
    // Alisson Santana
    function adicionaRedirectPaginaAgradecimento() {
    
        const itemsMenuToRemove = document.querySelectorAll(".nav--accordion-mobile .nav-simple__item")
        itemsMenuToRemove.forEach(itemMenu => {
            if(itemMenu.innerHTML.includes("Página agradecimento")) {
                itemMenu.remove()
            }
        });
        
        const redirectThanksPage = async (spreadsheetId) => {
            const keyAPI = "AIzaSyD89VGI6wnaT6LE3A7Y4wCyiDmgGIxjobE"
            const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:Z?key=${keyAPI}`)
            const data = await response.json()
            const slugs = data.values
            console.log(slugs)
            let dataRedirect = []
            let url = {
                origem: '',
                destino: ''
            }
        
            if(slugs){
                slugs.forEach(element => {
                    url = {origem: element[0], destino: element[1]}
                    dataRedirect.push(url)
                });
            }
        
            const page = window.location.href
        
            dataRedirect.forEach(element => {
                if(page.includes(element.origem)) {
                    window.location.href = 'https://itavema.com.br' + element.destino
                }
            });
        }
        
        window.hookConversion = function() {  
            const spreadsheetId = "1JbjqtdwfWBgGvwTRn53D8H_e6spAGpRyL1W4KTOLs38"
            redirectThanksPage(spreadsheetId)
        }
    }
    
    // 21/06/2022 | SCRIPT PARA RENOMEAR MENU PRINCIPAL - ALTERANDO DE OFERTAS PARA NOSSO ESTOQUE
    // Bruno
    function alteraOfertasParaNossoEstoque() {
        Array.prototype.slice.call(document.querySelectorAll('.nav .nav-link'))
          .filter(function (el) {
            return el.textContent === ' Serviços '
         })[0].innerText = ' Pós Venda ';
    }
    
    // Altera ordem do menu
    function alteraOrdemMenu() {
      window.addEventListener("DOMContentLoaded", () => {
        const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");
    
        if(navItems.length > 0){
            const reorder = (before, after) => after.parentNode.insertBefore(before, after);
    
            reorder(navItems[9], navItems[6]);
        }
      });
    }
    
    // 04/07/2022 | Remove form de whatsapp nas CTAs de whatsapp
    // João Carlos
    function removeFormWhatsapp() {
        window.addEventListener("DOMContentLoaded", () => {
            // Header
            const headerWhatsappItemsDesktop = document.querySelectorAll(".header__navbar-item .header__phones-container #header-card-whatsapp #wpp-content-0 .list .header__card-whatsapp-item");
            const currentHeaderWhatsappButtonDesktop = document.querySelector(".header__navbar-item .header__phones-container .button--whatsapp");
    
            const headerWhatsappItemsMobile = document.querySelectorAll(".header-mobile__buttons #header-card-whatsapp-mobile #wpp-content-mobile-0 .list .header__card-whatsapp-item");
            const currentHeaderWhatsappButtonMobile = document.querySelector(".header-mobile__buttons > div button.button-icon--whatsapp");
    
            let headerWhatsappDataLink;
    
            const changeWhatsappHeader = (headerWhatsappItems, currentHeaderWhatsappButton) => {
                if(!currentHeaderWhatsappButton){
                    return;
                }
                
                if(headerWhatsappItems.length > 0){
                    if(headerWhatsappItems.length == 1){
                        headerWhatsappDataLink = headerWhatsappItems[0].querySelector(".header-mobile__whatsapp-link").getAttribute("data-link");
        
                        if(currentHeaderWhatsappButton){
                            const newHeaderWhatsappButton = currentHeaderWhatsappButton.cloneNode(true);
                            newHeaderWhatsappButton.setAttribute("onclick", `window.open('${headerWhatsappDataLink}')`)
                            currentHeaderWhatsappButton.after(newHeaderWhatsappButton);
                            currentHeaderWhatsappButton.remove();
                        }
                    }
                    else{
                        headerWhatsappItems.forEach(headerWhatsappItem => {
                            const headerWhatsappLink = headerWhatsappItem.querySelector(".header-mobile__whatsapp-link").cloneNode(true);
                            headerWhatsappDataLink = headerWhatsappLink.getAttribute("data-link");
                            headerWhatsappLink.setAttribute("href", headerWhatsappDataLink);
                            headerWhatsappLink.setAttribute("target", "_blank");
                    
                            headerWhatsappItem.querySelector(".header-mobile__whatsapp-link").remove();
                            headerWhatsappItem.querySelector("i").before(headerWhatsappLink);
                        });
                    }
                }
    
                currentHeaderWhatsappButton.addEventListener("click", () => {
                    const cardWhatsApp = document.querySelector("#header-card-whatsapp div[data-parent='#header-card-whatsapp']");
                    const cardWhatsAppMobile = document.querySelector("#header-card-whatsapp-mobile div[data-parent='#header-card-whatsapp-mobile']");
                    const cardCollapse = document.querySelector("#header-card-whatsapp #wpp-content-0")
                    const cardCollapseMobile = document.querySelector("#header-card-whatsapp-mobile #wpp-content-mobile-0")

                    if(cardWhatsApp && cardWhatsAppMobile && cardCollapse && cardCollapseMobile){
                        cardWhatsAppMobile.classList.remove("collapsed")
                        cardWhatsApp.classList.remove("collapsed")
                        
                        cardWhatsAppMobile.setAttribute("aria-expanded", "true")
                        cardWhatsAppMobile.setAttribute("aria-expanded", "true")

                        cardCollapse.classList.add("show")
                        cardCollapseMobile.classList.add("show")

                        cardCollapse.setAttribute("aria-expanded", "true")
                        cardCollapseMobile.setAttribute("aria-expanded", "true")
                    }
                });
            };
    
            changeWhatsappHeader(headerWhatsappItemsDesktop, currentHeaderWhatsappButtonDesktop);
            changeWhatsappHeader(headerWhatsappItemsMobile, currentHeaderWhatsappButtonMobile);
    
            // Novos
            const newVehiclesButtonWhatsapp = document.querySelector(".vehicles-new .vehicles-new__ctas .vehicles-new__button-whatsapp");
    
            if(newVehiclesButtonWhatsapp){
                const newerVechilesButtonWhatsapp = newVehiclesButtonWhatsapp.cloneNode(true);
                const dataLink = newerVechilesButtonWhatsapp.getAttribute("data-link");
    
                if(dataLink != ""){
                    newerVechilesButtonWhatsapp.setAttribute("onclick", `window.open('${dataLink}')`);
                }
                else{
                    newerVechilesButtonWhatsapp.setAttribute("onclick", `window.open('${headerWhatsappDataLink}')`);
                }
    
                newVehiclesButtonWhatsapp.after(newerVechilesButtonWhatsapp);
                newVehiclesButtonWhatsapp.remove();
            }
        });
    }
    
    // Alterar direcionamento de botão de agendamento de revisão
    // João Carlos
    function alteraDirecionamentoAgendamentoRevisao() {
        window.addEventListener("DOMContentLoaded", () => {
            const isThisPage = ({ urlPiece }) => {
                const fullURL = window.location.href
                const result = fullURL.includes(urlPiece)
        
                return result
            }
    
            if(isThisPage({ urlPiece: "/servicos" })){
                let currentBtnSchedule = document.querySelector(".showcase-services__panel .showcase-services__panel-btn-schedule");
                
                if(currentBtnSchedule){
                    let newBtnSchedule = document.createElement("a");
                    newBtnSchedule.setAttribute("class", "btn button button--large button--primary showcase-services__panel-btn-schedule");
                    newBtnSchedule.innerText = "Agendar RevisÃ£o";
                    newBtnSchedule.href = "https://www.itavema.com.br/toyota-inter-japan-sp/empresa/agendamento-de-servico";
    
                    currentBtnSchedule.after(newBtnSchedule);
                    currentBtnSchedule.remove();
                }
            }
        });
    }
    
    // Oculta o item 'prius' e 'camry' do menu
    // João Carlos
    function ocultaItensMenu() {
        let navItems = document.querySelectorAll(".nav-simple .nav .nav-item");
    
        if(navItems.length > 0){
            navItems.forEach(navItem => {
                let navItemText = navItem.querySelector(".nav-link").innerHTML;
        
                if(navItemText.includes("Prius") || navItemText.includes("Camry")){
                    navItem.remove();
                }
            });
        }
    }
    
    function ocultaOfertasUnicas() {
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
            .carousel-offers-used-models {
                display: none !important;
            }
    
        `
        const menuItems = document.querySelectorAll(".nav--accordion-mobile .nav-item")
    
        if(menuItems) {
            menuItems.forEach(element => {
                if(element.innerHTML.includes("Ofertas Únicas")) {
                    element.remove()
                }
            });
        }
    }
    
    function ocultaAgendamentoServico() {
        Array.prototype.slice.call(document.querySelectorAll('.nav .nav-link'))
            .filter(function (el) {
                return el.textContent === ' Agendamento de serviço '
            })[0].parentNode.classList.add('d-none')
    }
    
    
    
    adaptacaoHeader()
    adaptacaoFooter()
    adaptacaoCarousel()
    adaptacaoCarouselDirectSales()
    adaptacaoCarouselConsorcio()
    adaptacaoCarouselServices()
    adaptacaoBlocoDeConteudo()
    adaptacaoButtons()
    adaptacaoSelos()
    adicionaRedirectPaginaAgradecimento()
    alteraOfertasParaNossoEstoque()
    alteraOrdemMenu()
    removeFormWhatsapp()
    alteraDirecionamentoAgendamentoRevisao()
    ocultaItensMenu()
    ocultaOfertasUnicas()
    ocultaAgendamentoServico()
})()