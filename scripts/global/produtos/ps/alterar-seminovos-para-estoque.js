(() => {
    const itemsMenuToRemove = document.querySelectorAll(".nav--accordion-mobile .nav-simple__item")
    
    itemsMenuToRemove.forEach(itemMenu => {
        if(itemMenu.innerHTML.includes("Página agradecimento")) {
            itemMenu.remove()
        }
    });
})

function redirectThanksPage() {
    const dataRedirect = [
        {
            origem: '/renaultfrance/ofertas/sandero',
            destino: '/renaultfrance/empresa/ofertas-sandero-obrigado'
        },
        {
            origem: '/renaultfrance/ofertas/duster',
            destino: '/renaultfrance/empresa/duster-obrigado'
        },
        {
            origem: '/renaultfrance/ofertas/captur',
            destino: '/renaultfrance/empresa/ofertas-captur-obrigado'
        },
        {
            origem: '/renaultfrance/ofertas/kwid',
            destino: '/renaultfrance/empresa/ofertas-kwid-obrigado'
        },
        {
            origem: '/renaultfrance/ofertas/kwid-novo',
            destino: '/renaultfrance/empresa/ofertas-kwid-novo-obrigado'
        },
    ]

    const page = window.location.href

    dataRedirect.forEach(element => {
        if(page.includes(element.origem)) {
            window.location.href = 'https://itavema.com.br' + element.destino
        }
    });
}