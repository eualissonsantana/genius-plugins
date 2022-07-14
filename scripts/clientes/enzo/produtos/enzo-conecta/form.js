var elConversionForm = document.querySelector(
    '.showcase-consortium__conversion-form'
  ),
  cloneId = parseInt(elConversionForm.dataset.cloneId),
  linkPrivacyPolicy = elConversionForm.dataset.linkPrivacyPolicy,
  units = elConversionForm.dataset.units,
  product = elConversionForm.dataset.product,
  channel = elConversionForm.dataset.channel,
  category = elConversionForm.dataset.category,
  brand = elConversionForm.dataset.brand,
  showCpf = !!JSON.parse(elConversionForm.dataset.showCpf),
  showUnits = JSON.parse(elConversionForm.dataset.showUnits),
  shouldShowDataPermissions = JSON.parse(elConversionForm.dataset.shouldShowDataPermissions),
  dataPermissionsCustomText = elConversionForm.dataset.dataPermissionsCustomText,
  PERIOD_DICTIONARY = {
    'diário': 'dia',
    'mensal': 'mês',
  },
  PERIOD_DICTIONARY_PLURAL = {
    'diário': 'dias',
    'mensal': 'mêses',
  };

units = JSON.parse(units);

/**
 * Renderiza o componente reativo para o formulário de conversão
 */
render(
  h(ConsortiumConversionFormApp, {
    titleForm: 'Carregue seu veículo',
    brand: brand,
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
    showVehicleExchange: false,
    shouldShowDataPermissions: shouldShowDataPermissions,
    dataPermissionsCustomText: dataPermissionsCustomText,
  }),
  elConversionForm
);