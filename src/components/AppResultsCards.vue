<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppCard from './AppCard.vue';

// IMPORTIAMO LO STORE
import { store } from '../store';



import AppResultsRow from './AppResultsRow.vue';

export default {
    name: 'AppResultsCards',
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppCard,
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
    <div v-for="category in store.categories">
        <AppResultsRow :titleList="category.categoryName" :reference="category.reference" :list="category.list" />
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>

