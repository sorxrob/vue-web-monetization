const VueWebMonetization = {
  install(Vue) {
    this._vueMonetization = {
      start: {
        state: document.monetization && document.monetization.state,
        paymentPointer: null,
        requestId: null
      },
      progress: {
        assetCode: null,
        assetScale: null,
        totalAmount: 0
      }
    }
    Vue.util.defineReactive(this, '$vueMonetization', this._vueMonetization)
    const _this = this

    Object.defineProperties(Vue.prototype, {
      $vueWebMonetizationStart: {
        get() {
          return _this._vueMonetization.start
        },
        set(val) {
          _this._vueMonetization.start = Object.assign({}, val)
        }
      },
      $vueWebMonetizationProgress: {
        get() {
          return _this._vueMonetization.progress
        },
        set(val) {
          _this._vueMonetization.progress = Object.assign({}, val)
        }
      }
    })
    const _onMonetizationStart = ev => {
      const { paymentPointer, requestId } = ev.detail
      const newMonetizationStart = {
        state: document.monetization.state,
        paymentPointer,
        requestId
      }
      Vue.prototype.$vueWebMonetizationStart = Object.assign(
        {},
        newMonetizationStart
      )
    }
    const _onMonetizationprogress = ev => {
      const { amount, assetCode, assetScale } = ev.detail
      const scale = Math.pow(10, assetScale)
      const newMonetizationProgress = {
        assetCode,
        assetScale,
        totalAmount:
          _this._vueMonetization.progress.totalAmount + Number(amount / scale)
      }
      Vue.prototype.$vueWebMonetizationProgress = Object.assign(
        {},
        newMonetizationProgress
      )
    }
    document.monetization.addEventListener(
      'monetizationstart',
      _onMonetizationStart
    )
    document.monetization.addEventListener(
      'monetizationprogress',
      _onMonetizationprogress
    )
  }
}
export default VueWebMonetization
