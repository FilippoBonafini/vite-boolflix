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
    <div class="card">
        <!-- STRUTTURA DELLA CARD  -->
        <div class="cover">
            <img class="coverImg alternative" v-if="imagePath === null" src="public/img/cover_not_avable.png" :alt="title">
            <img class="coverImg" v-else :src="store.linkImgSmall + imagePath" :alt="title">
        </div>
        <!-- <div class="info">
                <div>{{ title }}</div>
                <div>{{ originalTitle }}</div>
                <div class="lang">
                    <img :src="'https://unpkg.com/language-icons/icons/' + lenguage + '.svg'" :alt="lenguage">
                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in stars(valutation)" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - stars(valutation))" />
                </div>
            </div> -->

    </div>
</template>

<!-- CSS  -->
<style lang="scss">
.card {
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 400px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .cover .coverImg {
        height: 600px;
    }

    .info {
        flex-grow: 1;
        font-size: 35px;
        display: flex;
        justify-content: center;

        // .lang {
        //     height: 40px;
        //     width: 40px;
        // }
    }

}
</style>
