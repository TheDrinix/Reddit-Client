<script setup lang="ts">
import { Ref, ref } from "vue";
import { Post } from "../models/post";

const props = defineProps<{
    title: string;
    dataType: string;
    data: string | string[];
}>();

let currentPicIndex = ref(0);
const changeCurrentPic = (e: Event, dir: string) => {
    if (dir === "next") {
        if (currentPicIndex.value + 1 < props.data.length) {
            currentPicIndex.value++;
        }
    } else {
        if (currentPicIndex.value > 0) currentPicIndex.value--;
    }
};
</script>

<template>
    <div
        class="bg-neutral-100 dark:bg-zinc-800 dark:text-white flex flex-col p-4 rounded-lg shadow-xl mb-4"
    >
        <h1 class="text-lg md:text-2xl text-center font-semibold">
            {{ props.title }}
        </h1>
        <hr class="my-4 dark:border-zinc-900" />
        <div v-if="dataType === 'TEXT'" class="">
            <p v-for="paragraph in data.split('\n')">
                {{ paragraph }}
            </p>
        </div>
        <div
            v-else-if="dataType === 'IMAGE'"
            style="max-height: 70vh"
            class="flex w-full"
        >
            <img :src="data" alt="" class="h-inherit block object-contain" />
        </div>
        <div
            v-else-if="dataType === 'M-IMAGE'"
            style="max-height: 70vh"
            class="flex w-full max-w-full"
        >
            <div
                class="flex relative h-inherit"
                :class="{
                    'opacity-0': 1 > currentPicIndex,
                }"
            >
                <button
                    class="material-icons"
                    @click="(e: Event) => changeCurrentPic(e, 'prev')"
                >
                    arrow_back_ios
                </button>
            </div>
            <div style="max-height: 70vh" class="flex w-full max-w-full">
                <img
                    :src="data[currentPicIndex]"
                    alt=""
                    class="h-inherit w-auto max-w-full block object-scale-down"
                />
            </div>
            <div
                class="flex relative h-inherit"
                :class="{
                    'opacity-0': data.length <= currentPicIndex + 1,
                }"
            >
                <button
                    class="material-icons"
                    @click="(e: Event) => changeCurrentPic(e, 'next')"
                >
                    arrow_forward_ios
                </button>
            </div>
        </div>
        <div v-else-if="dataType === 'VIDEO'">
            <video :src="data" controls class="w-full aspect-video"></video>
        </div>
        <div v-else-if="dataType === 'NON-REDDIT-VIDEO'">
            <iframe
                class="w-full aspect-video"
                :src="data"
                frameborder="0"
                allow=" autoplay; clipboard-write; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
        <hr class="my-2 dark:border-zinc-900" v-if="dataType !== 'empty'" />
        <div class="h-8 flex justify-between">
            <div class="flex justify-center items-center h-8">
                <a v-on:click.prevent class="cursor-pointer flex">
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        class="inline-block"
                    >
                        <path
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 4H5a2 2 0 0 0-2 2v15l3.467-2.6a2 2 0 0 1 1.2-.4H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                        />
                    </svg>
                    <span class="pl-2 font-semibold">157</span>
                </a>
            </div>
            <div class="h-8 flex justify-around items-center">
                <a v-on:click.prevent class="cursor-pointer">
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="h-6 fill-black dark:fill-white"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50.454 50.454"
                        style="enable-background: new 0 0 50.454 50.454"
                        xml:space="preserve"
                    >
                        <g>
                            <path
                                d="M42.359,25.479L27.122,1.25c-1.048-1.667-2.747-1.667-3.795,0L8.095,25.479
		c-1.048,1.667-0.316,2.801,1.635,2.532l5.43-0.885c1.95-0.269,3.531,1.11,3.531,3.079v16.683c0,1.969,1.596,3.566,3.565,3.566
		h5.935c1.97,0,3.566-1.596,3.566-3.566V30.206c0-1.969,1.582-3.348,3.531-3.079l5.436,0.885
		C42.674,28.28,43.407,27.146,42.359,25.479z"
                            />
                        </g>
                    </svg>
                </a>
                <span class="font-semibold">54564890</span>
                <a v-on:click.prevent class="cursor-pointer">
                    <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="h-6 rotate-180 fill-black dark:fill-white"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50.454 50.454"
                        style="enable-background: new 0 0 50.454 50.454"
                        xml:space="preserve"
                    >
                        <g>
                            <path
                                d="M42.359,25.479L27.122,1.25c-1.048-1.667-2.747-1.667-3.795,0L8.095,25.479
		c-1.048,1.667-0.316,2.801,1.635,2.532l5.43-0.885c1.95-0.269,3.531,1.11,3.531,3.079v16.683c0,1.969,1.596,3.566,3.565,3.566
		h5.935c1.97,0,3.566-1.596,3.566-3.566V30.206c0-1.969,1.582-3.348,3.531-3.079l5.436,0.885
		C42.674,28.28,43.407,27.146,42.359,25.479z"
                            />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>
