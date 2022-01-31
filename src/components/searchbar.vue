<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const searchTerm = computed({
    get() {
        return store.state.searchTerm;
    },
    set(newTerm) {
        store.commit('updateSearchTerm', newTerm);
    },
});
</script>

<template>
    <form class="w-2/5">
        <input
            type="text"
            name="searchbar"
            placeholder="Search"
            v-model="searchTerm"
            class="rounded w-full focus:border-pink-600 focus:border-2"
        />
    </form>
</template>

<style lang="scss">
/* #searchbar {
    display: inline-block;
    height: 2rem;
    width: 40%;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
} */
</style>
