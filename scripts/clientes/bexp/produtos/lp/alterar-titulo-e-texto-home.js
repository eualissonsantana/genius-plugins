(() => {
    const title = document.querySelector(".list-vehicles-land__title")

    if(title) {
        const text = document.createElement("div")
        title.innerHTML = title.innerHTML.replace("Ofertas exclusivas Audi Center Alphaville", "Linha Audi e-tron")

        text.innerHTML = `
            <p>
                A linha de carros Audi e-tron veio para surpreender os mais exigentes consumidores. 
            </p>
            <p>
                A tendência de carros elétricos está aí e quem começa a fazer parte desse universo tem
                 dimensão do que falamos de futuro. Os carros oferecem uma potência incrível, afinal, 
                 estamos falando de um Audi. Além disso, são silenciosos e diminuem a poluição que um 
                 carro gera ao meio ambiente. Estamos falando de futuro, tecnologia e sustentabilidade, 
                 estamos falando da linha Audi e-tron.
            </p>
        `
        title.before(text)
    }
})()