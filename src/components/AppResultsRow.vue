<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppCard from './AppCard.vue';


export default {
    name: 'AppResultsCards',
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppCard
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
    <section v-if="list.length != 0">
        <h2>{{ titleList }}</h2>
        <ul class="list">
            <!-- CREO TANTI LIST ITEM QUANTI SONO GLI ELEMENTI NELL'ARRAY DEI FILM  -->
            <li v-for="element in orderList">
                <!-- PASSO LE PROPS AD OGNI CARD  -->
                <AppCard :title="element[reference.title]" :originalTitle="element[reference.originalTitle]"
                    :lenguage="element[reference.language]" :valutation="element[reference.vote]"
                    :imagePath="element[reference.posterUrl]" />
            </li>
        </ul>
    </section>
</template>

<!-- CSS  -->
<style lang="scss">
section {
    max-width: 90vw;
    margin: auto;


    h2 {
        font-size: 80px;
        padding: 20px;
    }

    ul.list {
        display: flex;
        flex-wrap: wrap;

        li {
            margin: 20px auto;
        }
    }
}
</style>
