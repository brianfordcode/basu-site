<template>

    <div
        ref="mainContainer"
        :class="{
            'category-container': true,
            'touch-device': touch
        }"
        @mousemove="makeArrowAppear"
        @mouseleave="mouseLeave"
    >
        <!-- BOX OF ALL PICTURES BLUE -->
        <div
            ref="imageContainer"
            :class="{
                'images-container': true,
                'not-dragging': !dragging,
                'dragging': dragging
            }"
            :style="{
                transform: `translateX(${ position }px)`
            }"
            @mousedown="startDrag"
            @mousemove="mouseMove"
        >
            <!-- INDIVIDUAL PICTURES BLACK -->
            <img
                draggable="false"
                class="images"
                v-for="(image, index) in items"
                @click="expandPic(index)"
                :src="image.url"
                :key="image"
            >
        </div>

        <div v-if="showRightArrow"
            @click="slidePics(browserWidth)"
            id="prev-arrow"
            class="arrow-container"
        >
            <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"/>
        </div>

        <div v-if="showLeftArrow"
            @click="slidePics(-browserWidth)"
            id="next-arrow"
            class="arrow-container"
        >
            <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png"/>
        </div>
    </div>

<!-- MODAL -->
    <div
        @click="closePic"
        v-if="selectedImage"
        :class="{ modal: true, open: modalOpen }"
    >
      <!-- prev arrow -->
        <div
            class="modal-arrow"
            @click.stop="showImage(selectedImageIndex - 1)"
            id="modal-prev-arrow"
        >
            <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"/>
        </div>
      <!-- image -->
        <div class="image-caption-container">
            <img draggable="false" class="selected-image" :src="selectedImage.url">
            <p class="name">{{ selectedImage.name }}</p>
            <p class="occupation">{{ selectedImage.occupation }}</p>
        </div>
      <!-- next arrow -->
        <div
            class="modal-arrow"
            @click.stop="showImage(selectedImageIndex + 1)"
            id="modal-next-arrow"
        >
            <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png"/>
        </div>
        <span class="closeBtn">&#10005;</span>
    </div>

</template>

<script>
export default {
    mounted() {
        window.addEventListener('mouseup', this.endDrag)
        window.addEventListener('resize', this.clamp)
        window.addEventListener('keydown', this.handleKeyPress)
        window.addEventListener('touchstart', () => {this.touch = true})
    },
    unmounted() {
        window.removeEventListener('mouseup', this.endDrag)
        window.removeEventListener('resize', this.clamp)
        window.removeEventListener('keydown', this.handleKeyPress)
        window.removeEventListener('touchstart', () => {this.touch = true})
    },
    props: {
        items: {
        type: Array,
        required: true
        },
    },
    data() {
        return {
            dragStarted: false,
            dragging: false,
            position: 0,
            posX: 0,
            posY: 0,
            showRightArrow: false,
            showLeftArrow: false,
            portraitsElement: null,
            modalOpen: false,
            selectedImageIndex: null,
            touch: false,
        }
    },
    computed: {
        selectedImage() {
            return this.items[this.selectedImageIndex]
        }
    },
    methods: {
        handleKeyPress(e) {
            if (e.key === 'ArrowRight') this.showImage(this.selectedImageIndex + 1)
            if (e.key === 'ArrowLeft') this.showImage(this.selectedImageIndex - 1)
            if (e.key === 'Enter') this.closePic()
        },
    // MAIN PAGE
    // MOUSE DRAGGING
        startDrag(e) {
            this.dragging = true
            this.lastX = e.clientX
            this.startX = e.clientX
        },
        mouseMove(e) {
            const changeInX = e.clientX - this.lastX
            if (this.dragging) {
                this.position += changeInX
                this.lastX = e.clientX
            }
        },
        endDrag() {
            this.dragging = false
            this.clamp()
        },
        // PREV/NEXT BUTTONS
        makeArrowAppear(e) {
            this.mousePos = e.clientX - 210
            this.browserWidth = this.$refs.mainContainer.offsetWidth
            // MOUSE ON LEFT SIDE OF WINDOW
            if (this.mousePos > this.browserWidth / 2) {
                this.showLeftArrow = true
                this.showRightArrow = false
            }
            // MOUSE ON RIGHT SIDE OF WINDOW
            if (this.mousePos < this.browserWidth / 2) {
                this.showLeftArrow = false
                this.showRightArrow = true
            }
            // MOUSE DRAGGING
            if (this.dragging) {
                this.showLeftArrow = false
                this.showRightArrow = false
            }
            // IF IMAGE SLIDER IS AT END OF IMAGES
            if (this.position === 0) this.showRightArrow = false
            if ((Math.abs(this.position) + this.browserWidth) === this.$refs.imageContainer.offsetWidth) this.showLeftArrow = false
        },
        mouseLeave() {
            this.showLeftArrow = false
            this.showRightArrow = false
        },
        slidePics(distance) {
        this.position += distance
        this.clamp()
        },
        clamp() {
            // last picture snaps back to end of window
            if (this.position >= 0) {
                this.position = 0
            } else {
                const tWidth = this.$refs.imageContainer.offsetWidth
                const mWidth = this.$refs.mainContainer.offsetWidth
                // clamp new position so that there is no whitespace to the right
                this.position = Math.max(mWidth - tWidth, this.position)
            }
        },
    // MODAL
    expandPic(index) {
      if (this.lastX == this.startX) {
        this.selectedImageIndex = index
        this.modalOpen = true
      }
    },
    closePic() {
      this.modalOpen = false
    },
    showImage(index) {
      this.selectedImageIndex = index
      if (this.selectedImageIndex < 0) this.selectedImageIndex += this.items.length
      if (this.selectedImageIndex === this.items.length) this.selectedImageIndex = 0
    },
  }
}
</script>

