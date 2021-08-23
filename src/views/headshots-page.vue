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
  data() {
    return {
      headshots: [
        {
          name: "Ria Dixit",
          occupation: "Personal Stylist",
          url: "/1-headshot-ria-dixit.jpg"
        },
        {
          name: "Ria Dixit",
          occupation: "Personal Stylist",
          url: "./headshots/1_Headshot_Ria-Dixit.jpg"
        },
        {
          name: "Ria Dixit",
          occupation: "Personal Stylist",
          url: "./headshots/1_Headshot_Ria-Dixit.jpg"
        },
      ]
    }
}
}
</script>

<style scoped>
  .main-container {
    height: 1000px;
    /* border: 1px solid blue; */
    /* margin-top: 100px; */
    display: flex;
    justify-content: space-around;
  }

.text {
  /* position: absolute; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 17px;
  /* text-align: justify; */
  color: rgb(58, 58, 58);
  /* border: 1px solid black; */
  width: 250px;
  padding: 0 10px;
  margin-left: 10%;
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
  /* display: flex; */
  /* flex-direction: column; */
  margin-right: 10%;
}

img {
  width: 500px;
  /* padding-right: 10%; */
}


</style>