import Vue from 'vue';
import Router from 'vue-router';
import Connect from './components/Connect.vue';
import Agenda from './components/Agenda.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'connect',
      component: Connect
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: Agenda
    }
  ],
});
