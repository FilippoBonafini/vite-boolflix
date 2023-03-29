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
    methods: {
        // DIVIDO PER 2 UN NUMERO E LO ARROTONDO PER ECCESSO A INTERO 
        valutation(number) {
            return Number((number / 2).toFixed())
        }
    },
    computed: {
        // MOSTRO I FILM IN ORDINE DI POPOLARITA'
        orderFilmList() {
            return this.store.filmList.sort((a, b) => {
                if (a.popularity > b.popularity) return -1;
                if (a.popularity < b.popularity) return 1;
                return 0;
            });
        },
        // MOSTRO LE SERIE IN ORDINE DI POPOLARITA'
        orderSeriesList() {
            return this.store.tvSeriesList.sort((a, b) => {
                if (a.popularity > b.popularity) return -1;
                if (a.popularity > b.popularity) return 1;
                return 0;
            });
        }
    }
}
</script>

<!-- HTML -->
<template>
    <div>
        <h1>results films:</h1>
        <ul>
            <!-- CREO TANTI LIST ITEM QUANTI SONO GLI ELEMENTI NELL'ARRAY DEI FILM  -->
            <li v-for="film in orderFilmList">
                <!-- PASSO LE PROPS AD OGNI CARD  -->
                <AppCard :title="film.title" :originalTitle="film.original_title" :lenguage="film.original_language"
                    :valutation="valutation(film.vote_average)" :imagePath="film.backdrop_path" />
            </li>
        </ul>
        <h1>results series:</h1>
        <ul>
            <!-- CREO TANTI LIST ITEM QUANTI SONO GLI ELEMENTI NELL'ARRAY DELLE SERIE  -->
            <li v-for="series in orderSeriesList">
                <!-- PASSO LE PROPS AD OGNI CARD  -->
                <AppCard :title="series.name" :originalTitle="series.original_name" :lenguage="series.original_language"
                    :valutation="valutation(series.vote_average)" :imagePath="series.backdrop_path" />
            </li>
        </ul>
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
