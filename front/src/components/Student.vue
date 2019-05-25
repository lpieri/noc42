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
          <div class="container">
            <h4 class="title is-4">Noc: {{ nbNoc }}</h4>
            <router-link to="/">Utilisé mes NOC</router-link>
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
      <h1 class="title">Ma Prochaine Mission:</h1>
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
      studentNextMission: "Je n'ai pas de prochaine mission...",
      events: [],
      config: {
        defaultView: 'basicWeek',
        locale: 'fr',
        firstDay: 1
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
