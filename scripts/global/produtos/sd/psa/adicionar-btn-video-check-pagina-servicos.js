function addButtonVideoCheck(link) {
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
        .btn-video-check {
            font-weight: 700;
            margin-top: 22px;
        }
        
        @media (max-width: 768px) {
            .showcase-services__panel-btn-schedule {
                position: relative !important;
            }

            .btn-agendamento {
                top: -50px !important;
            }

            .btn-video-check {
                top: -35px !important;
            }
        }
    `

    const isServicesPage = window.location.href.includes("/servicos")

    if(isServicesPage) {
        const btnRevisao = document.querySelector(".showcase-services__panel .showcase-services__panel-btn-schedule")

        if(btnRevisao) {
            const newRow = document.createElement("div")
            const btnVideoCheck = document.createElement("a")
            
            newRow.classList.add("container", "row")
            newRow.style.justifyContent = "space-evenly"
            
            btnVideoCheck.setAttribute("href", link)
            btnRevisao.classList.add("col-12", "col-md-4", "btn-page-servicos")
            btnVideoCheck.classList = btnRevisao.classList

            btnVideoCheck.classList.add("btn-video-check")
            btnVideoCheck.classList.remove("showcase-services__panel-btn-schedule")

            btnRevisao.classList.add("btn-agendamento")
            btnVideoCheck.innerText = "CITROEN VIDEO CHECK"

            btnRevisao.parentNode.appendChild(newRow)

            newRow.appendChild(btnRevisao)
            newRow.appendChild(btnVideoCheck)
        }
    }

}
