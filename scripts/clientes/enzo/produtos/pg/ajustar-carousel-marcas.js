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
                data_background_image: "https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-seminovos.png",
                href: "https://seminovosgrupoenzo.com.br",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-seminovos.png"
            },
            {
                name: "Toyota Via Japam",
                target: "toyota-via-japam",
                alt: "Via Japam Tyt",
                data_background_image: "https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-toyota-via-japam.png",
                href: "https://viajapan.com.br",
                image: "https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-toyota-via-japam.png"
            },
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
                else if(altLink.includes("Via Japam")){
                    link.classList.add("toyota-via-japam-brand");
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
                else if(altLink.includes("Seminovos")){
                    link.classList.add("seminovos-brand");
                }
            });         

            addStyle(`
                .corretora-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/enzo-corretora.png') !important;
                }

                .chevrolet-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-nacao-chevrolet-1.png') !important;
                }

                .toyota-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-toyota-kampai.png') !important;
                }

                .volvo-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-volvo-1.png') !important;
                }

                .renault-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-guara-renault.png') !important;
                }

                .fiat-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-fiat.png') !important;
                }

                .venda-direta-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-enzo-mobility.png') !important;
                }

                .triumph-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-triumph.png') !important;
                }

                .mercedes-benz-do-brasil-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-mercedes.png') !important;
                }

                .jaguar-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-jaguar.png') !important;
                }

                .chrysler-jeep-dodge-ram-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-jeep.png') !important;
                }

                .land-rover-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-lr.png') !important;
                }

                .harley-davidson-brand{
                    background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-harley-davidson-1.png') !important;
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

                    .chevrolet-brand{
                        height: 28px !important;
                    }

                    .venda-direta-brand{
                        height: 85px !important;
                        width: 60px !important;
                    }

                    .fiat-brand{
                        height: 80px !important;
                    }

                    .triumph-brand{
                        height: 75px !important;
                    }

                    .mercedes-benz-do-brasil-brand{
                        height: 70px !important;
                        width: 75px !important;
                    }

                    .toyota-brand,
                    .toyota-via-japam-brand{
                        height: 80px !important;
                        width: 80px !important;
                    }   

                    .renault-brand{
                        height: 57px !important; 
                    }

                    .jaguar-brand,
                    .land-rover-brand{
                        height: 80px !important;
                        width: 80px !important;
                    }

                    .chrysler-jeep-dodge-ram-brand{
                        height: 70px !important;
                        width: 65px !important;
                    }

                    .volvo-brand{
                        height: 60px !important;
                        width: 70px !important;
                    }

                    .harley-davidson-brand{
                        height: 80px !important;
                        width: 90px !important;
                    }

                    .seminovos-brand{
                        height: 60px !important;
                    }
                }

                @media (min-width: 768px){
                    #showcase header .brands ul li *:not(script){
                        background-size: contain !important;
                    }
    
                    .toyota-brand,
                    .toyota-via-japam-brand{
                        height: 100px !important;
                        width: 90px !important;
                    }   

                    .volvo-brand{
                        height: 85px !important;
                        width: 85px !important;
                    }   

                    .renault-brand{
                        height: 65px !important;
                    }   

                    .fiat-brand{
                        height: 75px !important;
                        width: 80px !important;
                    }  

                    .venda-direta-brand{
                        width: 92px !important;
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
                        height: 90px !important;
                        width: 90px !important;
                    }

                    .jaguar-brand,
                    .land-rover-brand{
                        height: 100px !important;
                        width: 100px !important;
                    }

                    .chrysler-jeep-dodge-ram-brand{
                        height: 90px !important;
                        width: 85px !important;
                    }

                    .chevrolet-brand{
                        height: 36px !important;
                    }

                    .harley-davidson-brand{
                        height: 100px !important;
                        width: 115px !important;
                    }

                    .seminovos-brand{
                        height: 85px !important;
                        width: 80px !important;
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
                            items: 8
                        }
                    }
                });
            }
        }
    });
})();