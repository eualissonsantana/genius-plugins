(() => {
  const linksData = [
    {
      title: 'Site institucional',
      link: 'https://www.mercedes-benz.com.br/'
    },
    {
      title: 'Showroom',
      link: 'https://showroommercedes-benz.com.br'
    },
    {
      title: 'Caminhões',
      link: 'https://www.mercedes-benz.com.br/caminhoes/'
    },
    {
      title: 'Ônibus',
      link: 'https://www.mercedes-benz.com.br/onibus/'
    },
    {
      title: 'Vans',
      link: 'https://www.mercedes-benz.com.br/vans/'
    },
    {
      title: 'Banco',
      link: 'https://www.bancomercedes-benz.com.br/'
    }
  ]

  const buildLinksList = (linksData) => {
    const list = linksData.map(link => {
      return `<li><a href=${link.link} target="_blank">${link.title}</a></li>`
    })

    return list.join('')
  }

  const institutionalLinks = buildLinksList(linksData)

  const toggleButton = `<button class="navbar-toggler" data-target="#main-menu"><div class="navbar-toggler-hamburger"><div class="navbar-icon-line navbar-icon__first-line"></div><div class="navbar-icon-line navbar-icon__second-line"></div><div class="navbar-icon-line navbar-icon__third-line"></div></div></button>`

  const homeIcon = document.querySelector('ul.nav.nav--accordion-mobile li').firstChild
  homeIcon.innerHTML = toggleButton

  const dropdownMenu = `<div class="institutional-submenu">
    <span class="institutional-submenu__close-button">x</span>
    <h3>Mundo Mercedes-Benz</h3>
    <ul>
      ${institutionalLinks}
    </ul>
  </div>`

  homeIcon.insertAdjacentHTML('afterend', dropdownMenu)
  homeIcon.classList.add('nav--desktop-menu-burguer')
  
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
    .nav--desktop-menu-burguer  {
      display: relative;
    }

    .institutional-submenu {
      position: absolute;
      background: #FFF;
      padding: 46px 36px;
      display: none;
      z-index: 3333;
      width: 270px;
      min-width: 294px;
      max-width: 270px;
      border-radius: 6px;
      top: 32px;
    }

    .institutional-submenu.active {
      display: grid;
    }

    .institutional-submenu__close-button {
      justify-self: end;
      color: #333;
      font-size: 1rem;
      font-family: sans-serif;
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 25px;

      transition: all .2s ease;
    }

    .institutional-submenu__close-button:hover {
      color: #000;
    }

    .institutional-submenu h3 {
      font-size: 25px;
      color: #000; 
      padding-bottom: 31px;
      font-family: var(--font-family-secondary);
      text-transform: capitalize;
    }

    .institutional-submenu ul {
      margin: 0;
      padding: 0;
    }

    .institutional-submenu ul li a {
      font-family: sans-serif;
      text-transform: capitalize;
      font-size: 16px !important;
    }

    .institutional-submenu ul li a:hover {
      text-decoration: none;
    }

    .institutional-submenu ul li + li {
      margin-top: 8px;
    }

    .layer-black-show {
      position: absolute;
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 100%;
      top: 126px;
      z-index: 1;
    }

    .showcase-with-layer {
      position: sticky !important;
    }

    .no-scroll {
      position: fixed;
      width: 100%;
      max-width: 100%;
      overflow-y: scroll;
    }

    .card__img-value {
      z-index: initial !important;
    }

    .blue-line {
      display: none;
      margin: 0 !important;
    }

    .line-active {
      display: block !important;
      background-color: #00AEED;
      width: 133px;
      height: 3px;
      position: absolute;
      top: 86px;
      z-index: 501;
    }

    @media screen and (max-width: 768px) {
      .nav--desktop-menu-burguer {
        display: none !important;
      }

      .header-mobile__link-logo-right {
        display: none;
      }

      .header__phones-container {
        display: none;
      }

      .header .container {
        margin: 0;
      }
    }
  `

  const toggle = document.querySelector('.nav--desktop-menu-burguer')
  const dropdown = document.querySelector('.institutional-submenu')
  const closeButton = document.querySelector('.institutional-submenu__close-button')
  const layerBlack = document.createElement("div")
  const page = document.querySelector(".page")
  const fca = document.querySelector(".header-fca")
  const showcase = document.querySelector(".showcase-simple")
  const showcaseServices = document.querySelector(".showcase-services")
  const body = document.querySelector("body")
  const blueLine = document.createElement("hr")

  layerBlack.classList.add("layer-black")
  blueLine.classList.add("blue-line")

  page.appendChild(layerBlack)
  fca.appendChild(blueLine)
  
  document.addEventListener("DOMContentLoaded", function(event) {
    $('.nav--desktop-menu-burguer .navbar-toggler-hamburger').unbind()

    toggle.addEventListener('click', (e) => {
      e.preventDefault()
      dropdown.classList.add('active')
      layerBlack.classList.add("layer-black-show")
      body.classList.add("no-scroll")
      blueLine.classList.add("line-active")

      if(showcase){
        showcase.classList.add("showcase-with-layer")
      } else if(showcaseServices){
        showcaseServices.classList.add("showcase-with-layer")
      }
    })

    closeButton.addEventListener('click', (e) => {
      dropdown.classList.remove('active')
      layerBlack.classList.remove('layer-black-show')
      body.classList.remove("no-scroll")
      blueLine.classList.remove("line-active")

      if(showcase){
        showcase.classList.remove("showcase-with-layer")
      } else if(showcaseServices){
        showcaseServices.classList.remove("showcase-with-layer")
      }
    })
  })
})()