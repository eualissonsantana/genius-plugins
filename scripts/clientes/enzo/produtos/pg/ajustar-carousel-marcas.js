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
                name: "Seminovos",
                target: "seminovos",
                alt: "Seminovos",
                data_background_image: "https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-seminovos-enzo.png",
                href: "/itva-motos",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-seminovos-enzo.png"
            }
        ];

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

                if(altLink.includes("Teste")){
                    link.classList.add("corretora-brand");
                }
                if(altLink.includes("Chevrolet")){
                    link.classList.add("chevrolet-brand");
                }
                else if(altLink.includes("Toyota")){
                    link.classList.add("toyota-brand");
                }
                else if(altLink.includes("Volvo")){
                    link.classList.add("volvo-brand");
                }
                else if(altLink.includes("Renault")){
                    link.classList.add("renault-brand");
                }
                else if(altLink.includes("Fiat")){
                    link.classList.add("fiat-brand");
                }
                else if(altLink.includes("Venda Direta")){
                    link.classList.add("venda-direta-brand");
                }
                else if(altLink.includes("Triumph")){
                    link.classList.add("triumph-brand");
                }
                else if(altLink.includes("Mercedes-Benz do Brasil")){
                    link.classList.add("mercedes-benz-do-brasil-brand");
                }
                else if(altLink.includes("Jaguar")){
                    link.classList.add("jaguar-brand");
                }
                else if(altLink.includes("Chrysler Jeep Dodge Ram")){
                    link.classList.add("chrysler-jeep-dodge-ram-brand");
                }
                else if(altLink.includes("Land Rover")){
                    link.classList.add("land-rover-brand");
                }
                else if(altLink.includes("Harley Davidson")){
                    link.classList.add("harley-davidson-brand");
                }
            });         

            addStyle(`
                .corretora-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/enzo-corretora.png') !important;
                }

                .chevrolet-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-chevrolet.png') !important;
                }

                @media (max-width: 767px){
                    #showcase header .brands ul li *:not(script){
                        width: 65px;
                        height: 50px;
                        background-size: contain !important;
                    }

                    .volvo-brand{
                        height: 38px !important;
                    }  
                }

                @media (min-width: 768px){
                    #showcase header .brands ul li *:not(script){
                        background-size: contain !important;
                    }
    
                    .toyota-brand{
                        height: 60px !important;
                    }   

                    .volvo-brand{
                        height: 45px !important;
                    }   

                    .renault-brand{
                        height: 55px !important;
                    }   

                    .fiat-brand{
                        height: 70px !important;
                        width: 65px !important;
                    }  

                    .venda-direta-brand{
                        width: 95px !important;
                        height: 80px !important;
                    }

                    .corretora-brand{
                        width: 70px !important;
                    }

                    .triumph-brand{
                        width: 85px !important;
                        height: 85px !important;
                    }

                    .mercedes-benz-do-brasil-brand{
                        height: 70px !important;
                    }

                    .jaguar-brand{
                        height: 65px !important;
                    }

                    .chrysler-jeep-dodge-ram-brand{
                        height: 50px !important;
                    }

                    .land-rover-brand{
                        height: 65px !important;
                    }

                    .chevrolet-brand{
                        height: 70px !important;
                    }

                    .harley-davidson-brand{
                        height: 65px !important;
                    }
                }
            `);

            if(window.matchMedia('(min-width: 968px)').matches){
                $('.mini-brands-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: false,
                    dots: false,
                    autoplay: true,
                    responsive:{
                        0:{
                            items: 4
                        },
                        600:{
                            items: 4
                        },
                        1000:{
                            items: 9
                        }
                    }
                });
            }
        }
    });
})();