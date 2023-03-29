<!-- JAVA SCRIPT  -->
<script>

import { store } from '../store';

export default {
    name: "AppCard",
    data() {
        return {
            store
        };
    },
    // DICHIARO QUALI SARANNO I DATI DI CUI HO BISOGNO 
    props: {
        title: String,
        originalTitle: String,
        lenguage: String,
        valutation: Number
    },
    methods: {
        // VERIFICO SE INSERIRE LA BANDIERA O MENO 
        flagVerify() {
            if (this.lenguage in this.store.langToCountry) {
                return (true)
            }
        }
    }
}
</script>

<!-- HTML -->
<template>
    <div>
        <!-- STRUTTURA DELLA CARD  -->
        <ul>
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li v-if="flagVerify">
                <span :class="'fi fi-' + store.langToCountry[lenguage]"></span>
            </li>
            <li v-else>{{ lenguage }}</li>
            <li>{{ valutation }}</li>
        </ul>
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
