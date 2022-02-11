<script setup lang="ts"></script>

<template>
    <div
        class="bg-neutral-100 dark:bg-zinc-800 dark:text-white flex flex-col p-4 rounded-lg shadow-xl mb-4"
    >
        <!-- <h1 class="text-lg md:text-2xl text-center font-semibold"></h1> -->
        <div class="h-8 w-full bg-gray-300 dark:bg-zinc-700 rounded-md"></div>
        <hr class="my-4 dark:border-zinc-900" />
        <div
            style="height: 40vh"
            class="flex justify-center w-full bg-gray-300 dark:bg-zinc-700 rounded-md"
        ></div>
        <hr class="my-2 dark:border-zinc-900" />
        <div class="h-8 flex justify-between">
            <div class="flex justify-center items-center h-8">
                <a v-on:click.prevent class="flex h-8 items-center">
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        class="inline-block h-full w-auto"
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
                    <span
                        class="ml-2 font-semibold h-2/3 w-16 bg-gray-300 dark:bg-zinc-700 rounded"
                    ></span>
                </a>
            </div>
            <div class="h-8 flex justify-around items-center">
                <a v-on:click.prevent>
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
                <span
                    class="font-semibold h-2/3 w-16 bg-gray-300 dark:bg-zinc-700 rounded"
                ></span>
                <a v-on:click.prevent>
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
