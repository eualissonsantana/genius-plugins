function addHeader(dealerImageSrc, currentDealerName) {
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

  const dealerImage = dealerImageSrc
  const authorizedDealer = 'https://legado.autoforce.com.br/plugins/images/global/adaptacoes/mercedes-benz/selo-concessionaria-autorizada.png'

  const logosWrapper = document.createElement('div')
  logosWrapper.innerHTML = `<img src="${dealerImage}" /><img src="${authorizedDealer}" />`
  logosWrapper.classList.add('mercedes-dealer-logos')

  const header = document.querySelector('.header__navbar')
  header.appendChild(logosWrapper)

  addStyle`
    .mercedes-dealer-logos {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-bottom: 2px !important;
    }

    .header__navbar {
      align-items: flex-end !important;
    }

    .nav-simple__link {
      font-weight: 300 !important;
    }

    .header-fca {
      padding: 0 !important;
    }

    .header-fca .header__logo {
      max-height: initial !important;
    }

    .header__link-logo-right, .header__units-button-toggler,
    .header-fca .header-mobile__link-logo-right {
      display: none !important;
    }

    .mercedes-dealer-logos img {
      max-width: 150px;
      max-height: 35px;
    }

    .mercedes-dealer-logos img + img {
      margin-left: 15px;
    }

    .footer .button-scroll-top {
      position: fixed !important;
      bottom: 30px;
      top: initial !important;
    }

    .nav-simple .nav-item:first-child {
      padding-left: 0 !important;
    }

    .header__phones-button-label {
      font-weight: initial !important;
      text-transform: initial !important;
    }

    .icon-phone, .fa-chevron-down {
      font-size: 13px !important;
    }

    .fa-chevron-down {
      margin-left: 5px;
    }

    #header-card-phones, .dropdown-menu {
      background-color: #696969 !important;
    }

    .header__card-phones-item {
      display: block !important;
    }

    .card-collapse__phone-link span {
      font-weight: 300 !important;
    }

    .card-collapse__phone-link strong {
      font-size: 14px !important;
      font-weight: bold;
    }

    .text-mask-phone {
      font-size: 13px !important;
    }

    .list--border-bottom {
      padding: 30px 15px !important;
      text-align: right !important;
    }

    .list--border-bottom>li {
      padding: 0 !important;
    }

    .header__card-phones-item, .header__card-whatsapp-item {
      min-height: initial !important;
    }

    .card-collapse, .card-panel {
      border-radius: 0 !important;
    }

    .header__card-phones, .header__card-whatsapp, .dropdown-menu {
      min-width: initial !important;
    }

    .dropdown-menu {
      width: max-content !important;
    }

    .list--border-bottom>li {
      border: none !important;
    }

    .header-fca .header-mobile__row {
      padding: 0 !important;
    }

    .header-mobile {
      padding: 36px 0 14px !important;

    }

    .dealer-name-mobile {
      display: none;
    }

    .text-mask-phone {
      display: block;
    }

    .header__card-whatsapp-item .icon-whatsapp {
      display: none !important;
    }

    .header-mobile__phone-number, .header-mobile__whatsapp-number {
      color: #fff !important;
    }

    @media screen and (min-width: 768px) {
      .nav-simple > .container {
        max-width: 1154px;
        margin: 0 20px;
        padding: 0 16px;
      }
    }

    .header__phones-container {
      display: flex;
    }

    .div-whatsapp {
      margin-left: 24px !important;
    }

    @media screen and (max-width: 768px) {

      .header-mobile__phone-number, .header-mobile__whatsapp-number {
        color: #888 !important;
      }

      .header__card-phones-item .icon-phone {
        display: none !important;
      }

      .mercedes-dealer-logos {
        display: none;
      }

      .header-fca .container {
        padding: 0 !important;
      }

      .header-fca .header-mobile__row {
        padding: 0 22px !important;
      }

      .header-fca .header-mobile {
        padding-top: 36px !important;
        padding-bottom: 14px !important;
      }

      .navbar-icon-line {
        height: 5px !important;
        width: 36px !important;
        color: #fff !important;
      }

      .navbar-toggler-hamburger {
        height: 27px !important;
      }

      .nav-simple.nav-simple--active {
        top: 99px !important;
      }

      .nav--accordion-mobile .nav-simple__item {
        background-color: initial !important;
      }

      .nav--accordion-mobile .nav-simple__item+.nav-simple__item {
        border-top: initial !important;
      }

      .nav-simple .nav-item a {
        font-size: 16px !important;
        color: #fff !important;
        letter-spacing: 2px !important;
      }

      .nav-simple {
        padding-top: 30px !important;
        padding-bottom: 0 !important;
      }

      .nav-simple__link {
        padding-left: 0 !important;
        padding: 10px 0 !important;
      }

      .dealer-name-mobile {
        font-size: 26px;
        font-family: var(--font-family-secondary);
        width: 171px;
        margin-bottom: 10px;
        display: block;
      }

      #header-card-phones, .dropdown-menu, .nav-simple__item.show .nav-simple__link {
        background-color: transparent !important;
      }

      .card-collapse-deep .list--border-bottom > li, .list--border-bottom {
        background: transparent !important;
      }

      .list--border-bottom {
        padding: 0 10px 10px 35px  !important;
        text-align: left !important;
      }

      .card-collapse-deep .list--border-bottom > li {
        line-height: 35px !important;
      }
    }
  `

  const phonesLabel = document.querySelectorAll(".header__phones-button-toggler")
  const unitLabel = document.querySelector(".card-collapse__phone-link")
  const toggle = document.querySelector(".header-mobile__row .navbar-toggler")
  const unitsContainer = document.querySelector(".header__units-container")
  const navMobileContainer = document.querySelector(".nav-simple--accordion-mobile .container")
  const navMobileRow = navMobileContainer.querySelector(".row")
  const navAccordion = document.querySelector(".nav--accordion-mobile")
  const whatsappButton = document.querySelectorAll(".header__phones-container")[0]
  const headerContainers = document.querySelectorAll(".header__phones-container")
  console.log(headerContainers)

  if(headerContainers) {
    headerContainers.forEach(element => {
      element.classList.add("d-none", "d-md-flex")
    });
  }
  
  if(phonesLabel && unitLabel){
    phonesLabel.forEach(element => {
      const icon = document.createElement("i")
  
      icon.classList.add("fas", "fa-chevron-down")
  
      element.appendChild(icon)
  
      unitLabel.innerHTML = unitLabel.innerHTML.replace(":", "")
    });

    if(whatsappButton) {
      whatsappButton.classList.add("div-whatsapp")
      navAccordion.appendChild(whatsappButton)
    }

    if(toggle) {
      const targetLogo = document.querySelector(".header-mobile__logo")
      const targetButton = document.querySelector(".header-mobile__buttons")

      targetLogo.parentNode.insertBefore(targetLogo, toggle)
      targetButton.parentNode.insertBefore(targetButton, toggle)
    }

    if(unitsContainer){
      unitsContainer.parentNode.removeChild(unitsContainer)
    }

    const dealerName = document.createElement("h3")
    const lineBlue = document.createElement("hr")

    dealerName.innerHTML = currentDealerName
    dealerName.classList.add("dealer-name-mobile")
    lineBlue.classList.add("line-blue")

    navMobileContainer.insertBefore(dealerName, navMobileRow)
    navMobileContainer.insertBefore(lineBlue, navMobileRow)
   
  }
}