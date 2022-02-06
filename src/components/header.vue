<script setup lang="ts">
import Searchbar from './searchbar.vue';
</script>

<template>
    <header
        class="flex justify-between items-center h-16 shadow-md bg-neutral-100 dark:bg-zinc-800"
    >
        <img
            class="inline-block h-14 pl-2"
            src="../assets/logo.png"
            alt="logo"
        />
        <Searchbar />
        <div class="inline-block w-14 pr-2">
            <a v-on:click.prevent class="block lg:hidden cursor-pointer">
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 384.97 384.97"
                    style="enable-background: new 0 0 384.97 384.97"
                    xml:space="preserve"
                    class="fill-black dark:fill-white"
                >
                    <g>
                        <g id="Menu">
                            <path
                                d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"
                            />
                            <path
                                d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z"
                            />
                            <path
                                d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
			c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>
