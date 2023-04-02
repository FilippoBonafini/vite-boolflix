<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppResultsCards from './AppResultsCards.vue';
import AppMovieInfo from './AppMovieInfo.vue';
import { store } from '../store';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppResultsCards,
        AppMovieInfo
    }
}
</script>

<!-- HTML -->
<template>
    <main>
        <AppResultsCards />
        <AppMovieInfo v-if="store.moreInfoMenu" />
    </main>
</template>

<!-- CSS  -->
<style lang="scss">
@use '../assets/scss/_partial/_variables.scss' as *;

main {
    background-color: $my-dark;
}
</style>

