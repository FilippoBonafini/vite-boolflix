<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO I COMPONENTI 
import AppCard from './AppCard.vue';


export default {
    name: 'AppResultsCards',
    data() {
        return {
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
        reference: Object,
        list: Array
    },
    methods: {
        triggerMenu() {
            console.log(this.openMenu)
            this.openMenu = !this.openMenu
        }
    },
    computed: {
        // MOSTRO IN ORDINE DI POPOLARITA'
        orderList() {
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
    <section v-if="list.length != 0" :class="{ 'open': openMenu }">
        <h2 @click="triggerMenu">{{ titleList }} <font-awesome-icon icon="fa-solid fa-angle-down" />
        </h2>
        <ul class="list">
            <!-- CREO TANTI LIST ITEM QUANTI SONO GLI ELEMENTI NELL'ARRAY DEI FILM  -->
            <li v-for="element in orderList">
                <!-- PASSO LE PROPS AD OGNI CARD  -->
                <AppCard :title="element[reference.title]" :lenguage="element[reference.language]"
                    :valutation="element[reference.vote]" :imagePath="element[reference.posterUrl]"
                    :coverPath="element[reference.coverUrl]" :description="element[reference.description]" />
            </li>
        </ul>
    </section>
    <section class="loadingSection open">
        <h2 class="loadCard">
            <div class="shimmerBG title-line"></div>
        </h2>

        <ul class="list">
            <li class="loadCard" v-for="element in 4">
                <div class="shimmerBG media"></div>
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
    overflow-x: hidden;

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


    h2 {
        color: $my-darken-azure;
        font-size: 80px;
        padding: 45px;
        display: flex;
        align-items: flex-end;
        gap: 30px;

        .fa-angle-down {
            transform: translateY(10px);
            transition: transform 0.2s;
        }

        &:hover {
            cursor: pointer;
            color: white;
        }
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
        height: 44px;
        width: 100%;
        transform: translateY(20px);
        border-radius: 20px;
    }
}
</style>
