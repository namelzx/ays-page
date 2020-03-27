import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import VueClipboard from 'vue-clipboard2'
import ViewUI from 'view-design';

import Element from 'element-ui'

import '@/assets/css/border.css'
import '@/assets/css/reset.css'
// import 'view-design/dist/styles/iview.css';

import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/base.css';
import {Button, Select, Carousel, CarouselItem,Rate} from 'element-ui';

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Rate)
Vue.use(VueClipboard)
Vue.use(ViewUI)
Vue.use(Element)

import Vant from 'vant';
import 'vant/lib/index.css';

import Router from 'vue-router'

Vue.use(Vant);

import '@/assets/css/iconfont.css'
//引入vue-awesome-swiper(轮播图插件)
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper);

import BScroll from 'better-scroll'

Vue.config.productionTip = false


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 金额过滤器
Vue.filter('money', (val) => {
  if (typeof val === 'number') {
    if (val % 1 === 0) {
      return val + '.00'
    } else {
      return val
    }
  } else {
    return val
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
