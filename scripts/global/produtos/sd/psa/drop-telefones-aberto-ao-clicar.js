(() => {
    const btnsContacts = document.querySelectorAll(".header__contacts .btn")
    if(btnsContacts) {
        btnsContacts.forEach(element => {
            element.addEventListener("click", activeDrop, false);
        });
    }
   
})()

function activeDrop() {
    console.log("entrou")
    const drop = document.querySelectorAll(".header__contacts-dropdown .contact-group")
    
    if(drop) {
        setTimeout(() => {
            drop.forEach(element => {
                element.classList.add("active")
                console.log(element)
            });
        }, 50);
    }
}