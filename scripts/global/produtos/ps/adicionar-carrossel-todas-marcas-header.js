import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const changeCarouselHeader = () => {

    const brandModel = ({ url, link }) => `
        <a class="carousel-brands__item-link swiper-slide" target="_blank" href="${link}" style="height: 80px;"><img class="carousel-brands__item-image" src="${url}" alt="Seminovo"></a>
    `;

    const urlImgs = [{
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/15/logo_brand_comprar-volkswagen_a830acd3b7.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/9/logo_brand_comprar-toyota_5f91519ea0.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/10/logo_brand_comprar-bmw_ff132f371d.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/20/logo_brand_renault2.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/18/logo_brand_jeep_.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/522/logo_brand_comprar-hyundai-importados_15ad60fd6a.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/22/logo_brand_honda2.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/17/logo_brand_ford2.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_other/14/logo_brand_comprar-fiat_58068feb28.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/27/logo_brand_chevrolet2.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/23/logo_brand_comprar-peugeot_ba36d42b88.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/26/logo_brand_comprar-nissan_1170d6026c.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/56/logo_brand_comprar-mercedes-benz_9261309556.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/33/logo_brand_comprar-kia_707a7e1030.png',
            link: '#'
        },
        {
            url: 'https://production.autoforce.com/uploads/brand/logo_regular/16/logo_brand_comprar-citroen_f64b9b32ca.png',
            link: '#'
        },
    ]

    // ===========================================================================================

    const carousel = document.createElement('div')
    const carouselWrapper = document.createElement('div')

    carousel.classList.add('swiper-container', 'header-carousel-brands')
    carouselWrapper.classList.add('swiper-wrapper')

    urlImgs.forEach((brand, index) => {
        const slide = document.createElement('div')
        'carousel-brands__item carousel__item swiper-slide'
        .split(' ')
            .forEach(currClass => slide.classList.add(currClass))

        const slideContent = brandModel(brand)
        slide.innerHTML = slideContent

        carouselWrapper.appendChild(slide)
    })

    carousel.appendChild(carouselWrapper)

    const target = document.querySelector('.carousel-brands .carousel')
    target.classList.remove('swiper-container-initialized', 'swiper-container-horizontal')
    target.innerHTML = ''
    target.appendChild(carousel)

    const headerBrandsSwiper = new Swiper('.header-carousel-brands', {
        loop: true,
        autoplay: true,
        slidesPerView: 4.5,
        spaceBetween: 5,
        breakpoints: {
            576: {
                slidesPerView: 5.5,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 6.5,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 8,
                spaceBetween: 30
            }
        }
    })
}

changeCarouselHeader();