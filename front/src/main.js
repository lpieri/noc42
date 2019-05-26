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
    asso: '....',
    nb: 0,
    students: [],
    start: '2019-06-03T20:00:00',
    end: '2019-06-03T21:00:00',
    backgroundColor: 'blue'
  },
  {
    title: 'Maraude épicerie',
    description: "Récupération des invendus de l'épicerie et distribution",
    asso: 'NOC 42',
    nb: 4,
    students: [],
    start: '2019-05-20T20:00:00',
    end: '2019-05-20T21:30:00',
    backgroundColor: '#ffe006'
  },
  {
    title: 'Maraude épicerie',
    description: "Récupération des invendus de l'épicerie et distribution",
    asso: 'NOC 42',
    nb: 4,
    students: [],
    start: '2019-05-22T20:00:00',
    end: '2019-05-22T21:30:00',
    backgroundColor: '#ffe006'
  },
  {
    title: 'Maraude épicerie',
    description: "Récupération des invendus de l'épicerie et distribution",
    asso: 'NOC 42',
    nb: 4,
    students: [],
    start: '2019-05-24T20:00:00',
    end: '2019-05-24T21:30:00',
    backgroundColor: '#ffe006'
  },
  {
    title: 'Soutien scolaire en français',
    description: 'Aide aux devoirs',
    asso: 'Ressourcerie des Batignolles',
    nb: 2,
    students: [],
    start: '2019-05-24T16:45:00',
    end: '2019-05-24T18:30:00',
    backgroundColor: 'pink'
  },
  {
    title: 'Soutien scolaire en mathématiques',
    description: 'Aide aux devoirs',
    asso: 'Ressourcerie des Batignolles',
    nb: 2,
    students: [],
    start: '2019-05-21T16:45:00',
    end: '2019-05-21T18:30:00',
    backgroundColor: 'pink'
  },
  {
    title: 'Pain partagé',
    description: "Préparation et partage d'un repas avec des personnes en difficulté",
    asso: 'Secours Catholique Caritas',
    nb: 4,
    students: [],
    start: '2019-05-21T11:30:00',
    end: '2019-05-21T14:30:00',
    backgroundColor: 'red'
  },
  {
    title: 'Aide aux devoirs',
    description: 'Aide aux devoirs',
    asso: 'NOC 42',
    nb: 2,
    students: [],
    start: '2019-05-22T13:00:00',
    end: '2019-05-22T16:30:00',
    backgroundColor: '#ffe006'
  },
  {
    title: 'Accueil du public',
    description: 'Ouverture de la salle de spectacle',
    asso: 'NOC 42',
    nb: 3,
    students: [],
    start: '2019-05-22T14:00:00',
    end: '2019-05-22T16:30:00',
    backgroundColor: '#ffe006'
  },
  {
    title: 'Accueil du public',
    description: 'Ouverture de la salle de spectacle',
    asso: 'NOC 42',
    nb: 3,
    students: [],
    start: '2019-05-23T20:00:00',
    end: '2019-05-23T21:30:00',
    backgroundColor: '#ffe006'
  },
  {
    title: 'Cantine solidaire',
    description: "Aide à la préparation d'un repas à partir d'invendus",
    asso: 'Ressourcerie des Batignolles',
    nb: 3,
    students: [],
    start: '2019-05-24T11:30:00',
    end: '2019-05-24T13:30:00',
    backgroundColor: 'pink'
  },
  {
    title: 'Pain partagé',
    description: "Préparation et partage d'un repas avec des personnes en difficulté",
    asso: 'Secours Catholique Caritas',
    nb: 4,
    students: [],
    start: '2019-05-24T11:30:00',
    end: '2019-05-24T14:30:00',
    backgroundColor: 'red'
  },
  {
    title: 'Cantine solidaire',
    description: "Aide à la préparation d'un repas à partir d'invendus",
    asso: 'Ressourcerie des Batignolles',
    nb: 3,
    students: [],
    start: '2019-05-25T11:30:00',
    end: '2019-05-25T13:30:00',
    backgroundColor: 'pink'
  },
  {
    title: "Garde d'enfants",
    description: "Garde d'enfants en centre",
    asso: 'Secours Catholique Caritas',
    nb: 3,
    students: [],
    start: '2019-05-25T14:30:00',
    end: '2019-05-25T18:00:00',
    backgroundColor: 'red'
  },
  {
    title: 'Accueil du public',
    description: 'Ouverture de la salle de spectacle',
    asso: 'NOC 42',
    nb: 3,
    students: [],
    start: '2019-05-25T20:00:00',
    end: '2019-05-25T21:30:00',
    backgroundColor: '#ffe006'
  },

];


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
