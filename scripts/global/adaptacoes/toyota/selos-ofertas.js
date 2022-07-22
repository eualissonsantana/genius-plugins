document.addEventListener("DOMContentLoaded", function(event) {
    // função
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
    
    const styles = `
        .showcase-offer__model-image-background, .showcase-new-simple__image{
            position: relative;
        }
    
        .selo-recompra, .selo-ciclo-toyota, .selo-5-anos, .selo-8-anos, .selo-safety-sense {
            position: absolute;
            width: 70px;
            z-index: 1;
        }
    
        .selo-recompra, .selo-ciclo-toyota {
            top: 1rem;
        }
    
        .selo-5-anos, .selo-8-anos, .selo-safety-sense {
            top: 5.4rem;
        }
    
        .selo-ciclo-toyota, .selo-5-anos, .selo-8-anos {
            left: 0;
        }
    
        .selo-recompra, .selo-safety-sense {
            left: 80px;
        }
    
        @media (max-width: 768px) {
            .selo-ciclo-toyota{
                left: 10px;
            }
    
            .selo-recompra {
                left: 75px;
            }
    
            .selo-5-anos, .selo-8-anos {
                left: 140px;
            }
    
            .selo-safety-sense {
                left: 200px;
            }
    
            .selo-recompra, .selo-ciclo-toyota, .selo-5-anos, .selo-8-anos, .selo-safety-sense {
                width: 60px;
                top: -10px;
            }
    
            .selo-5-anos, .selo-8-anos, .selo-safety-sense {
                top: -10px;
            }
    
            .showcase-offer__image-featured, .showcase-new-simple__image {
                margin-top: 30px !important;
            }
        }
    
    `
    const garantia5Anos = ["Corolla", "Yaris", "SW4", "Hilux"]
    const channel = document.querySelector("meta[name='channel']").getAttribute("content")
    const isInterPageLP = window.location.href.includes("/novos/")
    const isOfferPage = window.location.href.includes("/ofertas/")
    let seloGarantia = false
    
    if(isOfferPage || (channel === "LandingPage" && isInterPageLP)) {
        const itens = document.querySelectorAll(".list--specs-items li")
        let isFlex = false
    
        itens.forEach(element => {
            if(element.innerHTML.includes("Flex")) {
                isFlex = true
            }
        });
    
        addStyle(styles)
    
        const imgModel = document.querySelector(".showcase-offer__model-image-background")
        const imgModelLP = document.querySelector(".showcase-new-simple__image")
    
        if(imgModel || imgModelLP) {
            console.log("Segundo IF")
            const seloRecompra = document.createElement("img")
            const seloCicloToyota = document.createElement("img")
            const selo5Anos = document.createElement("img")
            const selo8Anos = document.createElement("img")
            const seloSafetySense = document.createElement("img")
            const tituloModelo = document.querySelector(".showcase-offer__title-model")
            const tituloModeloLP = document.querySelector(".showcase__title")
    
            seloRecompra.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/recompra-garantida-vermelho.png")
            seloRecompra.setAttribute("alt", "Selo de Recompra Garantida Toyota")
            seloCicloToyota.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/ciclo-toyota.png")
            seloCicloToyota.setAttribute("alt", "Selo Ciclo Toyota")
            selo5Anos.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/garantia-5-anos.png")
            selo5Anos.setAttribute("alt", "Selo Garantia de 5 anos")
            selo8Anos.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/garantia-8-anos.png")
            selo8Anos.setAttribute("alt", "Selo Garantia de 8 anos")
            seloSafetySense.setAttribute("src", "https://legado.autoforce.com.br/plugins/images/global/adaptacoes/toyota/selos/toyota-safety-sense.png")
            seloSafetySense.setAttribute("alt", "Selo Toyota Safety Sense")
    
            seloRecompra.classList.add("selo-recompra")
            seloCicloToyota.classList.add("selo-ciclo-toyota")
            selo5Anos.classList.add("selo-5-anos")
            selo8Anos.classList.add("selo-8-anos")
            seloSafetySense.classList.add("selo-safety-sense")
            
            if(isOfferPage) {
                imgModel.appendChild(seloCicloToyota)
                imgModel.appendChild(seloRecompra)
    
                garantia5Anos.forEach(element => {
                    if(tituloModelo.innerHTML.includes(element)) {
                        if(!tituloModelo.innerHTML.includes("Corolla")) {
                            imgModel.appendChild(selo5Anos)
                            seloGarantia = true
                        } else if (isFlex) {
                            imgModel.appendChild(selo5Anos)
                            seloGarantia = true
                        }
                    } 
                });
    
                if(!seloGarantia) {
                    imgModel.appendChild(selo8Anos)
                    seloGarantia = true
                }
    
                imgModel.appendChild(seloSafetySense)
            } else {
                imgModelLP.appendChild(seloCicloToyota)
                imgModelLP.appendChild(seloRecompra)
    
                garantia5Anos.forEach(element => {
                    if(tituloModeloLP.innerHTML.includes(element)) {
                        if(!tituloModeloLP.innerHTML.includes("Corolla")) {
                            imgModelLP.appendChild(selo5Anos)
                            seloGarantia = true
                        } else if (isFlex) {
                            imgModelLP.appendChild(selo5Anos)
                            seloGarantia = true
                        }
                    } 
                });
    
                if(!seloGarantia) {
                    imgModelLP.appendChild(selo8Anos)
                    seloGarantia = true
                }
    
                imgModelLP.appendChild(seloSafetySense)
    
            }
        }
    }
});