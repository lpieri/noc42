import Vue from 'vue';
import App from './App.vue';
import router from './router';
require('./style/customBulma.scss');
import FullCalendar from 'vue-full-calendar';
import "fullcalendar/dist/fullcalendar.min.css";

Vue.use(FullCalendar)
Vue.config.productionTip = false;
Vue.prototype.$allEvents = [
  {
    title: 'Soutien scolaire en mathematiques',
    description: 'Aide aux devoirs',
    students: [],
    start: '2019-06-03T20:00:00',
    end: '2019-06-03T21:00:00'
  }
];


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
