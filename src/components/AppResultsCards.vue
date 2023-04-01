<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO LO STORE
import { store } from '../store';
// IMPORTO I COMPONENTI
import AppResultsRow from './AppResultsRow.vue';

export default {
    name: 'AppResultsCards',
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppResultsRow
    },
    data() {
        return {
            store
        }
    }
}
</script>

<!-- HTML -->
<template>
    <div class="resultsCard">
        <AppResultsRow v-for="category in store.categories" :titleList="category.categoryName"
            :references="category.reference" :list="category.list" :loading="category.loading"
            :initialStatus="store.initialStatus" />
    </div>
</template>

<!-- CSS  -->
<style lang="scss">
@use '../assets/scss/_partial/_variables.scss' as *;

.resultsCard {
    margin-top: 100px;
    transform: translateY(100vh);
    background-color: $my-dark;
}
</style>

