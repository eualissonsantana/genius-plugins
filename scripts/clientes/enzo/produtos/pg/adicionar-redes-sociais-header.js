(() => {
    let phoneButton = document.querySelector(".nav-wrapper-dinamic .wrapper-right #phones-main");
    let socialMidiaWrapper = document.createElement("div");
    socialMidiaWrapper.setAttribute("id", "social-midia-wrapper-header");

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
    
    let socialMidias = [
        {
            title: "Instagram",
            link: "https://www.instagram.com/grupoenzo/",
            icon: "<i class='fa fa-instagram'></i>"
        },
        {
            title: "Linkedin",
            link: "https://www.linkedin.com/company/grupo-enzo/",
            icon: "<i class='fa fa-linkedin'></i>"
        },
        {
            title: "Facebook",
            link: "https://www.facebook.com/GrupoEnzoOficial",
            icon: "<i class='fa fa-facebook'></i>"
        }
    ];

    socialMidias.forEach(socialMidia => {
        let socialMidiaButton = document.createElement("a");
        socialMidiaButton.setAttribute("class", "social-midia-button-header");
        socialMidiaButton.href = socialMidia.link;
        socialMidiaButton.target = "_blank";
        socialMidiaButton.innerHTML = socialMidia.icon;

        socialMidiaWrapper.appendChild(socialMidiaButton);
    });

    addStyle(`
        #social-midia-wrapper-header{
            display: flex;
            align-items: center;
            justify-content: center;

            margin: 0 0 0 1rem;
        }

        #social-midia-wrapper-header .social-midia-button-header{
            display: flex;
            align-items: center;
            justify-content: center;
            
            height: 3rem;
            width: 3rem;
            border-radius: 50%;

            border: 0.2rem solid #fff;
            color: #fff;
            font-size: 1.2rem;
            text-decoration: none;

            margin: 0 0.3rem;

            transition: all 0.2s ease-out;
        }

        #social-midia-wrapper-header .social-midia-button-header i{
            color: #fff;
        }

        #social-midia-wrapper-header .social-midia-button-header:hover{
            background: #fff;
            color: #000;
        }
        
        #social-midia-wrapper-header .social-midia-button-header:hover i{
            background: transparent !important;
            color: currentColor;
        }

        .nav-wrapper-dinamic .wrapper-right{
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        @media (max-width: 768px){
            #social-midia-wrapper-header{
                display: none;
            }
        }
    `);

    phoneButton.after(socialMidiaWrapper);
})();