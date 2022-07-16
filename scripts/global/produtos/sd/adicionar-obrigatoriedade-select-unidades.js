(() => {
    // função
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

    addStyle `
        #bouncer-error_unit {
            margin-top: 50px;
            position: absolute;
            color: #b3260f;
            font-size: .75rem;
        }
    `

    setTimeout(() => {
        const selectsUnitBanner = document.querySelectorAll(".conversion-step__form .choices select[name='unit']")
        const selectUnit = document.querySelector(".form-conversion__body .choices select[name='unit']")
        const selectUnitNewVehicles = document.querySelector(".form-conversion__body .choices select[name='unit']")

        if(selectsUnitBanner) {
            selectsUnitBanner.forEach(element => {
                element.setAttribute("required", "")
            });
        }
        
        if (selectUnit) {
            selectUnit.setAttribute("required", "")
        }else if(selectUnitNewVehicles) {
            selectUnit.setAttribute("required", "")
        }

    }, 400);
})()