<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppRowCards from './AppRowCards.vue';
import AppResultsCards from './AppResultsCards.vue';

export default {
    name: 'AppMain',
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppRowCards,
        AppResultsCards
    }
}
</script>

<!-- HTML -->
<template>
    <div>
        <AppResultsCards />
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
