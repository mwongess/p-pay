Moyasar.init({
    element: '.mysr-form',
    // Amount in the smallest currency unit.
    // For example:
    // 10 SAR = 10 * 100 Halalas
    // 10 KWD = 10 * 1000 Fils
    // 10 JPY = 10 JPY (Japanese Yen does not have fractions)
    amount: 1000,
    currency: 'SAR',
    description: 'Coffee Order #1',
    publishable_api_key: 'pk_test_AQpxBV31a29qhkhUYFYUFjhwllaDVrxSq5ydVNui',
    callback_url: 'https://moyasar.com/thanks',
    methods: ['creditcard']
  })