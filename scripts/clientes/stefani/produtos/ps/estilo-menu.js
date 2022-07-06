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

    const styles = `
        .header {
            background-color: #11364E !important;
            color: #fff !important;
        }

        .header__phones-button-toggler {
            border-radius: 50px;
        }

        .navbar-icon-line {
            background-color: #fff !important;
        }

        .icon-whatsapp {
            color: #333 !important;
        }

        .header__phones-button-toggler, .header__phones-button-toggler-mobile{
            background-color: #0190D2 !important;
        }

        .button--whatsapp, .button-icon--whatsapp {
            background-color: #fff !important;
            color: #333 !important;
        }

        .header__phones-button-toggler-mobile .icon-phone {
            background-color: transparent !important;
        }


        .header__navbar-title--label {
            color: #fff !important;
        }

        .header .card-collapse__header--active, .header .card-collapse__header:not(.collapsed) .icon-phone {
            background-color: #11364E !important;
        }

        .content .section-component__dash::before {
            background-color: #fff !important;
        }

        .header__networks-list{
            background-color: transparent !important;
        }

        .header__networks-list a, .footer__social-networks a{
            color: #fff !important;
        }

    `
    addStyle(styles)

})()