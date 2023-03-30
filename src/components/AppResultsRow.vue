<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppCard from './AppCard.vue';

// IMPORTIAMO LO STORE
import { store } from '../store';

export default {
    name: 'AppResultsCards',
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    },
    // DICHIARO QUALI SARANNO I DATI DI CUI HO BISOGNO 
    props: {
        titleList: String,
        reference: Object,
        list: Array
    },
    computed: {
        // MOSTRO IN ORDINE DI POPOLARITA'
        orderList() {
            return this.list.sort((a, b) => {
                if (a.popularity > b.popularity) return -1;
                if (a.popularity < b.popularity) return 1;
                return 0;
            });
        },
    }
}
</script>

<!-- HTML -->
<template>
    <div>
        <h1>{{ titleList }}</h1>
        <ul>
            <!-- CREO TANTI LIST ITEM QUANTI SONO GLI ELEMENTI NELL'ARRAY DEI FILM  -->
            <li v-for="element in orderList">
                <!-- PASSO LE PROPS AD OGNI CARD  -->
                <AppCard :title="element[reference.title]" :originalTitle="element[reference.originalTitle]"
                    :lenguage="element[reference.language]" :valutation="element[reference.vote]"
                    :imagePath="element[reference.posterUrl]" />
            </li>
        </ul>
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
