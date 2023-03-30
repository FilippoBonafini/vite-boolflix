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
    <AppResultsRow class="Resultrow" v-for="category in store.categories" :titleList="category.categoryName"
        :reference="category.reference" :list="category.list" />
</template>

<!-- CSS  -->
<style lang="scss">
.Resultrow {
    padding-bottom: 30px;
}
</style>

