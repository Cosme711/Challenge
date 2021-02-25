<template>
  <main class="p-8 xl:pt-12">
    <div class="xl:w-11/12 xl:m-auto grid gap-y-8 sm:gap-x-8 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-lg lg:grid-rows-lg 2lg:grid-cols-2lg xl:grid-rows-xl 1xl:grid-cols-1xl 1xl:grid-rows-1xl 2xl:grid-rows-2xl 3xl:grid-rows-3xl">
      <Profile class="row-start-1 col-start-1 col-end-3 sm:row-end-3 sm:col-start-1 sm:col-end-1"/>
      <div class="grid gap-4 sm:gap-8 sm:grid-cols-1 sm:grid-rows-2 sm:row-start-1 sm:row-end-3 lg:grid-cols-2 lg:grid-rows-1 lg:row-end-1">
        <CompetenceDev />
        <CompetenceDesign />
      </div>
      <Projects class="row-start-3 sm:col-start-1 sm:col-end-3 lg:col-start-2 lg:row-start-2 lg:row-end-4"/>
      <Experiences class="row-start-4 sm:col-start-1 sm:col-end-3 lg:row-start-3 lg:col-end-1"/>
    </div>
    <Footer />
  </main>
</template>

<script>
import Profile from "@/components/Profile.vue"
import Experiences from "@/components/Experiences.vue"
import CompetenceDev from "@/components/CompetenceDev.vue"
import CompetenceDesign from "@/components/CompetenceDesign.vue"
import Projects from "@/components/Projects.vue"
import Footer from "@/components/Footer.vue"


export default {
  components: { Profile, Experiences, CompetenceDev, CompetenceDesign, Projects, Footer }
}
</script>

<style>

body {
  background-color: #F2F2F2;
  font-family: 'Montserrat', sans-serif;
}

</style>
