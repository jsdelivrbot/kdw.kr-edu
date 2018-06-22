// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ko'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.component('icon', Icon)

Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
new Vue({
  el: '#kdwkr',
  router,
  components: { App },
  template: '<App/>'
})
