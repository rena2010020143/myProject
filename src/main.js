// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './vuex/store'
// 导入国际化
import VueI18n from 'vue-i18n'
// 导入element的组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入iconfont.css
import './assets/iconfont/iconfont.css'
// 兼容ie浏览器
import 'babel-polyfill'
Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(ElementUI)

// 切换语言直接修改locale的值即可
const i18n = new VueI18n({
  locale: 'CN',
  messages: {
    'EN': require('@/locales/EN.js'),
    'CN': require('@/locales/CN.js')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  i18n,
  components: { App, i18n },
  template: '<App/>'
})
