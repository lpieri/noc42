<template>

  <div id="assoProfile" class="section">

    <div class="container">
      <div id="bandAsso" class="columns card">
        <figure id="picAssoFig" class="column image">
          <div id="pictureAsso" :alt="assoName"></div>
        </figure>
        <h1 id="assoName" class="column title is-1">{{ assoName }}</h1>
      </div>
    </div>

    <div id="assoContent" class="tile is-ancestor">

      <div class="tile is-3 card">
        <div id="assoDes" class="columns">
          <h4 class="title is-5 column">Description :</h4>
          <p id="assoDescrip" class="is-medium column">{{ assoDescription }}</p>
          <button id="addAssoEvent" @click="launch" class="button column">
            Ajouter un Event
          </button>
        </div>
      </div>

      <div class="tile is-1"></div>

      <div class="tile is-8 card">
        <div class="container">
          <full-calendar :config="config" :events="events"/>
        </div>
      </div>

    </div>
    <div class="modal" :class="{'is-active':showModal}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Ajouté un Evenement :</p>
          <button @click="close" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <form id="addEvent" action="submit">
            <div class="field">
              <label class="label">Nom de l'event :</label>
              <div class="control">
                <input ref="titleEvent" class="input" type="text" placeholder="Event...">
              </div>
            </div>

            <div class="field">
              <label class="label">Description de l'event :</label>
              <div class="control">
                <input ref="desEvent" class="input" type="text" placeholder="Description...">
              </div>
            </div>

            <div class="field">
              <label class="label">À quel heure l'event commence ?</label>
              <div class="control">
                <input ref="startEvent" class="input" type="datetime-local" placeholder="">
              </div>
            </div>

            <div class="field">
              <label class="label">À quel heure l'event fini ?</label>
              <div class="control">
                <input ref="endEvent" class="input" type="datetime-local" placeholder="">
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click.prevent="submit">Save changes</button>
          <button class="button" @click="close">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './modal.vue';

function

export default {
  name: 'AssoProfile',
  component: Modal,
  data () {
    return {
      assoName: 'Ressourcerie des Batignolles',
      assoPicturePath: './src/assets/passerelles17.png',
      assoDescription: 'La Ressourcerie des Batignolles est une association actrice du réemploi.\n' +
          'Tous les objets que nous recevons, soit par la collecte au domicile des particuliers,' +
        'soit par apport volontaire sur notre site, suivent une série d’étapes avant d’arriver dans la boutique solidaire.',
      events: this.$allEvents,
      config: {
        defaultView: 'agendaWeek',
        locale: 'fr',
        firstDay: 1,
        slotDuration: "01:00",
        allDaySlot: false
      },
      showModal: false
    }
  },
  methods: {
    launch() {
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    },
    submit() {
      let titleE = this.$refs.titleEvent.value;
      let desE = this.$refs.desEvent.value;
      let startE = this.$refs.startEvent.value;
      let endE = this.$refs.endEvent.value;
      let dataE = {
        asso: this.assoName,
        title: titleE,
        description: desE,
        start: startE,
        end: endE,
        // eventClick:
      };
      this.$allEvents.push(dataE);
      this.showModal = false;
    }
  },
  mounted () {
    console.log(this.event);
  }
}
</script>

<style>
#assoProfile .card {
  border-radius: 10px;
}
#bandAsso {
  padding: 21px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
}
#picAssoFig {
  max-width: min-content;
}
#pictureAsso {
  width: 150px;
  height: 150px;
  background: pink no-repeat center;
  border-radius: 50%;
}
#assoName {
  min-width: max-content;
}
#assoContent {
  margin-top: 10px;
}
#assoDes {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
#assoDescrip {
  max-height: min-content;
}
#addAssoEvent {
  margin-top: 15px;
  max-height: min-content;
}
</style>
