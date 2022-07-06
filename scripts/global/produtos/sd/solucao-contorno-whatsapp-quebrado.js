(() => {
    document.addEventListener("DOMContentLoaded", function(event) {
        $('.header-mobile__whatsapp-link').on('click', function (e) {
            e.preventDefault();
        
            const { toBool } = window.helpers;
        
            const element = document.querySelector(
              '.header-conversion-form-whatsapp-modal'
            );
            element.innerHTML = '';
        
            const data = this.dataset;
            const unit = data.unit;
            const units = data.units ? JSON.parse(data.units) : [];
            const product = data.product;
            const channel = data.channel;
            const category = data.category;
            const brand = data.brand;
            const link = data.link;
            const whatsAppResponder = element.dataset.whatsappResponder == 'true';
            const showUnits = JSON.parse(data.showUnits);
            const showCpf = !!JSON.parse(data.showCpf);
            const phones = JSON.parse(data.phones);
            const versions = JSON.parse(data.versions);
            const showLocationFields = toBool(data.showLocationFields);
        
            render(
              h(window.WhatsAppFormModal, {
                modalId: 'header-conversion-form-whatsapp-modal',
                open: true,
                unit,
                units,
                product,
                channel,
                category,
                brand,
                link,
                whatsAppResponder,
                showUnits,
                showCpf,
                phones,
                versions,
                showLocationFields,
              }),
              element
            );
          });
    });
})()