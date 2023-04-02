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
  mounted() {
    this.generCall()
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
          setTimeout(() => {
            this.scroll();
          }, 50)

          this.store.categories[categoriesIndex].loading = true
        })
        .catch((error) => {
          console.log(error)
        })
    },

    generalCall() {
      this.store.moreInfoMenu = false
      const promisesList = this.store.categories.map(element => {
        return this.axiosCall(element.api)
      });
      Promise.all(promisesList).then(() => {
        setTimeout(() => {
          this.store.categories.forEach(element => {
            element.loading = false
          });
        }, 1300);
      });
    },


    generCall() {
      this.store.moreInfoMenu = false
      // POPOLO LE LISTE DEI GENERI 
      this.store.categories.forEach(element => {
        axios.get(element.generApi, {
          params: {
            api_key: this.store.apiKey,
            language: this.store.language
          }
        })
          .then((response) => {
            element.gener = response.data.genres
          })
      })

    },


    // SCROLLA LA PAGINA DELLA SUA ALTEZZA 
    scroll() {

      if (window.scrollY < window.innerHeight - 300) {
        window.scrollBy({ top: window.innerHeight - window.scrollY - 50, behavior: "smooth" })
        // this.$refs.main.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<!-- HTML -->
<template>
  <AppHeader @search="generalCall()" @changeLang="generCall()" />
  <AppMain ref="main" />
</template>

<!-- CSS  -->
<style lang="scss"></style>
