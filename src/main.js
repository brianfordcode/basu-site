import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App).use(router)

// DIRECTIVES
const animatedScrollObserver= new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter')
                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
) 

app.directive('scrollAnimate', {
    beforeMount: (el, binding) => {
        el.classList.add('before-enter')
        animatedScrollObserver.observe(el)
    }
})



app.mount('#app')



