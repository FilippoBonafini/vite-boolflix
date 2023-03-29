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
    axiosCall(api, language, query, array) {
      axios.get(api, {
        params: {
          api_key: this.store.apiKey,
          query: query,
          language: language
        }
      })
        .then((response) => {
          if (response.config.url === this.store.apiFilm) {
            this.store.filmList = response.data.results
            console.log(this.store.filmList)
          } else {
            this.store.tvSeriesList = response.data.results
            console.log(this.store.tvSeriesList)
          }
        })
    },
    generalCall() {
      this.axiosCall(this.store.apiFilm, this.store.language, this.store.searchKey)
      this.axiosCall(this.store.apiTvSeries, this.store.language, this.store.searchKey)
    }
  }
}
</script>

<!-- HTML -->
<template>
  <div>
    <AppHeader @search="generalCall()" />
  </div>
  <div>
    <AppMain />
  </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
