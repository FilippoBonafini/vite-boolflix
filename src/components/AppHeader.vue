<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO LO STORE 
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            isSmall: false,
            langMenu: false,
            init: true
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.isSmall = window.scrollY > window.innerHeight - 300
        },
        start() {
            this.$emit('search')
            this.init = false
        },
        langStart() {
            if (this.init === false) {
                this.start()
            }
        },
        returnTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        selectLang(lang) {
            this.store.language = lang
            this.langMenu = false
        },
        selectedLang(lang) {
            if (this.store.language === lang) {
                return ('selected')
            }
        },
        openMenu() {
            this.langMenu = !this.langMenu
        },
        menuClass() {
            if (this.langMenu) {
                return ('opened')
            }
        }

    }
}
</script>

<!-- HTML -->
<template>
    <header class="searchbar" :class="{ 'searchbar--small': isSmall }">
        <div class="title" @click="returnTop()">
            <h1>
                <span class="b">B</span>
                <span class="oolflix">OOLFLI</span>
                <span class="b">X</span>
            </h1>
        </div>
        <form action="#">
            <label for="search">Cerca</label>
            <input type="text" id="search" v-model="this.store.searchKey" placeholder="Search a movie">
            <button @click.prevent="start">
                <font-awesome-icon icon="fa-solid fa-search" />
            </button>
        </form>

        <div class="lang" :class="menuClass()">
            <div class="selectLanguage" @click="openMenu()">
                <img class="iconLang" :src="'https://unpkg.com/language-icons/icons/' + store.language + '.svg'">
                <font-awesome-icon icon="fa-solid fa-earth-europe" />
                <font-awesome-icon icon="fa-solid fa-angle-down" />
            </div>
            <div class="options">
                <div v-for="lang in store.languages" @click="selectLang(lang)" @click.prevent="langStart()">
                    <img class="language" :class="selectedLang(lang)"
                        :src="'https://unpkg.com/language-icons/icons/' + lang + '.svg'" :alt="lang">
                </div>
            </div>
        </div>
    </header>
</template>

<!-- CSS  -->
<style lang="scss">
@use '../assets/scss/_partial/_variables.scss' as *;


.searchbar {
    background-color: $my-dark;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 30px 5px #000000;

    .title {
        flex-grow: 6;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            cursor: pointer;
        }

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            color: $my-darken-azure;

            .b {
                font-size: 200px;

            }

            .oolflix {
                font-size: 90px;
            }
        }
    }

    form {
        flex-grow: 5;
        position: relative;

        label {
            display: none;
        }

        input {
            width: 50vw;
            height: 60px;
            border: none;
            border-radius: 100px;
            text-align: center;
            font-size: 34px;
        }

        button {
            height: 50px;
            width: 50px;
            position: absolute;
            right: 5px;
            top: 5px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            background-color: rgb(255, 255, 255);
            font-size: 20px;
        }

    }

    @media screen and (max-width:950px) {
        .title {
            h1 {
                .b {
                    font-size: 130px;

                }

                .oolflix {
                    font-size: 50px;
                }
            }

        }

        form input {
            width: 70vw;
        }
    }





    @media screen and (max-width:500px) {
        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            color: $my-darken-azure;

            .b {
                font-size: 200px;

            }

            .oolflix {
                font-size: 90px;
                transition-duration: 0.2;
            }
        }

        form input {
            width: 80vw;
        }
    }

    .lang {
        color: white;
        font-size: 30px;
        position: absolute;
        top: 40px;
        right: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .options {
            overflow: hidden;
            height: 0;

            .language {
                width: 70px;
                border-radius: 19px;
                margin: 10px 20px;

                &.selected {
                    box-shadow: 0px 0px 16px -4px #ffffff;
                }
            }
        }

        .selectLanguage {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin-bottom: 15px;
            font-size: 40px;
            position: relative;

            .iconLang {
                position: absolute;
                top: -15px;
                left: -15px;
                width: 30px;
                border-radius: 50%;
            }

            .fa-angle-down {
                transition: transform 0.2s;
            }
        }
    }

    .lang.opened {


        .options {
            height: auto;
            z-index: 99999;
        }

        .fa-angle-down {
            transition-duration: 0.3s;
            transform: rotate(180deg);
        }
    }
}







.searchbar.searchbar--small {
    z-index: 999;
    height: 100px;
    display: flex;
    flex-direction: row;

    .title {
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            color: $my-darken-azure;

            .b {
                font-size: 60px;

            }

            .oolflix {
                font-size: 0;
            }
        }
    }

    form {
        position: relative;
        display: flex;
        margin: 0 50px;

        input {
            flex-grow: 1;
            width: 50vw;
            height: 60px;
            border: none;
            border-radius: 100px;
            text-align: center;
            font-size: 34px;
        }

        button {
            position: absolute;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            background-color: rgb(255, 255, 255);
            font-size: 20px;
        }

    }

    .lang.opened {
        position: relative;
        top: 300px;
        right: 0;
        padding: 0 30px;
    }

    .lang {
        position: relative;
        top: 10px;
        right: 0;
        padding: 0 30px;
        z-index: 99999;
    }
}
</style>
