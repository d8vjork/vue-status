// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

var el = document.createElement('link')
el.rel = 'stylesheet'
el.id = 'template'
document.head.appendChild(el)

router.afterEach(route => {
  document.getElementById('template').setAttribute('href', route.meta.stylesheet)
})

Vue.prototype.$env = process.env

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
