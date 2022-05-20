(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const buttonWrapper = document.querySelector(".text-calls-chat-online .text-call-chat-online__title-mobile");

        if(buttonWrapper){
            const button = document.createElement("a");
            button.href = "https://api.whatsapp.com/send?phone=5531995336300";
            button.target = "_blank";
            button.classList.add("btn", "button", "button--whatsapp")

            button.innerHTML = `
                <i class="icon icon-whatsapp"></i> 
                <span>WhatsApp</span> 
                <div class="mt-2">
                    <span>+55 (31) 99533-6300</span>
                </div> 
            `;

            buttonWrapper.after(button);
        }
    });
})();