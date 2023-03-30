<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO LO STORE 
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<!-- HTML -->
<template>
    <header>
        <label for="search">Cerca</label>
        <input type="text" id="search" v-model="this.store.searchKey">
        <button @click="$emit('search')">Cerca</button>
    </header>
</template>

<!-- CSS  -->
<style lang="scss"></style>
