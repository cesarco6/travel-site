import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(portion, thresholdPercent) {   
        this.thresholdPercent = thresholdPercent
        this.itemsToReveal = portion
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 250).bind(this)
        this.events()
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce(() => {
            console.log('Resize just run')
            this.browserHeight = window.innerHeight
        }, 333))
    }

    calcCaller() {
        console.log("Scroll function ran")
        this.itemsToReveal.forEach(ele => {
            if(ele.isRevelead == false){
                this.calculateIfScrolledTo(ele)
            }
        }) 
    }

    calculateIfScrolledTo(ele) {
       if(window.scrollY + this.browserHeight > ele.offsetTop){
        console.log('Element was calculated')
        let scrollPercent = (ele.getBoundingClientRect().y / this.browserHeight) * 100
        if(scrollPercent < this.thresholdPercent) {
            ele.classList.add("reveal-item--is-visible")
            ele.isRevelead = true
            if(ele.isLastitem){
                window.removeEventListener("scroll", this.scrollThrottle)
            }
        }
       }
    }

    hideInitially() {
        this.itemsToReveal.forEach(ele => {
            ele.classList.add("reveal-item")
            ele.isRevelead = false
        })
        this.itemsToReveal[this.itemsToReveal.length -1].isLastitem = true        
    }

}


export default RevealOnScroll