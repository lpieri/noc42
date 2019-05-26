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

      <div id="assoDes" class="tile is-3 card columns">
        <h4 class="title is-5 column">Description :</h4>
        <p class="is-medium column">{{ assoDescription }}</p>
      </div>

      <div class="tile is-1"></div>

      <div class="tile is-8 card">
        <div class="container">
          <full-calendar @dateClick="modal" :config="config" :events="events"/>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'AssoProfile',
  data () {
    return {
      assoName: 'Ressourcerie des Batignolles',
      assoPicturePath: './src/assets/passerelles17.png',
      assoDescription: 'La Ressourcerie des Batignolles est une association actrice du réemploi.\n' +
          'Tous les objets que nous recevons, soit par la collecte au domicile des particuliers,' +
        'soit par apport volontaire sur notre site, suivent une série d’étapes avant d’arriver dans la boutique solidaire.' +
        'C’est ce que nous appelons un peu « pompeusement » la valorisation !\n' +
        '\n' +
        'On trie par catégorie : Textile-Linge de maison-Chaussures-Maroquinerie/ Objets déco-Vaisselle-Bibelots/Jouets/Livres-DVD-CD/Electroménager-Informatique-Hifi/Sport/Meubles\n' +
        'On pèse : nous avons besoin d’une traçabilité annuelle pour nous améliorer.\n' +
        'On nettoie et/ou répare ou/et on met de côté pour nos ateliers upcycling (détourner un objet de sa fonction initiale pour lui donner une nouvelle utilité).\n' +
        'On les sélectionne pour notre magasin solidaire ou pour notre zone de gratuité\n' +
        'On les stocke pour d’autres associations ou pour nos partenaires en attendant leur passage.',
      events: [
        {
          title: 'Soutien scolaire en mathematiques',
          // url: '/',
          start: '2019-06-03T20:00:00',
          end: '2019-06-03T21:00:00'
        }
      ],
      config: {
        defaultView: 'basicWeek',
        locale: 'fr',
        firstDay: 1
      }
    }
  },
  methods: {
    modal: function(arg) {
      console.log(arg.date)
    }
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
  padding: 21px;
}
#assoDes {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
