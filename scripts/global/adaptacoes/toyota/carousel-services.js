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

      .list-accessories__col-card {
        height: 500px;
      }
      
      .list-accessories__col-card .card {
        height: 400px;
      }

      .list-accessories__col-card .card:hover {
        height: 490px;
      }

      .carousel-products .carousel__item {
        height: 480px;
      }

      .carousel-products .card.card-product {
        height: 400px;
      }

      .carousel-products .card.card-product:hover {
        height: 470px;
      }

      .carousel-products .card.card-product .btn.button--primary,
      .list-accessories__col-card .card .btn.button--primary {
        display: none;
      }

      .carousel-products .card.card-product:hover .btn.button--primary,
      .list-accessories__col-card .card:hover .btn.button--primary {
        display: block;
      }

      .card.card-product,
      .list-accessories__col-card .card {
        border-radius: 10px;
      }

      .card.card-product .card__header, .list-accessories__col-card .card .card__header {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      }

      .card.card-product .card__list li,
      .list-accessories__col-card .card .list-accessories-card-list li {
        text-transform: uppercase;
      }

      .card.card-product .card__footer .card__title,
      .card.card-product .card__separator,
      .card.card-product .card__footer .card__trigger-description,
      .list-accessories__col-card .card .card__footer .card__title,
      .list-accessories__col-card .card .card__separator,
      .list-accessories__col-card .card .card__footer .card__trigger-description {
        display: none;
      }

      .card.card-product .card__trigger-value,
      .card.card-product .card__title,
      .list-accessories__col-card .card .card__title,
      .list-accessories__col-card .card .card__trigger-value {
        text-align: left;
        color: #000;
      }

      .card-product div[data-match-height="product-card-content"] {
        height: 70px !important;
      }

      .card-product div[data-match-height="carousel-product-footer"] {
        height: auto !important;
      }
      
      .card-product .card__footer, .list-accessories__col-card .card .card__footer {
        margin: 0
      }

      .card-product .btn.button.button--primary, .list-accessories__col-card .card .btn.button.button--primary {
        margin-bottom: 20px;
        margin-top: 40px;
      }
  `})
})()