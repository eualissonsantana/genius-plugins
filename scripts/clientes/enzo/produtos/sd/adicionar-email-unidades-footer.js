(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const footerDesktopRows = document.querySelectorAll(".footer__units--desktop .footer-units .footer-units__contents .row");
        const footerMobileRows = document.querySelectorAll(".footer__units--mobile .footer-units #footer-units-mobile .nav-vertical__item");

        const footerEmails = [
            {
                email: "kampai@kampai.com.br"
            },
            {
                email: "administracao@kampaichapadao.com.br"
            },
            {
                email: "kampai@kampai.com.br"
            }
        ];

        const createEmailBlock = (index) => {
            let emailTitle = document.createElement("div");
            emailTitle.classList.add("footer-units__title");
            emailTitle.innerHTML = `
                <i class="fa fa-envelope icon"></i>
                Email para contato: 
            `;

            let emailInfo = document.createElement("ul");
            emailInfo.classList.add("list", "list--no-style");
            emailInfo.innerHTML = `
                <li>${footerEmails[index].email}</li>
            `;

            return {
                emailTitle,
                emailInfo
            };
        };

        footerDesktopRows.forEach((footerDesktopRow, index) => {
            let { emailTitle, emailInfo } = createEmailBlock(index);
            let footerEmailWrapper = footerDesktopRow.querySelectorAll(".col-sm-6")[1];

            footerEmailWrapper.innerHTML += `
                <div class="footer-units__separator"></div>
                <div class="footer-units__separator"></div>
            `;
            footerEmailWrapper.appendChild(emailTitle);
            footerEmailWrapper.appendChild(emailInfo);
        });

        footerMobileRows.forEach((footerMobileRow, index) => {
            let { emailTitle, emailInfo } = createEmailBlock(index);
            let footerEmailWrapper = footerMobileRow.querySelectorAll(".nav-vertical__item-content .footer-units__content-row .footer-units__contents-block")[1];

            let footerUnitsContentsBlock = document.createElement("div");
            footerUnitsContentsBlock.classList.add("footer-units__contents-block");
            footerUnitsContentsBlock.appendChild(emailTitle);
            footerUnitsContentsBlock.appendChild(emailInfo);

            footerEmailWrapper.after(footerUnitsContentsBlock);
        });
    });
})();