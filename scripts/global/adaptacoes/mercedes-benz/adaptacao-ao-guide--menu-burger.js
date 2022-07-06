(() => {
  const linksData = [
    {
      title: 'Site institucional',
      link: '#'
    },
    {
      title: 'Showroom',
      link: '#'
    },
    {
      title: 'Caminhões',
      link: '#'
    },
    {
      title: 'Ônibus',
      link: '#'
    },
    {
      title: 'Vans',
      link: '#'
    },
    {
      title: 'Automóveis',
      link: '#'
    },
    {
      title: 'Banco',
      link: '#'
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
    <h3>Sites Mercedes</h3>
    <ul>
      ${institutionalLinks}
    </ul>
  </div>`

  homeIcon.insertAdjacentHTML('afterend', dropdownMenu)
  homeIcon.classList.add('nav--desktop-menu-burguer')
  console.log('aa')
  
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
      z-index: 3333
    }

    .institutional-submenu__close-button {
      justify-self: end;
      color: #333;
      font-size: 1rem;
      font-family: sans-serif;
      cursor: pointer;

      transition: all .2s ease;
    }

    .institutional-submenu__close-button:hover {
      color: #000;
    }

    .institutional-submenu h3 {
      font-size: 1.25;
      color: #000; 
    }
  `
})()