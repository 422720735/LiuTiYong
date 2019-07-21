import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './store/index'
import App from './App'
import router from './router'
import './validators'
import './filters'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'jackblog-sass/dist/index.css'
import 'vue-toast/dist/vue-toast.min.css'
import '@/assets/styles/index.css'

sync(store, router);
// Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
