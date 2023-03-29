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
            <!-- MOSTRO IL LOGO SE E' PRESENTE NEL MIO ELENCO  -->
            <!-- CHE SERVE A CONVERTIRE I CODICI  -->
            <li v-if="flagVerify">
                <span :class="'fi fi-' + store.langToCountry[lenguage]"></span>
            </li>
            <!-- ALTRIMENTI MOSTRO SCRITTO IL CODICE LINGUA -->
            <li v-else>{{ lenguage }}</li>
            <li>{{ valutation }}</li>
        </ul>
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
