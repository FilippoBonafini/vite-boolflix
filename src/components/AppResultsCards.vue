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
    }
}
</script>

<!-- HTML -->
<template>
    <div>
        <h1>results Card:</h1>
        <ul>
            <li v-for="film in store.filmList">
                <AppCard :title="film.title" :originalTitle="film.original_title" :lenguage="film.original_language"
                    :valutation="film.vote_average" />
            </li>
        </ul>
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
