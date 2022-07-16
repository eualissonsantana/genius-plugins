(() => {
    window.addEventListener("DOMContentLoaded", () => {
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

        let newCarouselItems = [
            {
                name: "BYD",
                target: "byd",
                alt: "BYD logo",
                data_background_image: "https://legado.autoforce.com.br/plugins/images/clientes/carmais/produtos/pg/byd.png",
                href: "https://bydcarmais.com.br",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/carmais/produtos/pg/byd.png"
            },
        ]

        let showcaseSlideWrapper;

        if(document.querySelector(".showcase-slides .brands .owl-carousel")){
            showcaseSlideWrapper = "showcase-slides";
        }
        else{
            showcaseSlideWrapper = "showcase-grid";
        }

        let carousel = document.querySelector(`.${showcaseSlideWrapper} .brands .owl-carousel`);

        let brandsCarousel = document.querySelectorAll(`.${showcaseSlideWrapper} .brands .owl-carousel .item`);

        if(brandsCarousel.length > 0){
            newCarouselItems.forEach(newCarouselItem => {
                let carouselItem = document.createElement("li");
                carouselItem.classList.add("item");
                carouselItem.innerHTML = `
                    <a 
                        target="${newCarouselItem.target}" 
                        alt="${newCarouselItem.alt}" 
                        class="lozad" 
                        data-background-image="${newCarouselItem.data_background_image}" 
                        href="${newCarouselItem.href}" 
                        data-loaded="true" 
                        style="background-image: url('${newCarouselItem.image}');"
                    >
                        ${newCarouselItem.name}
                    </a>
                `;

                carousel.appendChild(carouselItem);
            });

            document.querySelectorAll(`.${showcaseSlideWrapper} .brands .owl-carousel .item`).forEach((brandCarousel) => {
                const link = brandCarousel.querySelector("a");
                const altLink = brandCarousel.querySelector("a").getAttribute("alt");

                if(altLink.includes("BYD")){
                    link.classList.add("byd-brand");
                }
                else if(altLink.includes("Fiat")){
                    link.classList.add("fiat-brand");
                }
                else if(altLink.includes("Renault")){
                    link.classList.add("renault-brand");
                }
            });         

            addStyle(`
                .byd-brand{
                    background-size: contain !important;
                    width: 70px !important;
                }
            `);
        }
    });
})();