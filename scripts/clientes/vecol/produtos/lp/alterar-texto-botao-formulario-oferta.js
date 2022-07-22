(() => {
    document.addEventListener("DOMContentLoaded", function(event) {
        // função
        const isNewVehiclesPage = window.location.href.includes("/novos/")

        if(isNewVehiclesPage) {

            var elConversionForm = document.querySelector('.showcase-new-simple__conversion-form'),
                cloneId = parseInt(elConversionForm.getAttribute("data-clone-id")),
                
                linkPrivacyPolicy = elConversionForm.getAttribute("linkPrivacyPolicy"),
                units = elConversionForm.getAttribute("data-units"),
                channel = elConversionForm.getAttribute("data-channel"),
                category = elConversionForm.getAttribute("data-category"),
                product = elConversionForm.getAttribute("data-product"),
                showPrice = JSON.parse(elConversionForm.getAttribute("data-show-price")),
                brand = elConversionForm.getAttribute("data-brand"),
                showCpf = !!JSON.parse(elConversionForm.getAttribute("data-show-cpf")),
                showUnits = JSON.parse(elConversionForm.getAttribute("data-show-units")),
                showLastName = JSON.parse(elConversionForm.getAttribute("data-show-last-name")),
                zflow = !!JSON.parse(elConversionForm.getAttribute("data-zflow")),
                contactsWithDynamicRequired = !!JSON.parse(elConversionForm.getAttribute("data-contacts-with-dynamic-required")),
                shouldShowDataPermissions = !JSON.parse(elConversionForm.getAttribute("data-should-show-dat-permissions")),
                dataPermissionsCustomText = elConversionForm.getAttribute("data-permissions-custom-text"),
            
                units = JSON.parse(units);
            
              // Renderiza o componente reativo para o formulário de conversão
              render(
                h(NewVehicleConversionFormApp, {
                  brand: brand,
                  buttonLabel: "SIMULAR AGORA",
                  category: category,
                  channel: channel,
                  cloneId: cloneId,
                  linkPrivacyPolicy: linkPrivacyPolicy,
                  mainPhrase:
                    'Preencha o formulário abaixo para receber o contato de um de nossos especialistas:',
                  product: product,
                  units: units,
                  showCpf: showCpf,
                  showUnits: showUnits,
                  shouldShowPrice: showPrice,
                  showLastName: showLastName,
                  zflow: zflow,
                  contactsWithDynamicRequired: contactsWithDynamicRequired,
                  shouldShowDataPermissions: false,
                  dataPermissionsCustomText: "",
                  shouldShowImage: false,
                  shouldShowPrice: false,
                }),
                elConversionForm
              );
        }
    });
})()

