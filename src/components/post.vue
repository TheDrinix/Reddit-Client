<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Post } from '../models/post';

const props = defineProps<{
    data: Post
}>()

let content: Ref<string> = ref(props.data.data)
</script>

<template>
    <div
        class="bg-neutral-100 dark:bg-zinc-800 dark:text-white flex flex-col p-4 rounded-lg shadow-xl mb-4"
    >
        <h1 class="text-2xl text-center font-semibold">{{props.data.title}}</h1>
        <hr class="my-4 dark:border-zinc-900" />
        <div v-if="data.dataType === 'TEXT'" class="">
            <p v-for="paragraph in content.split('\n')">
                {{ paragraph }}
            </p>
        </div>
        <div v-else-if="data.dataType === 'IMAGE'">
            <img :src="content" alt="">
        </div>
        <hr class="my-2 dark:border-zinc-900" />
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
