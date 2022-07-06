(() => {
    const addStyle = (styles) => {
        const css = styles,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        head.appendChild(style);
        style.setAttribute('type', 'text/css');
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    const style = `
        .conversion-form label {
            color: #333 !important;
        }
    `
    const isSeminovosPage = window.location.href.includes("/seminovos?")

    if(isSeminovosPage) {
        const formTitle = document.querySelector(".form-conversion__title")

        if(formTitle.innerHTML.includes("No momento não encontramos")) {
            addStyle(style)
        }
    }
})()