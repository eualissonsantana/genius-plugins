(() => {
  const socialData = [
    {
      social: 'Facebook',
      icon: '<i class="icon icon-facebook icon--base icon--hover-facebook"></i>',
      links: [
        {
          title: 'Automóveis',
          link: '#'
        },
        {
          title: 'Caminhões',
          link: '#'
        },
        {
          title: 'Vans',
          link: '#'
        },
        {
          title: 'Ônibus',
          link: '#'
        }
      ]
    },
    {
      social: 'Instagram',
      icon: '<i class="icon icon-instagram icon--base icon--hover-instagram"></i>',
      links: [
        {
          title: 'Automóveis',
          link: '#'
        },
        {
          title: 'Caminhões',
          link: '#'
        },
        {
          title: 'Vans',
          link: '#'
        },
        {
          title: 'Ônibus',
          link: '#'
        }
      ]
    },
    {
      social: 'Youtube',
      icon: '<i class="icon icon-youtube icon--base icon--hover-youtube"></i>',
      links: [
        {
          title: 'Mercedes-Benz Brasil',
          link: '#'
        },
      ]
    }
  ]

  const buildSocialList = (socialList) => {
    const list = socialList.map(listItem => {
      return `<li><a href=${listItem.link} target="_blank">${listItem.title}</a></li>`
    })

    return list.join('')
  }

  const buildSocialMenu = (lists) => {
    const socialMenu = lists.map(list => {
      return `<li class="mercedes-social__list">${list.icon}<ul>${buildSocialList(list.links)}</ul></li>`
    })

    return socialMenu
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

  const socialItemsHtml = buildSocialMenu(socialData)
  const socialFinalHtml = `
    <div class="mercedes-social">
      <h3>REDES SOCIAIS:</h3>
      <ul class="mercedes-social__lists">
        ${socialItemsHtml.join('')}
      </ul>
    </div>
  `

  const target = document.querySelector('.footer__units--desktop')
  target.insertAdjacentHTML('afterend', socialFinalHtml)


  addStyle`
    .mercedes-social {
      padding-top: 45px;
      padding-bottom: 25px;
      border-top: 1px solid #444;
    }

    .mercedes-social ul, .mercedes-social li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mercedes-social h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: #FFF;
      text-transform: uppercase;
      padding-bottom: 36px;
    }

    .mercedes-social__lists {
      display: flex;
    }

    .mercedes-social__lists ul {
      display: flex;
    }

    .mercedes-social__list {
      display: flex;
      align-items: center;
    }

    .mercedes-social__list i {
      margin-right: 1rem;
      color: #FFF;
      max-height: 20px;
    }

    .mercedes-social__list + .mercedes-social__list {
      margin-left: 3rem;
    }

    .mercedes-social__list ul li + li {
      margin-left: .5rem;
      padding-left: .5rem;
      border-left: 1px solid #444;
    }

    .mercedes-social__list a {
      color: #FFF;
      font-size: 1rem;
    }

    .mercedes-social__list a:hover {
      color: #FFF;
      opacity: 1;
      text-decoration: none;
    }
  `
})()