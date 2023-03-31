<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppResultsCards from './AppResultsCards.vue';

export default {
    name: 'AppMain',
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppResultsCards,

    }
}
</script>

<!-- HTML -->
<template>
    <main>
        <AppResultsCards />
    </main>
</template>

<!-- CSS  -->
<style lang="scss">
@use '../assets/scss/_partial/_variables.scss' as *;

main {
    background-color: $my-dark;
}
</style>

