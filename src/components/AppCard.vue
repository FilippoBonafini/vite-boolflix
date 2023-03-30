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
        valutation: Number,
        imagePath: String
    },
    methods: {
        // VERIFICO QUANTE STELLE INSERIRE 
        stars(valutation) {
            return (Number((valutation / 2).toFixed()))
        }
    }
}
</script>

<!-- HTML -->
<template>
    <div>
        <!-- STRUTTURA DELLA CARD  -->
        <ul>
            <li>
                <img v-if="imagePath === null" src="public/img/cover_not_avable.png" :alt="title">
                <img v-else :src="store.linkImgSmall + imagePath" :alt="title">
            </li>
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li>
                <img :src="'https://unpkg.com/language-icons/icons/' + lenguage + '.svg'" :alt="lenguage">
            </li>
            <li>
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in stars(valutation)" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - stars(valutation))" />
            </li>
        </ul>
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
