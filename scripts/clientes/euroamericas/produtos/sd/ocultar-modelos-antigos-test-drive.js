(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const isThisPage = ({ urlPiece }) => {
            const fullURL = window.location.href
            const result = fullURL.includes(urlPiece)
    
            return result
        }
    
        if(isThisPage({ urlPiece: "empresa/agendar-test-drive" })){
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
    
            addStyle(`
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="44"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="48"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="49"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="59"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="60"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="61"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="62"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="63"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="64"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="65"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="66"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="67"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="68"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="69"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="70"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="71"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="72"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="73"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="74"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="75"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="76"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="77"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="78"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="79"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="80"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="81"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="82"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="83"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="84"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="100"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="101"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="102"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="103"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="104"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="105"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="106"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="107"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="108"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="109"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="110"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="111"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="112"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="113"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="114"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="115"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="116"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="117"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="118"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="119"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="123"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="124"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="125"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="126"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="128"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="129"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="130"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="131"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="132"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="133"],
                .choices .choices__list--dropdown .choices__list .choices__item[data-id="134"]
                {
                    display: none !important;
                }
            `);
        }
    });
})();