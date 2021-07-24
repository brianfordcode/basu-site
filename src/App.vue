<template>
  <div id="nav">
    <openingScreen/>
    <secondPage/>
    <!-- <router-link to="/">Home</router-link> | -->
  </div>
  <router-view/>
</template>

<script>
import openingScreen from './views/opening-screen.vue'
import secondPage from './views/second-page.vue'

export default {
  components: { openingScreen, secondPage }
}

</script>


<style>

* {
  padding: 0;
  margin: 0;
}

</style>
