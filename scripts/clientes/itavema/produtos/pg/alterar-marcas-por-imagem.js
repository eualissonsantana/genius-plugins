(() => {
    window.addEventListener("DOMContentLoaded", () => {
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
    
        addStyle(`
            .img-menu {
                width: 100px;
                height: 100px;
                display: block;
                background-repeat: no-repeat;
                background-size: contain !important;
            }

            .menu-geral li:nth-child(6) .dropdown-submenu-title strong {
                display: none !important;
            }

            .fiat-img {
                background: url('https://production.autoforce.com/uploads/brand/logo_other/14/logo_brand_comprar-fiat_58068feb28.png') no-repeat;
            }

            .nissan-img {
                background: url('https://production.autoforce.com/uploads/brand/logo_regular/26/logo_brand_comprar-nissan_1170d6026c.png') no-repeat;
            }

            .hyundai-img {
                background: url('https://production.autoforce.com/uploads/brand/logo_regular/11/logo_brand_comprar-hyundai_a95f540879.png') no-repeat;
            }

            .toyota-img-sp {
                background: url('https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pg/toyota-sp.png') no-repeat;
            }

            .toyota-img-rj {
                background: url('https://legado.autoforce.com.br/plugins/images/clientes/itavema/produtos/pg/toyota-rj.png') no-repeat;
            }

            .renault-img {
                background: url('https://production.autoforce.com/uploads/brand/logo_regular/20/logo_brand_comprar-renault_24beec20fe.png') no-repeat;
            }
        `);
    
        const itensServico = document.querySelectorAll(".menu-geral li:nth-child(6) .dropdown-submenu-title a")
    
        if (itensServico) {
            itensServico.forEach(element => {
                if (element.innerHTML.includes("Nissan")) {
                    element.classList.add("nissan-img", "img-menu")
                } else if (element.innerHTML.includes("Hyundai")) {
                    element.classList.add("hyundai-img", "img-menu")
                } else if (element.innerHTML.includes("Toyota São Paulo")) {
                    element.classList.add("toyota-img-sp", "img-menu")
                } else if (element.innerHTML.includes("Toyota Rio de Janeiro")) {
                    element.classList.add("toyota-img-rj", "img-menu")
                } else if (element.innerHTML.includes("Renault")) {
                    element.classList.add("renault-img", "img-menu")
                } else if (element.innerHTML.includes("Fiat")) {
                    element.classList.add("fiat-img", "img-menu")
                } 
            });
        }
    });
})();