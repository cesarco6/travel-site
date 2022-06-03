import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector(".site-header")
    this.pageSections = document.querySelectorAll(".page-section")
    this.browserHeight = window.innerHeight
    this.previousScrollY = window.scrollY
    this.events()
  }

  events() {
    window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
    window.addEventListener("resize", debounce(() => {
      this.browserHeight = window.innerHeight
    }, 333))
  }

  runOnScroll() {
    this.determineScrollDirection()

    if (window.scrollY > 150) {
      this.siteHeader.classList.add("site-header--dark")
    } else {
      this.siteHeader.classList.remove("site-header--dark")
    }

    this.pageSections.forEach(el => this.calcSection(el))
  }

  determineScrollDirection() {
    let dirY = window.scrollY
    if (dirY > this.previousScrollY) {
      this.scrollDirectiondown = true
    } else {
      this.scrollDirectiondown = false
    }
    this.previousScrollY = dirY
  }

  calcSection(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop 
      && window.scrollY < el.offsetTop + el.offsetHeight) {
      let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
      if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirectiondown 
        || scrollPercent < 10 && !this.scrollDirectiondown) {
        let matchingLink = el.getAttribute("data-matching-link")
        document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
        document.querySelector(matchingLink).classList.add("is-current-link")
      }      
    }
  }
}

export default StickyHeader