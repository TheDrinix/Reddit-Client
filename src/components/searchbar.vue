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
    <form class="md:block w-1/2 md:w-3/5 xl:w-2/5">
        <input
            type="text"
            name="searchbar"
            placeholder="Search for subreddits"
            v-model="searchTerm"
            class="rounded w-full transition-all ease-linear outline outline-1 focus:outline-2 hover:outline-2 outline-stone-400 focus:outline-pink-600 dark:outline-stone-900 dark:bg-neutral-900 dark:text-white p-2 dark:focus:outline-pink-600"
        />
    </form>
</template>

<style lang="scss">
.removeHighlight {
    -webkit-tap-highlight-color: transparent;
}
</style>
