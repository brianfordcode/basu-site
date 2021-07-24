<template>
<div class="page-container">
  <div class="background-container">
    <div :class="{
          'column': true,
          'scrolling': scrolling
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
            'scrolling': scrolling
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
            'scrolling': scrolling
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
            'scrolling': scrolling
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
            'scrolling': scrolling
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
          scrolling: false,
          timer: null,
          position: 0,
          lastScrollPos: 0,
        }
    },
    methods: {
      handleScroll() {
        // start scrolling
        let scrollPos = window.pageYOffset
        
        

        if (this.timer !== null) {
          clearTimeout(this.timer)
          this.scrolling = true

          console.log(scrollPos)
          
          
          // scrolling up or down
          
          if (scrollPos > this.lastScrollPos)
            this.position += .5
        } else if (this.lastScroll) {
          console.log('scrolling up')
          this.position -= .5
        }
        // stop scrolling
        this.timer = setTimeout(()=> {
          this.lastScrollPos = scrollPos
          console.log('last scroll: ' + this.lastScrollPos)
          this.scrolling = false
        }, 150);
        
      },
    }
}
</script>

<style>
.page-container {
  background-color: rgb(29, 23,19);
}

.background-container {
  /* border: 1px solid black; */
  overflow: hidden;
  display: flex;
  height: 1000px;
  position: relative;
  margin: 0 auto;
  max-width: min-content;
}

.column {
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  
}

img {
  width: 325px;
  margin: 5px;
}

</style>