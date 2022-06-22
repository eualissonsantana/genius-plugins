(() => {
    const itavemaLogo = document.querySelector(".container-fluid .row .logo");

    if(itavemaLogo){
        const title = document.createElement("h2");
        title.style = `
            color:#fff; 
            text-align:center;
        `;
        title.innerText = `Selecione a região`;

        itavemaLogo.querySelector("a").style = "background-image: url(https://production.autoforce.com/uploads/group/logo_white/483/logo_comprar-grupo-itavema_c3b4d2fa03.png)";

        itavemaLogo.after(title);
    }
})();