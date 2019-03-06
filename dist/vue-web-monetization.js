var VueWebMonetization = {
  install: function install(Vue) {
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
    };
    Vue.util.defineReactive(this, '$vueMonetization', this._vueMonetization);

    var _this = this;

    Object.defineProperties(Vue.prototype, {
      $vueWebMonetizationStart: {
        get: function get() {
          return _this._vueMonetization.start;
        },
        set: function set(val) {
          _this._vueMonetization.start = Object.assign({}, val);
        }
      },
      $vueWebMonetizationProgress: {
        get: function get() {
          return _this._vueMonetization.progress;
        },
        set: function set(val) {
          _this._vueMonetization.progress = Object.assign({}, val);
        }
      }
    });

    var _onMonetizationStart = function _onMonetizationStart(ev) {
      var _ev$detail = ev.detail,
          paymentPointer = _ev$detail.paymentPointer,
          requestId = _ev$detail.requestId;
      var newMonetizationStart = {
        state: document.monetization.state,
        paymentPointer: paymentPointer,
        requestId: requestId
      };
      Vue.prototype.$vueWebMonetizationStart = Object.assign({}, newMonetizationStart);
    };

    var _onMonetizationprogress = function _onMonetizationprogress(ev) {
      var _ev$detail2 = ev.detail,
          amount = _ev$detail2.amount,
          assetCode = _ev$detail2.assetCode,
          assetScale = _ev$detail2.assetScale;
      var scale = Math.pow(10, assetScale);
      var newMonetizationProgress = {
        assetCode: assetCode,
        assetScale: assetScale,
        totalAmount: _this._vueMonetization.progress.totalAmount + Number(amount / scale)
      };
      Vue.prototype.$vueWebMonetizationProgress = Object.assign({}, newMonetizationProgress);
    };

    document.monetization.addEventListener('monetizationstart', _onMonetizationStart);
    document.monetization.addEventListener('monetizationprogress', _onMonetizationprogress);
  }
};

export default VueWebMonetization;
