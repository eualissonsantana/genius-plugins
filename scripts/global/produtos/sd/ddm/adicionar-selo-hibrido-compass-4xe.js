(() => {
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

   const style = `
        .selo-hibrido {
            color: #FFF;
            background-color: #0084D8;
            border-radius: 4px;
            padding: 4px 10px;
            font-size: 10px;
            font-weight: bold;
        }

        .carousel-vehicles-new .swiper-wrapper {
            align-items: center;
        }

        .card--list {
            display: flex !important;
            align-items: flex-end !important;
        }
    `
    const itemsCarousel = document.querySelectorAll(".carousel-vehicles-new .card--simple")
    const newCarList = document.querySelector(".list-vehicles-new__list")

    if(itemsCarousel.length > 0) {
        itemsCarousel.forEach(element => {
            if(element.innerHTML.includes("Novo Compass 4XE 2022")) {
                addStyle(style)
                element.parentNode.classList.add("text-center")
                const selo = document.createElement("span")
                selo.classList.add("selo-hibrido")
                selo.innerText = "HÍBRIDO PLUG-IN"
                element.parentNode.insertBefore(selo, element)
            }
        });
    } else if(newCarList) {
        const observer = new MutationObserver(function(){
            if(!newCarList.innerHTML.includes("HÍBRIDO PLUG-IN")) {
                addSeloListNewCar()
            }
        });
        
        if(newCarList) {
            // Setando as alterações que o observer deve assistir
            observer.observe(newCarList, {
                childList: true,
                subtree: true
            });
        }
    }

    function addSeloListNewCar() {
        const newCarList = document.querySelectorAll(".list-vehicles-new__list .card__header")
        const cardsList = document.querySelectorAll(".list-vehicles-new__list .col-lg-3")
    
        newCarList.forEach(element => {
            if(element.innerHTML.includes("Novo Compass 4XE 2022")) {
                addStyle(style)
                element.classList.add("text-center")
                const selo = document.createElement("span")
                selo.classList.add("selo-hibrido")
                selo.innerText = "HÍBRIDO PLUG-IN"
                element.insertBefore(selo, element.firstChild)
            }
        });
    
        cardsList.forEach(element => {
            element.classList.add("card--list")
        });
    }
})()
