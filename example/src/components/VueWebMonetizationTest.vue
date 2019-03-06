<template>
  <div class="container">
    <h1>WebMonetization status: {{ $vueWebMonetizationStart.state }}</h1>
    <p
      class="counter"
      v-if="isWebMonetization"
    >{{ $vueWebMonetizationProgress.totalAmount | filterCurrency }}</p>

    <div v-if="!isWebMonetization">
      <img src="http://placehold.jp/18/bfbfbf/403f3f/400x150.png?text=Advertisement%20banner" alt>
    </div>
    <div v-else>
      <h2>Thank you! Your WebMonetization is enabled!</h2>
      <p>
        Lorem ipsum dolor sit amet, velit scribentur ad eam. Cum ad quas rebum vocent, alienum appetere reprehendunt qui no. Id pro affert volumus, cu paulo argumentum vis. Elitr dolor tritani vix et, vero adipisci referrentur cu quo, et aperiri indoctum quo. Id ius molestie principes. Quaeque legimus omnesque vel ne, inani nostro deseruisse his eu.
        Ea vim tation luptatum consectetuer, ne nec everti animal equidem. Nonumes assueverit mel an. Nec cu nostrum maluisset adversarium. Quo ad integre invidunt conceptam. His et elit clita, qui suscipit invenire an. In pro solum accumsan periculis, no consulatu adolescens est.
      </p>
      <p>
        Lorem ipsum dolor sit amet, velit scribentur ad eam. Cum ad quas rebum vocent, alienum appetere reprehendunt qui no. Id pro affert volumus, cu paulo argumentum vis. Elitr dolor tritani vix et, vero adipisci referrentur cu quo, et aperiri indoctum quo. Id ius molestie principes. Quaeque legimus omnesque vel ne, inani nostro deseruisse his eu.
        Ea vim tation luptatum consectetuer, ne nec everti animal equidem. Nonumes assueverit mel an. Nec cu nostrum maluisset adversarium. Quo ad integre invidunt conceptam. His et elit clita, qui suscipit invenire an. In pro solum accumsan periculis, no consulatu adolescens est.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueWebMonetizationTest',
  filters: {
    filterCurrency: function(val) {
      return `Total Amount: ${val} XRP`
    }
  },
  computed: {
    isWebMonetization: function() {
      return this.$vueWebMonetizationStart &&
        this.$vueWebMonetizationStart.state === 'started'
        ? true
        : false
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 100%;
}
.counter {
  font-weight: bold;
  padding: 15px 10px;
  background: #eee;
}
img {
  max-width: 100%;
}
</style>
