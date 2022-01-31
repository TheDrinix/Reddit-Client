<script setup lang="ts">
import Searchbar from './searchbar.vue';
</script>

<template>
    <header class="flex justify-between items-center h-16">
        <img
            class="inline-block h-14 pl-2"
            src="../assets/logo.png"
            alt="logo"
        />
        <Searchbar />
        <div class="inline-block w-14 pr-2"></div>
    </header>
</template>

<style lang="scss" scoped>
// .header {
//     height: 4.5rem;
//     width: 100vw;
//     display: flex;
//     border: rgb(192, 192, 192) 1px solid;
//     justify-content: space-between;
//     align-items: center;
//     .logo {
//         height: 4rem;
//         padding: 0.25rem;
//         display: inline-block;
//     }
//     .empty-space {
//         height: 4.5rem;
//         width: 4.5rem;
//         display: inline-block;
//     }
// }
</style>
