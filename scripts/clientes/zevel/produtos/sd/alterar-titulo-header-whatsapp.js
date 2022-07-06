(() =>  {
    const cardWhatsApp = document.querySelectorAll(".card-collapse__header")

    if(cardWhatsApp) {
        cardWhatsApp.forEach(element => {
            if(element.innerHTML.includes("Zevel Seminovos")) {
                element.innerHTML = element.innerHTML.replace("Zevel Seminovos", "Zevel")
                console.log("Entrou")
            }
        });
    }
})()