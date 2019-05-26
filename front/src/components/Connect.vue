<template>
  <section id="connectSection" class="section">
    <div class="container">
      <h1 id="titleConnect" class="title">Qui suis-je ?</h1>
      <div id="buttonConnect" class="columns">
        <div class="column">
          <a class="button is-large is-outlined">
            <router-link to="/student">Un Student</router-link>
          </a>
        </div>
        <div class="column">
          <a class="button is-large is-outlined">
            <router-link to="/asso">Une Asso</router-link>
          </a>
        </div>
        <div class="column">
          <a class="button is-large is-outlined">
            <router-link to="/habitant">Un Habitant du Quartier</router-link>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Connect'
}
</script>

<style>
#buttonConnect {
  flex-direction: column;
}
#titleConnect {
  margin-bottom: 50px;
}
</style>
