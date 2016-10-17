var Vue = require('vue/dist/vue.js')
var myComponent = require('./components/my_components.vue')

var vm = new Vue({
  el: ".app",
  components: {
    'my-component': myComponent
  }
})
