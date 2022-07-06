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
    
      addStyle`
        .mercedes-name-mobile, .line-blue, .container-mundo-mercedes-mobile {
            display: none;
        }



        @media screen and (max-width: 768px) {
          .mercedes-dealer-logos {
            display: none;
          }

          .container-mundo-mercedes-mobile {
              display: block;
              background-color: #3d3d3d;
              padding-top: 67px !important;
          }
  
          .nav-simple--accordion-mobile .container {
            margin: 0 !important;
            padding-left: 20px !important;
            padding-bottom: 77px !important;
          }

          .mercedes-name-mobile {
            font-size: 26px;
            font-family: var(--font-family-secondary);
            width: 235px;
            margin-bottom: 10px;
            display: block;
          }

          .line-blue {
            background: #00b3fa;
            height: 5px;
            width: 45px;
            margin: 0 0 20px !important;
            display: block;
          }
          

        }

      `

      const navSimple = document.querySelector(".nav-simple--accordion-mobile")
      console.log(navSimple)

      if(navSimple){
        const divMundoMercedes = document.createElement("div")

        divMundoMercedes.classList.add("container", "container-mundo-mercedes-mobile")

        divMundoMercedes.innerHTML = `
                    <h3 class="mercedes-name-mobile">Mundo Mercedes-Benz</h3>
                    <hr class="line-blue">
                    <div class="row">
                        <div class="col-12">
                            <ul class="nav nav--accordion-mobile">
                                <li style="--animation-index: 0" class="nav-item nav-simple__item ">
                                    <a href="https://www.mercedes-benz.com.br/" target="_blank" class="nav-link nav-simple__link"> Site institucional </a>
                                </li>
                                <li style="--animation-index: 1" class="nav-item nav-simple__item ">
                                    <a href="https://showroommercedes-benz.com.br" class="nav-link nav-simple__link"> Showroom </a>
                                </li>
                                <li style="--animation-index: 2" class="nav-item nav-simple__item ">
                                    <a href="https://www.mercedes-benz.com.br/caminhoes/" class="nav-link nav-simple__link"> Caminhões </a>
                                </li>
                                <li style="--animation-index: 3" class="nav-item nav-simple__item ">
                                    <a href="https://www.mercedes-benz.com.br/onibus/" class="nav-link nav-simple__link" data-toggle="dropdown"> Ônibus </a>
                                </li>
                                <li style="--animation-index: 4" class="nav-item nav-simple__item ">
                                    <a href="https://www.mercedes-benz.com.br/vans/" class="nav-link nav-simple__link" data-toggle="dropdown"> Vans </a>
                                </li>
                                <li style="--animation-index: 5" class="nav-item nav-simple__item ">
                                    <a href="https://www.bancomercedes-benz.com.br/" class="nav-link nav-simple__link" data-toggle="dropdown"> Banco </a>
                                </li>       
                            </ul>
                        </div>
                    </div>
                    `

        navSimple.appendChild(divMundoMercedes)

      }
})()