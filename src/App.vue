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
          // SE LO SCROL DELLA PAGINA E' AL TOP 
          if (window.scrollY === 0) {
            // SCROLLA
            this.scroll()
          }
        })
    },

    // FAI CHIAMATE PER QUANTE CE NE SONO NELL'ARRAY
    generalCall() {
      this.store.categories.forEach(element => {
        this.axiosCall(element.api)
      });

    },

    // SCROLLA LA PAGINA DELLA SUA ALTEZZA 
    scroll() {
      console.log(window.scrollY)
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
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
