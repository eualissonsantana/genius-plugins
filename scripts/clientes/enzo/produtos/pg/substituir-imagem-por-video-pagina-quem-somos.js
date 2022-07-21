(() => {
    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)

        return result
    }

    if(isThisPage({ urlPiece: "/quem-somos" })){
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

        const textColumn = document.querySelectorAll("#content .row .col-xs-12")[0];
        const mediaColumn = document.querySelectorAll("#content .row .col-xs-12")[1];

        if(mediaColumn && mediaColumn){
            mediaColumn.classList.remove("about-article-background");
            mediaColumn.innerHTML = `
                <iframe class="quem-somos-video" src="https://www.youtube.com/embed/LfH8os5d1FM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;

            textColumn.classList.remove("col-sm-push-6");
            textColumn.classList.add("col-sm-push-7");

            textColumn.querySelector("about-article-text h4");
        }

        addStyle(`
            #content .container-fluid .about-article-text article .row-breack-title:after{
                content: none !important;
            }

            @media screen and (min-width: 992px){
                .quem-somos-video{
                    width: 560px;
                    height: 315px;
                }
            }

            @media screen and (max-width: 992px){
                .quem-somos-video{
                    width: 100%;
                    height: 300px;
                }
            }
        `);
    }
})();