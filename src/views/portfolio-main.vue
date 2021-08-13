<template>

  <div class="menu"  @click="displayMenu" v-if="!display">Back</div>
  


  <div class="container" v-if="display">
    
    <!-- FIRST COLUMN -->
    <div class="headshots column">
        <div class="img-container">
          <router-link to="/about"><img @click="displayMenu" class="col-img" src="../assets/1-shweta-chauhan-human-resource-specialist-grey.jpg" alt="headshots"></router-link>
        </div>
      <div class="text">
        <h1 class="col-title">Headshots</h1>
        <p class="col-text">
          Headshots are intended to show you as they you appear and reflect your best qualities.
          <br>
          <br>
          Headshots can be used for your company website, LinkedIn profile, FaceBook page, Twitter, business cards, brochures, magazines, articles, newspapers, press release, resume, author pages, book sleeves, email signature.
        </p>  
      </div>
    </div>
    <!-- SECOND COLUMN -->
    <div class="headshots column">
      <div class="img-container">
        <router-link to="/about"><img @click="displayMenu" class="col-img" src="../assets/23-ria-dixit-personal-stylist-3.jpg" alt="headshots"></router-link>
      </div>
      <div class="text">
        <h1 class="col-title">Personal Branding</h1>
        <p class="col-text">
          Personal branding photography is intended to reflect the spirit of the business.
          <br>
          <br>
          Personal branding photos are useful for entrepeneurs, Small Business Owners, Influencers, Artists, Coaches, anyone who needs to represent their personal brand while communicating with the audience.
        </p>  
      </div>
    </div>

  </div>

  
</template>

<script>
export default {
  data() {
    return {
      display: true,
    }
    
  },
  methods: {
    displayMenu() {
      this.display = !this.display,
      console.log('click')
      this.$router.push('/home')
    }
  }

}
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
}

.menu {
}


.container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 750px;
  max-width: 1300px;
  margin: 0 auto;
}

.column {
  /* border: 1px solid blue; */
  width: min-content;
  height: min-content;
}

.img-container {
    /* border: 1px solid blue; */
    overflow: hidden;
    height: 400px;
    width: 500px;
    position: relative;
}

.col-img {
  width: 100%;
  height: auto;
  transition: .2s ease-in-out;
}

.col-img:hover {
    transform: scale(1.05);
}

.col-title {
  padding: 10px 0;
}

.text {
  padding: 0 30px;
}

.col-text {
    font-size: 14px;
}

</style>