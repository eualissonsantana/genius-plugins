(() => {
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
    
    addStyle`
        .selecione-unidade {
            margin-left: 19px;
            font-size: 14px;
        }

    `
    const selectUnit = document.querySelector(".select--units__unit")

    if(selectUnit){
        const text = document.createElement("span")
        text.classList.add("selecione-unidade")
        text.innerHTML = `Selecione uma unidade: `
        selectUnit.parentNode.insertBefore(text, selectUnit)
    }
})()