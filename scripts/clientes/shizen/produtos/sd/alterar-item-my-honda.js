(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const navItems = document.querySelectorAll(".nav-simple .nav .nav-item");

        if(navItems.length > 0){
            navItems.forEach(navItem => {
                const navItemLink = navItem.querySelector(".nav-link");
                const navItemLinkText = String(navItemLink.innerHTML).trim();
                const menu = navItem.parentNode;
                let myHondaItem = null;

                if(navItemLinkText == "My Honda"){
                    const myHondaIcon = document.createElement('img');
                    myHondaIcon.src = 'https://legado.autoforce.com.br/mods/bdg/especiais/my-honda-cinza.png';
                    myHondaIcon.style.marginLeft = '-1rem';

                    navItemLink.innerHTML = ``;
                    navItemLink.appendChild(myHondaIcon);
                    myHondaItem = navItem;

                    navItem.remove();
                    menu.appendChild(myHondaItem);
                }
            });
        }
    });
})();