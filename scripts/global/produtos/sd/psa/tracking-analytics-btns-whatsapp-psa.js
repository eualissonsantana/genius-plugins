function gtag_report_click_wpp(area) {
    console.log(area)
    
    if(area === "flutuante"){
      ga('send', 'event', 'click_whatsapp_flutuante', 'click', {
          'send_to' : 'UA-131492942-2'
      });
    } else if(area === "dropdown-menu"){
      ga('send', 'event', 'click_whatsapp_menu', 'click', {
          'send_to' : 'UA-131492942-2'
      });
    } else if(area === "carrossel-novos"){
      ga('send', 'event', 'click_whatsapp_carrossel_novos', 'click', {
          'send_to' : 'UA-131492942-2'
      });
    } else if(area === "interna-novos"){
      ga('send', 'event', 'click_whatsapp_interna_novos', 'click', {
          'send_to' : 'UA-131492942-2'
      });
    } else if(area === "interna-ofertas"){
      ga('send', 'event', 'click_whatsapp_interna_ofertas', 'click', {
          'send_to' : 'UA-131492942-2'
      });
    } else if(area === "listagem-interna"){
      ga('send', 'event', 'click_whatsapp_listagem_interna', 'click', {
          'send_to' : 'UA-131492942-2'
      });
    } else if(area === "especialista"){
        ga('send', 'event', 'click_whatsapp_fale_com_especialista', 'click', {
            'send_to' : 'UA-131492942-2'
        });
    } else if(area === "especialista-interna-seminovo"){
        ga('send', 'event', 'click_whatsapp_fale_com_especialista_interna_seminovo', 'click', {
            'send_to' : 'UA-131492942-2'
        });
    } else {
        ga('send', 'event', 'click_whatsapp_outros', 'click', {
          'send_to' : 'UA-131492942-2'
        });
    }
  
    return false;
}

(() => {
    document.addEventListener('readystatechange', event => { 
        if (event.target.readyState === "complete") {
            const wppHeader = document.querySelector('.header__whatsapps .button--whatsapp')
            const wppNewVehicles = document.querySelector(".new-vehicles__button-whatsapp")
            const wppPopup = document.querySelector(".floating-whatsapp__button")
            const wppDropup = document.querySelector(".dropup a")
            const wppEspecialista = document.querySelector(".whatsapp-box__button")
            //const wppInternNovos = document.querySelector(".whatsapp-box__button")
            const wppInternOfertas = document.querySelector(".page--offer .showcase-new-cars__preview .button--whatsapp")
            const wppEspecialistaSeminovos = document.querySelector("#used-vehicles__cta-box-button")

            wppHeader.onclick = () => {
                const wppBtn = document.querySelectorAll('.contact-group__item-link')

                wppBtn.forEach(button => {
                    button.addEventListener('click', () => {
                        gtag_report_click_wpp("dropdown-menu")
                    })
                })
            }

            if(wppNewVehicles) {
                wppNewVehicles.addEventListener('click', () => {
                    gtag_report_click_wpp("carrossel-novos")
                })
            }

            if(wppPopup){
                wppPopup.addEventListener('click', () => {
                    gtag_report_click_wpp("flutuante")
                })
            }

            if(wppDropup){
                wppPopup.addEventListener('click', () => {
                    gtag_report_click_wpp("flutuante")
                })
            }

            if(wppEspecialista){
                wppInternNovos.addEventListener('click', () => {
                    gtag_report_click_wpp("especialista")
                })
            }
            
            if(wppInternOfertas){
                wppInternOfertas.addEventListener('click', () => {
                    gtag_report_click_wpp("interna-ofertas")
                })
            }

            if(wppEspecialistaSeminovos){
                wppEspecialistaSeminovos.addEventListener('click', () => {
                    gtag_report_click_wpp("especialista-interna-seminovo")
                })
            }
        }
    });
})();