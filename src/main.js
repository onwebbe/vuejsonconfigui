import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Utils from '@/Utils';
import FieldString from './components/FieldString';
import FieldNumber from './components/FieldNumber';
import FieldDecimal from './components/FieldDecimal';
import FieldBoolean from './components/FieldBoolean';
import FieldArray from './components/FieldArray';
import FieldMap from './components/FieldMap';
Vue.prototype.$axios = axios;
let eventBus = new Vue({});
Vue.prototype.$eventBus = eventBus;
Vue.component('FieldString', FieldString);
Vue.component('FieldNumber', FieldNumber);
Vue.component('FieldDecimal', FieldDecimal);
Vue.component('FieldBoolean', FieldBoolean);
Vue.component('FieldArray', FieldArray);
Vue.component('FieldMap', FieldMap);
Vue.prototype.Utils = Utils;
Vue.config.productionTip = false;
window.store = store;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
