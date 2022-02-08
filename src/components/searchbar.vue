<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const emit = defineEmits<{
    (e: 'search'): void;
}>();

const searchTerm = ref('');

const handleSearch = () => {
    if (searchTerm.value) {
        emit('search');
        store.dispatch('subreddits/search', searchTerm.value);
    }
};
</script>

<template>
    <form
        class="md:block w-1/2 md:w-3/5 xl:w-2/5"
        @submit.prevent="handleSearch"
    >
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
