<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppCard from './AppCard.vue';

export default {
    name: 'AppRowCards',
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppCard
    }
}
</script>

<!-- HTML -->
<template>
    <div>
        <h1>row Cards</h1>
        <ul>
            <li>
                <AppCard />
            </li>
            <li>
                <AppCard />
            </li>
            <li>
                <AppCard />
            </li>
        </ul>
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
