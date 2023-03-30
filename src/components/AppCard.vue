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
        imagePath: String,
        coverPath: String,
        description: String
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
            <img class="coverImg" v-if="imagePath === null" src="public/img/cover_not_avable.png" :alt="title">
            <img class="coverImg" v-else :src="store.linkImgSmall + imagePath" :alt="title">
        </div>
        <div class="info">
            <div>
                <img class="coverImg" v-if="coverPath === null" src="public/img/info_not_avable.png" :alt="title">
                <img class="coverImg" v-else :src="store.linkImgSmall + coverPath" :alt="title">
            </div>
            <div class="title">{{ title }}</div>
            <p class="text">{{ description }}</p>

            <div class="footer">
                <div class="lang">
                    <img :src="'https://unpkg.com/language-icons/icons/' + lenguage + '.svg'" :alt="lenguage">
                </div>
                <div class="vote">
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in stars(valutation)" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - stars(valutation))" />
                </div>
            </div>

        </div>

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
    position: relative;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .cover .coverImg {
        height: 600px;
    }

    .info {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgb(0, 0, 0);
        color: white;
        border-radius: 30px;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        transition-delay: 0.36s;
        display: flex;
        flex-direction: column;

        .coverImg {
            border-radius: 30px 30px 0 0;
        }

        .title {
            position: relative;
            font-size: 30px;
            padding: 0 15px;

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 50px;
                background: rgb(0, 0, 0);
                background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%);
                right: 0;
                top: -50px;
            }

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 30px;
                background: rgb(0, 0, 0);
                background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%);

                right: 0;
                bottom: -30px;
            }
        }

        .text {
            flex-grow: 1;
            overflow-y: auto;
            font-size: 18px;
            padding: 40px 15px;
        }

        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 50px;
                background: rgb(0, 0, 0);
                background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 0) 100%);
                right: 0;
                top: -50px;
            }

        }

        .lang {
            height: 40px;
            width: 40px;

            img {
                border-radius: 50%;
            }
        }
    }

    &:hover .info {
        z-index: 3;
        opacity: 1;
        transform: scale(1.1);
        scale: 1.05;
        box-shadow: 0px 0px 12px 0px #000000;
    }

}
</style>
