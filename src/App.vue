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
          const categoriesIndex = this.store.categories.findIndex((element) => element.api === response.config.url);
          this.store.categories[categoriesIndex].list = response.data.results
        })
        .catch((error) => {
          console.log(error)
        })
    },

    generalCall() {
      const promisesList = this.store.categories.map(element => {
        return this.axiosCall(element.api)
      });
      Promise.all(promisesList).then(() => {
        console.log('dom aggiornato')
        this.scroll()
      });
    },

    // SCROLLA LA PAGINA DELLA SUA ALTEZZA 
    scroll() {

      if (window.scrollY === 0) {
        console.log('scrol')
        window.scrollBy({ top: window.innerHeight - 50, behavior: "smooth" })
        // this.$refs.main.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<!-- HTML -->
<template>
  <AppHeader @search="generalCall()" />
  <AppMain ref="main" />
</template>

<!-- CSS  -->
<style lang="scss"></style>
