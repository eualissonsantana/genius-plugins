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
                height: 25px;
                display: block;
                background-repeat: no-repeat;
            }

            .img-hatch {
                height: 32px;
            }

            .fit-img {
                background: url('https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-fit.png') no-repeat;
            }
            
            .new-city-img {
                background: url('https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-new-city-sedan.png') no-repeat;
            }

            .new-city-hatch-img {
                background: url('https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-new-city-hatch.png') no-repeat;
            }

            .civic-img {
                background: url('https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic.png') no-repeat;
            }

            .wrv-img {
                background: url('https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-wr-v.png') no-repeat;
            }

            .hrv-img {
                background: url('https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-hr-v.png') no-repeat;
                background-size: contain;
                width: 100px;
                height: 17px;
            }

            .crv-img {
                background: url('https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-cr-v.png') no-repeat;
            }

            .accord-menu-img {
                background: url('https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-accord.png') no-repeat;
            }
        `);
    
        const menuItens = document.querySelectorAll(".nav--accordion-mobile .nav-simple__item")
    
        if (menuItens) {
            menuItens.forEach(element => {
                if (element.innerHTML.includes("Novos")) {
                    const dropItens = element.querySelectorAll(".dropdown-menu .card-collapse-deep__title")
    
                    dropItens.forEach(element => {
                        if (!element.innerHTML.includes("Veículos")) {

                            if (element.innerHTML.includes("FIT")) {
                                element.classList.add("fit-img", "img-menu")
                            } 
                            else if (element.getAttribute("href").includes("new-city-hatchback")) {
                                element.classList.add("new-city-hatch-img", "img-hatch", "img-menu")
                            } 
                            else if (element.getAttribute("href").includes("new_city_hatchback")) {
                                element.parentNode.classList.add("d-none");
                            } 
                            else if (element.getAttribute("href").includes("new-city-sedan")) {
                                element.classList.add("new-city-img", "img-menu")
                            } 
                            else if (element.getAttribute("href").includes("new_city_sedan")) {
                                element.parentNode.classList.add("d-none");
                            } 
                            else if (element.innerHTML.includes("Civic")) {
                                element.classList.add("civic-img", "img-menu")
                            } 
                            else if (element.innerHTML.includes("WR-V")) {
                                element.classList.add("wrv-img", "img-menu")
                            } 
                            else if (element.innerHTML.includes("HR-V")) {
                                element.classList.add("hrv-img", "img-menu")
                            } 
                            else if (element.innerHTML.includes("CR-V")) {
                                element.classList.add("crv-img", "img-menu")
                            } 
                            else if (element.innerHTML.includes("Accord")) {
                                element.classList.add("accord-menu-img", "img-menu")
                            }

                            if (element.innerHTML.includes("Civic") && location.hostname.includes("shizen")) {
                                element.innerHTML = `
                                    Aguarde novidades
                                `;

                                element.style = `
                                    font-size: 0.7rem;
                                    width: 100%;
                                    padding-top: 1rem;
                                    opacity: .5;
                                    pointer-events: none;
                                `;

                                element.setAttribute("href", "javascript:void(0)");
                            } 
                            else{
                                element.innerHTML = ``;
                            }
                        }
                    });
                }
            });
        }
    });
})();