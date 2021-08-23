<template>

    <openingScreen/>
    <portfolioTitle/>
    <portfolioMain/>
    <div class="another-page"></div>
    
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

.another-page {
  background-color: black;
  height: 1000px;
}

.before-enter {
    opacity: 0;
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
}

</style>
