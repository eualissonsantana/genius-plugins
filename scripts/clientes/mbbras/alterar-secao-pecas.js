(() => {
    let offersTitle = document.querySelector(".carousel-products .section-component__header .section-component__title");
    let offersSubtitle = document.querySelector(".carousel-products .section-component__header .section-component__subtitle");
    let carouselProductsIcon = document.querySelector(".carousel-products .section-component__header .icon");
    let carouselCards = document.querySelectorAll(".carousel-products .carousel-products__carousel-wrapper .carousel__item .card");

    let carouselProductsCta = document.querySelector(".carousel-products .carousel-products__ctas a.btn");

    let navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

    if(navItems.length > 0){
        navItems.forEach(navItem => {
            let navItemtext = String(navItem.querySelector(".nav-link").innerHTML).trim();
            
            if(navItemtext.includes("Pós-venda")){
                let navsSimpleSub = navItem.querySelectorAll(".nav-simple-sub .list li");

                navsSimpleSub.forEach(navSimpleSub => {
                    let navSimpleSubText = String(navSimpleSub.innerHTML).trim();

                    if(navSimpleSubText.includes("Peças")){
                        navSimpleSub.remove();
                    }
                });

                navItem.querySelector(".nav-link").innerHTML = `
                    Peças e Serviços 
                    <i class="icon icon-dropdown icon-arrow-d"></i>
                `;
            }
            else if(navItemtext.includes("Consórcios")){
                navItem.remove();
            }
        });
    }

    if(offersTitle 
        && offersSubtitle 
        && carouselCards.length > 0 
        && carouselProductsCta 
        && carouselProductsIcon
    ){
        const addStyle = (styles) => {
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

        offersTitle.innerText = `Ofertas Mercedes-Benz Collection`;
        offersSubtitle.innerText = `Confira nossos ítens personalizados`;

        carouselCards.forEach(carouselCard => {
            let cardFooter = carouselCard.querySelector(".card__footer");
            let productCardList = carouselCard.querySelector(".card__content div[data-match-height='product-card-list']");
            let carouselProductFooter = carouselCard.querySelector(".card__footer div[data-match-height='carousel-product-footer']");
            let cardLinks = carouselCard.querySelectorAll("a");

            cardFooter.style = `margin-top: 0rem`;
            productCardList.classList.add("d-none");
            carouselProductFooter.style = `height: auto`;

            cardLinks.forEach(cardLink => {
                cardLink.setAttribute("href", "https://www.mercedes-benzcollection.com.br/");
            });
        });

        carouselProductsCta.setAttribute("href", "https://www.mercedes-benzcollection.com.br/");
        carouselProductsCta.innerText = `Quero ver todos os ítens`;
        
        carouselProductsIcon.remove();

        addStyle(`
            .carousel-products .carousel-products__category-filter .filter-pills__options .filter-pills__options-item:nth-child(2){
                display: none !important;
            }
        `);
    }
})();