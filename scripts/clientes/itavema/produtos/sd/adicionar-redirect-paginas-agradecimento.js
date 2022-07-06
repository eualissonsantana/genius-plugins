(() => {
    const itemsMenuToRemove = document.querySelectorAll(".nav--accordion-mobile .nav-simple__item")
    itemsMenuToRemove.forEach(itemMenu => {
        if(itemMenu.innerHTML.includes("Página agradecimento")) {
            itemMenu.remove()
        }
    });
})()

const redirectThanksPage = async (spreadsheetId) => {
    const keyAPI = "AIzaSyD89VGI6wnaT6LE3A7Y4wCyiDmgGIxjobE"
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:Z?key=${keyAPI}`)
    const data = await response.json()
    const slugs = data.values
    console.log(slugs)
    let dataRedirect = []
    let url = {
        origem: '',
        destino: ''
    }

    if(slugs){
        slugs.forEach(element => {
            url = {origem: element[0], destino: element[1]}
            dataRedirect.push(url)
        });
    }

    const page = window.location.href

    dataRedirect.forEach(element => {
        if(page.includes(element.origem)) {
            window.location.href = 'https://itavema.com.br' + element.destino
        }
    });
}