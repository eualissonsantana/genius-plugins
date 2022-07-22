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
      .section-component.carousel-consortia .section-component__header {
        padding: 0;
      }

      .section-component.carousel-consortia .section-component__subtitle, .section-component.carousel-consortia .section-component__dash {
        display: none;
      }

      .section-component.carousel-consortia .section-component__title {
        text-align: center;
      }

      .section-component.carousel-consortia .section-component__title::after {
        content: "";
        display: block;
        width: 59px;
        height: 2px;
        background-color: #DE2326;
        margin: 10px auto;
      }

      .section-component.carousel-consortia .section-component__title span {
        color: #000;
      }
      
      .carousel__item.swiper-slide.carousel-consortia__item, .list-consortia__list .list-consortia__item-wrap {
        height: 500px;
      }

      .card--dark {
        background-color: #5A5A5A;
        border-radius: 10px;
        height: 420px;
      }

      .card--dark .card__header {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      }

      .card--dark .card-consortia__button {
        display: none;
      }

      .card--dark:hover .btn.button.card__cta.card-consortia__button {
        display: block;
      }

      .card--dark:hover {
        height: 500px;
      }

      .card--dark .card__img:before {
        background-color: #5A5A5A;
      }

      .card--dark .card__separator {
        display: none;
      }

      .card--dark .card__title {
        margin-bottom: 35px;
      }

      .card--dark div[data-match-height="card-consortia-card-title"] {
        height: 70px !important;
      }

      .card--dark .card__title, .card--dark .card__trigger-description, .card--dark .card__trigger-value, .card--dark  {
        text-align: left;
      }

      .card--dark .card__trigger-description {
        font-size: 10px;
      }

      .card--dark .card--dark .card__trigger-value {
        font-size: 20px;
      }

      .card--dark .card__title::before {
        content: "Toyota";
        padding-right: 4px;
        text-transform: uppercase;
        font-weight: 300;
      }

      .btn.button.card-consortia__button {
        margin-bottom: 20px;
      }
    `
  })
})()