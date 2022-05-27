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
    
        addStyle`
            .iframe-interno, .iframe-externo {
                margin: 35px 0;
            }

            .360-area iframe {
                heigth: 500px;
            }
            
            @media screen and (max-width: 768px) {
                .360-area iframe {
                    height: 260px;
                }

                .slide-gallery--with-side-thumbs {
                    margin-left: 0 !important;
                    margin-right: 0 !important;
                }

                .gallery-with-thumbs .section-component__title {
                    padding-left: 16px !important;
                }
            }
        `
    const url = window.location.href

    const make360 = (srcInterno, srcExterno) => {
        if(srcExterno == "") {
            return `
                <div class="container">
                    <h2 class="section-component__title section-component__title--small"> 360º Interior </h2>
                    <div class="iframe-interno">
                        <iframe src="${srcInterno}" class="d-none d-md-block" width="100%" height="500px" loading="lazy"></iframe>
                        <iframe src="${srcInterno}" class="d-block d-md-none" width="100%" height="260px" loading="lazy"></iframe>
                    </div>
                </div>
            `
        } else {
            return `
                <div class="container">
                    <h2 class="section-component__title section-component__title--small"> 360º Exterior </h2>
                    <div class="iframe-externo">
                        <iframe src="${srcExterno}" class="d-none d-md-block" width="100%" height="500px" loading="lazy"></iframe>
                        <iframe src="${srcExterno}" class="d-block d-md-none" width="100%" height="260px" loading="lazy"></iframe>
                    </div>
                </div>
                
                <div class="container">
                    <h2 class="section-component__title section-component__title--small"> 360º Interior </h2>
                    <div class="iframe-interno iframe-actros">
                        <iframe src="${srcInterno}" class="d-none d-md-block" width="100%" height="500px" loading="lazy"></iframe>
                        <iframe src="${srcInterno}" class="d-block d-md-none" width="100%" height="260px" loading="lazy"></iframe>
                    </div>
                </div>
            `
        }
    }

    if(url.includes("axor") || url.includes("accelo") || url.includes("atego") || url.includes("actros")){
        const newFrame360 = document.createElement("section")
        const galleryImg = document.querySelector(".gallery-with-thumbs")
        const galleryVideo = document.querySelector(".gallery-video")
        let content360

        newFrame360.classList.add("section-component", "360-area")
        if(url.includes("axor")) {
            content360 = make360("https://s3-sa-east-1.amazonaws.com/tcm-assets/mercedes-vem-pra-mercedes/360-interno/axor/index.html", "")
        } else if(url.includes("accelo")) {
            content360 = make360("https://s3-sa-east-1.amazonaws.com/tcm-assets/mercedes-vem-pra-mercedes/360-interno/accelo/index.html", "")
        } else if(url.includes("atego")) {
            content360 = make360("https://s3-sa-east-1.amazonaws.com/tcm-assets/mercedes-vem-pra-mercedes/360-interno/atego/index.html", "")
        } else if(url.includes("actros")) {
            content360 = make360("https://s3-sa-east-1.amazonaws.com/tcm-assets/mercedes-novo-actros/360-interno/index.html", "https://s3-sa-east-1.amazonaws.com/tcm-assets/mercedes-novo-actros/360-externo/index.html")
        }  

        newFrame360.innerHTML = content360
        
        if(galleryVideo) {
            galleryVideo.parentNode.insertBefore(newFrame360, galleryVideo)
        } else if(galleryImg) {
            galleryImg.parentNode.insertBefore(newFrame360, galleryImg)
        }

        // Retira o movimento do scroll enquanto o mouse estiver em cima no iframe na interna no Novo Actros
        document.querySelectorAll(".iframe-actros").forEach(iframe => {
            iframe.addEventListener('mouseenter', ()=> document.body.style.overflow = 'hidden')
            iframe.addEventListener('mouseleave', ()=> document.body.style.overflow = null)
        })
        
    }
})()