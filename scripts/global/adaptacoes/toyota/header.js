(() => {
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
})()