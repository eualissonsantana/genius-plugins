
function clickDropdownOffersDiscasa(){
    const items = document.querySelectorAll(".nav-simple__item")

    items.forEach(element => {
        if(element.innerHTML.includes("Ofertas") && !element.innerHTML.includes("Ofertas Únicas")) {
            console.log("Entrou")
            console.log(element)
            const dropdownMenu = element.querySelector(".dropdown-menu")
            const anchor = element.querySelector(".nav-simple__link")
        
            if(anchor.getAttribute("aria-expanded") === "true") {
                dropdownMenu.classList.remove("show")
                anchor.setAttribute("aria-expanded", "false")
            } else {
                dropdownMenu.classList.add("show")
                anchor.setAttribute("aria-expanded", "true")
            }
        }
    });
}
    
(() => {
    const items = document.querySelectorAll(".nav-simple__item")
    const nav = document.querySelector(".nav--accordion-mobile")

    if(items){
        items.forEach(element => {
            if(element.innerHTML.includes("Ofertas")) {
                const clone = element.cloneNode(true);
                nav.appendChild(clone)
                const anchor = clone.querySelector(".nav-simple__link")
                const dropdownMenu = document.createElement("div")
                anchor.innerHTML = `Ofertas <i class="icon icon-dropdown icon-arrow-d"></i>`
                anchor.setAttribute("data-toggle", "dropdown")
                anchor.setAttribute("aria-expanded", "false")
                anchor.removeAttribute("href")
                anchor.style.cursor = "pointer"
                anchor.style.color = "#333333"

                dropdownMenu.classList.add("nav-simple-sub", "card-collapse-deep", "dropdown-menu")
                dropdownMenu.innerHTML = `
                    <ul class="list list--border-bottom">
                        <li class="">
                            <a href="/ofertas" class="card-collapse-deep__title"> Veículos </a>
                        </li>
                        <li class="">
                            <a href="/acessorios" class="card-collapse-deep__title"> Acessórios </a>
                        </li>
                        <li class="">
                            <a href="/pecas" class="card-collapse-deep__title"> Peças </a>
                        </li>
                    </ul>
                `
                clone.appendChild(dropdownMenu)
                clone.setAttribute("onclick", "clickDropdownOffersDiscasa()")
            } else if(element.innerHTML.includes("Pós-venda")){
                element.parentNode.removeChild(element)
            }
        });


    }
})()
    