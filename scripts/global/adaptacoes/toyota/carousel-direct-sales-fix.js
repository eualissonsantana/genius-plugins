(() => {
  const addStyle = ({ styles }) => {
    const css = styles,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
    head.appendChild(style);
    style.setAttribute('type', 'text/css');
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  addStyle({
    styles: `
      .carousel-direct-sales .carousel-direct-sales__header {
        display: flex;
        flex-direction: column;
      }

      .carousel-direct-sales .carousel-direct-sales__header .section-component__subtitle,
      .carousel-direct-sales .carousel-direct-sales__header .icon,
      .carousel-direct-sales .carousel-direct-sales__header .section-component__dash,
      .carousel-direct-sales .card__separator,
      .list-direct-sales-vehicles__list .card__separator {
        display: none;
      }

      .carousel-direct-sales .carousel-direct-sales__header .section-component__title {
        padding-bottom: 20px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .carousel-direct-sales .carousel-direct-sales__header .section-component__title::after {
        content: '';
        display: block;
        width: 59px;
        height: 2px;
        background-color: #DE2326;
        margin: 0 auto;
      }

      .carousel-direct-sales .carousel-direct-sales__header .carousel-direct-sales__filter {
        padding: 0;
      }

      .carousel-direct-sales .card__content .card__title,
      .carousel-direct-sales .card__content .card__subtitle,
      .carousel-direct-sales .card__footer .card__trigger,
      .carousel-direct-sales .card__footer .card__title,
      .carousel-direct-sales .card__footer .card__trigger-value,
      .list-direct-sales-vehicles__list .card__content .card__title,
      .list-direct-sales-vehicles__list .card__content .card__subtitle,
      .list-direct-sales-vehicles__list .card__footer .card__trigger,
      .list-direct-sales-vehicles__list .card__footer .card__title,
      .list-direct-sales-vehicles__list .card__footer .card__trigger-value {
        text-align: left;
        align-self: start;
      }

      .carousel-direct-sales .card__footer .card__trigger-value,
      .list-direct-sales-vehicles__list  .card__footer .card__trigger-value {
        color: #000;
      }

      .carousel-direct-sales div[data-match-height="direct-sales-titles"] {
        height: 84px !important;
      }
      
      .list-direct-sales-vehicles__list [data-match-height="vehicle-card-content"] {
        height: 60px !important;
      }

      .carousel-direct-sales .carousel-direct-sales__card {
        height: 465px;
      }

      .carousel-direct-sales .carousel-direct-sales__card:hover {
        height: 535px;
      }

      .carousel-direct-sales .carousel__item {
        height: 560px;
      }

      .list-direct-sales-vehicles__list .card {
        height: 400px;
      }

      .list-direct-sales-vehicles__list .card:hover {
        height: 480px;
      }

      .list-direct-sales-vehicles__list .col-md-6 {
        height: 500px;
      }

      .carousel-direct-sales .carousel-direct-sales__card .btn.button.button--primary,
      .list-direct-sales-vehicles__list .card .btn.button.button--primary {
        display: none;
      }

      .carousel-direct-sales .carousel-direct-sales__card:hover .btn.button.button--primary,
      .list-direct-sales-vehicles__list .card:hover .btn.button.button--primary {
        display: block;
      }

      .carousel-direct-sales .btn.button.button--primary,
      .list-direct-sales-vehicles__list .card .btn.button.button--primary {
        margin-bottom: 20px;
        margin-top: 15px;
      }
    `
  })
})()