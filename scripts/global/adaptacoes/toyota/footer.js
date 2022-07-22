(() => {
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

    // rodapé
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
})()