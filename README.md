# Vue Web Monetization
> This project is a simple one for implementing WebMonetization based on Vue.js.
For this reason, the `vue-web-monetization` library implements only the necessary minimum functionality.

## Sample Project (Vue.js)
```
cd example
yarn install
yarn serve
```

## Usage

### WebMonetization to your Vue.js project

Supports meta tag based WebMonetization.


### Import Library

main.js
```
import VueWebMonetization from 'vue-web-monetization'
Vue.use(VueWebMonetization)
```

### Common
Using instance properties.  
Get monetization status by `$vueWebMonetizationStart`.  
Get monetization progress by `$vueWebMonetizationStart`.

### Get WebMonetization Status

```js
$vueWebMonetizationStart: {
  state: document.monetization && document.monetization.state,
  paymentPointer: YOUR-PAYMENT-POINTER,
  requestId: String
}
```

#### Component example
```html
<h1>WebMonetization status: {{ $vueWebMonetizationStart.state }}</h1>
```

#### Script example
```js
computed: {
  isWebMonetization: function() {
    return this.$vueWebMonetizationStart && this.$vueWebMonetizationStart.state === 'started' ? true : false
  }
}
```

### Get WebMonetization Progress

`totalAmount` is the total payment.

```js
$vueWebMonetizationProgress: {
  assetCode: String,
  assetScale: Number,
  totalAmount: Number
}
```

#### Component example
```html
<p>{{ $vueWebMonetizationProgress.totalAmount | filterCurrency }}</p>
```

#### Script example
```js
const formattedTotalAmount = new Bignumber(this.$vueWebMonetizationProgress.totalAmount, 10).toFormat()
```

## Use case examples
- Hide existing ads when WebMonetization is enabled
- Total amount of payment stored for each user in database etc, utilized for premium content
- Content that can be viewed only when WebMonetization is enabled (processing on the server side is necessary)

## npm library
You can install VueWebMonetization on your Vue.js project using the npm library.  
But, this library is very simple as I created it experimentally.  
When using it with actual product, you should use this library by modifying it.

```
yarn add vue-web-monetization
```

[Vue Web Monetization](https://www.npmjs.com/package/vue-web-monetization)
