(() => {
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

  addContentBlock(window.servicesBlockContent)
})()