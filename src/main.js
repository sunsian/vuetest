// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
Vue.use(IScrollView, IScroll)
Vue.prototype.$http = axios
import '@/assets/js/setFontSize.js'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
