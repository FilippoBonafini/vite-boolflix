<!-- JAVA SCRIPT  -->
<script>
// IMPORTIAMO LO STORE 
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<!-- HTML -->
<template>
    <header>
        <div class="title">
            <h1>TV FOUNDER</h1>
        </div>
        <form action="#">
            <label for="search">Cerca</label>
            <input type="text" id="search" v-model="this.store.searchKey">
            <button @click.prevent="$emit('search')">
                <font-awesome-icon icon="fa-solid fa-search" />
            </button>
        </form>
    </header>
</template>

<!-- CSS  -->
<style lang="scss">
header {
    background-color: yellow;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        flex-grow: 6;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
    }

    form {
        flex-grow: 5;
        position: relative;

        label {
            display: none;
        }

        input {
            margin: 0 30px;
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
            right: 35px;
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
            font-size: 40px;
        }

        form input {
            width: 70vw;
        }
    }

    @media screen and (max-width:500px) {
        .title {
            font-size: 28px;
        }

        form input {
            width: 80vw;
        }
    }

}
</style>
