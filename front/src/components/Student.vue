<template>
  <section class="section">

    <div class="tile is-ancestor">

      <div id="tileStudentProfile" class="tile is-4">
        <div class="container">
          <div id="infoStudent" class="columns">
            <figure class="image is-128x128 column">
              <div id="pictureStudent" :style="{ 'background-image': 'url(' + studentPicture + ')' }"></div>
              <!--<img :src="studentPicture" alt="student-picture" class="is-rounded">-->
            </figure>
            <h2 id="nameStudent" class="title is-4 column">{{ studentName }}</h2>
          </div>
        </div>
      </div>

      <div id="agendaEvent" class="tile is-8">
        <div class="container">
          <full-calendar :config="config" :events="events"/>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
// import moment from 'moment'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  name: 'Student',
  data() {
    return {
      studentName: 'Laura Boit',
      studentPicture: 'https://cdn.intra.42.fr/users/small_lboit.jpg',
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
  /*background: aquamarine;*/
  padding: 21px;
}
#infoStudent {
  justify-content: center;
  flex-flow: column;
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
  padding: 21px;
  flex-flow: column;
  justify-content: center;
  background: pink;
}
</style>
