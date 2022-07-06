function btnAvalieSeuVeiculo(url) {
    const wrapperDesktop = document.querySelector('.header__navbar-item.header__phones')
    const wrapperMobile = document.querySelector('.header-mobile__buttons')
    
    const newBtn = document.createElement('a')
    newBtn.setAttribute('href', `${url}`)
    'btn button button--primary header__phones-button-toggler'
      .split(' ')
      .forEach(className =>
        newBtn.classList.add(className)
      )
    newBtn.innerHTML = '<img src="https://legado.autoforce.com.br/assets/images/icons/car.png" style="width: 19px; margin-right: 7px"/> Venda seu veículo'
    newBtn.style.setProperty('background-color', '#000')
    newBtn.style.setProperty('color', '#FFF')
    
    const btnMobileWrapper = document.createElement('div')
    btnMobileWrapper.innerHTML = `<a href="${url}" class="button-icon header__phones-button-toggler-mobile" style="background-color: #000;"><img src="https://legado.autoforce.com.br/assets/images/icons/car.png" style="width: 19px; margin-right: 2px"/></button>`
    
    wrapperDesktop.appendChild(newBtn)
    wrapperMobile.appendChild(btnMobileWrapper)
}