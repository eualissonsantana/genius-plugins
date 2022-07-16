(() => {
    const videoCheckPage = window.location.href.includes("/empresa/videocheck")

    if(videoCheckPage) {
        const headerStaticPage = document.querySelector(".static-page__header")

        if(headerStaticPage) {
            headerStaticPage.remove()
        }
    }
})()