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
    axiosCall(api) {
      axios.get(api, {
        params: {
          api_key: this.store.apiKey,
          query: this.store.searchKey,
          language: this.store.language
        }
      })
        .then((response) => {
          if (response.config.url === 'https://api.themoviedb.org/3/search/movie') {
            this.store.categories[0].list = response.data.results
            console.log('film:')
            console.log(response)
          } else {
            this.store.categories[1].list = response.data.results
            console.log('serie:')
            console.log(response)
          }
        })

    },
    generalCall() {
      this.store.categories.forEach(element => {
        this.axiosCall(element.api)
      });
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
