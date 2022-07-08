(() => {
    document.addEventListener("DOMContentLoaded", function(event) {
        // função
        const renaultProPage = window.location.href.includes("/o-que-e-renault-pro")
    
        if(renaultProPage) {
            var formComponentContainer = document.querySelector(
                '.static-conversion-form'
            ),
            formProps = JSON.parse(formComponentContainer.getAttribute('data-props'));
    
            formProps.categories = JSON.parse(formProps.categories);
            formProps.showCpf = !!JSON.parse(formProps.showCpf);
            formProps.showUnits = true;
    
    
            render(h(StaticConversionFormApp, formProps), formComponentContainer);
        }
    });
})()