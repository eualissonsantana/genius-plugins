(() => {
    window.addEventListener("DOMContentLoaded", () => {
        const socialShareButtons = document.querySelectorAll(".social-sharer .sharethis-inline-share-buttons .st-btn");

        socialShareButtons.forEach(socialShareButton => {
            const dataNetwork = socialShareButton.getAttribute("data-network");

            if(dataNetwork == "twitter" || dataNetwork == "whatsapp"){
                socialShareButton.remove();
            }
        });
    });
})();