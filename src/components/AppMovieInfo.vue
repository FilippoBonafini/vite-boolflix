<!-- JAVA SCRIPT  -->
<script>

import { store } from '../store';

export default {
    name: "moreInfo",
    data() {
        return {
            store,
            opened: true
        };
    },
    computed: {
        // CROCETTA DI CHIUSUSRA 
        close() {
            this.store.moreInfoMenu = false;
        }
    },
    methods: {
        // VERIFICO QUANTE STELLE INSERIRE 
        stars(valutation) {
            return (Number((valutation / 2).toFixed()));
        }
    }
}
</script>

<!-- HTML -->
<template>
    <div class="container" :class="{ 'active': opened }">
        <div class="info">
            <div class="main">
                <div class="left">
                    <h2>{{ this.store.moreInfoID.title }}</h2>
                    <div class="origTitle">{{ this.store.moreInfoID.originalTitle }}</div>
                    <div class="description">{{ this.store.moreInfoID.description }}</div>
                    <div class="lang"><img :src="'https://unpkg.com/language-icons/icons/' + store.moreInfoID.lang + '.svg'"
                            alt=""></div>


                </div>
                <div class="right">
                    <div><img :src="store.linkImgSmall + store.moreInfoID.img" alt=""></div>
                    <div class="vote">
                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in stars(store.moreInfoID.vote)" />
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in (5 - stars(store.moreInfoID.vote))" />
                    </div>
                    <div>{{ store.moreInfoID.gen }}</div>
                </div>
            </div>

            <div class="bottom">
                <ul>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                    <li>actor</li>
                </ul>
            </div>
            <div class="close" @click="close">
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </div>
        </div>

    </div>
</template>

<!-- CSS  -->
<style lang="scss">
@use '../assets/scss/_partial/_variables.scss' as *;


.container.active {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.558);
    display: flex;
    justify-content: center;
    align-items: center;

    .info {
        color: white;
        font-size: 23px;
        background-color: #37AA9C;
        margin-top: 60px;
        width: 70vw;
        height: 70vh;
        display: flex;
        flex-direction: column;
        border-radius: 30px;
        position: relative;
        overflow-y: auto;

        .main {
            padding: 35px;
            display: flex;
            flex-grow: 1;

            .left {
                h2 {
                    font-size: 60px;
                    padding-bottom: 5px;
                }

                .origTitle {
                    font-size: 20px;
                    color: rgb(223, 223, 223);
                    padding-bottom: 12px;
                }

                .description,
                .lang {
                    padding-bottom: 27px;
                }

                img {
                    width: 80px;
                    border-radius: 50%;
                }
            }

            .right {
                padding-left: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;

                img {
                    width: 280px;
                    height: 420px;
                    margin: 10px;
                    margin-top: 50px;
                    border-radius: 30px;
                }
            }
        }

        .bottom {
            background-color: rgb(50, 50, 50);

            ul {
                display: flex;
                gap: 20px;
                overflow-x: auto;
                padding: 30px 10px;
            }
        }

        .close {
            position: absolute;
            top: 12px;
            right: 20px;
            cursor: pointer;
            font-size: 35px;
        }
    }
}
</style>