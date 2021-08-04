<template>

    <openingScreen/>
    <portfolioTitle/>
    <portfolioMain/>

    <router-view/>
</template>

<script>
import openingScreen from './views/opening-screen.vue'
import portfolioTitle from './views/portfolio-title.vue'
import portfolioMain from './views/portfolio-main.vue'

export default {
  components: { openingScreen, portfolioTitle, portfolioMain }
}

</script>


<style>

* {
  padding: 0;
  margin: 0;
}

</style>
