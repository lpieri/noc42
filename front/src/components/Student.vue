<template>
  <section class="section">

    <div class="tile is-ancestor">

      <div id="tileStudentProfile" class="tile is-4 card">

        <div id="globalStudent" class="column">
          <div id="infoStudent" class="columns">
            <figure class="image column">
              <div id="pictureStudent" :style="{ 'background-image': 'url(' + studentPicture + ')' }"></div>
            </figure>
            <h2 id="nameStudent" class="title is-4 column">{{ studentName }}</h2>
          </div>
        </div>

        <div class="column">
          <div id="profileNoc" class="container">
            <h4 class="title is-4"><abbr title="Not Only Coin">NOC</abbr> : {{ nbNoc }}</h4>
            <router-link to="/">Utilisé mes <abbr title="Not Only Coin">NOC</abbr></router-link>
          </div>
          <div class="container">
            <div class="columns">
              <div id="studentStat" class="column">
                <h5 class="title is-5">Mes Stats :</h5>
                <p class="subtitle is-5">Nombre de missions éffectué dans le mois : <h6 class="title is-6">{{ nbMission }}</h6></p>
                <p class="subtitle is-5">Nombre d'heures éffectué dans le mois : <h6 class="title is-6">{{ nbHour }}</h6></p>
                <p class="subtitle is-5">Mon centre d'intérêt préferé : <h6 class="title is-6">{{ bestCat }}</h6></p>
              </div>
              <div id="studentSuggest" class="column">
                <h5 class="title is-5">Mes Suggestion :</h5>
                <p class="subtitle is-5">Association qui pourrait vous intéressé.e : <h6 class="title is-6">{{ suggestAsso }}</h6></p>
                <p class="subtitle is-5">Une futur mission dans {{ bestCat }} : <h6 class="title is-6">{{ nextDate }}</h6></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="agendaEvent" class="tile is-8 card">
        <div class="container">
          <full-calendar :config="config" :events="events"/>
        </div>
      </div>

    </div>
    <div class="container">
      <h1 class="title">Ma Prochaine Mission :</h1>
      <p id="descriptionNextMission" class="subtitle is-4">{{ studentNextMission }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      studentName: 'Laura Boit',
      studentPicture: 'https://cdn.intra.42.fr/users/small_lboit.jpg',
      nbNoc: 1042,
      nbMission: 3,
      nbHour: 7,
      bestCat: "l'Éducation",
      nextDate: '7 Juin 2019 de 18h à 22h',
      suggestAsso: 'Passerel17',
      studentNextMission: "Je n'ai pas de prochaine mission...",
      events: this.$allEvents,
      config: {
        defaultView: 'agendaWeek',
        locale: 'fr',
        firstDay: 1,
        slotDuration: "01:00",
        allDaySlot: false
      }
    }
  }
}
</script>

<style>
#agendaEvent {
  padding: 21px;
}
#infoStudent {
  /*justify-content: center;*/
  /*flex-flow: column;*/
  align-items: center;
  text-align: start;
}
#pictureStudent {
  background: center no-repeat;
  border-radius: 50%;
  height: 128px;
  width: 128px;
}
#nameStudent {
  width: 100%;
  margin-top: 21px;
}
#profileNoc {
  margin: 20px 0;
}
#studentStat p {
  margin-top: 10px;
}
#studentSuggest p {
  margin-top: 10px;
}
#tileStudentProfile {
  flex-flow: column;
  justify-content: center;
}
#globalStudent {
  max-height: 150px;
}
#descriptionNextMission {
  margin-top: 50px;
}
.tile {
  padding: 21px;
}
</style>
