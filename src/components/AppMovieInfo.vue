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
    // DICHIARO QUALI SARANNO I DATI DI CUI HO BISOGNO 
    props: {

    },
    methods: {
        close() {
            this.store.moreInfoMenu = false
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
                    <h2>titlo</h2>
                    <div class="origTitle">originalTItle</div>
                    <div class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis cum at
                        rerum vero odit
                        exercitationem amet id reiciendis nulla sequi placeat, quam aliquam dolore voluptate illo! Est
                        nostrum
                        distinctio possimus?
                    </div>
                    <div class="lang">lang</div>
                    <div>Se serie tv, episodi e stagioni</div>
                    <div>or film lentgh</div>

                </div>
                <div class="right">
                    <div>img</div>
                    <div>stars</div>
                    <div>horror</div>
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
            <div class="close" @click="close()">
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
        padding: 30px;
        border-radius: 30px;
        position: relative;
        overflow-y: auto;

        .main {
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
            }

            .right {
                padding-left: 200px;
            }
        }

        .bottom {
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