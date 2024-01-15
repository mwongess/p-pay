let mysr_form = document.querySelector('.mysr-form')
let amaount = 1000

Moyasar.init({
    element: mysr_form,
    amount: amaount,
    currency: 'SAR',
    description: 'Item to buy',
    publishable_api_key: '',
    callback_url: './thanks.html',
    methods: ['creditcard']
  })