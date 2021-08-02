<template>
<div class="container">
    <h1 class="portfolio-title">Portfolio</h1>
    <div class="quote-image-wrapper">
        <div class="quote" v-for="quote in quotes" :key="quote">
            <q class="quote-text">{{ quote.quote }}</q>
            <p class="quote-author"> - {{ quote.author }}</p>
        </div>
        <img class="basu-pic" src="../assets/basu-pic.jpg" alt="basu-pic">
    </div>
</div>
  
</template>

<script>
export default {

    data() {
        return {
            quotes: [
                {
                    quote: "There are always two people in every picture: the photographer and the viewer",
                    author: "Ansel Adams"
                }
            ]
        }
    }

}
</script>

<style scoped>

.container {
    /* border: 1px solid pink; */
    width: 100%;
    height: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    position: relative;
}

.quote-image-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: black;
    padding: 0 30px;
    
}

.quote {
    color: white;
    width: 500px;
}

.quote-text {
    font-size: 25px;
}

.quote-author {
    text-align: right;
    padding-top: 20px;
    font-size: 20px;
}

.portfolio-title {
    position: absolute;
    color: white;
    font-size: 50px;
    bottom: 0;
    padding: 20px 10%;

}

</style>