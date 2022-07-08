(() => {
    sol.onReady(() => {
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
        
        addStyle`
            .renault {
                background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/mult/produtos/pg/mult-renault.jpg') !important;
            }
    
            .mit {
                background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/mult/produtos/pg/mult-mit.jpg') !important;
            }
    
            .kobenissan {
                background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/mult/produtos/pg/kobenissan.jpg') !important;
            }
    
            .royal {
                background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/mult/produtos/pg/royal.jpg') !important;
            }
    
        `
        const brandsCarousel = document.querySelectorAll("#brands .brands-carousel .turkey-item .item-background")
    
        if(brandsCarousel) {
            brandsCarousel[0].classList.add("renault")
            brandsCarousel[4].classList.add("renault")
            brandsCarousel[8].classList.add("renault")
            brandsCarousel[1].classList.add("royal")
            brandsCarousel[5].classList.add("royal")
            brandsCarousel[9].classList.add("royal")
            brandsCarousel[2].classList.add("kobenissan")
            brandsCarousel[6].classList.add("kobenissan")
            brandsCarousel[10].classList.add("kobenissan")
            brandsCarousel[3].classList.add("mit")
            brandsCarousel[7].classList.add("mit")
            brandsCarousel[11].classList.add("mit")
        }
    });
})();
