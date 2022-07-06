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

  const logo = document.querySelector('.header-desktop .header__logo')
  logo.setAttribute('src', 'https://legado.autoforce.com.br/mods/enzo/mercedes-benz/mercedes-207x56.png')

  const phone = document.querySelector('.header-desktop .header__phones-container')
  const nav = document.querySelector('.nav-simple .nav')

  nav.appendChild(phone)

  const headerPhones = document.querySelector('#header-card-phones')
  // headerPhones.classList.add('show')

  Array.prototype.slice.call(document.querySelectorAll('.nav .nav-link'))
  .filter(function (el) {
    return el.textContent === ' Novos '
  })[0].innerText = ' Veículos ';

  addStyle`
    header.header {
      padding: 0;
    }

    .header-desktop .header__navbar {
      padding: 15px 0;
      border-bottom: 1px solid #262626;
    }

    .header-desktop .header__navbar > a {
      overflow: hidden;
      height: 56px;
      flex: 0 0 207px;
    }

    .header-desktop .header__navbar > a img {
      width: 207px;
    }

    .page__container {
      max-width: 1190px !important;
    }

    .header .container, .nav-simple .container {
      margin: 0 20px;
      padding: 0 16px;
    }

    .header .container {
      max-width: 1154px;
    }

    .nav-simple {
      padding-top: 15px;
      padding-bottom: 15px !important;
    }

    .nav-simple .nav-simple__item {
      border-right: none;
    }

    .nav-simple .nav-item a {
      font-size: 14px;
      color: #787676;
    }

    .nav-simple .nav-item .icon-arrow-d:before {
      color: #787676;
    }

    .nav-simple__item:after {
      display: none;
    }

    .nav-simple .nav-item a i {
      margin-top: 4px;
    }

    .nav-simple .nav-item:first-child {
      padding-right: 15px;
    }

    .nav-simple-sub.dropdown-menu {
      margin-top: 15px !important;
    }

    .nav-simple-sub.dropdown-menu li a {
      color: #FFFFFF;
      font-size: 16px;
      font-weight: lighter;
      text-transform: capitalize;
    }

    .card-collapse-deep .list--border-bottom > li {
      background: #696969 !important;
      line-height: 30px;
    }

    a .footer__social-networks .icon {
      font-size: 20px;
    }

    .nav-simple .nav button {
      background: transparent;
      color: #FFF;
      padding: 0;
    }

    .header__phones-container {
      margin-left: auto;
    }

    .nav-simple .nav button .icon-phone:before {
      color: #00b3fa;
    }

    #header-card-phones {
      margin-top: 15px;
      background: #787676 !important;
      left: -60%;
    }

    #header-card-phones .icon, .card-collapse__header {
      display: none;
    }

    .header__card-phones-items .card-collapse__content {
      display: block !important;
    }

    .list--border-bottom {
      background: #696969 !important;
    }

    .list--header-phones > li {
      background: #696969;
    }

    .list--header-phones > li a {
      color: #FFF !important;
    }
  `
})()