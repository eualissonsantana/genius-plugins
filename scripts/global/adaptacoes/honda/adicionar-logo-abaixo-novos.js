(() => {
    document.addEventListener('readystatechange', event => { 
        if (event.target.readyState === "complete") {
            const newVehiclesPage = window.location.href.includes("/novos")
            const homePage = document.querySelector(".page--home")
            
            if(newVehiclesPage || homePage){
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
            
                const styles = `
                    .accord-img {
                        max-width: 120px !important;
                    }

                    .city-img { 
                        max-width: 78px !important;
                    }

                `
                addStyle(styles)
        
                const cardCta = document.querySelectorAll(".list-vehicles-new__list .card__cta")
                const cardCtaHome = document.querySelectorAll(".carousel-vehicles-new .card__cta")

                if(cardCta){
                    cardCta.forEach(element => {
                        if(element.getAttribute("href").includes("accord")){
                            let card = element.parentNode.parentNode
                            let img = card.querySelector(".card__content img")
                            
                            img.setAttribute("src", "https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/header/accord-logo.png")
                            img.classList.add("accord-img")
                        } else if(element.getAttribute("href").includes("new-city-sedan")){
                            let card = element.parentNode.parentNode
                            let img = card.querySelector(".card__content img")
                            
                            img.setAttribute("src", "https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-new-city-sedan.png")
                            img.classList.add("city-img")
                        } else if(element.getAttribute("href").includes("new-city-hatchback")){
                            console.log(element)
                            let card = element.parentNode.parentNode
                            let img = card.querySelector(".card__content img")
                            
                            img.setAttribute("src", "https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-new-city-hatch.png")
                            img.classList.add("city-img")
                        }
                    });
                }

                if(cardCtaHome) {
                    cardCtaHome.forEach(element => {
                        if(element.getAttribute("href").includes("accord")){
                            let card = element.parentNode.parentNode
                            let img = card.querySelector(".card__content img")
                            
                            img.setAttribute("src", "https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-accord.png")
                            img.classList.add("accord-img")
                        } else if(element.getAttribute("href").includes("new-city-sedan")) {
                            let card = element.parentNode.parentNode
                            let img = card.querySelector(".card__content img")
                            
                            img.setAttribute("src", "https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-new-city-sedan.png")
                            img.classList.add("city-img")

                        } else if(element.getAttribute("href").includes("new-city-hatchback")){
                            let card = element.parentNode.parentNode
                            let img = card.querySelector(".card__content img")
                            
                            img.setAttribute("src", "https://www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-new-city-hatch.png")
                            img.classList.add("city-img")
                        }
                    });
                }
            }
        }
    });
})()