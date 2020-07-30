// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import VueVideoPlayer from 'vue-video-player'
//import 'video.js/dist/video-js.css'
import '@/assets/font/iconfont.css'
import axios from 'axios'
Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios

//Vue.use(VueVideoPlayer)
import Mui from 'vue-awesome-mui';
Vue.use(Mui);

Vue.config.productionTip = false
import permission from './permission'
import componentjs from './component.js'
import '@/assets/style.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
