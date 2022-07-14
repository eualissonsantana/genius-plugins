(() => {
  const socialData = [
    {
      social: 'Facebook',
      icon: '<i class="icon icon-facebook icon--base icon--hover-facebook"></i>',
      links: [
        {
          title: 'Facebook',
          link: 'https://www.facebook.com/mercedesbenzcaminhoes/'
        }
      ]
    },
    {
      social: 'Instagram',
      icon: '<i class="icon icon-instagram icon--base icon--hover-instagram"></i>',
      links: [
        {
          title: 'Instagram',
          link: 'https://www.instagram.com/mercedesbenzbrasil/'
        }
      ]
    },
    {
      social: 'Youtube',
      icon: '<i class="icon icon-youtube icon--base icon--hover-youtube"></i>',
      links: [
        {
          title: 'Youtube',
          link: 'https://www.youtube.com/user/MercedesBenzBrasil'
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
      <h3>Redes sociais:</h3>
      <ul class="mercedes-social__lists">
        ${socialItemsHtml.join('')}
      </ul>
    </div>
  `

  const footerUnits = document.querySelector('.footer__units--desktop')
  const footer = document.querySelector('.footer')
  footer.parentNode.insertBefore(footerUnits, footer)

  const target = document.querySelector(".button-scroll-top")
  target.insertAdjacentHTML('afterend', socialFinalHtml)


  addStyle`
    .footer__units {
      border-top: initial !important;
      padding: 60px 80px 40px !important;
    }

    .mercedes-social {
      padding: 45px 0;
      border-top: 1px solid #262626 !important;
    }

    .mercedes-social ul, .mercedes-social li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mercedes-social h3 {
      font-size: 14px;
      font-weight: bold;
      color: #FFF;
      text-transform: uppercase;
      margin-bottom: 36px;
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
      font-size: 28px;
    }

    .mercedes-social__list + .mercedes-social__list {
      margin-left: 50px;
    }

    .mercedes-social__list ul li + li {
      margin-left: .5rem;
      padding-left: .5rem;
      border-left: 1px solid #FFF6;
    }

    .mercedes-social__list a {
      color: #7d7b7b;
      font-size: 14px;
    }

    .mercedes-social__list a:hover {
      color: #FFF;
      opacity: 1;
      text-decoration: none;
    }

    .grecaptcha-badge {
      pointer-events: none;
    }

    .footer__social-networks {
      display: none !important;
    }

    .footer {
      border-top: initial !important;
    }

    .footer .footer__separator {
      margin: 0 !important;
    }

    .footer__signature {
      padding: 32px 0 30px !important;
    }

    @media screen and (max-width: 768px) {
      .mercedes-social__lists {
        flex-direction: column;
      }

      .mercedes-social__list + .mercedes-social__list {
        margin-left: 0;
        margin-top: 1rem;
      }

      .mercedes-secondary-menu__links a {
        font-size: 14px !important;
        line-height: 28px !important;
      }

      .mercedes-secondary-menu h3, .mercedes-social h3 {
        margin-bottom: 15px !important;
        font-size: 16px !important;
      }

      .footer__units {
        padding: 0 !important;
      }
  
    }
  `
})()