import Vue from 'vue'
import App from './App'
import VueScroll from 'vue-scrollTo'

Vue.use(VueScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
