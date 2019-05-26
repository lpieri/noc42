import Vue from 'vue';
import App from './App.vue';
import router from './router';
require('./style/customBulma.scss');
import FullCalendar from 'vue-full-calendar';
import "fullcalendar/dist/fullcalendar.min.css";

Vue.use(FullCalendar)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
