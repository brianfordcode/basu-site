<template>
<div class="page-container">

  <!-- text box  -->
  <div class="text-container">
    <img class="logo" src="../assets/basu-logo-white.png" alt="basu-logo">
    <p>Photographer</p>
    <div class="btn" @click="handleClick">View Portfolio</div>
  </div>

  <!-- background -->
  <div class="background-container">
    <div :class="{
      'column': true,
      'snap': snapping
    }"
         :style="{
           transform: `translateY(${ position }px)`
         }"
    >
      <img src="../assets/C1-1.jpg">
      <img src="../assets/C1-2.jpg">
      <img src="../assets/C1-3.jpg">
    </div>
     <div :class="{
      'column': true,
      'snap': snapping
    }"
         :style="{
           transform: `translateY(-${ position }px)`
         }"
    >
      <img src="../assets/C2-1.jpg">
      <img src="../assets/C1-3.jpg">
      <img src="../assets/C2-2.jpg">
    </div>
    <div :class="{
      'column': true,
      'snap': snapping
    }"
         :style="{
           transform: `translateY(${ position }px)`
         }"
      >
      <img src="../assets/C3-1.jpg">
      <img src="../assets/C3-2.jpg">
      <img src="../assets/C3-3.jpg">
    </div>
    <div :class="{
      'column': true,
      'snap': snapping
    }"
         :style="{
           transform: `translateY(-${ position }px)`
         }"
    >
      <img src="../assets/C4-1.jpg">
      <img src="../assets/C4-2.jpg">
      <img src="../assets/C4-3.jpg">
    </div>
    <div :class="{
      'column': true,
      'snap': snapping
    }"
         :style="{
           transform: `translateY(${ position }px)`
         }"
      >
      <img src="../assets/C5-1.jpg">
      <img src="../assets/C5-2.jpg">
      <img src="../assets/C5-3.jpg">
    </div>
  </div>

</div>
    

</template>

<script>
export default {



  created () {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll, false);
  },

    data() {
        return {
          timer: null,
          position: 0,
          scrollPos: 0,
          snapping: false,
        }
    },

    methods: {
      handleScroll() {
        // scroll down
        if ((document.body.getBoundingClientRect()).top < this.scrollPos) {
          this.position += 1
          this.snapping= false
        } 
        // scroll up
        else if ((document.body.getBoundingClientRect()).top > this.scrollPos) {
          this.position -= 1.5
          
        } 
        // snap to 0 if scroll too fast
        if (document.body.getBoundingClientRect().top === 0) {
          this.position = 0
          this.snapping= true
        }
        this.scrollPos = (document.body.getBoundingClientRect()).top
      },
      
      handleClick() {
        console.log('click')
      }




    }
}
</script>

<style>
.page-container {
  background-color: rgb(18, 25, 31);
  display: flex;
  justify-content: space-around;
  align-items: center;
   animation: 1s ease-out 0s 1 fadeIn;
}

.text-container {
  position: absolute;
  height: 400px;
  width: 100%;
  display: flex;
  transform: translateY(50px);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  /* background-color: rgba(255, 255, 255, 0.25); */
}

.logo {
  height: 150px;
  width: auto;
  animation: 3s ease-out 0s 1 fadeIn;
}

p {
  font-size: 30px;
  animation: 3.5s ease-out 0s 1 fadeIn;
}

.btn {
  cursor: pointer;
  border: 1px solid white;
  text-align: center;
  padding: 15px 30px;
  border-radius: 50px;
  transition: .2s ease-in-out;
  animation: 4s ease-out 0s 1 fadeIn;
}

.btn:hover {
  background-color: white;
  color: black;
}

@keyframes fadeIn {
    0% {
      opacity: 0;
    }
    20% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes fadeInBG {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }
    100% {
        opacity: 1;
    }
}

.background-container {
  overflow: hidden;
  display: flex;
  height: 1000px;
  position: relative;
  margin: 0 auto;
  max-width: min-content;
  animation: 2s ease-out 0s 1 fadeInBG;
}

.column {
  display: flex;
  flex-direction: column;
}

.snap {
  transition: .08s ease-in-out;
}

img {
  width: 325px;
  margin: 5px;
}

</style>