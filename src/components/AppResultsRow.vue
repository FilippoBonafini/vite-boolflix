<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    name: 'AppResultsCards',
    data() {
        return {
            store,
            openMenu: false
        }
    },
    // DICHIARIAMO I COMPONENTI 
    components: {
        AppCard
    },
    // DICHIARO QUALI SARANNO I DATI DI CUI HO BISOGNO 
    props: {
        titleList: String,
        references: Object,
        list: Array,
        loading: Boolean,
        category: Object
    },
    methods: {
        triggerMenu() {
            this.openMenu = !this.openMenu
        },
        findGener(element) {
            if (element.genre_ids.length > 0) {
                const id = (this.category.gener.findIndex(gen => gen.id === element.genre_ids[0]))
                return (this.category.gener[id].name)
            }

        },
        moreInfo(element) {
            this.store.moreInfoID.title = element[this.references.title]
            this.store.moreInfoID.originalTitle = element[this.references.originalTitle]
            this.store.moreInfoID.description = element[this.references.description]
            this.store.moreInfoID.lang = element[this.references.language]
            this.store.moreInfoID.id = element.id
            this.store.moreInfoID.img = element[this.references.posterUrl]
            this.store.moreInfoID.gen = this.findGener(element)
            this.store.moreInfoID.vote = element[this.references.vote]
        }
    },
    computed: {
        // MOSTRO IN ORDINE DI POPOLARITA'
        orderList() {
            this.openMenu = false;
            return this.list.sort((a, b) => {
                if (a.popularity > b.popularity) return -1;
                if (a.popularity < b.popularity) return 1;
                return 0;
            });
        }
    }
}
</script>

<!-- HTML -->
<template>
    <section v-show="loading" class="loadingSection">
        <div class="title loadCard">
            <div class="shimmerBG title-line"></div>
        </div>

        <ul class="list">
            <li class="loadCard" v-for="element in 4">
                <div class="shimmerBG media"></div>
            </li>
        </ul>
    </section>

    <section v-show="list.length != 0 && loading === false" :class="{ 'open': openMenu }">
        <h2 class="title" @click="triggerMenu">{{ titleList }} <font-awesome-icon icon="fa-solid fa-angle-down" />
        </h2>
        <ul class="list">
            <!-- CREO TANTI LIST ITEM QUANTI SONO GLI ELEMENTI NELL'ARRAY DEI FILM  -->
            <li v-for="element in orderList">
                <!-- PASSO LE PROPS AD OGNI CARD  -->
                <AppCard :title="element[references.title]" :lenguage="element[references.language]"
                    :valutation="element[references.vote]" :imagePath="element[references.posterUrl]"
                    :coverPath="element[references.coverUrl]" :description="element[references.description]"
                    :gener="findGener(element)" @moreInfo="moreInfo(element)" />
            </li>
        </ul>
    </section>
</template>

<!-- CSS  -->
<style lang="scss">
@use '../assets/scss/_partial/_variables.scss' as *;

section {
    box-shadow: 0px 0px 15px 1px #000000;
    background-color: $my-grey;
    max-width: 90vw;
    margin: 0 auto;
    margin-bottom: 50px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;


    &::after {
        content: '';
        position: absolute;
        width: 300px;
        height: 100%;
        background: rgb(51, 63, 68);
        background: linear-gradient(90deg, rgba(51, 63, 68, 0) 10%, rgba(51, 63, 68, 1) 68%);
        right: 0;
        top: 0;
    }



    .title {
        color: $my-darken-azure;
        font-size: 80px;
        padding: 45px;
        display: flex;
        align-items: flex-end;
        gap: 30px;
        display: inline-block;

        .fa-angle-down {
            transform: translateY(10px);
            transition: transform 0.2s;
        }
    }

    h2:hover {
        cursor: pointer;
        color: white;
    }

    ul.list {
        display: flex;
        gap: 5px;
        margin: 0 10px;

        li {
            margin: auto;
            padding-bottom: 20px;
            flex-basis: 25%;
            min-width: 400px;
            max-width: 400px;
        }
    }

}

section.open {
    overflow-x: auto;

    ul.list {
        flex-wrap: wrap;
    }

    &::after {
        width: 0;
        height: 0;
    }

    h2 {
        .fa-angle-down {
            transition-duration: 0.3s;
            transform: rotate(180deg);
        }
    }
}

.loadCard {
    padding-top: 20px;
    position: relative;
    background-color: $my-grey;
    border-radius: 6px;
    overflow: hidden;
    width: 400px;
    cursor: wait;

    .shimmerBG {
        border-radius: 10px;
        animation-duration: 2.2s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: shimmer;
        animation-timing-function: linear;
        background: linear-gradient(to right, #272727 8%, #2f2f2f 18%, #1d1d1d 33%);
        background-size: 1200px 100%;
    }


    @-webkit-keyframes shimmer {
        0% {
            background-position: -100% 0;
        }

        100% {
            background-position: 100% 0;
        }
    }

    @keyframes shimmer {
        0% {
            background-position: -1200px 0;
        }

        100% {
            background-position: 1200px 0;
        }
    }

    .media {
        height: 600px;
    }

    .title-line {
        height: 92px;
        width: 100%;
        transform: translateY(20px);
        border-radius: 20px;

    }

}
</style>
