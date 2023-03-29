<!-- JAVA SCRIPT  -->
<script>
import { stringifyExpression } from '@vue/compiler-core';

export default {
    name: 'AppCard',
    props: {
        title: String,
        originalTitle: String,
        lenguage: String,
        valutation: Number
    }
}
</script>

<!-- HTML -->
<template>
    <div>
        <ul>
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li>{{ lenguage }}</li>
            <li>{{ valutation }}</li>
        </ul>
    </div>
</template>

<!-- CSS  -->
<style lang="scss"></style>