<style scoped>
    .category-container {
        /* border: 1px solid pink; */
        margin-bottom: 30px;
        overflow: hidden;
        position: relative;
    }
    .touch-device {
        overflow: scroll;
    }
    .images-container {
        user-select: none;
        width: min-content;
        height: min-content;
        display: flex;
        /* border: 1px solid blue; */
        position: relative;
        margin-bottom: 25px;
        
    }
    .images {
        /* border: 1px solid black; */
        height: 350px;
        margin: 5px;
        transition: .2s, fade-in-out;
        user-select: none;
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.15);
    }
    .images:hover {
        transform: scale(1.03);
    }
    .not-dragging {
        cursor: pointer;
        transition: 0.2s transform ease-out;
    }
    .dragging {
        cursor: grabbing;
    }
    .arrow-container {
        user-select: none;
        position: absolute;
        padding: 5px;
        margin: 5px;
        background-color: rgba(255,255,255,0.8);
        cursor: pointer;
        height: 50px;
        width: 50px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
        transition: .2s ease-in-out;
    }
    #prev-arrow {
        left: 0;
    }
    #next-arrow {
        right: 0;
    }
    .arrow-container:hover {
        transform: translateY(-50%) scale(1.05);
    }
    /* MODAL */
    .modal {
        display: none;
    }
    .modal.open {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 210px;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .selected-image {
        user-select: none;
        max-width: 100%;
        max-height: 80vh;
    }
    .modal-arrow {
        height: 50px;
        min-width: 50px;
        padding: 5px;
        user-select: none;
        cursor: pointer;
        transition: .2s, fade-in-out;
        z-index: 100;
        background-color: rgba(255,255,255,0.8);
        cursor: pointer;
        border-radius: 100%;
    }
    #modal-prev-arrow {
        margin-left: 20px;
    }
    #modal-next-arrow {
        margin-right: 20px;
    }
    .modal-arrow:hover {
        transform: scale(1.05);
    }
    .image-caption-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .name {
        user-select: none;
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 30px;
        text-align: center;
        font-family: 'dancing script', cursive;
    }
    .occupation {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
    }
    .closeBtn {
        position: absolute;
        font-size: 30px;
        left: 95%;
        top: 5%;
        cursor: pointer;
    }
    @media screen and (max-width: 700px) {
        .modal.open { 
            left: 0;
            margin-top: 30px;
        }
        .closeBtn {
            top: 5%;
            left: 90%;
            color: black;
        }
        .selected-image {
            max-width: 150%;
        }
    }
</style>