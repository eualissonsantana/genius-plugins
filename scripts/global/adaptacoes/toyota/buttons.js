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

  addStyle({ styles: `
    .btn.button {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.25;
      min-width: 6.25rem;
      padding: .5rem 1rem;
      height: 2.25rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 1.875rem;
    }

    .btn.button button--whatsapp {
      font-weight: 300;
    }
    
    .btn.button.button--primary, .btn.button.button--block, .btn.button.button--dark, .btn.button.card__cta {
      background-color: #DE2326;
      color: #FFF;
      font-weight: 300;
      border: none;
    }

    .btn.button.card__cta {
      display: none;
    }

    .btn.button.button--secondary, .btn.button.button--carousel-used-models-section, .btn.button.button--carousel-vehicles-new-main, btn.button.button--map, .btn.button.button--primary-line, .button--carousel-offers-vehicles-new-section, .button--carousel-direct-sales-section, .carousel-consortia__button {
      font-weight: bold;
      background-color: transparent;
      border: .125rem solid #000;
      color: #000;
    }
    
    .btn.button.button--secondary:hover, .btn.button.button--carousel-used-models-section:hover, .btn.button.button--carousel-vehicles-new-main:hover, btn.button.button--map:hover, .button--carousel-offers-vehicles-new-section:hover, .button--carousel-direct-sales-section:hover, .carousel-consortia__button:hover {
      border: .125rem solid #DE2326;
      color: #DE2326;
    }

    .btn[disabled] {
      background-color: #D1D1D1;
    }
  `})
})()
