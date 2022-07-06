(() => {
    const footerCopy = document.querySelector(".footer__copyright p")
    const footerCopySign = document.querySelector(".footer__signature p")

    const newLink = document.createElement("p")
    newLink.innerHTML = `
        <p>
            <span class="d-none d-md-inline">Confira o </span> <a target="_blank" href="https://privacy-central.securiti.ai/dsr-embed/0262706c-8b87-406a-8f9b-1067d1643c49">Canal de comunicação do titular do dado</a>. 
        </p>
    `
    if(footerCopy) {
        footerCopy.appendChild(newLink)
    } else if(footerCopySign) {
        footerCopySign.appendChild(newLink)
    }
})()