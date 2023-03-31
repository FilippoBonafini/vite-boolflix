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
          // SCROLLO LA PAGINA 
          this.scroll()
        })
        .catch((error) => {
          console.log(error)
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
      if (window.scrollY === 0) {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        // this.$refs.main.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  updated() {
    this.$nextTick(() => {
      console.log('ciao')
      this.scroll()
    });
  }
}
</script>

<!-- HTML -->
<template>
  <div>
    <AppHeader @search="generalCall()" />
  </div>
  <div ref="main">
    <AppMain />
  </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
