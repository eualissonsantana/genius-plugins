(() => {
    const containerEspecialista = document.querySelector(".text-calls-chat-online__title").parentNode

    if(containerEspecialista) {
        const newAnchor = document.createElement("a")

        newAnchor.classList.add(containerEspecialista.getAttribute("class"))
        newAnchor.innerHTML = containerEspecialista.innerHTML
        newAnchor.setAttribute("href", "https://qualityseminovos.com.br/fale-conosco")

        containerEspecialista.after(newAnchor)
        containerEspecialista.remove()
    }
})()