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
    },
    methods: {
        // MOSTRO IN ORDINE DI POPOLARITA'
        orderList(list) {
            return list.sort((a, b) => {
                if (a.popularity > b.popularity) return -1;
                if (a.popularity < b.popularity) return 1;
                return 0;
            });
        },
    },
    computed: {
        // MOSTRO I FILM IN ORDINE DI POPOLARITA'
        orderFilmList() {
            return this.orderList(this.store.filmList)
        },
        // MOSTRO LE SERIE IN ORDINE DI POPOLARITA'
        orderSeriesList() {
            return this.orderList(this.store.tvSeriesList)
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

