(() => {
    const dropItems = document.querySelectorAll(".dropdown-submenu-title")

    if(dropItems) {
        dropItems.forEach(element => {
            if(element.innerHTML.includes("Marca Genérica")) {
                element.innerHTML = element.innerHTML.replace("Marca Genérica","Dafra e KTM")
            }
        });
    }
})()