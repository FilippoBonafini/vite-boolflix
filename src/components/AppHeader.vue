<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO LO STORE 
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            isSmall: false
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
        },
        returnTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
        flex-grow: 1;

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
        flex-grow: 1;
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
}
</style>
