<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppResultsCards from './AppResultsCards.vue';
import AppResultsLoading from './AppResultsLoading.vue'
import appNoResults from './AppNoResults.vue'

export default {
    name: 'AppMain',
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppResultsCards,
        AppResultsLoading,
        appNoResults
    },
    props: {
        loadStatus: Boolean,
        resultsStatus: Boolean
    }
}
</script>

<!-- HTML -->
<template>
    <main>
        <!-- SCHERMATA DI CARICAMENTO -->
        <!-- <AppResultsLoading v-show="loadStatus" /> -->
        <!-- SCHERMATA DI NESSUN RISULTATO  -->
        <!-- <AppNoResults v-show="!resultsStatus" /> -->
        <!-- SCHERMATA CON RISULTATI  -->
        <AppResultsCards v-show="!loadStatus" />
    </main>
</template>

<!-- CSS  -->
<style lang="scss"></style>

