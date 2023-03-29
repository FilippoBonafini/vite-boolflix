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
    axiosCall(api, apikey, language, query) {
      axios.get(api, {
        params: {
          api_key: apikey,
          query: query,
          language: language
        }
      })
        .then((response) => {
          console.log(response)
        })
    }
  },
  created() {
    this.axiosCall(this.store.apiFilm, this.store.apiKey, this.store.language, this.store.searchKey)
  }
}
</script>

<!-- HTML -->
<template>
  <div>
    <AppHeader />
  </div>
  <div>
    <AppMain />
  </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
