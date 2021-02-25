<template>
    <section class="p-6 flex flex-col items-center bg-white text-gray-700 shadow-sm rounded-md">
        <div class="w-11/12 md:w-full">
            <div class="w-1/2 sm:w-full m-auto">
                <img src="../assets/images/Cosme_Gressier_Profile_Picture.jpg" alt="Picture Profile Cosme Gressier" class="rounded-md">
            </div>
            <div class="my-4 text-center">
                <h1 class="text-2xl font-semibold text-gray-800">Cosme Gressier</h1>
                <h2 class="text-sm">Junior Front-End developer</h2>
            </div>
        </div>
        <div class="mr-auto mt-2 flex flex-grow flex-col justify-between">
            <div class="my-2 text-sm text-gray-800">
                <div class="flex items-center">
                    <a href="https://github.com/Cosme711" target="_blank" class="break-all">
                        <font-awesome-icon :icon="['fab', 'github']" class="mr-1 cursor-pointer text-gray-700"/>
                        @Cosme711
                    </a>
                </div>
                <div class="mt-1 flex items-center">
                    <a href="https://twitter.com/GressierCosme1" target="_blank" class="break-all">
                        <font-awesome-icon :icon="['fab', 'twitter']" class="mr-1 cursor-pointer text-gray-700"/>
                        @GressierCosme1
                    </a>
                </div>
                <div class="mt-1 flex items-center">
                    <a href="https://www.linkedin.com/in/cosme-gressier" class="break-all">
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-1 cursor-pointer text-gray-700"/>
                        Cosme Gressier
                    </a>
                </div>
                <div class="mt-1 flex items-center">
                    <a href="mailto:cosme.gressier37@gmail.com" class="break-all">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1 cursor-pointer text-gray-700"/>
                        cosme.gressier37@gmail.com
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
