(() => {
    document.addEventListener('readystatechange', event => { 
        if (event.target.readyState === "complete") {
          // seletor da lista de wpp no topo na versão desktop
          const whatsappWrapper = document.querySelector('#wpp-content-0 ul.list.list--header-phones.list--border-bottom')
          // seletor da lista de wpp no topo na versão mobile
          const whatsappMobileWrapper = document.querySelector('#wpp-content-mobile-0 ul.list.list--border-bottom')
        
          // método que remove o form
          const removeWppForm = (wrapper) => {
            const items = wrapper.querySelectorAll('li')
            
            items.forEach(element => {
                element.innerHTML = element.innerHTML
            
                let tagLink = element.querySelector('a')
                let link = tagLink.getAttribute('data-link')
                tagLink.setAttribute('href', link)
                tagLink.setAttribute('target', '_blank')
            });
          }
        
          // chama o método para a lista do wpp desktop e mobile
          removeWppForm(whatsappWrapper)
          removeWppForm(whatsappMobileWrapper)
        }
    });
})()
