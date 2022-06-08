(() => {
    sol.onReady(() => {
        let channels = document.querySelectorAll(".channel-container a");

        if(channels.length > 0){
            channels.forEach(channel => {
                let channelLink = channel.getAttribute("href");
        
                if(channelLink.includes("grupo-ago-land-rover")){
                    channel.setAttribute("href", "https://retailers.landrover.com.br/ago-land-rover");
                }
                else if(channelLink.includes("grupo-ago-jaguar")){
                    channel.setAttribute("href", "https://retailers.jaguarbrasil.com.br/ago-jaguar");
                }
            });
        }
    });
})();