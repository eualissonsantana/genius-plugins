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

    addStyle`
       
    `

        // BANNER
        const vantagens = document.querySelector("#vantagens")

        if(vantagens) {
            const banner = document.createElement("section")
            banner.setAttribute("id", "banner")
            
            banner.innerHTML = `
            <a href="#mapa">
                <img src="https://legado.autoforce.com.br/plugins/images/clientes/enzo/produtos/enzo-conecta/banner-enzo-conecta.png" width="100%" alt="Banner da Enzo Conecta com fundo azuls e letras informativas brancas"> 
            </a>
            `
            vantagens.parentNode.insertBefore(banner, vantagens)

        // NOSSOS VEÍCULOS
        const veiculos = document.createElement("section")
        veiculos.setAttribute("id", "veiculos")

        veiculos.innerHTML = `
            
        `
    }
})()