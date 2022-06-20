(() => {
    const buttonRevokeCookies = document.createElement("button");
    buttonRevokeCookies.setAttribute("style", "position:fixed; bottom: 20px; right: 15px; padding: 10px; z-index: 9000;");
    buttonRevokeCookies.setAttribute("onclick", "showConsentPreferencesPopup()");
    buttonRevokeCookies.innerText = `Preferência de Cookies`;

    document.body.appendChild(buttonRevokeCookies);
})();