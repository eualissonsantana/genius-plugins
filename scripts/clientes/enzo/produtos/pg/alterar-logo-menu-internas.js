(() => {
    const brandMenuWrapperInterns = document.querySelector("#showcase .showcase-grid .nav-wrapper-dinamic .brand-client");

    if(brandMenuWrapperInterns){
        const brandMenu = brandMenuWrapperInterns.querySelector("a");
        console.log(brandMenu);
        brandMenu.setAttribute("style", "background-image: url('https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/pg/logo-grupo-enzo-branca.png')");
    }
})();