import Vue from 'vue'
import Vant from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'vant/lib/index.css';
import 'lib-flexible' //rem
// import './common/font.css'




Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(ViewUI);
// Vue.use(Bscroll);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
