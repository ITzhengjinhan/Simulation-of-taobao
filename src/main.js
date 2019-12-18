import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import router from './routes/index'

//优化后的图片预览方法：1.在main.js里编写
import { ImagePreview } from 'vant';
Vue.use(ImagePreview);
Vue.prototype.$preview=ImagePreview

new Vue({
  render: h => h(App),
  //相当于让APP.vue一直显示
  router
  
}).$mount('#app')
