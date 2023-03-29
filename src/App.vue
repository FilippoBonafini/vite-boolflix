<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

// IMPORTIAMO LO STORE DI DATI 
import { store } from './store';

// IMPORTIAMO AXIOS 
import axios from 'axios'

export default {
  name: 'App',
  // DICHIARIAMO I COMPONENTI 
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }

  },
  methods: {
    axiosCall(api, language, query) {
      axios.get(api, {
        params: {
          api_key: this.store.apiKey,
          query: query,
          language: language
        }
      })
        .then((response) => {
          console.log(response)
          // -----------
          // NON CAPISCO COME FARE PRENDERE IL PARAMETRO CHE DEVE
          // ESSERE DEFINITO IN axiosCall 
          // ---------
          this.store.filmList = response.data.results
        })
    }
  }
}
</script>

<!-- HTML -->
<template>
  <div>
    <AppHeader @search="axiosCall(this.store.apiFilm, this.store.language, this.store.searchKey)" />
  </div>
  <div>
    <AppMain />
  </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
