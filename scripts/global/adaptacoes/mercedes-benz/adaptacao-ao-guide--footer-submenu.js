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
      title: 'Automóveis',
      link: 'https://www2.mercedes-benz.com.br/'
    },
    {
      title: 'Banco mercedes-benz',
      link: 'https://www.bancomercedes-benz.com.br/'
    },
    {
      title: 'Peças e Serviços',
      link: 'https://www.vantagensdeverdademb.com.br/'
    }
  ]

  const buildLinksList = (linksData) => {
    const list = linksData.map(link => {
      return `<li><a href=${link.link} target="_blank">${link.title}</a></li>`
    })

    return list.join('')
  }
  
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

  const linksHtml = buildLinksList(linksData)
  const linksFinalHtml = `
    <div class="mercedes-secondary-menu">
    <h3>MUNDO MERCEDES-BENZ</h3>
      <ul class="mercedes-secondary-menu__links">
        ${linksHtml}
      </ul>
    </div>
  `

  const target = document.querySelector(".button-scroll-top")
  target.insertAdjacentHTML('afterend', linksFinalHtml)
  

  addStyle`

    footer.footer {
      background-color: #121212 !important;
    }

    .mercedes-secondary-menu {
      padding: 40px 0 36px 0;
      border-top: 1px solid #262626 !important;
    }

    .mercedes-secondary-menu h3{
      font-size: 14px;
      text-transform: uppercase;
      color: #FFFFFF;
      font-weight: bold;
      margin-bottom: 36px;
      line-height: 14px;
    }

    .mercedes-secondary-menu__links {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
    }

    .mercedes-secondary-menu__links li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mercedes-secondary-menu__links a {
      color: #FFFFFF;
      font-size: 11px;
      text-transform: uppercase;
      font-weight: bold;
      line-height: 11px;
    }

    .mercedes-secondary-menu__links a:hover {
      color: #FFF;
      opacity: 1;
      text-decoration: none;
    }

    @media screen and (max-width: 768px) {
      .mercedes-secondary-menu__links {
        display: block;
      }
    }
  `
})()