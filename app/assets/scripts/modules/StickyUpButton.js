import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyUpButton {
    constructor() {
      this.stickyButton = document.querySelector(".button-up")   
      this.browserHeight = window.innerHeight
      this.previousScrollY = window.scrollY  
      this.events()
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
        window.addEventListener("resize", debounce(() => {
          this.browserHeight = window.innerHeight
        }, 333))
        window.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          })
        })
    }

    determineScrollDirection1() {
      let dirY = window.scrollY
      if (dirY > this.previousScrollY) {
        this.scrollDirdown = true
      } else {
        this.scrollDirdown = false
      }
        this.previousScrollY = dirY
    }

    runOnScroll() {       
      this.determineScrollDirection1()
        if (window.scrollY > 200 && this.scrollDirdown) {
          this.stickyButton.classList.add("button-up--is-visible-down")
        }
        if (window.scrollY <= 200 && !this.scrollDirdown) {
          this.stickyButton.classList.remove("button-up--is-visible-down")          
        }         
      }
    
}

export default StickyUpButton