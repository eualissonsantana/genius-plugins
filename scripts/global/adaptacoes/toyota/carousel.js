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

  addStyle({
    styles: `
      .carousel-vehicles-new .vehicles-new__header {
        display: flex;
        flex-direction: column;
      }

      .carousel-vehicles-new .vehicles-new__header .vehicles-new__title {
        padding-bottom: 20px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .carousel-vehicles-new .vehicles-new__header .vehicles-new__title::after {
        content: '';
        display: block;
        width: 59px;
        height: 2px;
        background-color: #DE2326;
      }

      .filter-pills .filter-pills__title {
        display: none;
      }

      .vehicles-new__header .vehicles-new__category-filter {
        padding: 0;
      }
      
      .filter-pills__options-text.active, .filter-pills__options-text {
        color: #000000;
      }
      
      @media screen and (min-width: 767.98px) {
        .vehicles-new__header .vehicles-new__category-filter {
          margin: 0;
        }
      }
      
      .filter-pills .filter-pills__options::after {
        display: none;
      }

      ul.filter-pills__options {
        margin: 0;
        column-gap: 40px;
      }

      .filter-pills__options-text {
        padding: 4px 0;
        border-bottom: 2px solid transparent;
        transition: all .2s ease;
      }

      .filter-pills__options-text.active, .filter-pills__options-text:hover {
        color: #000 !important;
        font-weight: 300 !important;
        border-bottom: 2px solid #B11316;
      }

      .filter-pills__options-text.active:before, .filter-pills__options-text:hover:before {
        display: none !important;
      }

      .vehicles-new__carousel .card.card--simple {
        border: 1px solid transparent;
        padding: 18px 10px;
        transition: all .2s ease;
      }

      .vehicles-new__carousel .card.card--simple:hover {
        border: 1px solid #DE2326;
      }

      .vehicles-new__carousel .card__footer {
        height: 100%;
        display: flex;
        align-items: flex-end;
        padding: 0;
      }

      .vehicles-new__carousel .card.card--simple .btn {
        background-color: #DE2326;
        border-radius: 30px;
        color: #FFF;
        opacity: 0;
        transition: all .2s ease;
        margin-top: 10px;
        padding: 6px 20px;
        width: 100%;
      }

      .vehicles-new__carousel .card.card--simple:hover .btn {
        opacity: 1;
      }

      .vehicles-new__carousel .card.card--simple .card__title::before {
        content: "Toyota";
        text-transform: uppercase;
        font-weight: 300;
        padding-right: 4px;
      }

      .vehicles-new__carousel .card.card--simple .card__trigger-description {
        display: none
      }

      .vehicles-new__carousel .card.card--simple .btn .icon {
        display: none;
      }

      .vehicles-new__carousel .card__content {
        padding: 0;
      }

      .vehicles-new__carousel .card .card__title {
        min-height: 36px;
      }

      .vehicles-new__carousel .carousel__item {
        min-height: 246px;
      }




      .section-component.used-models .used-models__header {
          margin-bottom: 55px;
      }

      .section-component.used-models .section-component__header--fill {
        background: url(https://cdn.discordapp.com/attachments/750695916994035742/794188207670820864/toyota-tarja-seminovos.png) no-repeat 100% 0;
        height: 400px;
      }

      .used-models__carousel.carousel, .offers-used-models__carousel.carousel, .list-used-models__list .row .col-md-6 {
        height: 480px !important;
      }

      .list-used-models__list .card:hover {
        height: 460px !important;
      }

      .card.card--used-model {
        border-radius: 10px;
        box-shadow: 0px 3px 20px #00000029;
        transition: all .2s ease;
        border: 1px solid transparent;
      }

      .card.card--used-model:hover {
        transition: all .2s ease;
        border: 1px solid #DE2326;
      }
      
      .card--used-model .card__image-value, .card--used-model .card__header {
        height: 130px
      }
      
      .card--used-model .card__image-value {
        background-size: cover;
        background-position: center;
        border-radius: 10px 10px 0 0;
      }

      .card__subtitle.card__subtitle--text-left {
        padding-bottom: 24px;
        height: auto !important;
      }

      .card__cta-used-model {
        margin: 16px 0;
        background-color: #DE2326;
        opacity: 0;
        display: none;
        transition: all .2s ease;
      }

      .card__cta-used-model:hover {
        background-color: #B11316;
      }

      .card:hover .btn.button.card__cta {
        display: inline-flex;
        opacity: 1;
        transition: all .2s ease;
      }

      .card--used-model .card__triggers .card__title {
        display: none;
      }

      .card--used-model .card__separator {
        display: none;
      }

      .card--used-model .card__triggers {
        align-items: start;
        height: auto !important;
      }

      .card--used-model .card__trigger-value {
        color: #000;
        padding-bottom: 20px;
      }

      .card--used-model .card__list li, .card--used-model .card__list li b {
        font-weight: bold !important;
        color: #000;
        padding: 4px 27px 4px 23px;
      }

      .card--used-model .card__list li b {
        display: none;
      }
      
      .card--used-model .card__title.card__title--text-left::before {
        content: "Toyota";
        padding-right: 4px;
        text-transform: uppercase;
        font-weight: 300;
      }

      .card--used-model .card__list.list li::before, .list-used-models__list .card__list .card__list-item::before {
        content: "\\ea0a";
        font-family: auto-icons!important;
        color: #DE2326;
        width: 15px;
        height: 15px;
        font-size: 7px;
        border-radius: 10px;
        border: 1px solid #DE2326;
        background: transparent;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }

      .list-used-models__list .card__list .card__list-item::before {
        margin-right: 10px;
        top: -2px;
        position: relative;
      }
  

      .list-used-models__list .card__list .card__list-item {
        padding: 5px 0;
      }

      .list-used-models__list .card__list {
        padding: 0;
      }

      .card--used-model .card__list {
        list-style-type: none;
      }

      .card--used-model .card__content div[data-match-height="carousel-used-model-list"] {
        height: auto !important;
      }

      @media screen and (max-width: 768px) {
        .section-component.used-models .section-component__header--fill {
          background: #494E53;
          height: auto;
        }

        .vehicles-new__carousel .card.card--simple .btn {
          opacity: 1;
        }

        .card--used-model .card__cta-used-model {
          opacity: 1;
          display: block;
          transition: all .2s ease;
        }
      }
    `
  })

  const cardList = document.querySelectorAll('.card--used-model .card__list li')
  Array.prototype.forEach.call(cardList, (item) => item.innerHTML = item.innerHTML.replace(':', ''))
})()