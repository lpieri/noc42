<template>
  <div class="section">
    <div class="container">
      <div id="bandAsso" class="columns card">
        <figure id="picAssoFig" class="column image">
          <img id="pictureAsso" :src="assoPicturePath" :alt="assoName"></img>
        </figure>
        <h1 id="assoName" class="column title is-1">{{ assoName }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssoProfile',
  data () {
    return {
      assoName: 'Passerelles 17',
      assoPicturePath: './assets/passerelles17.png'
    }
  }
}
</script>

<style>
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
  background: no-repeat center;
  background-size: contain;
}
#assoName {
  min-width: max-content;
}
</style>
