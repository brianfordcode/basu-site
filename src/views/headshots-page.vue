<template>
  <div class="main-container">
    
    <div class="text">
      <b>About the Session:</b>
      <p>A portrait session for Headshot is mainly focused on the facial expression and eyes.
        <br>
        <br>
        What you feel inside clearly reflects in a headshot, so stay focused on the purpose as in what personality and emotion you desire to convey to the viewer.
        <br>
        <br>
        <b>Duration:</b>
        A typical Headshot session takes about 15-20 minutes per outfit.
      </p>
      <button>Book an Appointment</button>
    </div>

    <div class="images-container">
      <div class="images"
         v-for="image in headshots"
         :key="image"
      >
        <img :src="image.url" :alt="image.name">
        
        <p class="name">{{ image.name }}</p>
        <p class="occupation">{{ image.occupation }}</p>
    </div>
    </div>
    


  </div>
</template>

<script>

export default {
  methods: {

  },

  data() {
    return {
      headshots: [
        {
          name: "Ria Dixit",
          occupation: "Personal Stylist",
          url: "/headshots/1_Headshot-Ria-Dixit.jpg"
        },
        {
          name: "Roma Priya",
          occupation: "Personal Stylist",
          url: "/headshots/2_Headshot_Roma-Priya.jpg"
        },
        {
          name: "Ritesh Kumar",
          occupation: "Personal Stylist",
          url: "/headshots/3_Headshot_ritesh-kumar.jpg"
        },
        {
          name: "Ria Dixit",
          occupation: "Personal Stylist",
          url: "/headshots/4_Headshot_rahul-rajput.jpg"
        },
        {
          name: "Ria Dixit",
          occupation: "Personal Stylist",
          url: "/headshots/5_Headshot_Raina-Gupta.jpg"
        },
        {
          name: "Ria Dixit",
          occupation: "Personal Stylist",
          url: "/headshots/6_Headshot_Vijay-Jayswal.jpg"
        },
      ]
    }
}
}
</script>

<style scoped>
  .main-container {
    display: flex;
    justify-content: space-around;
  }

.text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 17px;
  color: rgb(58, 58, 58);
  width: 250px;
}

button {
  margin-top: 17px;
  font-size: 20px;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid black;
  width: 100%;
  cursor: pointer;
  transition: .15s ease-in-out;
}

button:hover {
  transform: scale(1.025);
}

.images {
  padding-bottom: 20px;
}

img {
  width: 400px;
}

</style>