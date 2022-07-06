(() => {
    const wrapperDesktop = document.querySelector('.header__navbar-item.header__phones');
    const wrapperMobile = document.querySelector('.header-mobile__buttons');

    const newBtn = document.createElement('a');
    newBtn.setAttribute('href', "https://tradein.autoavaliar.com.br/group/quality-semi-novos/2653zjgPMd?c=6775zPB");
    newBtn.setAttribute('target', "_blank");
    newBtn.setAttribute('class', `btn button button--primary header__phones-button-toggler`);

    newBtn.innerHTML = `
        <img src="https://legado.autoforce.com.br/assets/images/icons/car.png" style="width: 19px; margin-right: 7px"/> 
        Avalie seu veículo
    `;
    newBtn.style.setProperty('background-color', '#000');
    newBtn.style.setProperty('color', '#FFF');

    const btnMobileWrapper = document.createElement('div');
    btnMobileWrapper.innerHTML = `<a target="_blank" href="https://tradein.autoavaliar.com.br/group/quality-semi-novos/2653zjgPMd?c=6775zPB" class="button-icon header__phones-button-toggler-mobile" style="background-color: #000;"><img src="https://legado.autoforce.com.br/assets/images/icons/car.png" style="width: 19px; margin-right: 2px"/></button>`;

    wrapperDesktop.appendChild(newBtn);
    wrapperMobile.appendChild(btnMobileWrapper);
})()